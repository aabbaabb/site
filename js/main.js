$(document).ready(function(){
	bind=function(){
		$(".nav-bar-each").click(function(){
			if(!$(this).hasClass("click")){
				var index=$(this).index(".nav-bar-each");
				window.location.href="/page"+parseInt(index+1)+".html";
			}
		})
	}
	bind();
})