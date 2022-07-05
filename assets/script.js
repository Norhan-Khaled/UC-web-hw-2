window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
windwindow.location.hash = "Action";
windwindow.location.hash = "Thriller";
windwindow.location.hash = "Sci-Fi";
windwindow.location.hash = "Horror";

var bck2TopBtn = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bck2TopBtn.style.display = "block";
  } else {
    bck2TopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function subscribeF() {
  alert("هل تريد الاشتراك في منصتي 📺؟ (رد بـ نعم او لا");
}

var subscribe = prompt("هل تريد الاشتراك في منصتي 📺؟ (رد بـ نعم او لا");
if (subscribe == "نعم") {
  alert("مرحباً بك في منصتي 👋");
} else if (subscribe == "لا") {
  alert("حسناً، عد لنا اذا غيرت رايك ☹️");
}
