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
function insertAfter(newElement,targetElement){
	var parents=targetElement.parentNode;
	if(parents.lastChild==targetElement){
		parents.appendChild(newElement);
		
	}else{
		parents.insertBefore(newElement,targetElement.nextSibling);
		
	}
	
}
function addClass(ele,value){
if(!ele.className){
	ele.className=value;
}else{
	newvalue=ele.className;
	newvalue+=" ";
	newvalue+=value
	ele.className=newvalue;
}
	
}
function highlightPage(){
	if(!document.getElementsByTagName || !document.getElementById) return false;
	var headers=document.getElementsByTagName("header");
	if(headers.length==0) return false;
	var navs=headers[0].getElementsByTagName("nav");
	if(navs.length==0) return false;
	var links=navs[0].getElementsByTagName("a");
	var linkurl;
	for(var i=0;i<links.length;i++){
		linkurl=links[i].getAttribute("href");
		
		if(window.location.href.indexOf(linkurl) != -1){
			links[i].className="here";
			var linktext=links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext);
		}
	}
}
function moveMessage(id,final_x,final_y,times){
	var elem=document.getElementById(id);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
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
function prepareSlideshow(){
	if(!document.getElementsByTagName || !document.getElementById || !document.getElementById("intro")) return false;
	var intro=document.getElementById("intro");
	var slideshow=document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	
	var preview=document.createElement("img");
	preview.setAttribute("src","images/slidshow.jpg");
	preview.setAttribute("alt","a glimpse of what awaits you");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
	var links=document.getElementsByTagName("a");
	var destination;
	for(var i=0;i<links.length;i++){
		links[i].onmouseover=function(){
			destination=this.getAttribute("href");
			if(destination.indexOf("index.html")!= -1){
				
				moveMessage("preview",0,0,5);
			}
			if(destination.indexOf("about.html")!= -1){
				moveMessage("preview",-150,0,5);
				
			}
			if(destination.indexOf("photos.html")!= -1){
				moveMessage("preview",-300,0,5);
			}
			if(destination.indexOf("live.html")!= -1){
				moveMessage("preview",-450,0,5);
			}
			if(destination.indexOf("contact.html")!= -1){
				moveMessage("preview",-600,0,5);
			}
			
		}
	}
}
function showSection(id){
	var sections=document.getElementsByTagName("section");
	for(var i=0;i<sections.length;i++){
		if(sections[i].getAttribute("id")!=id){
			sections[i].style.display="none"
			}else{
			sections[i].style.display="block";
			}
	}
	
}
function prepareIntervalnav(){
	var articles= document.getElementsByTagName("article");
	if(articles.length==0)return false;
	var navs=articles[0].getElementsByTagName("nav");
	if(navs.length==0)return false;
	var nav=navs[0];
	var links=nav.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var sectionId=links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId))return false;
		document.getElementById(sectionId).style.display="none";
		links[i].destination=sectionId;
		links[i].onclick=function(){
			showSection(this.destination);
			return false;
		}
		
		
	}
	var jay=document.getElementById("jay");
	jay.style.display="block";
	
}
function showPic(whichpic){
	var href=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",href);
	
	var text=whichpic.getAttribute("title");
	var description=document.getElementById("description");
	description.childNodes[0].nodeValue=text;
	
}
function preparePlaceHolder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
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
	var gallery=document.getElementById("imagegallery");
	//使用isertAfter函数将description标签和placeholder标签插入到UL列表的后面
	
	insertAfter(placeholder,gallery);
	insertAfter(description,gallery);
}
function addEventListener(){
	if(!document.getElementsByTagName || !document.getElementById ||!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
		
		showPic(this);
		return false;
			
		}
	}
	
}
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var row=document.getElementsByTagName("tr");
	for(var i=0;i<row.length;i++){
		row[i].oldClassName=row[i].className;
		row[i].onmouseover=function(){
			addClass(this,"highlight");
		}
		row[i].onmouseout=function(){
			this.className=this.oldClassName;
		}
		
	}
	
}
function stripeTable(){
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");
	var odd,rows;
	for(var i=0;i<tables.length;i++){
		odd=false;
		rows=tables[i].getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			if(odd){
			addClass(rows[j],"odd");
			odd=false;
			}else{
				odd=true;
				
			}
		}
	}
	
}
function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement 
	|| !document.createTextNode) return false;
	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length < 1) return false;
	var defs=new Array();
	for(var i=0;i<abbreviations.length;i++){
		var current_abbr=abbreviations[i];
		var definition=current_abbr.getAttribute("title");
		var key=current_abbr.lastChild.nodeValue;
		defs[key]=definition;
	}
	var dlist=document.createElement("dl");
	for(key in defs){
		var definition=defs[key];
		var dt=document.createElement("dt");
		var abbr=document.createTextNode(key);
		dt.appendChild(abbr);
		var dd=document.createElement("dd");
		var def=document.createTextNode(definition);
		dd.appendChild(def);
		dlist.appendChild(dt);
		dlist.appendChild(dd);
		
		
	}
	var bod=document.getElementsByTagName("body")[0];
	bod.appendChild(dlist);
	var h1=document.createElement("h1");
	var text=document.createTextNode("Abbreviations");
	h1.appendChild(text);
	bod.insertBefore(h1,dlist);
}
addLoadEvent(preparePlaceHolder);
addLoadEvent(addEventListener);
addLoadEvent(prepareIntervalnav);
addLoadEvent(prepareSlideshow);
addLoadEvent(highlightPage);
addLoadEvent(displayAbbreviations);
addLoadEvent(stripeTable);
addLoadEvent(highlightRows);