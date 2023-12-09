import {
    extractWitness, fetchPublicKey, AnonAadhaarPCDArgs, prove,
    PCDInitArgs,
    init,
    serialize,
    AnonAadhaarPCD,
    VK_URL,
    ZKEY_URL,
    AnonAadhaarPCDPackage
} from 'anon-aadhaar-pcd';
import { ArgumentTypeName, SerializedPCD } from '@pcd/pcd-types';

export const appId = BigInt(1234555).toString();

export async function fetchKey(keyURL: string): Promise<any> {
    const { data } = await useFetch(keyURL).arrayBuffer()
    return data.value!;
}

const proveAndSerialize = async (
    pcdArgs: AnonAadhaarPCDArgs,
    isWeb: boolean,
): Promise<{
    pcd: AnonAadhaarPCD
    serialized: SerializedPCD<AnonAadhaarPCD>
}> => {
    const pcdInitArgs: PCDInitArgs = {
        wasmURL: `https://data-cure-imp.s3.ap-south-1.amazonaws.com/main.wasm`,
        zkeyURL: `https://data-cure-imp.s3.ap-south-1.amazonaws.com/circuit_final.zkey`,
        vkeyURL: `https://data-cure-imp.s3.ap-south-1.amazonaws.com/verification_key.json`,
        isWebEnv: isWeb,
    }

    await init(pcdInitArgs)

    const pcd = await prove(pcdArgs)
    const serialized = await serialize(pcd)

    return { pcd, serialized }
}

export const extractSignature = (pdf: Buffer, signaturePosition = 1) => {
    const byteRangePos = getSubstringIndex(pdf, '/ByteRange [', signaturePosition)

    const byteRangeEnd = pdf.indexOf(']', byteRangePos)
    const byteRange = pdf.subarray(byteRangePos, byteRangeEnd + 1).toString()
    const matches = /\/ByteRange \[(\d+) +(\d+) +(\d+) +(\d+) *\]/.exec(byteRange)

    if (matches == null) {
        return {
            ByteRange: [0],
            signature: '',
            signedData: Buffer.from([]),
        }
    } else {
        const ByteRange = matches.slice(1).map(Number)
        const signedData = Buffer.concat([
            pdf.subarray(ByteRange[0], ByteRange[0] + ByteRange[1]),
            pdf.subarray(ByteRange[2], ByteRange[2] + ByteRange[3]),
        ])
        const signatureHex = pdf
            .subarray(ByteRange[0] + ByteRange[1] + 1, ByteRange[2])
            .toString('binary')
            .replace(/(?:00|>)+$/, '')
        const signature = Buffer.from(signatureHex, 'hex').toString('binary')
        return {
            ByteRange: matches.slice(1, 5).map(Number),
            signature,
            signedData,
        }
    }
}

const getSubstringIndex = (str: Buffer, substring: string, n: number) => {
    let times = 0
    let index = 0

    while (times < n && index !== -1) {
        index = str.indexOf(substring, index + 1)
        times += 1
    }

    return index
}

export const provePDF = async (pdfData: Buffer, password: string) => {
        if (appId === null) throw new Error('Missing application Id!')

        const witness = await extractWitness(pdfData, password)

        if (witness instanceof Error) throw new Error(witness.message)

        let publicKey = ''

        const result = await fetchPublicKey(
            'https://www.uidai.gov.in/images/authDoc/uidai_offline_publickey_26022021.cer',
        )
        if (result === null) {

            throw new Error('Error while fetching the public key!')
        } else {
            publicKey = result

        }
        const args: AnonAadhaarPCDArgs = {
            base_message: {
                argumentType: ArgumentTypeName.BigInt,
                userProvided: false,
                value: witness?.msgBigInt.toString(),
                description: '',
            },
            signature: {
                argumentType: ArgumentTypeName.BigInt,
                userProvided: false,
                value: witness?.sigBigInt.toString(),
                description: '',
            },
            modulus: {
                argumentType: ArgumentTypeName.BigInt,
                userProvided: false,
                value: '0x' + publicKey,
                description: '',
            },
            app_id: {
                argumentType: ArgumentTypeName.BigInt,
                userProvided: false,
                value: appId,
                description: '',
            },
        }
        const { pcd, serialized } = await proveAndSerialize(args, true);


        // const pcdStr = serialized;

        if (!(await AnonAadhaarPCDPackage.verify(pcd))) {
            throw new Error('Invalid proof')
        } else {
            console.log(pcd);
            console.log(serialized);
            console.log(`logged In`);
        }

        console.log(pcd);
        console.log(serialized);

}