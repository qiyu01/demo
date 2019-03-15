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
function displayCite(){
	if(!document.getElementsByTagName || !document.createElement 
	|| !document.createTextNode) return false;
	var quote=document.getElementsByTagName("blockquote");
	for(var i=0;i<quote.length;i++){
		var qt=quote[i];
		var cite=qt.getAttribute("cite");
		var source=document.createElement("a");
		source.setAttribute("href",cite);
		var text=document.createTextNode("source");
		source.appendChild(text);
		var sup=document.createElement("sup");
		sup.appendChild(source);
		qt.getElementsByTagName("p")[0].appendChild(sup);
	}
	
}
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCite);