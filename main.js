// Header (Button Logic)
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3')
var alltopics = document.querySelectorAll('.topic');
function hideall() {
	for(let onetopic of alltopics) {
		onetopic.style.display = "none";
	}
}
function show(pagenum) {
	hideall();
	let onetopic = document.querySelector('#topic' + pagenum);
	onetopic.style.display = "block";
}


button1.addEventListener("click", function(){
	show(1)});
button2.addEventListener("click", function () { 
	show(2) });
button3.addEventListener("click", function () { 
	show(3) });
show(1);


// Memory Game