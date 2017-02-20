$("#get").click(function() {
  $.getJSON("https://www.reddit.com/r/cats/.json", function(result) {

    getImg(result);

    function getImg(result) {
      var length = result.data.children.length;
      for (let i = 0; i < length; i++) {
        if (i >= 0) {
          let thumbnail = result.data.children[i].data.thumbnail;
          let title = result.data.children[i].data.title;
          let = score = result.data.children[i].data.score;
          let permalink = "https://www.reddit.com" + result.data.children[i].data.permalink;
          let regex = /\.(jpe?g|png|gif|bmp)$/i;

          if (thumbnail === "default" || thumbnail === "image" || !thumbnail.match(regex)) {
            thumbnail = "http://s.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg";
          }

          var div = '<div class="feed animated bounceInLeft">  <img src="' + thumbnail + '" /> <div class="info"><a target="_blank" href="' + permalink + '">' + title + '</a><p id="score">score: ' + score + '</div></div>';

          $(".container").append(div);

        }
      }
    }
  });
});