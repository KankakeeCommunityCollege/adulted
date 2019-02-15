
document.addEventListener('DOMContentLoaded', function() {
  var currentUrl = window.location.href;
  var host = window.location.host + '/';
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  var isJotFormPage = noProto === host + 'programs/community-literacy/form/';
  function watchForIframeLoad(){
    var myIframe = document.querySelector('iframe');
    myIframe.addEventListener('load', function(){
      document.body.scrollTop = document.documentElement.scrollTop = 0; // scroll the page to the top on iframe load (Pulls 'Thank You' message into users view).
    });
  }
  if (isJotFormPage) { watchForIframeLoad(); }
});
