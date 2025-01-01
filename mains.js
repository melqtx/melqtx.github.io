//generateBreadcrumbs
const currentPage = window.location.pathname;
const pageNames = {
  "/": "home",
  "/posts/post.html": "posts",
  "/about/about.html": "about",
  "/posts/blog1.html": "welcome",
  "/posts/blog2.html": "cicada 3301",
  "/posts/blog3.html": "the big O",
  "/posts/blog4.html": "delusion",
  "/posts/blog5.html": "chronicle",
  "/posts/blog6.html": "learning curve",
};

function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector(".breadcrumbs");

  if (!breadcrumbContainer) {
    console.error("Breadcrumb container not found.");
    return;
  }

  const pathSegments = currentPage.split("/").filter(Boolean);
  let breadcrumbPath = '<a href="/">home</a>';

  pathSegments.reduce((acc, segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const pageName = pageNames[path];

    if (pageName) {
      if (path.startsWith("/posts/blog")) {
        breadcrumbPath += ' / <a href="/posts/post.html">posts</a>';
      }
      breadcrumbPath += ` / <a href="${path}">${pageName}</a>`;
    }
    return path;
  }, "");

  breadcrumbContainer.innerHTML = breadcrumbPath;
}

generateBreadcrumbs();
