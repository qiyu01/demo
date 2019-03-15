function positionMessage(){
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="100px";
	moveMessage("message",125,25,10);
	
	
	
}
function moveMessage(id,final_x,final_y,times){
	var elem=document.getElementById(id);
	var start_x=parseInt(elem.style.left);
	var start_y=parseInt(elem.style.top);
	if(start_x==200 && start_y==100){
		return true;
	}
	if(start_x < final_x){
		start_x++;
	}
	if(start_x > final_x){
		start_x--;
	}
	if(start_y < final_y){
		start_y++;
	}
	if(start_y > final_y){
		start_y--;
	}
	elem.style.left=start_x+"px";
	elem.style.top=start_y+"px";
	var repeat="moveMessage('"+id+"',"+final_x+","+final_y+","+times+")";
	movement=setTimeout(repeat,times)
}
addLoadEvent(positionMessage);