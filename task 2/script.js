	window.onload = function() {
		document.getElementById('blueHiderLinkThing').addEventListener("click", onclickAction);
	}
	
	function onclickAction(){
		if(document.getElementById('list1').style.visibility === 'hidden') {
          document.getElementById('list1').style.visibility = 'visible';
        } 
		else if (document.getElementById('list1').style.visibility === ''){
		  document.getElementById('list1').style.visibility = 'visible'
		}
		else {
          document.getElementById('list1').style.visibility = 'hidden';
       } 
	}
// look into suggestions from task1. 
// look into implications of handling style attributes in js. consider toggling css classes instead. 
