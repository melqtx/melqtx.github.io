const currentPage = window.location.pathname;
const pageNames = {
  '/': 'home',
  '/posts/post.html': 'posts',
  '/about/about.html': 'about',
  '/posts/blog1.html': 'welcome',
  '/posts/blog2.html': 'cicada 3301',
  '/posts/blog3.html': 'the big O',
  '/posts/blog4.html': 'delusion',
  '/posts/blog5.html': 'chronicle'
};

function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('.breadcrumbs');
  const pathSegments = currentPage.split('/').filter(segment => segment !== '');

  let breadcrumbPath = '<a href="/">home</a>';

  if (currentPage === '/posts/post.html') {
    breadcrumbPath += ` / <a href="/posts/post.html">posts</a>`;
  } else {
    for (let i = 1; i < pathSegments.length; i++) {
      const path = `/${pathSegments.slice(0, i + 1).join('/')}`;
      let pageName = pageNames[path] || pathSegments[i];

      if (path === '/posts/blog1.html' || path === '/posts/blog2.html' ||
          path === '/posts/blog3.html' || path === '/posts/blog4.html' ||
          path === '/posts/blog5.html') {
        breadcrumbPath +=
            ` / <a href="/posts/post.html">posts</a> / ${pageName}`;
      } else {
        breadcrumbPath += ` / <a href="${path}">${pageName}</a>`;
      }
    }
  }

  breadcrumbContainer.innerHTML = breadcrumbPath;
}

generateBreadcrumbs();