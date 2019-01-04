window.addEventListener('mouseup', mouseup);

function mouseup(){
	let selectedText=window.getSelection().toString();
	let msg={
		text: selectedText
	}
	if(selectedText.length>0){
		chrome.runtime.sendMessage(msg);
	}
}