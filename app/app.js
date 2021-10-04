function route() {
  let hash = window.location.hash;
  let pgID = hash.replace("#/", "");

  console.log(pgID);

  if (pgID == "") {
    MODEL.pgChange("home");
  } else {
    MODEL.pgChange(pgID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();

  $("#submit").click(function (e) {
    gsap.to("#modal", {
      scale: 0,
      duration: 0.5,
      onComplete: alert("Sign in successful!"),
    });
  });

  $("#login").click(function (e) {
    gsap.to("#modal", {
      scale: 1,
      duration: 0.2,
    });
  });

  $(".bground").click(function (e) {
    gsap.to("#modal", {
      scale: 0,
      duration: 0.5,
    });
  });
}

$("document").ready(function () {
  // console.log("ready");
  initListeners();
  gsap.set($("#modal"), { scale: 0 });
});
