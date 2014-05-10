
var boolStateChange;

var close_screen = function (){

var win_top=document.getElementById("window-top");
var win_bottom=document.getElementById("window-bottom");
var logo=document.getElementById("center-logo");


     win_top.style.cssText    = "position:absolute;top:0%;width:100%;height:49.5%;background-color:#000;opacity:0.85;transition:top ease-in-out 1.25s;";
     win_bottom.style.cssText = "position:absolute;top:50.5%;width:100%;height:49.5%;background-color:#fff;opacity:0.85;transition:top ease-in-out 1.25s;";
     logo = "position:absolute;width:8%;height:16%;margin-left: 46%;top:42%;border-radius:50%;z-index:3;background-image:URL('light.png');background-size:100% 100%;transition:top ease-in-out 1.25s;";


}


var split_screen = function(height,boolStateChange){

var win_top=document.getElementById("window-top");
var win_bottom=document.getElementById("window-bottom");
var logo=document.getElementById("center-logo");
var logo_back = document.getElementById("center-logo-back");
var container=document.getElementById("container");
    
    if (boolStateChange==true)
    { 
        win_top.style.top = -40+height+"%";
        win_bottom.style.top = 90-height+"%";
        logo.style.top = "3%";
        document.getElementById("center-logo-back").style.top = "1%";
    
     boolStateChange = false;
    }

};


var create_home = function(){



}

var choose_split_screen = function(name){

		switch (name){

		   case "home"   :{ close_screen();
                        setTimeout(function() {split_screen(7,true);},2000);    // set height in percentage always less than 30
                        create_home(); 
                        break;

                         } 

		   case "gallery":{close_screen();
                            setTimeout(function() {split_screen(10,true);},2000);   // set height in percentage
                           break;}

		   case "sponser":{close_screen();
                           setTimeout(function() {split_screen(20,true);},2000);    // set height in percentage
                           break;}

		}

};



/*


#div1
{
  position: fixed;
    width: 49.5%;
    height: 100%;
    left: 0;
    top: 0;
background:#000;
z-index: 10;
-webkit-transition:width 1.5s; 
transsition:width 1.5s;
}

#div2
{
 position: fixed;
    width: 49.5%;
    height: 100%;
    right: 0;
    top: 0;
background:#ddd;
float: right;
z-index: 10;
-webkit-transition:width 1.5s; 
}

*/