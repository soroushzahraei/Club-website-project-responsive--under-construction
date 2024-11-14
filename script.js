var navbar = document.querySelector(".navbarcss");

window.addEventListener("scroll",(e)=>{
    if( this.scrollY >= 50){
       navbar.classList.add("scrollnavbar");
    }else{
       navbar.classList.remove("scrollnavbar")
    }
})

// ...............................................................

var content2div1 = document.querySelector(".content2div1");
var content2div2 = document.querySelector(".content2div2");

window.addEventListener("scroll",()=>{
   if(this.scrollY >= 750){
      content2div1.classList.add("rightcss");
      content2div2.classList.add("leftcss");
   }else{
      content2div1.classList.remove("rightcss");
      content2div2.classList.remove("leftcss");
   }
})

// .................................................................

var galleryjs = document.querySelector(".galleryjs");
var catall = document.querySelector(".catall");
var gallerykol = document.querySelector(".gallerykol");

function showphotos(){
   let value = this.getAttribute("data-filter");
   if(value = "all"){
      console.log("khar");
   }
 
}




galleryjs.addEventListener("click",showphotos)
