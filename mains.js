// Get the current page URL
const currentPage = window.location.pathname;
const pageNames = {
  '/index.html': 'Home',
  '/posts/post.html': 'Post',
  '/about/about.html': 'About'
};

// Function to generate breadcrumbs
function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('.breadcrumbs');
  const pathSegments = currentPage.split('/').filter(
      segment => segment !== '');  // Split the URL and remove empty segments

  let breadcrumbPath = '<a href="/">Home</a>';  // Initial breadcrumb for Home

  for (let i = 1; i < pathSegments.length; i++) {
    const path = `/${pathSegments.slice(0, i + 1).join('/')}`;
    breadcrumbPath += ` / <a href="${path}">${pageNames[path]}</a>`;
  }

  breadcrumbContainer.innerHTML = breadcrumbPath;
}

// Call the function to generate breadcrumbs
generateBreadcrumbs();