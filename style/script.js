document.getElementById("hover").onclick = function () {
  if (sessionStorage.getItem("state") === "1") {
    sessionStorage.setItem("state", "0");
    document.getElementById("draw").classList.remove("animate");
  } else if (sessionStorage.getItem("state") === "0") {
    sessionStorage.setItem("state", "1");
    document.getElementById("draw").classList.add("animate");
  } else {
    sessionStorage.setItem("state", "1");
    document.getElementById("draw").classList.add("animate");
  }
};
