$(document).ready(function(){


  $('.snowman').each(function(){
    var rotAmount = 0;

    $(this).click(function(){
      rotAmount = rotAmount + 360;
      $(this).css({
        'transform':'rotate(' + rotAmount + 'deg)'
      });
    });
  });

  $('.tree-container').click(function(){
    $(this).addClass("shake").delay(500).queue(function(){
      $(this).removeClass("shake").dequeue();
    });
  });

  $('.letter-container').click(function(){
    var colorArray = ['indigo','teal','#333','darkgrey','tomato','orange'];
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    $(this).css({
      'background':randomColor,
    });
  });

  $('.love').click(function(){
    $('.letter-container').css({'background':'crimson'});
  });

  for (var i = 0; i < 200; i++) {
      $('.snow-container').append('<div class="snow"></div>');
    };

    $('.snow').each(function(){
      var bodyWidth = document.body.clientWidth
      var bodyHeight = document.body.clientHeight;
      var width = $('.snow-container').width();
      var height = $('.snow-container').height();
      var randPosX = Math.floor((Math.random()*width));
      var randPosY = Math.floor((Math.random()*bodyHeight));
      var randDelay = Math.floor(Math.random()*5);
      var randDimen = Math.floor(Math.random()*3 + 2);
      var randTime = Math.floor(Math.random()*4 + 10);

      $(this).css({
        'bottom': randPosY + 'px',
        // 'bottom': 0,
        'left': randPosX + 'px',
        'animation-delay' : randDelay + 's',
        'border': '1px solid white',
        'animation-duration' : randTime + 's',
      })
    });

});
