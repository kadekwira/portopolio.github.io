const el =  $(".act")
const nav = $("nav a")

$(window).scroll(()=>{
  let current='';
  let offsetY=window.pageYOffset
  el.each((x,item)=>{
    const elTop = $(item).offset().top
    if(offsetY>=(elTop-100)){
      current =$(item).attr("id")
     
    }
  })

  nav.each((x,item)=>{
    $(item).removeClass("active")
    if($(item).hasClass(current)){
      $(item).addClass("active")
    }
  })
})