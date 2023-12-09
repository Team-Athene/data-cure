// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Counters} from  "./Counters.sol";
import {Verifier} from "./Verifier.sol";
import { IDataCure } from "./IDataCure.sol";

contract DataCure is ERC721, IDataCure {
    using Counters for Counters.Counter;
    address private _owner;

    Counters.Counter private _tokenIdCounter;

    Verifier public verifier;

    // Mappings
    mapping(bytes32 => uint256) public userToken;
    mapping(uint256 => UserDetails) public userTokenDetails;

    // Constructor
    constructor(Verifier _verifier) ERC721("DataCureToken", "DCT") {
        verifier = _verifier;
        _owner = _msgSender();
    }

    modifier onlyOwner() {
        require(_msgSender() == _owner, "Only owner can call this function");
        _;
    }

    /**
     * @dev Refer to {IDataCure-getUserToken}.
     */ 
    function getUserToken(bytes32 _emailHash) public view returns(uint256) {
        return userToken[_emailHash];
    }

    /**
     * @dev Refer to {IDataCure-getUserToken}.
     */ 
    function getUserTokenDetails(uint256 _tokenId) public view returns(UserDetails memory) {
        return userTokenDetails[_tokenId];
    }

    /**
     * @dev Refer to {IDataCure-getUserToken}.
     */ 
    function safeMint(bytes32 _emailHash, uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals, bytes32 _ipnsName) public {
        uint256 balance = balanceOf(_msgSender());
        require(balance == 0, " You own Soulbound token already");
        bool verified = verifier.verifyProof(_pA,_pB,_pC,_pubSignals);
        require(verified, " Your Adhaar not verified");
        require(userToken[_emailHash] == 0, "Email already exisit");
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        userToken[_emailHash] = tokenId;
        userTokenDetails[tokenId] = UserDetails(tokenId, _ipnsName, UserType.Individual);
        _safeMint(_msgSender(), tokenId);
    }

    /**
     * @dev Refer to {IDataCure-promoteUser}.
     */
    function promoteUser(uint256 _tokenId, uint8 _userType) public onlyOwner {
        require(_tokenId != 0, "Invalid token ID");
        require(_userType > 0 && _userType <= 4, "Invalid user type");
        userTokenDetails[_tokenId].userType = UserType(_userType);
        emit PromoteUser(_tokenId, UserType(_userType));
    }

    /**
     * Function to update the DataCure contract address
     * @param to Address of the user
     * @param tokenId Token ID of the user
     * @param auth Address of the user
     */
    function _update(address to, uint256 tokenId, address auth) override  internal virtual returns (address) {
       address from = _ownerOf(tokenId);
        require(from == address(0), "This a Soulbound token. It cannot be transferred.");
        return super._update(to, tokenId, auth);
    }


}