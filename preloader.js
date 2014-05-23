	var preload;
	var h=$(window).width();
	var h1=$('#center-logo-back').width();

    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [
		   {src:"images/light.png", id:"image1"},
		   {src:"images/ironman.jpg", id:"image2"},
		   {src:"images/images_0.jpg", id:"image3"},
		   {src:"images/images_1.jpg", id:"image4"},
		   {src:"images/images_2.jpg", id:"image5"},
		   {src:"images/images_3.jpg", id:"image6"},
		   {src:"images/images_4.jpg", id:"image7"},
		   {src:"images/images_5.jpg", id:"image8"},
		   {src:"images/images_6.jpg", id:"image9"},
		   {src:"images/images_7.jpg", id:"image10"},
		   {src:"images/test.jpg", id:"image11"},
		   ];

    function init(){
        //preload = new createjs.LoadQueue(true, "http://festember.com/your/base/path");
        preload = new createjs.LoadQueue(true, "http://localhost/f14promo/");

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
			document.getElementById("center-loading-box").style.left = (Math.round(event.loaded*100)-45)*10+"%";
			}
			if(event.loaded*100 > 60){		//If loading happens too fast
			document.getElementById("center-loading-box").style.left= "0%";
			}			
		}
	}

    function preloadHandleComplete(event) {
		//If loading happens really fast
		document.getElementById("center-loading-box").style.marginLeft= "0%";
		// Move two windows
		$("#center-loading-line").fadeOut(500,"swing");
		document.getElementById("window-top").style.top = "-50%";
		document.getElementById("center-logo-back").style.top = "0.5%";
		document.getElementById("center-logo").style.top = "1.5%";
		document.getElementById("window-bottom").style.top = "100%";
	
		// Use preloaded images
		document.getElementById("container").style.backgroundImage = "URL('images/ironman.jpg')";
		document.getElementById("container").style.opacity = 1;
		setTimeout(function(){
		$("#header").fadeTo(1000,0.9);
		$("#footer").fadeTo(1000,0.9);},1500);
	}

    init();