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
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var row=document.getElementsByTagName("tr");
	for(var i=0;i<row.length;i++){
		row[i].onmouseover=function(){
			this.style.fontWeight="bold";
		}
		row[i].onmouseout=function(){
			this.style.fontWeight="normal";
		}
		
	}
	
}
addLoadEvent(stripeTable);
addLoadEvent(highlightRows);