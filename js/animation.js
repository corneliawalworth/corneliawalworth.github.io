const COLLAPSE_NAVBAR_HEIGHT = 38;
const EXPAND_NAVBAR_HEIGHT = 309;
const EXPAND_NAVLIST_HEIGHT = 271;

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
        collapseDropDownMenu ();
        if (dropdownBtn.checked) { dropdownBtn.checked = false };
        e.preventDefault();
    });

    $("#app-title").bind('click', function(e) {
      var pageToInactivate = $("section.active").removeClass("active");
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
