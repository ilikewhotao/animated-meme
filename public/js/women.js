const navItems = document.querySelectorAll(".series_nav .nav_item");
const topNavItems = document.querySelectorAll(".series_nav_top .nav_item");
const products = document.querySelectorAll(".product");

/* 前往对应商品位置 */
const topProduct = (items) => {
  items.forEach((item, i) => {
    item.addEventListener("click", () => {
      window.scrollTo({
        top: products.item(i).offsetTop - 60,
        behavior: "smooth",
      });
    });
  });
};

/* 顶部导航样式 */
const series_nav_container = document.querySelector(".series_nav_container");
const topNavStyle = (h) => {
  products.forEach((item, i) => {
    if (h > item.offsetTop - 96) {
      series_nav_container.style.display = "block";
      topNavItems.forEach((item) => (item.className = "nav_item"));
      topNavItems.item(i).className = "nav_item active";
    }
    if (i === 0 && h < item.offsetTop - 97) {
      series_nav_container.style.display = "none";
    }
  });
};

/* 给两个导航都添加滚动事件 */
topProduct(navItems);
topProduct(topNavItems);

/* 监听滚动实现样式 */
window.onscroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  topNavStyle(scrollTop);
};
