const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("When using Custom LSP7", function () {

  it("should removeComment", async function () {
    const [deployer, postCreator, commentor, reactor] =  await hre.ethers.getSigners()

    const contractFactory = await ethers.getContractFactory("Space", deployer);
    const contract = await contractFactory.deploy(
      "Space",
      "SPACE",
      deployer.address,
      false
    );
    await contract.deployed();

    //create post
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');
    await contract.connect(postCreator).createPost('thisisacid');

    //create comment
    const postId = 1
    await contract.connect(commentor).createComment(postId, 'thisacommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(postId, 'thisanothercommentcid');

    //const commentsBeforeDelete = await contract.fetchComments(postId);
    //expect(commentsBeforeDelete.length).to.equal(5);

    //delete comment
    //const tx = await contract.connect(postCreator).removeComment(postId, 1);
    //const commentsAfterDelete = await contract.fetchComments(postId);
    //await contract.connect(commentor).removeComment(postId, 6);
    //expect(commentsAfterDelete.length).to.equal(commentsBeforeDelete.length - 1);


    await contract.connect(commentor).createComment(2, 'thisacommentcid');
    await contract.connect(commentor).createComment(2, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(2, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(3, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(3, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(3, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(3, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(3, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(3, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(4, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(4, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(4, 'thisanothercommentcid');

    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(15, 'thisanothercommentcid');

    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(25, 'thisanothercommentcid');

    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');
    await contract.connect(commentor).createComment(35, 'thisanothercommentcid');

    const post = await contract.fetchPosts(35, 1, reactor.address);
    console.log(post);

    await contract.connect(commentor).createSubComment(35, "1", 'thisanothercommentcid1');
    await contract.connect(commentor).createSubComment(35, "1", 'thisanothercommentcid2');
    await contract.connect(commentor).createSubComment(35, "1", 'thisanothercommentcid3');
    await contract.connect(commentor).createSubComment(35, "1", 'thisanothercommentcid4');
    await contract.connect(commentor).createSubComment(35, "1", 'thisanothercommentcid5');
    await contract.connect(commentor).createSubComment(35, "1", 'thisanothercommentcid6');

    await contract.connect(commentor).createSubComment(35, "1_3", 'thisanothercommentcid1');
    await contract.connect(commentor).createSubComment(35, "1_3", 'thisanothercommentcid2');
    await contract.connect(commentor).createSubComment(35, "1_3", 'thisanothercommentcid3');
    await contract.connect(commentor).createSubComment(35, "1_3", 'thisanothercommentcid4');
    await contract.connect(commentor).createSubComment(35, "1_3", 'thisanothercommentcid5');
    await contract.connect(commentor).createSubComment(35, "1_3", 'thisanothercommentcid6');

    const com1 = await contract.getComment(35, "1");
    console.log(com1);

    const com2 = await contract.getComment(35, "1_3");
    console.log(com2);


    // fetch posts
    const posts = await contract.fetchPosts(7, 10, reactor.address);
    //console.log(posts);

    // fetch comments
    const comms = await contract.fetchComments(35, "1", 5, 5);
    //console.log(comms);

    // fetch comments
    const sub_comms = await contract.fetchComments(35, "1_3", 5, 5);
    console.log(sub_comms);

    // delete post
    await contract.deletePost(1);

    // reactToPost

    // reacting 3 times to the same post
    await contract.connect(reactor).reactToPost(1, 0);
    await contract.connect(reactor).reactToPost(1, 0);

    await contract.connect(reactor).reactToPost(1, 1);
    await contract.connect(reactor).reactToPost(1, 1);
    await contract.connect(reactor).reactToPost(1, 1);

    await contract.connect(reactor).reactToPost(1, 9);
    await contract.connect(commentor).reactToPost(1, 9);
    await contract.connect(postCreator).reactToPost(1, 9);


    
    console.log(await contract.fetchPosts(1, 1, reactor.address));

    //console.log(await contract.getPostReactionsCounts(1));
    console.log(await contract.fetchPosts(1, 1, reactor.address));
    console.log(await contract.getUserPostReactions(1, reactor.address));
    //console.log(await contract.getUserPostReactions(1, commentor.address));
  });
});
