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
			document.getElementById("center-loading-line").style.borderLeft = (Math.round((event.loaded*100)).toString()*h/100)+"px solid #CC181E";	
			if(event.loaded*100 > 45 && event.loaded*100 < 55){
<<<<<<< HEAD
			document.getElementById("center-loading-box").style.left = (Math.round(event.loaded*100)-45)*10+"%";
			}
			if(event.loaded*100 > 60){		//If loading happens too fast
			document.getElementById("center-loading-box").style.left= "0%";
=======
			document.getElementById("center-loading-box").style.marginLeft = (Math.round(event.loaded*100)-45)*10+"%";
			}
			if(event.loaded*100 > 60){		//If loading happens too fast
			document.getElementById("center-loading-box").style.marginLeft= "0%";
>>>>>>> 0a49de9872aad66b9b6db2b8623193e9f8787c83
			}			
		}
	}

    function preloadHandleComplete(event) {
		//If loading happens really fast
		document.getElementById("center-loading-box").style.marginLeft= "0%";
		// Move two windows
		$("#center-loading-line").fadeOut(500,"swing");
		document.getElementById("window-top").style.top = "-50%";
		document.getElementById("center-logo-back").style.top = "1%";
		document.getElementById("center-logo").style.top = "3%";
		document.getElementById("window-bottom").style.top = "100%";
	
		// Use preloaded images
		document.getElementById("container").style.backgroundImage = "URL('images/ironman.jpg')";
		document.getElementById("container").style.opacity = 1;
		setTimeout(function(){
		$("#header").fadeTo(1000,0.9);
		$("#footer").fadeTo(1000,0.9);},1500);
	}

    init();