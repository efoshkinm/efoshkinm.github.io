 function getData(){
    $.ajax({
	  url:'/project/script/health.json',
	  dataType: "jsonp",
	  success: function(data){
		console.log(data);
	  var cabbage = data['Food']['Vegies']['0'];
	  var garlic = data['Food']['Vegies']['1'];
	  var potatoes = data['Food']['Vegies']['2'];
	  var potatoes = data['Food']['Vegies']['3'];
	  var onions = data['Food']['Vegies']['4'];
	  var tomatoes = data['Food']['Vegies']['5'];
	  
	  $("#cabbage").html(cabbage);
	  $("#garlic").html(garlic);
	  $("#potatoes").html(potatoes);
	  $("#onions").html(onions);
	  $("#tomatoes").html(tomatoes);
	
  }
  });
 }