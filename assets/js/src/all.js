import '../../scss/main.scss';

window.addEventListener('load', () => {
  if (document.getElementById('SearchTermForm')) {
    import('./watchForWebsiteSearch').then(({default: watchForWebsiteSearch}) => watchForWebsiteSearch())
  }
});
