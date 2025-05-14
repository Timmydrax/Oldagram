const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "assets/images/Vincent-van-Gogh.svg",
    postImage: "assets/images/post-image.svg",
    comments: "just took a few mushrooms lol",
    likes: 21,
    id: "post-one",
    like: "assets/images/like.svg",
    comment: "assets/images/comment.svg",
    share: "assets/images/share.svg",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "assets/images/avatar-gustave.svg",
    postImage: "assets/images/post-image-gustave.svg",
    comments: "i'm feelin a bit stressed tbh",
    likes: 4,
    id: "post-two",
    like: "assets/images/like.svg",
    comment: "assets/images/comment.svg",
    share: "assets/images/share.svg",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "assets/images/avatar-joseph.svg",
    postImage: "assets/images/post-image-joseph.svg",
    comments:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    id: "post-three",
    like: "assets/images/like.svg",
    comment: "assets/images/comment.svg",
    share: "assets/images/share.svg",
  },
];

// Stretch goals Render all posts with javascripts and Increase like when double tapped.

const postContainer = document.getElementById("posts-container");

// Render Posts function
const renderPosts = () => {
  posts.forEach((post) => {
    postContainer.innerHTML += `
  
<section class="bg-white w-full">
          <div class="flex flex-row p-[1rem] gap-2">
            <img
              src=${post.avatar}
              alt="An avatar of a post"
              class="rounded-4xl"
            />
            <div>
              <p class="font-bold text-sm">${post.name}</p>
              <p class="text-xs">${post.location}</p>
            </div>
          </div>

          <div>
            <img
              src=${post.postImage}
              alt="A post image of an art"
              class="w-full block h-auto"
            />
          </div>

          <div class="flex flex-col gap-[12px] p-[1rem]">
            <div class="flex flex-row items-center gap-4">
              <img
                src= ${post.like}
                alt="An icon for liking posts"
              />
              <img
                src=${post.comment}
                alt="An icon for commenting on posts"
              />
              <img
                src=${post.share}
                alt="An icon for sharing posts"
              />
            </div>
            <p class="font-bold text-xs">${post.likes} likes</p>
            <p class="text-xs">
              <span class="font-bold">${post.username}</span> ${post.comments}
            </p>
          </div>
        </section>

`;
  });
};

renderPosts();
