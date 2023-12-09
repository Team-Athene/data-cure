// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Counters.sol";
import "./Verifier.sol";

contract DataCure is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

     Verifier public verifier;

     mapping(bytes32 => uint256) private userToken;

    constructor(Verifier _verifier) ERC721("DataCureToken", "DCT") {
        verifier = _verifier;
    }

    function safeMint(bytes32 _emailHash, uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals) public {
        
        uint256 balance = balanceOf(_msgSender());
        require(balance == 0, " You own Soulbound token already");
        bool verified = verifier.verifyProof(_pA,_pB,_pC,_pubSignals);
        require(verified, " Your Adhaar not verified");
        require(userToken[_emailHash] == 0, "Email already exisit");
        uint256 tokenId = _tokenIdCounter.current();
        userToken[_emailHash] = tokenId;
        _tokenIdCounter.increment();
        _safeMint(_msgSender(), tokenId);
        
    }


    function _update(address to, uint256 tokenId, address auth) override  internal virtual returns (address) {
       address from = _ownerOf(tokenId);
        require(from == address(0), "This a Soulbound token. It cannot be transferred.");
        return super._update(to, tokenId, auth);
    }


}