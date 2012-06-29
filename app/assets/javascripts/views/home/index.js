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
  $('#page1').click(function(event) {
    event.preventDefault();
    $.get('/home/render_partial1', {}, function(data){ 
      $('#image').html(data);
    });
    location.hash = 'foo';
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