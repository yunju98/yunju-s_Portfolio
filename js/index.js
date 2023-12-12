$(function () {
  $(document).ready(function () {
    $("#fullpage").fullpage({
      navigation: true,
      navigationPosition: "left",
      afterLoad: function (anchorLink, index) {
        if (index === 1) {
          $(".head_wrap").addClass("active");
        } else {
          $(".head_wrap").removeClass("active");
        }
      },
    });
  });
});
