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