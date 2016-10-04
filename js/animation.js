const COLLAPSE_NAVBAR_HEIGHT = 38;
const EXPAND_NAVBAR_HEIGHT = 230;
const EXPAND_NAVLIST_HEIGHT = 191;

(function(){
  $(document).ready(function() {
    var scrollSkills = function() {
      $('.skill-pic').each(function(idx, el) {
        var delayTime = (idx + 1) > 10 ? 10 : (idx + 1)
        var className = "animated bounceIn animation-delay-" + delayTime.toString();
        $(el).addClass(className);
      })
    };

    var collapseDropDownMenu = function () {
      var dropdownBtn = $("#button")[0];
      $("#navbar").height(COLLAPSE_NAVBAR_HEIGHT);
      $($("ul.page-options")[0]).height(COLLAPSE_NAVBAR_HEIGHT);
    }

    var expandDropDownMenu = function () {
      var dropdownBtn = $("#button")[0];
      $("#navbar").height(EXPAND_NAVBAR_HEIGHT);
      $($("ul.page-options")[0]).height(EXPAND_NAVLIST_HEIGHT);
    }

    $("body").bind("click", function (e) {
      e.stopPropagation();
      var target = $(e.target);
      var dropdownBtn = $("#button")[0];
      if (target.is("#button")) {
        return;
      }
      if (!target.is("li.page-option") && !target.is("ul.page-options")) {
        collapseDropDownMenu ();
      }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $("li.page-option").bind('click', function(e) {
      var targetPage = $(e.currentTarget).data("page");
      var pageToInactivate = $("section.active").removeClass("active");
      var dropdownBtn = $("#button")[0];
      $("#" + targetPage).addClass("active");
      $(".modal").css("display","none");
      collapseDropDownMenu ();
      if (dropdownBtn.checked) { dropdownBtn.checked = false };
      e.preventDefault();
    });

    $(".home-page-img").bind('click', function(e) {
      $(".modal").css("display","none");
      $("section.active").removeClass("active");
      $("#home").addClass("active");
      e.preventDefault();
    });

    $(".art-pic > img").bind("click", function(e) {
      var target = $(e.currentTarget);
      var imgSrc = target.attr("src");
      var offsetY = $(window).scrollTop();
      $(".modal").css("display","block");
      var modalContent = $(".modal-content > img");
      var returnBtn = $(".modal-return-btn");
      modalContent.attr("src", imgSrc);
      modalContent.css("margin-top", offsetY);
      returnBtn.css("top", offsetY + 20)
      e.preventDefault();
    });

    $(".modal-return-btn").bind("click", function(e) {
      $(".modal").css("display","none");
      e.preventDefault();
    });

    $("#app-title").bind('click', function(e) {
      $("section.active").removeClass("active");
      $("#home").addClass("active");
      e.preventDefault();
    });

    $(window).on("scroll", function(e) {
      var dropdownBtn = $("#button")[0];
      if (dropdownBtn.checked) { return }
      $("#navbar").height(COLLAPSE_NAVBAR_HEIGHT);
    });

    $("#button").on("click", function(e) {
      e.stopPropagation()
      var dropdownBtn = $("#button")[0];
      if (dropdownBtn.checked) {
        expandDropDownMenu();
      } else {
        collapseDropDownMenu();
      }
    });
  });
})();
