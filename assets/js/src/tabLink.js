// Provide the ability to activate a tab from the URL (e.g. 'http://localhost:3000/alumni/distinguished-alumni-award/#donald-rehmer' makes the #donald-rehmer tab active).
const GED_OR_COMMUNITY_LITERACY_PAGE_REGEX = /(\/programs\/community-literacy|\/programs\/ged)/g;

function makeTabsLinkable() {
  let url = location.href;

  if ( url.search(GED_OR_COMMUNITY_LITERACY_PAGE_REGEX) === -1 )
    return;

  if (location.hash) {
    $('#myTab a[href="' + location.hash.replace(/\/$/g, '') + '"]').tab('show'); // Bootstrap 4 method. See: https://getbootstrap.com/docs/4.4/components/navs/#via-javascript
    setTimeout(() => {
      $(window).scrollTop(0);
    }, 400);
  }
}

export default makeTabsLinkable;
