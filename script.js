console.log($);

$(document).ready(function () {
  $('a').hover(
    function () {
      $(this).css({
        backgroundColor: 'red',
      });
    },
    function () {
      $(this).css({
        backgroundColor: '#fff',
      });
    }
  );
  $('#p1').mousedown(function () {
    console.log('鼠标在该段落上按下！');
  });
  $('#p1').mouseup(function () {
    console.log('鼠标在段落上松开。');
  });
  $('#p1').hover(
    function () {
      console.log('你进入了 p1!');
    },
    function () {
      console.log('拜拜! 现在你离开了 p1!');
    }
  );
  // when gets focused, change its background color to #dfa
  $('input').focus(function () {
    $(this).css('background-color', '#dfa');
  });
  $('input').blur(function () {
    $(this).css('background-color', '#fff');
  });

  // hide
  $('.hide-btn').click(function () {
    $('div.show-hide').hide(1000, 'linear', function () {
      alert('Hide() 方法已完成!');
    });
  });

  $('.show-btn').click(function () {
    $('div.show-hide').show(1000, 'linear', function () {
      alert('Show() 方法已完成!');
    });
  });

  $('.toggle-btn').click(function () {
    $('div.to-toggle').toggle(1000, 'linear', function () {
      alert('Toggle() 方法已完成!');
    });
  });

  $('#fade-to-btn').click(function () {
    $('.fade-to').fadeTo('slow', 0.3, () => {
      alert('fadeTo is over');
    });
  });

  $('#flip').click(function () {
    $('#panel').slideToggle('slow');
  });

  $('#animate-btn').click(function () {
    var div = $('#animate-box');
    div.animate({ left: '100px' }, 'slow');
    div.animate({ fontSize: '3em' }, 'slow');
  });

  $('#slide-down').click(function () {
    $('#slide-panel').slideDown(5000);
  });
  $('#stop-slide-down').click(function () {
    $('#slide-panel').stop();
  });
  $('p').first().css('background-color', 'yellow');
  $('p').eq(1).css('background-color', 'gray');
  $('p').last().css('background-color', 'red');
  $('button').filter('#stop-slide-down').css('font-size', '1.5rem');
  $('button').not('#stop-slide-down').css('font-size', '1.25rem');
});
