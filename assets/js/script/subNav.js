// Builds out the sub-navigation based on whe current URL of the user.
$(document).ready(function() {
  var currentUrl = window.location.href;
  // Remove the http(s):// protocol
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  // Remove the baseURL (foundation.kcc.edu)
  var noBase = noProto.replace('foundation.kcc.edu/', '');

  function writeSubNav() {

    var programs = 'programs',
      ged = 'ged',
      esl = 'esl',
      literacy = 'community-literacy';

    //console.log(noProto);

    function createList() {

      var listItemStart = '<li class="nav-item">',
        lastListItemStart = '<li class="nav-item active">',
        listItemClose = '</li>',
        // Links:
        linkStart = '<a href="',
        linkPostUrl = '" class="nav-link sub-nav__nav-link" style="text-transform: capitalize;">',
        linkCaps = '" class="nav-link sub-nav__nav-link" style="text-transform: uppercase;">',
        linkClose = '</a>',
        srCurrent = ' <span class="sr-only">(current)</span>';

      var removeSlash = noBase.slice(0,-1);
      var urlArray = removeSlash.split(/\//),
        listString = [];

      var lastItem = urlArray[urlArray.length - 1];
      var arrayLength = urlArray.length;
      //console.log(lastItem);
      //console.log(arrayLength);

      if ( noBase.indexOf(programs) > -1 ) {
        if ( noBase.indexOf(ged) > -1 ) {
          listString.push(
            lastListItemStart + linkStart + '../' + ged + linkCaps + ged.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + esl + linkCaps + esl.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + literacy + linkPostUrl + literacy.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(esl) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + ged + linkCaps + ged.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + esl + linkCaps + esl.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + literacy + linkPostUrl + literacy.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(literacy) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + ged + linkCaps + ged.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + esl + linkCaps + esl.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + literacy + linkPostUrl + literacy.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else {
          listString.push(
            listItemStart + linkStart + ged + linkCaps + ged.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + esl + linkCaps + esl.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + literacy + linkPostUrl + literacy.replace(/-/g, ' ') + linkClose + listItemClose
          );
        }
      }
      document.getElementById('subNavNav').innerHTML = listString.join('');
    }
    createList();

  }

  if ( noProto !== 'adulted.kcc.edu/' && noProto !== 'adulted.kcc.edu/#contact' && noProto !== 'localhost:3000/' && noProto !== 'localhost:3000/#contact' ) {
    writeSubNav();
  }
});
