	var preload;
	var h=$(window).width();
	var h1=$('#center-logo-back').width();

    ///////////////  ADD THE IMAGE ASSETS AS OBJECTS AS SHOWN BELOW  /////////////////////    
   	var manifest = [
		   {src:"./images/images_0.jpg", id:"image0"},
		   {src:"./images/images_1.jpg", id:"image1"},
		   {src:"./images/images_2.jpg", id:"image2"},
		   {src:"./images/images_3.jpg", id:"image3"},
		   {src:"./images/images_4.jpg", id:"image4"},
		   {src:"./images/images_5.jpg", id:"image5"},
		   {src:"./images/images_6.jpg", id:"image6"},
		   {src:"./images/images_7.jpg", id:"image7"},
		   
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
		   {src:"./images/gallery/gallery_16.jpg", id:"gallery16"},
		   {src:"./images/gallery/gallery_17.jpg", id:"gallery17"},
		   {src:"./images/gallery/gallery_18.jpg", id:"gallery18"},
		   {src:"./images/gallery/gallery_19.jpg", id:"gallery19"},
		   {src:"./images/gallery/gallery_20.jpg", id:"gallery20"},
		   {src:"./images/gallery/gallery_21.jpg", id:"gallery21"},
		   {src:"./images/gallery/gallery_22.jpg", id:"gallery22"},
		   {src:"./images/gallery/gallery_23.jpg", id:"gallery23"},
		   {src:"./images/gallery/gallery_24.jpg", id:"gallery24"},
		   {src:"./images/gallery/gallery_25.jpg", id:"gallery25"},
		   {src:"./images/gallery/gallery_26.jpg", id:"gallery26"},
		   {src:"./images/gallery/gallery_27.jpg", id:"gallery27"},
		   {src:"./images/gallery/gallery_28.jpg", id:"gallery28"},
		   {src:"./images/gallery/gallery_29.jpg", id:"gallery29"},
		   {src:"./images/gallery/gallery_30.jpg", id:"gallery30"},
		   {src:"./images/gallery/gallery_31.jpg", id:"gallery31"},
		   {src:"./images/gallery/gallery_32.jpg", id:"gallery32"},
		   {src:"./images/gallery/gallery_33.jpg", id:"gallery33"},
		   {src:"./images/gallery/gallery_34.jpg", id:"gallery34"},
		   {src:"./images/gallery/gallery_35.jpg", id:"gallery35"},
		   {src:"./images/gallery/gallery_36.jpg", id:"gallery36"},
		   {src:"./images/gallery/gallery_37.jpg", id:"gallery37"},
		   {src:"./images/gallery/gallery_38.jpg", id:"gallery38"},
		   {src:"./images/gallery/gallery_39.jpg", id:"gallery39"},
		   {src:"./images/gallery/gallery_40.jpg", id:"gallery40"},
		   {src:"./images/gallery/gallery_41.jpg", id:"gallery41"},
		   {src:"./images/gallery/gallery_42.jpg", id:"gallery42"},
		   {src:"./images/gallery/gallery_43.jpg", id:"gallery43"},
		   {src:"./images/gallery/gallery_44.jpg", id:"gallery44"},
		   {src:"./images/gallery/gallery_45.jpg", id:"gallery45"},
		   {src:"./images/gallery/gallery_46.jpg", id:"gallery46"},
		   {src:"./images/gallery/gallery_47.jpg", id:"gallery47"},
		   {src:"./images/gallery/gallery_48.jpg", id:"gallery48"},
		   {src:"./images/gallery/gallery_49.jpg", id:"gallery49"},
		   {src:"./images/gallery/gallery_50.jpg", id:"gallery50"},
		   {src:"./images/gallery/gallery_51.jpg", id:"gallery51"},
		   {src:"./images/gallery/gallery_52.jpg", id:"gallery52"},
		   {src:"./images/gallery/gallery_53.jpg", id:"gallery53"},
		   {src:"./images/gallery/gallery_54.jpg", id:"gallery54"},
		   {src:"./images/gallery/gallery_55.jpg", id:"gallery55"},
		   {src:"./images/gallery/gallery_56.jpg", id:"gallery56"},
		   {src:"./images/gallery/gallery_57.jpg", id:"gallery57"},
		   {src:"./images/gallery/gallery_58.jpg", id:"gallery58"},
		   
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
		document.getElementById("main_image0").style.backgroundImage = "URL('./images/temp/Preview/preview1.svg')";
		document.getElementById("main_image1").style.backgroundImage = "URL('./images/temp/Preview/preview2.svg')";
		document.getElementById("main_image2").style.backgroundImage = "URL('./images/temp/Preview/preview3.svg')";
		document.getElementById("main_image3").style.backgroundImage = "URL('./images/temp/Preview/preview4.svg')";
		
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