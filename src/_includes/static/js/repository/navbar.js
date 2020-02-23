window.onscroll = function() {
  navbarScroll();
}
navbarScroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".navbar").style.position = "fixed";
    document.querySelector(".navbar").style.top = "0";
    document.querySelector(".navbar").style.paddingTop = "0.5rem";
    document.querySelector(".navbar").style.paddingBottom = "0.5rem";
  } else {
    document.querySelector(".navbar").style.position = "relative";
    document.querySelector(".navbar").style.paddingTop = "1rem";
    document.querySelector(".navbar").style.paddingBottom = "1rem";
  }
}