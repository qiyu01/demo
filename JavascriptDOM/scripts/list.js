function slidShow(){
	var preview=document.getElementById("preview");
	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";
	var links=document.getElementsByTagName("a");
	links[0].onmouseover=function(){
		moveMessage("preview",-100,0,10);
	}
	links[1].onmouseover=function(){
		moveMessage("preview",-200,0,10);
	}
	links[2].onmouseover=function(){
		moveMessage("preview",-300,0,10);
	}
	
}
function moveMessage(id,final_x,final_y,times){
	var elem=document.getElementById(id);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	var start_x=parseInt(elem.style.left);
	var start_y=parseInt(elem.style.top);
	if(start_x==200 && start_y==100){
		return true;
	}
	if(start_x < final_x){
		dist=Math.ceil((final_x-start_x)/10);
		start_x+=dist;
	}
	if(start_x > final_x){
		dist=Math.ceil((start_x-final_x)/10);
		start_x-=dist;
	}
	if(start_y < final_y){
		dist=Math.ceil((final_y-start_y)/10)
		start_y+=dist;
	}
	if(start_y > final_y){
		dist=Math.ceil((start_y-final_y)/10)
		start_y-=dist;
	}
	elem.style.left=start_x+"px";
	elem.style.top=start_y+"px";
	var repeat="moveMessage('"+id+"',"+final_x+","+final_y+","+times+")";
	elem.movement=setTimeout(repeat,times)
}
addLoadEvent(slidShow);