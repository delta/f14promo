	var preload;
	var h=$(window).width();
	var h1=$('#center-logo-back').width();

    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [
		   {src:"images/light.png", id:"image1"},
		   {src:"images/ironman.jpg", id:"image2"},
		   ];

    function init(){
        //preload = new createjs.LoadQueue(true, "http://festember.com/your/base/path");
        preload = new createjs.LoadQueue(true, "http://localhost/festember14/");

        preload.addEventListener("progress", preloadHandleProgress);
        preload.addEventListener("complete", preloadHandleComplete);
        preload.setMaxConnections(10);
        preload.loadManifest(manifest);
    }

    function stop() {
        if (preload != null) { preload.close(); }
    }
	
    function preloadHandleProgress(event) {
	   if(event){
			document.getElementById("center-loading-line").style.borderLeft = (Math.round((event.loaded*100)).toString()*h/100)+"px solid #055";	
			if(event.loaded*100 > 40 && event.loaded*100 < 60){
			document.getElementById("center-logo-back").style.borderLeft = ((Math.round(event.loaded*100))*1.67*h1/100)+"px solid #055";
			}
			if(event.loaded*100 > 60){		//If loading happens too fast
			document.getElementById("center-logo-back").style.borderLeft= h1+"px solid #055";
			}			
		}
	}

    function preloadHandleComplete(event) {
		document.getElementById("center-logo-back").style.borderLeft = h1+"px solid #055";
		
		// Use preloaded images
		document.getElementById("container").style.backgroundImage = "URL('images/ironman.jpg')";
		
		// Move two windows to the top
		$("#center-loading-line").fadeOut(500,"swing");
		document.getElementById("window-top").style.top = "-40%";
		document.getElementById("center-logo-back").style.top = "1%";
		document.getElementById("center-logo").style.top = "3%";
		document.getElementById("window-bottom").style.top = "90%";
	}

    init();