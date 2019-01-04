chrome.runtime.onMessage.addListener(wordMeaning);
window.word="ishita";
function wordMeaning(message, sender, sendResponse){
	window.word=message.text;
}