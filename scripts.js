
var date = new Date;

var toYear = date.getFullYear();

var toMonth = date.getMonth()+1;

var toDate = date.getDate();



function cal(){
	var bYear = parseInt(document.getElementById("bYear").value);
	var bMonth = parseInt(document.getElementById("bMonth").value);
	var bDate = parseInt(document.getElementById("bDate").value);

	if(toDate <=bDate){
		if(toDate<bDate){
			toDate = (toDate + 30);
		    toMonth -=1;

		}
	
		toDate= (toDate - bDate);
		if(toMonth < bMonth){
			toMonth +=12;
			toMonth = (toMonth -bMonth);
			toYear -=1;
			toYear = (toYear - bYear);
		} 
		else{
			toMonth = (toMonth -bMonth);
			toYear = (toYear - bYear);
		}
	}
	else if(toMonth < bMonth){
		toDate = (toDate - bDate);
		toMonth +=12;
		toMonth = (toMonth -bMonth);
		toYear -=1;
		toYear = (toYear - bYear);
	}
	else{
		toDate = (toDate - bDate);
		toMonth = (toMonth -bMonth);
		toYear = (toYear - bYear);
	}

	

	document.getElementById("rDate").value = toDate;
	document.getElementById("rMonth").value = toMonth;
	document.getElementById("rYear").value = toYear;
	

}
let yt,mt,dt,y,m,d;


function tin(){
	let tdate = document.getElementById("tinput").value;
	let date = new Date(tdate);
	 yt= date.getFullYear();
	 mt= date.getMonth()+1;
	 dt= date.getDate();
}

function test(){
	let inputDate = document.getElementById("inputDate").value;
	let date = new Date(inputDate);
	 y= date.getFullYear();
	 m= date.getMonth()+1;
	 d= date.getDate();
	return 0;

}
	


function cal2(){

	

	if(dt <=d){
		if(dt<d){
			dt = (dt + 30);
		    mt -=1;

		}
	
		dt= (dt - d);
		if(mt < m){
			mt +=12;
			mt = (mt-m);
			yt -=1;
			yt = (yt - y);
		} 
		else{
			mt = (mt -m);
			yt = (yt - y);
		}
	}
	else if(mt < m){
		dt = (dt - d);
		mt +=12;
		mt = (mt -m);
		yt -=1;
		yt = (yt - y);
	}
	else{
		dt = (dt - d);
		mt = (mt -m);
		yt = (yt - y);
	}

	

	document.getElementById("rDate").value = dt;
	document.getElementById("rMonth").value = mt;
	document.getElementById("rYear").value = yt;
	

}
