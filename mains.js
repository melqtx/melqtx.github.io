// Get the current page URL
const currentPage = window.location.pathname;
const pageNames = {
  '/': 'home',
  '/posts/post.html': 'posts',
  '/about/about.html': 'about',
  '/posts/blog1.html': 'welcome'
};

// Function to generate breadcrumbs
function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('.breadcrumbs');
  const pathSegments = currentPage.split('/').filter(
      segment => segment !== '');  // Split the URL and remove empty segments

  let breadcrumbPath = '<a href="/">home</a>';

  for (let i = 1; i < pathSegments.length; i++) {
    const path = `/${pathSegments.slice(0, i + 1).join('/')}`;
    let pageName = pageNames[path] || pathSegments[i];

    if (path === '/posts/blog1.html') {
      breadcrumbPath += ` / <a href="/posts/post.html">posts</a> / ${pageName}`;
    } else {
      breadcrumbPath += ` / <a href="${path}">${pageName}</a>`;
    }
  }

  breadcrumbContainer.innerHTML = breadcrumbPath;
}

// Call the function to generate breadcrumbs
generateBreadcrumbs();
