function mediaqueryload(ev) {
  var queriedresource = document.querySelectorAll('.mediaquerydependent'),
      all = queriedresource.length,
      i = all,
      current = null,
      attr = null;
  if (ev && ev.type === 'resize') {
    while (i--) {
      current = queriedresource[i];
      for (attr in current.dataset) {
        current.removeAttribute(attr);
      }
    }
    i = all;
  }
  while (i--) {
    current = queriedresource[i];
    if (  current.dataset.media &&
          window.matchMedia(current.dataset.media).matches) {
      for (attr in current.dataset) {
        if (attr !== 'media') {
          current.setAttribute(attr, current.dataset[attr]);
        }
      }
    }
  }
}
mediaqueryload();
window.addEventListener('resize', mediaqueryload, false);