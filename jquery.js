//jQuery DOM Practice

//1.
$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");
});

//2.
let $imageClass = $("article").find("img").addClass("image-center");

//3.
let $lastP = $("article").find("p").eq(5).remove();
// $("article p:last-child").remove();

//4.
let $titleSize = $("h1").css("font-size", Math.floor(Math.random() * 101 - 0));

//5.
let $newListItem = $("<li>The is a newly created item!</li>").appendTo("ol");

//6.
let $emptyAside = $("aside").empty();
let $newP = $("<p> Yikes, the list was awful! </p>").appendTo("aside");
$newP.css("font-size", "45px");

//7.
$("input").on("keyup blur change", function (e) {
  e.preventDefault();
  let $red = $("input").eq(0).val();
  let $blue = $("input").eq(1).val();
  let $green = $("input").eq(2).val();

  console.log($red, $blue, $green);

  $("body").css(
    "background-color",
    "rgb(" + $red + "," + $green + "," + $blue + ")"
  );
});

//8.
$("img").on("click", function (e) {
  e.preventDefault();
  $("img").remove();
});
