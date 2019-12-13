// Provide the ability to activate a tab from the URL (e.g. 'http://localhost:3000/alumni/distinguished-alumni-award/#donald-rehmer' makes the #donald-rehmer tab active).
const DISTINGUISHED_ALUMNI_OR_ALUMNI_STORIES_REGEX = /programs\/community-literacy/g;

function makeTabsLinkable() {
  let initialURL = location.href;
  const userIsNotOnCorrectPage = initialURL.search(DISTINGUISHED_ALUMNI_OR_ALUMNI_STORIES_REGEX) === -1;

  if ( userIsNotOnCorrectPage )
    return;

  if (location.hash) {
    $('#myTab a[href="' + location.hash.replace(/\/$/g, '') + '"]').tab('show'); // Bootstrap 4 method. See: https://getbootstrap.com/docs/4.4/components/navs/#via-javascript
    setTimeout(() => {
      $(window).scrollTop(0);
    }, 400);
  }
}

export default makeTabsLinkable;
