	var preload;
	var h=$(window).width();
	var h1=$('#center-logo-back').width();

    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [
		   {src:"images/images_0.jpg", id:"image0"},
		   {src:"images/images_1.jpg", id:"image1"},
		   {src:"images/images_2.jpg", id:"image2"},
		   {src:"images/images_3.jpg", id:"image3"},
		   {src:"images/images_4.jpg", id:"image4"},
		   {src:"images/images_5.jpg", id:"image5"},
		   {src:"images/images_6.jpg", id:"image6"},
		   {src:"images/images_7.jpg", id:"image7"},
		   
		   {src:"images/temp/Preview/preview1.png", id:"preview_1"},
		   {src:"images/temp/Preview/preview2.png", id:"preview_2"},
		   {src:"images/temp/Preview/preview3.png", id:"preview_3"},
		   {src:"images/temp/Preview/preview4.png", id:"preview_4"},
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
			document.getElementById("center-loading-line").style.borderLeft = (Math.round((event.loaded*100)).toString()*h/100)+"px solid #df9d0a";	
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
		
		//For preview-containers
		document.getElementById("main_image0").style.backgroundImage = "URL('./images/temp/Preview/preview1.png')";
		document.getElementById("main_image1").style.backgroundImage = "URL('./images/temp/Preview/preview2.png')";
		document.getElementById("main_image2").style.backgroundImage = "URL('./images/temp/Preview/preview3.png')";
		document.getElementById("main_image3").style.backgroundImage = "URL('./images/temp/Preview/preview4.png')";
		
		//For social links
		var social = document.getElementsByClassName("social-links");
		social[0].style.backgroundImage = "URL('./images/temp/Social media/fb.png')";
		social[1].style.backgroundImage = "URL('./images/temp/Social media/twitter.png')";
		social[2].style.backgroundImage = "URL('./images/temp/Social media/g+.png')";
		social[3].style.backgroundImage = "URL('./images/temp/Social media/youtube.png')";
		
		setTimeout(function(){
			$("#header").fadeTo(1000,1);
			$("#footer").fadeTo(1000,1);
		},1500);
		}

    init();