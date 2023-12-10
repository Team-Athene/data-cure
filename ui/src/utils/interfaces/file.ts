export type HealthData = {
    email: string,
    age: string,
    gender: string,
    bloodGroup: string,
    ethnicity: string,
    reportType: string,
    medicalCondition: string,
    listForSale: boolean,
    dataCollectionDate: string
}

export type FileData = {
    fileName: string,
    file: File  ,
    fileData: string | ArrayBuffer | Blob 
}

export type MessageData = {
    timestamp: number,
    fileCid: string,
    fileName: string,
    requestedUser: string,
    toAddress: string,
    reportType: string,
    focusArea: string
}
