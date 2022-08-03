const navTop = document.getElementById("nav_top");
const aList = Array.from(document.getElementsByClassName("nav_item"));
const pList = Array.from(document.getElementsByClassName("product"));
const navTopStyle = (h) => {
  for (let i = 0; i < pList.length; i++) {
    const a = aList[pList.length - 1 - i];
    const p = pList[pList.length - 1 - i];
    if (h > p.offsetTop - 100) {
      navTop.style.display = "block";
      aList.map((item) => (item.className = "nav_item"));
      a.className = "nav_item active";
      break;
    }
    if (i === pList.length - 1 && h < p.offsetTop - 100) {
      navTop.style.display = "none";
    }
  }
};
window.onscroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  navTopStyle(scrollTop);
};
