// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import  { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title DataCure Interface
 * @author DataCure Protocol
 * @notice Interface for the DataCure contract
 */
interface IDataCure is IERC721 {
    // Enum to store the user type
    enum UserType {
        Unregistered,
        Individual,
        Organization,
        Institution
    }

    /**
     * Structure to store the user details
     * @param tokenId Token ID of the user
     * @param ipnsName IPNS name of the user
     * @param userType Type of the user
     */
    struct UserDetails {
        uint256 tokenId;
        bytes32 ipnsName;
        UserType userType;
    }

    // Event to update the User Type of the user
    event PromoteUser(uint256 _tokenId, UserType _userType);

    // Event to add the doctor
    event AddDoctor(uint256 _orgTokenId, address _doctorWalletAddress);

    /**
     * Function to get the user token Id
     * @param _emailHash Hash of the email
     * @return Token ID of the user
     */
    function getUserToken(bytes32 _emailHash) external view returns(uint256);

    /**
     * Function to get the user details
     * @param _tokenId Token ID of the user
     * @return User details
     */
    function getUserTokenDetails(uint256 _tokenId) external view returns(UserDetails memory);

    /**
     * Function to verify if the user is a doctor
     * @param _tokenId Token ID of the user
     * @param _walletAddr Wallet address of the user
     */
    function isDoctor(uint256 _tokenId, address _walletAddr) external view returns(bool);

    /**
     * Function to mint the token
     * @param _emailHash Hash of the email
     * @param _pA Proof A
     * @param _pB Proof B
     * @param _pC Proof C
     * @param _pubSignals Public signals
     * @param _ipnsName IPNS name of the user
     */
    function safeMint(bytes32 _emailHash, uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals, bytes32 _ipnsName) external;
   
    /**
     * Function to promote the user
     * @param _tokenId Token ID of the user
     * @param _userType Type of the user
     */
    function promoteUser(uint256 _tokenId, uint8 _userType) external;

    /**
     * Function to add the doctor
     * @param _orgTokenId Token ID of the organization
     * @param _doctorWalletAddress Wallet address of the doctor
     */
    function addDoctor(uint256 _orgTokenId, address _doctorWalletAddress) external;
}