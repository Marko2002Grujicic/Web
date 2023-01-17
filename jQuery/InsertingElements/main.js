$(function () {
    var $galeryContainer = $("<div></div>");
    $galeryContainer.addClass(".gallery");
    $("body").append($galeryContainer);
    $galeryContainer.prepend("<h2>Gallery Title</h2>");
    $galeryContainer.find("h2").css({
      marginLeft: "50%",
      transform: "translateX(-15%)",
    });
  
    function addImg(node, imgUrl) {
      $img = $("<img/>");
      $img.attr("src", imgUrl);
      node.append($img);
    }
  
    var imgUrlArr = [
      "https://placehold.jp/3d4007/ffffff/200x200.png",
      "https://placehold.jp/3d4070/ffffff/200x200.png",
      "https://placehold.jp/3e7051/ffffff/200x200.png",
      "https://placehold.jp/963117/ffffff/200x200.png",
      "https://placehold.jp/3d4007/ffffff/200x200.png",
      "https://placehold.jp/3d4070/ffffff/200x200.png",
    ];
  
    imgUrlArr.forEach(function (el) {
      addImg($galeryContainer, el);
    });
  
    function setWidthAndHeight() {
      return Math.round(Math.random() * (750 - 150 + 1) + 150);
    }
  
    $galeryContainer.find("img").each(function (index, el) {
      var newEl = $(el);
      newEl.height(setWidthAndHeight());
      newEl.width(setWidthAndHeight());
  
      if (newEl.width() < 250) {
        newEl.css({
          border: "3px solid green",
        });
      }
    });
  });