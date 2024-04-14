function firstChar(text) {
  // your code here
	text=text.trim();
	if(text===''){
		return '';
	}
	for(i=0;i<text.length;i++){
		if(text[i]!==''){
			return text[i];
		}
	}
	return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
