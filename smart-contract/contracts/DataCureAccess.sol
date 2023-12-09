// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import { IDataCure } from "./IDataCure.sol";
import { IDataCureAccess } from "./IDataCureAccess.sol";
import { Context } from "@openzeppelin/contracts/utils/Context.sol";

contract DataCureAccess is IDataCureAccess, Context {
    // mapping(bytes32 => mapping(uint256 => bool)) public accessListByCid;
    mapping(bytes32 => AccessDetails) public accessListByCid;

    IDataCure public _dataCure;

    constructor(IDataCure _dataCureAddr) {
        _dataCure = _dataCureAddr;
    }

    function updateDataCureFactory(address _dataCureAddr) public {
        _dataCure = IDataCure(_dataCureAddr);
        emit UpdateDataCureAddress(_dataCureAddr);
    }

    function uploadData(uint256 _userToken, bytes32 _cid) public  {
        require (_dataCure.getUserTokenDetails(_userToken).userType == IDataCure.UserType.Individual 
        || _dataCure.getUserTokenDetails(_userToken).userType == IDataCure.UserType.Organization, 
        "Only a registered member has the access");
        if(_dataCure.getUserTokenDetails(_userToken).userType == IDataCure.UserType.Individual) {
            require(_dataCure.ownerOf(_userToken) == _msgSender(), "Only the owner can upload data");
        }
        require(accessListByCid[_cid].ownerToken == 0, "Data is already uploaded");
        accessListByCid[_cid].ownerToken = _userToken;
        accessListByCid[_cid].users.push(_msgSender());
        emit UploadData(_userToken, _cid);
    }

    function grandAccess(uint256 _userToken, bytes32 _cid) public {
        require (_dataCure.getUserTokenDetails(_userToken).userType == IDataCure.UserType.Individual, 
        "Only a registered member has the access");
        require(accessListByCid[_cid].ownerToken == _userToken, "Onlt the owner can grant access");
        accessListByCid[_cid].users.push(_msgSender());
        emit GrandAccess(_userToken, _cid);
    }

    function verifyAccess(uint256 _userToken, bytes32 _cid) public view returns(bool) {
        require (_dataCure.getUserTokenDetails(_userToken).tokenId != 0, "Only a registered member has the access");
        require(accessListByCid[_cid].ownerToken == _userToken, "Only the owner can verify access");
        for(uint256 i = 0; i < accessListByCid[_cid].users.length; i++) {
            if(accessListByCid[_cid].users[i] == _msgSender()) {
                return true;
            }
        }
        return false;
    }

}