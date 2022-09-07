let typed = new Typed('.text',{
  strings:["Mahasiswa ITB STIKOM Bali","Junior Web Developer"],
  typeSpeed:50,
  backSpeed:50,
  loop:true
})

VanillaTilt.init(document.querySelectorAll(".foto"), {
  max: 15,
  reset:false
});
VanillaTilt.init(document.querySelectorAll(".foto1"), {
  max: 15,
});


$.getJSON("assets/skills.json",(result)=>{
  const data = result
  for(let i = 0; i <data.length; i++) {
    const html = `
    <div class="card">
      <img src="${data[i].img}">
      <h3 style="color:white">${data[i].judul}</h3>
    </div>`

    $(".bg1").append(html)
  }
})


VanillaTilt.init(document.querySelectorAll(".prj"), {
  max: 15,
});

$(".card2").click((e)=>{
  const target = e.target
  if($(target).hasClass("card-img")){
    $(target).next("p.title").fadeOut()
    $(target).siblings(".show").slideToggle("slow")
  }
  else if($(target).hasClass("fa-xmark")){
    $(target).parent().parent().slideToggle("slow").delay(800)
    $(target).parent().parent().prev().delay(500).fadeIn()
  }
  e.preventDefault()
})


$("img.icon").click((e)=>{
  const target = e.target;
  $(target).toggleClass("show1");
  if($(target).hasClass("show1")){
    $("header nav").css("display","flex")
    $(target).attr("src","assets/images/x.svg")
  }else{
    $("header nav").css("display","none")
    $(target).attr("src","assets/images/bars.svg")
  }
})



$("nav a").click((e)=>{
  const target = e.target
  const href = $(target).attr("href")
  $("a.active").removeClass("active")
  
  switch(href){
    case "#container":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#aboutme":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#skills":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#education":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#projects":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
    case "#contact":
        $(target).removeClass("active");
        $(target).addClass("active")
      break;
  }
})


let offset =10; 
let duration = 300;

$(window).scroll(()=>{
  if ($(this).scrollTop() > offset) {
    $('.totop').stop().animate({top: "650px"},duration);
  } else {
    $('.totop').stop().animate({top: "0px"},duration);
  }
})


$(".totop").click((e)=>{
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: 0},duration);
  $('.totop').stop().animate({top: "0px"},duration);
  $("a.active").removeClass("active")
  $("a:nth-child(1)").addClass("active")
  return false;
})


$(".btn_aboutme").click(()=>{
  window.location="#aboutme"
})


$(".cv").click(()=>{
  window.open("assets/cv.pdf")
})