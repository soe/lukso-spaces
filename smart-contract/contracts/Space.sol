//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma abicoder v2;

import "@lukso/lsp-smart-contracts/contracts/LSP7DigitalAsset/LSP7DigitalAsset.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Space is LSP7DigitalAsset {

    struct Post {
      string cid;
      address author;
      uint32 commentsCr;
      bool deleted;
    }

    struct _Post {
      string cid;
      address author;
      uint128 id;
      uint32 commentsCr;
      uint[] reactionsCounts;
      bool[] userPostReactions;
    }

    struct Comment {
      string cid;
      address author;
      uint32 commentsCr;
    }

    struct _Comment {
      string cid;
      address author;
      uint128 postId;
      string path;
      uint32 commentsCr;
    }

    mapping(uint128 => Post) public postsMap;

    mapping(uint128 => mapping(string => Comment)) public commentsMap;

    struct Crs {
      uint32 postsCr;
    }

    Crs private counters;

    address private admin;

    constructor(
      string memory _name,
      string memory _symbol,
      address _newOwner,
      bool _isNFT
    ) LSP7DigitalAsset(_name, _symbol, _newOwner, _isNFT) {
      admin = _newOwner;
    }

    modifier onlyAdmin {
      require(msg.sender == admin);
      _;
    }

    function createPost(string calldata _cid) public {

      Post memory _post = Post({
        cid: _cid,
        author: msg.sender,
        commentsCr: 0,
        deleted: false
      });

      postsMap[++counters.postsCr] = _post;
    }

    // getPost has been moved out to save size

    function editPost(uint128 _id, string calldata _cid) public {
      require(postsMap[_id].author == msg.sender, 'cannot');
      postsMap[_id].cid = _cid;
    }

    function deletePost(uint128 _id) public {
      require(postsMap[_id].author == msg.sender
        || admin == msg.sender, 'cannot');

      postsMap[_id].deleted = false; // soft delete
    }

    function fetchPosts(uint32 from, uint count, address user) public view returns (_Post[] memory posts, uint, address) {

      uint32 _id = from;
      if(from == 0) _id = counters.postsCr;

      posts = new _Post[](count);

      for (uint i=0; i<count;) {

        if(postsMap[_id].author != address(0x0) && _id > 0) {
          posts[i] = _Post({
            cid: postsMap[_id].cid,
            author: postsMap[_id].author,
            id: _id,
            commentsCr: postsMap[_id].commentsCr,
            reactionsCounts: getPostReactionsCounts(_id),
            userPostReactions: getUserPostReactions(_id, user)
          });
        }
        
        unchecked {++i;}
        unchecked {--_id;}
      }
      return (posts, counters.postsCr, admin);
    }

    function createComment(uint128 _postId, string calldata _cid) public {
      Comment memory _comment = Comment({
        cid: _cid,
        author: msg.sender,
        commentsCr: 0
      });

      commentsMap[_postId][
        Strings.toString(++postsMap[_postId].commentsCr)
      ] = _comment;
    }

    function createSubComment(uint128 _postId, string calldata ancestorPath, string calldata _cid) public {

      Comment memory _comment = Comment({
        cid: _cid,
        author: msg.sender,
        commentsCr: 0
      });

      // get counter from parent comment and concatenate with _
      string memory _path = string(abi.encodePacked(
        ancestorPath, 
        "_",
        Strings.toString(++commentsMap[_postId][ancestorPath].commentsCr)
      ));

      commentsMap[_postId][_path] = _comment;
    }

    function getComment(uint128 _postId, string calldata _path) public view returns (_Comment memory comment) {
      require(commentsMap[_postId][_path].author != address(0x0), '404');
      
      comment = _Comment({
        cid: commentsMap[_postId][_path].cid,
        author: commentsMap[_postId][_path].author,
        commentsCr: commentsMap[_postId][_path].commentsCr,
        postId: _postId,
        path: _path
      });

      return comment;
    }

    function fetchComments(uint128 _postId, string calldata _ancestorPath, uint32 from, uint count) public view returns (_Comment[] memory comments, address) {

      uint128 _id = from;
      if(from == 0) { // 0 means start from the latest
        _id = commentsMap[_postId][_ancestorPath].commentsCr;
      }

      comments = new _Comment[](count);

      for (uint i=0; i<count;) {

        string memory _path = string(abi.encodePacked(
          _ancestorPath, 
          "_",
          Strings.toString(_id)
        ));

        if(_id > 0) {
          comments[i] = _Comment({
            cid: commentsMap[_postId][_path].cid,
            author: commentsMap[_postId][_path].author,
            commentsCr: commentsMap[_postId][_path].commentsCr,
            postId: _postId,
            path: _path
          });
        }
        
        unchecked {++i;}
        unchecked {--_id;}
      }

      return (comments, admin);
    }

    // function deleteComment

    mapping(address => mapping(uint128 => mapping(uint16 => bool))) public usersPostsReactionsMap;
    mapping(uint128 => mapping(uint16 => uint16)) public postsReactionsMap;
    //mapping(uint128 => mapping(string => mapping(uint16 => uint16))) public commentsReactionsMap;

    function reactToPost(uint128 _postId, uint16 i) public returns (uint, bool) {      
      if(usersPostsReactionsMap[msg.sender][_postId][i] == true) {
        --postsReactionsMap[_postId][i];
        usersPostsReactionsMap[msg.sender][_postId][i] = false;
        return (i, false);
      } else {
        ++postsReactionsMap[_postId][i];
        usersPostsReactionsMap[msg.sender][_postId][i] = true;
        return (i, true);
      }
    }

    function getPostReactionsCounts(uint128 _postId) public view returns (uint[] memory counts) {
      counts = new uint[](10);
      for (uint16 i=0; i<10;i++) {
        counts[i] = postsReactionsMap[_postId][i];
      }

      return counts;
    }

    function getUserPostReactions(uint128 _postId, address _user) public view returns (bool[] memory reactions) {
      reactions = new bool[](10);
      for (uint16 i=0; i<10;i++) {
        reactions[i] = usersPostsReactionsMap[_user][_postId][i];
      }

      return reactions;
    }

    function changeAdmin(address _newAdmin) public onlyAdmin {
      admin = _newAdmin;
    }
}
