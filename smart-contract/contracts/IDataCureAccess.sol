// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


/**
 * @title DataCure Access Interface
 * @author DataCure Access Protocol
 * @notice Interface for the DataCure Access contract
 */
interface IDataCureAccess {

    /**
     * Structure to store the access details
     * @param ownerToken Token ID of the owner
     * @param users List of users who have access to the data
     */
    struct AccessDetails {
        uint256 ownerToken;
        address[] users;
        bool listForSale;
    }

    // Event to update the DataCure contract address
    event UpdateDataCureAddress(address _dataCureAddr);

    // Event to upload the data
    event UploadData(uint256 _userToken, string indexed _cid, bool _listForSale);

    // Event to grant access to the data
    event GrandAccess(uint256 _userToken, string indexed _cid);

    /**
     * Function to update the DataCure contract address
     * @param _dataCureAddr Address of the DataCure contract
     */
    function updateDataCureFactory(address _dataCureAddr) external;

    /**
     * Function to upload the data
     * @param _userToken Token ID of the user
     * @param _cid Content ID of the data
     * @param _listForSale Boolean to list the data for sale
     */
    function uploadData(uint256 _userToken, string memory _cid, bool _listForSale) external;

    /**
     * Function to grant access to the data
     * @param _userToken Token ID of the user
     * @param _cid Content ID of the data
     */
    function grandAccess(uint256 _userToken, string memory _cid)external; 

}