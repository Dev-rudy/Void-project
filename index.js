	"use strict"
const explrBtn=document.getElementById("xplr-btn");
       explrBtn.addEventListener("mouseover",myFuncx);
       function myFuncx(){
           
           document.querySelector(".nav").style.background="rgba(90, 4, 133, 0.62)";
           document.querySelector(".greet-page-desc").style.height="10vh";
		  document.querySelector(".headline").style.color="fuchsia";
		      document.querySelector(".headline").style.textShadow="1px 3px 5px lightblue";
		    let topic=document.querySelectorAll(".topic-head");
			 for(let i=0;i<topic.length;i++){topic[i].style.backgroundImage="linear-gradient(to right,fuchsia,blue,fuchsia)";
			                                  topic[i].style.color="white"
											  topic[i].style.borderRadius="3vw";
											  }
		  let topicz=document.querySelectorAll(".topic");
		   for(let i=0;i<topicz.length;i++){topicz[i].style.height="20vh";
		                                     if(screen.availHeight==412){topicz[i].style.height="25vh"}
											 if(screen.availHeight==728){topicz[i].style.height="20vh"}
											  if(screen.availHeight==375){topicz[i].style.height="25vh"}
											 if(screen.availHeight==896){topicz[i].style.height="7vh"}
											
											 };           
let elements=document.querySelectorAll(".element-design")
      for(let x=0;x<elements.length;x++){
		  elements[x].style.marginTop="0%";
		  
	  }		   
       };
explrBtn.addEventListener("mouseout",myFuncxs);         
       function myFuncxs(){
                                 
           document.querySelector(".nav").style.background="rgba(0, 0, 0, 0.62)";
           document.querySelector(".greet-page-desc").style.height="0vh";
		document.querySelector(".headline").style.color="lightblue";
		     document.querySelector(".headline").style.textShadow="none";
			 let topic=document.querySelectorAll(".topic-head");
			 for(let i=0;i<topic.length;i++){topic[i].style.background="#430f58";
			  topic[i].style.borderRadius="0";
			   topic[i].style.color="white";}
			 let topicz=document.querySelectorAll(".topic");
		   for(let i=0;i<topicz.length;i++){topicz[i].style.height="2.5vh";/*recently 2.5vh*/
		    if (window.matchMedia("(orientation: portrait)").matches) {topicz[i].style.height="3vh";}/*-----js  landscape and portrait orientation coppied from stackoverflow-i did not reference the  code  owner ---if(window.matchMedia("orientation:portrait").matches){} -------*/
			if(screen.availHeight==412){topicz[i].style.height="3.5vh"}
			if(screen.availHeight==568){topicz[i].style.height="2vh"}
			if(screen.availHeight==728){topicz[i].style.height="2vh"}
			if(screen.availHeight==896){topicz[i].style.height="1.8vh"}
			if(screen.availHeight==680){topicz[i].style.height="3vh"}
			if(screen.availHeight==667){topicz[i].style.height="1.8vh"}
			                                topicz[i].style.color="white"
					if(screen.availHeight==375){topicz[i].style.height="2vh"}
						
											};
		   let elements=document.querySelectorAll(".element-design")
      for(let x=0;x<elements.length;x++){
	  elements[x].style.marginTop="50%";}
		  
       };

	   const submit=document.getElementById("submit");
	   submit.addEventListener("mouseover",func);
	   function func(){
		   document.getElementById("rabithole").style.display="block";
	   }
	   const submits=document.getElementById("submit");
	   submit.addEventListener("mouseout",funcz);
	   function funcz(){
		   document.getElementById("rabithole").style.display="none";
		   
	   }

const nav=document.querySelector(".nav");
nav.addEventListener("mouseover",navFunc);
function navFunc(){
    document.querySelector(".nav").style.backgroundImage="linear-gradient(to left,purple,transparent,purple)";
	
};
nav.addEventListener("mouseout",navFunc2);
function navFunc2(){
    document.querySelector(".nav").style.background="rgba(0, 0, 0, 0.62)"
	
};






function xplrBTN(){
    let exlr=document.getElementById("content-container").style.display="none";
             document.getElementById("content-container-two").style.display="grid"
              document.getElementById("go-back").style.display="block"
			  
}
function goBack(){
    let exlr=document.getElementById("content-container").style.display="grid";
             document.getElementById("content-container-two").style.display="none"
              document.getElementById("go-back").style.display="none"
    
}


function goBack3(){
    let exlr=document.getElementById("content-container").style.display="grid";
             document.getElementById("content-container-two").style.display="none"
              document.getElementById("go-back").style.display="none"
    
}


function contTwo(){
  
             document.getElementById("content-container-two").style.display="grid"
                document.getElementById("content-container-three").style.display="none"
            
    
}
const articleCont=document.querySelectorAll("#article-content");
       for(let i=0;i<articleCont.length;i++){
           articleCont[i].style.border="2px solid transparent";
            articleCont[i].style.height="99%";
             articleCont[i].style.width="98.5vw";
       }

const articleHeads=document.querySelectorAll(".article-headers");
       for(let i=0;i<articleHeads.length;i++){
           articleHeads[i].style.background="rgba(90, 4, 133, 0.62)";
            articleHeads[i].style.color="white";
             articleHeads[i].style.fontSize="2rem";
			 if (window.matchMedia("(orientation: portrait)").matches){ articleHeads[i].style.fontSize="1rem";}
              articleHeads[i].style.textAlign="center";
			  if(screen.availHeight==412){articleHeads[i].style.fontSize="1rem"};
			  if(screen.availHeight==667){articleHeads[i].style.fontSize="1rem"};
			  if(screen.availHeight==728||568||320){articleHeads[i].style.fontSize="1rem"}
			  if(screen.availHeight==375){articleHeads[i].style.fontSize="1rem"};
       }


const topArticle=document.querySelector(".headline-p");  /*------top article--------------------*//*------pls select  a dom selector  --------------------*/
const artOne=document.getElementById("art-one");
const artTwo=document.getElementById("art-two");
const artThree=document.getElementById("art-three");
const artFour=document.getElementById("art-four");
const artsHop=document.getElementById("shop-container");
const freemiumOne=document.getElementById("freemium-one");
const freemiumTwo=document.getElementById("freemium-two");
const freemiumThree=document.getElementById("freemium-three");
const headlineImg=document.querySelector(".headline-img");
/*------------------------------------------------------------------------------------------------------------------------------*/
let contentContTwo= document.getElementById("content-container-two");

/*------------------------------------------------------------------------------------------------------------------------------*/
     topArticle.addEventListener("click",myFunc)
     function myFunc(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="block";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
      artOne.addEventListener("click",myFunc2)
     function myFunc2(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="block";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
  artTwo.addEventListener("click",myFunc3)
     function myFunc3(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="block";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
     artThree.addEventListener("click",myFunc4)
     function myFunc4(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="block";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
     artFour.addEventListener("click",myFunc5)
     function myFunc5(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="block";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
     artsHop.addEventListener("click",myFunc6)
     function myFunc6(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="block";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
     freemiumOne.addEventListener("click",myFunc7)
     function myFunc7(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
              
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="block";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
          freemiumTwo.addEventListener("click",myFunc8)
     function myFunc8(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="block";

         let articleNine=document.querySelector(".article-nine").style.display="none";
     };
               freemiumThree.addEventListener("click",myFunc9)
     function myFunc9(){
         let contentContTwo= document.getElementById("content-container-two").style.display="none";
         let contentContThree= document.getElementById("content-container-three").style.display="grid";
         let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="block";
     };
	 
headlineImg.addEventListener("click",clik4More );
function  clik4More (){
	let contentContTwo= document.getElementById("content-container-two").style.display="none";
	 let moreContz=document.querySelector(".more-contentz").style.display="block";
	 	 let moreContzBack=document.querySelector(".back3").style.display="block";
	 let articleOne=document.querySelector(".article-one").style.display="none";
         let articleTwo=document.querySelector(".article-two").style.display="none";
         let articleThree=document.querySelector(".article-three").style.display="none";
         let articleFour=document.querySelector(".article-four").style.display="none";
         let articleFive=document.querySelector(".article-five").style.display="none";
         let articleSix=document.querySelector(".article-six").style.display="none";
         let articleSeven=document.querySelector(".article-seven").style.display="none";
         let articleEight=document.querySelector(".article-eight").style.display="none";
         let articleNine=document.querySelector(".article-nine").style.display="block";
		 
};

function goBack3(){
    let moreContz=document.querySelector(".more-contentz").style.display="none";
	 	 let moreContzBack=document.querySelector(".back3").style.display="none";
		  document.getElementById("content-container-two").style.display="grid"
    
}
     
const  code=document.getElementById("got-the-code");
code.addEventListener("click",codeFunc);
function codeFunc(){
    let codeInput=document.getElementById("code").disabled=false;
  
}
const  codeInput=document.getElementById("code");
codeInput.addEventListener("focus",inputFocus);
function inputFocus(){
    let x=document.getElementById("Name");
    let y=document.getElementById("E-mail");
    x.disabled=true;
    y.disabled=true;
    document.getElementById("submit").style.display="none";
    document.getElementById("submit2").style.display="block";
   
}
const emailInstead=document.getElementById("email-insted");
emailInstead.addEventListener("click",theFunc);
function theFunc(){
    let x=document.getElementById("Name");
    let y=document.getElementById("E-mail");
    let z=document.getElementById("code");
    x.disabled=false;
    y.disabled=false;
    z.disabled=true;
    z.value=" ";
      document.getElementById("submit").style.display="block";
    document.getElementById("submit2").style.display="none";
}


     
function sendEmail(){
       var ref=document.getElementById("Name").value;
        var email=document.getElementById("E-mail").value;
        var body="mail from VM website"+"<br/>"+"E-MAIL :"+email+"<br/>"+"Name :"+ref+"<br/>"+"please collect email and put on data list";
        
    Email.send({
       
    Host :"smtp.elasticemail.com",
    Username : "allenjesterogaralde33@gmail.com",
    Password : "4FED7586D0DE13C53B1A40BC30E3187B5CD0",
    To : 'allenjesterogaralde33@gmail.com',
    From : "allenjesterogaralde33@gmail.com",
    Subject : "VM EMAIL LIST",
    Body : body
}).then(
  message =>confirm("thanks for filling out the details"+" "+"please confirm if you put a valid E-mail and name details"+" "+
  "here's  your code: ZsZ4NVRr"+" , " +"an email submision is not mandatory but please understand that it can help us grow our small startup business")
 /*---------------------------------------------------------------------------------------------------////////////////////////////////////here is your  passcode  /////////////////////-*/     
);  /* hi smart ass Xd if it happens that you have come accross this source code
      i did not put much complexity about its email requirement  logic  so that the code would be easy to find.
      but since we are offering these tools for free pls provide us  your email and your name
      :( and its the only thing we will ask for. dont worry we wont use it on bad acts  we will use it  
      for our client base and it is just to offer some products  that you might have some interest width  so yeah 
      help a small business out*/
    
    
};


function validateCode(){
  let x=document.getElementById("code").value;
    if(x==="ZsZ4NVRr"){document.getElementById("email-submit-popup").style.display="none";alert("please get or review as much resources as can, before you refresh the whole  page,if you refresh the page  without getting anything then you will have to put on email or get the code  again ");}
};

const email3=document.getElementById("E-mail");
     email3.addEventListener("focus",theFuncs);
function theFuncs(){
    document.getElementById("submit").disabled=false;
}



const  bmenu=document.getElementById("list-menu");
bmenu.addEventListener("click",theFunctsz);
function theFunctsz(){
 let bergMenu=document.getElementById("burger-menu").style.display="block";	
   
	 
}

 const bback=document.getElementById("b-back");
 bback.addEventListener("click",funxui);
 function funxui(){
	 let bergMenu=document.getElementById("burger-menu").style.display="none";	

 }
 
 

	
const xbutton=document.getElementById("b-back");
      xbutton.addEventListener("mouseover",xButton);
	  function xButton(){
		  let adS=document.getElementById("bmenu-three").style.backgroundImage="url('cajkcxas-min.png')";
	  };
	  
	 xbutton.addEventListener("mouseout",xButtn2);
	 function xButtn2(){
		 let adS=document.getElementById("bmenu-three").style.backgroundImage="url('bmenu.png')";
	 };
	 
	
		  
const moreContents=document.getElementById("ads");
      moreContents.addEventListener("click",clickIt);
	  function clickIt(){
		  document.getElementById("all-blog-contents").style.display="block"
                       }

const blogsExit=document.getElementById("blogs-exit");
      blogsExit.addEventListener("click",exitFunc);
	  function exitFunc(){
		  document.getElementById("all-blog-contents").style.display="none";
	  }
	  
 const shopImageChange=document.getElementById("shop-container");
       shopImageChange.addEventListener("mouseover",changeImage);
	   function changeImage(){
		   let changeIt=document.getElementById("shop-image").src="shopnow.gif";
		   let shopHead=document.getElementById("shop-head").style.color="fuchsia";
		   document.getElementById("shop-desc").style.background="lightblue";
	   }
	   shopImageChange.addEventListener("mouseout",changeImage2);
	   function changeImage2(){
		    let changeIt=document.getElementById("shop-image").src="200w.gif";
              let shopHead=document.getElementById("shop-head").style.color="white";
document.getElementById("shop-desc").style.background="linear-gradient(to bottom,lightblue,transparent,transparent)";			  
	 };
 const topProds=document.getElementById("ads2");
        topProds.addEventListener("click",topProdz);
function topProdz(){
		 document.getElementById("trending-prods-container").style.display="block";
	}
 
	 if (window.matchMedia("(orientation: portrait)").matches){ document.getElementById("taunt1").style.display="none";
	                                                             document.getElementById("taunt2").style.display="none";
                                                                 document.getElementById("taunt3").style.display="none"; } 
																 
	 if (window.matchMedia("(orientation: landscape)").matches){ document.getElementById("taunt1").style.display="block";
	                                                             document.getElementById("taunt2").style.display="block";
                                                                 document.getElementById("taunt3").style.display="block"; } 
																 
																 
const bestProd=document.getElementById("best-prod-exit-img");
      bestProd.addEventListener("click",exitProd);
function  exitProd(){
	document.getElementById("trending-prods-container").style.display="none"
}


window.onload=function(){  
document.getElementById("trending-prods-container").style.opacity="1"
}

const exitApps=document.getElementById("exit-app-img");
      exitApps.addEventListener("click",exitFunczs);
	 function exitFunczs(){
		 document.getElementById("learning-apps").style.display="none";
	 }
const appClickHere=document.getElementById("apps-click-here");
      appClickHere.addEventListener("click",clickApp);
	  function clickApp(){
		  document.getElementById("learning-apps").style.display="block";
	  }
      
/*=================code signature   vanilla javascript #BASIC LOGICS  coded  by Allen a.k.a Rudy ====================*/
/*===================by the way  sorry if my source code might look like basic  and  might look like a spaghetty=======im nt perfect alright=========*/
const screenHeight=screen.availHeight;
const screenWidth=screen.availWidth;
console.log("the curent size of your TEST screen dimention is :"+" "+"(H)"+"=height"+" "+screenHeight+" "+"&&"+' ' +"(W)"+"=width"+" "+screenWidth);


const inst=document.getElementById("instructions");
if(screen.availHeight===680){inst.style.fontSize=".4rem"};
if(screen.availHeight===728){inst.style.fontSize=".8rem"};

const itemTitle=document.querySelectorAll("#article-head-s2");
for(let titles=0;titles<itemTitle.length;titles++){
if(screen.availHeight===680){itemTitle[titles].style.fontSize=".8rem"};
if(screen.availHeight===728){itemTitle[titles].style.fontSize=".9rem"};
}

const itemDesc=document.querySelectorAll(".article-desc-s2");
for(let Desc=0;Desc<itemTitle.length;Desc++){
if(screen.availHeight===680){itemDesc[Desc].style.fontSize="1rem"};
if(screen.availHeight===728){itemDesc[Desc].style.fontSize=".8rem"};
}

const Cpar=document.querySelectorAll(".course-paragraph");
for(let parg=0;parg<Cpar.length;parg++){
if(screen.availHeight===680){Cpar[parg].style.fontSize=".7rem"};}

const topicDescription=document.querySelectorAll(".topic-desc");
for (let topicD=0;topicD<topicDescription.length;topicD++){
	if(screen.availHeight===728){topicDescription[topicD].style.fontSize=".7rem"};
}

function alison(){
	window.open("https://alison.com/?utm_source=alison_user&utm_medium=affiliates&utm_campaign=11682105","_blank");
};
 function passio(){
	window.open("https://play.google.com/store/apps/details?id=com.ecomobi.social_seller","_blank");
};
 function addmefast(){
	window.open("https://addmefast.com/login/incorrect","_blank");
};