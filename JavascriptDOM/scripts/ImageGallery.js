function showPic(whichpic){
	var href=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",href);
	
	var text=whichpic.getAttribute("title");
	var description=document.getElementById("description");
	description.childNodes[0].nodeValue=text;
	
}
function addEventListener(){
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
		
		showPic(this);
		return false;
			
		}
	}
	
}
function insertAfter(newElement,targetElement){
	var parents=targetElement.parentNode;
	if(parents.lastChild==targetElement){
		parents.appendChild(newElement);
		
	}else{
		parents.insertBefore(newElement,targetElement.nextSibling);
		
	}
	
}
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//动态创建descrption文本标签和placeholder图片标签
function preparePlaceHolder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("ImageGallery")) return false;
	//创建placholder标签
	var placeholder=document.createElement("img");
	//添加属性
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/p0.jpg");
	placeholder.setAttribute("alt","my image gallery");
	//创建description标签
	var description=document.createElement("p");
	description.setAttribute("id","description");
	//创建textnode文本
	var text=document.createTextNode("choose an image")
	//将文本添加到description标签
	description.appendChild(text);
	var gallery=document.getElementById("ImageGallery");
	//使用isertAfter函数将description标签和placeholder标签插入到UL列表的后面
	insertAfter(description,gallery);
	insertAfter(placeholder,gallery);
}
addLoadEvent(preparePlaceHolder);
addLoadEvent(addEventListener);
