function setup(){
	noCanvas();
	console.log("hi");
	let bgpage=chrome.extension.getBackgroundPage();
	let words=bgpage.word;
	createP(words);
	document.getElementById('search').onclick = function() {
    window.open('http://google.com/search?q='+words+' definition');
};
}
