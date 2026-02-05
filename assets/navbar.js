var i = 0;
document.querySelectorAll('div.hidden > a').forEach((a) => {
    console.log({
      navPathname: a.pathname,
      windowLocationPathname: window.location.pathname,
      areEqual: a.pathname === window.location.pathname,
    });
  if (a.pathname === window.location.pathname) {
    a.classList.add('active')
  } else {
    a.classList.remove('active')
  }
})