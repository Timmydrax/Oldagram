import { posts } from "./data";

const postContainer = document.getElementById("posts-container");

// Render Posts function
const renderPosts = () => {
  posts.forEach((post, index) => {
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
              class="w-full block h-auto cursor-pointer"
              id='likeImg'
              data-index="${index}"
            />
          </div>

          <div class="flex flex-col gap-[12px] p-[1rem]">
            <div class="flex flex-row items-center gap-4">
              <img
                src= ${post.like}
                alt="An icon for liking posts"
                class="cursor-pointer"
                id="likeBtn"
                data-index="${index}"
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
            <p class="font-bold text-xs" id="likes-${index}">${post.likes} likes</p>
            <p class="text-xs">
              <span class="font-bold">${post.username}</span> ${post.comments}
            </p>
          </div>
        </section>

`;
  });
};

// Handle Like Function.
const handleLike = () => {
  const likeBtn = document.querySelectorAll("#likeBtn");
  const likeImg = document.querySelectorAll("#likeImg");

  likeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      posts[index].likes += 1;
      document.getElementById(
        `likes-${index}`
      ).textContent = `${posts[index].likes} likes`;
    });
  });

  likeImg.forEach((img) => {
    img.addEventListener("dblclick", () => {
      const index = img.dataset.index;
      posts[index].likes += 1;
      document.getElementById(
        `likes-${index}`
      ).textContent = `${posts[index].likes} likes`;
    });
  });
};

renderPosts();
handleLike();
