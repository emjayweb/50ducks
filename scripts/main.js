$(document).ready(function(){
	$.getJSON('https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCO5AjtysOlhqxaYlFZZjXYQ&key=AIzaSyCHrkJGJMx4gH6Vib6tUGVKuxZVfHj84gE', function(youtube){
		var revenge = youtube.items[0].snippet.title;
		var stevenge = youtube.items[0].contentDetails.upload.videoId;
		var mevenge = youtube.items[0].snippet.publishedAt;
		var kevenge = 'https://www.youtube.com/embed/'+stevenge;
		var bevenge = mevenge.substring(0, 10);
			$("#recentname").html(revenge);
			$("#recentdate").html(bevenge);
			$("#recentvid").html("<iframe src="+kevenge+"></iframe>");
	});	
});

var mph = '300';

$('#home_click').click(function(){
	$('#vidsection, #supportsection').fadeOut(mph).promise().done(function(){
		$('#homesection').fadeIn(mph);
		$('#vidlist').children('li').remove();		
	});
});

$('#videos_click').click(function(){
	$('#homesection, #supportsection').fadeOut(mph).promise().done(function(){
		$('#vidsection').fadeIn(mph);});
	
	$.getJSON('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCO5AjtysOlhqxaYlFZZjXYQ&maxResults=25&key=AIzaSyCHrkJGJMx4gH6Vib6tUGVKuxZVfHj84gE', function(vidios){
		var jsonList = vidios;
		var listItems = "";
		
		for (var i = 0; i < jsonList.items.length; i++){
		var youred = "https://www.youtube.com/watch?v="+jsonList.items[i].id.videoId;	
			listItems +="<a href="+youred+" target='_blank'><li><img src="+jsonList.items[i].snippet.thumbnails.medium.url+"><p>"+jsonList.items[i].snippet.title+"</p></a></li>";
		}
		
		$("#vidlist").append(listItems);
	});			
			
});

$('#support_click').click(function(){
	$('#homesection, #vidsection').fadeOut(mph).promise().done(function(){
		$('#supportsection').fadeIn(mph);
		$('#vidlist').children('li').remove();		
	});
});