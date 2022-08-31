# lukso-spaces
A social space is a LSP7 digital asset/contract which supports creation of social elements (blog, post, musing, etc) and interactions with these items (reply, comment, reactions, up/down votes, etc).

The contract is deployed at `0x344772c70B624F91c52a1AB162E8A070319274fB`

Taking reference to Lukso team's reference `example-forum-dapp`, a more gas-efficient and more extensible social dapp building block is tinkered.
Hence this project has been pursued. I have managed to reduced gas fees by 40% to 60% while delivering more extensibility and features.

![Yes to gas savings!](/screenshots/comparison-gas-efficiency.png)

![More reactions plz!](/screenshots/reactions.png)

## new extensible features
- Nested commenting
  - opens up to new social interractions (Reddit, HN)
- Reactions (not just like button)
  - upvotes, downvotes
  - like, love, haha, hugs, etc
- whitelisting (in-progress)
  - using Merkle Tree proof
  - efficiently provides exclusive private areas for memebers
  
## how is the contract implemented?
- No arrays
  - they are nasty as they grow, imagine iterating them
- use of mappings
  - maps' keys are used to describe hirerachy and paths
- localized counters which are used as relative identifiers
  - i.e: 1_3_5
  - childrens of a parent can be iterated through without using arrays
- reactions are easily extensible
  - implements your own logic
  - sample karma system is being worked on
- fetchPosts and fetchComments allow REST-like pagination
  - it allows GraphQL-like structured outputs (i.e: `_Post` & `_Comment`)
  
## Video
https://vimeo.com/745034216
