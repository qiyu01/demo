function getNextElement(node){
	if(node.nodeType==1){
		return node;
		
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
	
}
function styleHeaderSiblings(){
		if(!document.getElementsByTagName) return false;
		var headers=document.getElementsByTagName("h1");
		for(i=0;i<headers.length;i++){
		var sibling=getNextElement(headers[i].nextSibling);
		sibling.style.fontSize="1.2em";
		sibling.style.fontWeight="bold";
		}
	
}
addLoadEvent(styleHeaderSiblings);