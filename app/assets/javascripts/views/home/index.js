$(document).ready(function() {
  $("#test_call_button").click(function(event) 
  {
    event.preventDefault();
    document.getElementById("test_call_button").value = 'Calling...';      
    var number = $("#phone_number").val();
    function checkStatus()
    {
      var d = $.post("/home/status_update", function(data) {return data});
      d.always(function(data)
      {
        document.getElementById("status").innerHTML = 'Status: ' + d.responseText;
        if(d.responseText != "???")
        {
          setTimeout(checkStatus, 500);
        }
      });
    }
    checkStatus();
  });

  $("#add_button").click(function(event) {
    event.preventDefault();
    var number = $("#phone_number").val();
    $.post("/home/add_count", {num: number},
        function(data) {
          document.getElementById("show_count").innerHTML = 'Value: ' + data; 
        });
  });
  $('#page1q').click(function(event) {
    event.preventDefault();
    $.get('/home/render_partial1', {}, function(data){ 
      $('#image').html(data);
    });
    location.hash = 'foo';
  });

  $('#page2q').click(function(event) {
    event.preventDefault();
    $.get('/home/render_partial2', {}, function(data){ 
      $('#image').html(data);
    });
    location.hash = 'bar';
  });

  $(window).bind('hashchange', function() {
    var newHash = window.location.hash;
    $('#show_count').html(newHash);
    if (newHash === '#foo') {
      $.get('/home/render_partial1', {}, function(data){ 
        $('#image').html(data);
      });
    } else if (newHash === '#bar') {
      $.get('/home/render_partial2', {}, function(data){ 
        $('#image').html(data);
      }); 
    };
  });


  // $('#page2').click(function(event) {
  //   event.preventDefault();
  //   $.get('/home/render_partial2', {}, function(data){ 
  //     $('#image').html(data);
  //   });
  // });


  // $(function() { 
  //   $('#page2').pjax("#image", { fragment: "#image" }); 
  // });

  $('a').pjax();

  // $('#image')
  //   .on('pjax:start', function() { $('.loader').show() })
  //   .on('pjax:end',   function() { $('.loader').hide() });

});