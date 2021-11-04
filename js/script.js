const txtElment =['freelancer','Web Developer','Graphic Designer'];
let count = 0;
let txtIindex = 0;
let currentTxt = '';
let words = '';

(function ngetik (){

if(count == txtElement. length){
	count = 0;	
}
	currentTxt =txtElement[count];
	words = currentTxt.slice (0, ++ txtIindex)
	document.querySelector( '.efek-ngetik').textContent = words;
	if (word.lenghth == currentTxt.lenghth) {
		count++;
		txtIindex = 0;
	}
	setTimeout (ngetik, 500);
})();