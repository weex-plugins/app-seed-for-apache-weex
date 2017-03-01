// weex h5 laod pages
(function () {
  function getUrlParam(key, searchStr) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
    searchStr = searchStr || location.search;
    var match = searchStr.match(reg);
    return match && match[1];
  }
  var page = '/dist/index.js';
  if (getUrlParam('name')) {
    page = getUrlParam('name');
  } else {
    if (window.top && getUrlParam('page', top.location.search)) {
      page = getUrlParam('page', top.location.search);
    }
  }
  
  if (window.weex && window.weex.init ) {
    window.weex.init({
      appId: location.href,
      source: page,
      loader: 'xhr',
      rootId: 'weex'
    });
  } else {
    var bundle = document.createElement('script');
    bundle.src = page;
    document.body.appendChild(bundle);
  }
})();
