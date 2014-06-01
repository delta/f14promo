	var preload;
	var h=$(window).width();
	var h1=$('#center-logo-back').width();

    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [

		   {src:"./images/temp/Preview/preview1.svg", id:"preview_1"},
		   {src:"./images/temp/Preview/preview2.svg", id:"preview_2"},
		   {src:"./images/temp/Preview/preview3.svg", id:"preview_3"},
		   {src:"./images/temp/Preview/preview4.svg", id:"preview_4"},
		   {src:"./images/temp/Preview/preview1 h.svg", id:"preview_5"},
		   {src:"./images/temp/Preview/preview2 h.svg", id:"preview_6"},
		   {src:"./images/temp/Preview/preview3 h.svg", id:"preview_7"},
		   {src:"./images/temp/Preview/preview4 h.svg", id:"preview_8"},
		   
		   {src:"./images/gallery/gallery_0.jpg", id:"gallery0"},
		   {src:"./images/gallery/gallery_1.jpg", id:"gallery1"},
		   {src:"./images/gallery/gallery_2.jpg", id:"gallery2"},
		   {src:"./images/gallery/gallery_3.jpg", id:"gallery3"},
		   {src:"./images/gallery/gallery_4.jpg", id:"gallery4"},
		   {src:"./images/gallery/gallery_5.jpg", id:"gallery5"},
		   {src:"./images/gallery/gallery_6.jpg", id:"gallery6"},
		   {src:"./images/gallery/gallery_7.jpg", id:"gallery7"},
		   {src:"./images/gallery/gallery_8.jpg", id:"gallery8"},
		   {src:"./images/gallery/gallery_9.jpg", id:"gallery9"},
		   {src:"./images/gallery/gallery_10.jpg", id:"gallery10"},
		   {src:"./images/gallery/gallery_11.jpg", id:"gallery11"},
		   {src:"./images/gallery/gallery_12.jpg", id:"gallery12"},
		   {src:"./images/gallery/gallery_13.jpg", id:"gallery13"},
		   {src:"./images/gallery/gallery_14.jpg", id:"gallery14"},
		   {src:"./images/gallery/gallery_15.jpg", id:"gallery15"},

		   {src:"./images/temp/Social media/fb.svg", id:"social1"},
		   {src:"./images/temp/Social media/g+.svg", id:"social2"},
		   {src:"./images/temp/Social media/twitter.svg", id:"social3"},
		   {src:"./images/temp/Social media/youtube.svg", id:"social4"},
		   
		   {src:"./images/temp/Header/header.png", id:"header"},		   
		   ];

//sponsor image addition manifest in for loop
		   for (var i=0; i<111; i++)
		   	 manifest.push({src:"./images/sponsors/image_"+i+".jpg", id:"img_"+i});


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
		document.getElementById("container").style.background = "#101010";
		document.getElementById("container").style.opacity = 1;
		
		//For preview-containers
		document.getElementById("main_image0").style.backgroundImage = "URL('./images/temp/Preview/preview1.svg')";
		document.getElementById("main_image1").style.backgroundImage = "URL('./images/temp/Preview/preview2.svg')";
		document.getElementById("main_image2").style.backgroundImage = "URL('./images/temp/Preview/preview3.svg')";
		document.getElementById("main_image3").style.backgroundImage = "URL('./images/temp/Preview/preview4.svg')";
		
		document.getElementById("header").style.backgroundImage = "URL('./images/temp/Header/header.png')";
		
		//For social links
		var social = document.getElementsByClassName("social-links");
		social[0].style.backgroundImage = "URL('./images/temp/Social media/fb.svg')";
		social[1].style.backgroundImage = "URL('./images/temp/Social media/twitter.svg')";
		social[2].style.backgroundImage = "URL('./images/temp/Social media/g+.svg')";
		social[3].style.backgroundImage = "URL('./images/temp/Social media/youtube.svg')";
		
		var tab = document.getElementsByClassName("preview_tab");
		tab[0].style.backgroundImage = "URL('./images/temp/Tabs/spon tab.svg')";
		tab[1].style.backgroundImage = "URL('./images/temp/Tabs/gall tab.svg')";
		tab[2].style.backgroundImage = "URL('./images/temp/Tabs/con tab.svg')";
		tab[3].style.backgroundImage = "URL('./images/temp/Tabs/arch tab.svg')";
		
		setTimeout(function(){
			$("#header").fadeTo(1000,1);
			$("#footer").fadeTo(1000,1);
			document.getElementById("window-bottom").style.display = "none";
		},1500);
		}

    init();