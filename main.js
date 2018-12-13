function navToggle() {
  if($('.menu-open').hasClass('d-none')) {
    $('.menu-open').removeClass('d-none')
    setTimeout(function(){
      $('.menu-open').toggleClass('opacity-0')
      $('.menu-open .items li').addClass('delay-opacity')   
    },100)
    if($(window).width()>600) {
      setTimeout(function(){
        $('.menu-open .items li:nth-child(1)').toggleClass('opacity-1')
        setTimeout(function(){
          $('.menu-open .items li:nth-child(2)').toggleClass('opacity-1')
        },70)
        setTimeout(function(){
          $('.menu-open .items li:nth-child(3)').toggleClass('opacity-1')
        },140)  
        setTimeout(function(){
          $('.menu-open .items li:nth-child(4)').toggleClass('opacity-1')
        },210)  
        setTimeout(function(){
          $('.menu-open .items li:nth-child(5)').toggleClass('opacity-1')
        },280)      
      },200)
    } else {
      setTimeout(function(){
        $('.menu-open .items li:nth-child(1)').toggleClass('opacity-1')
        setTimeout(function(){
          $('.menu-open .items li:nth-child(2)').toggleClass('opacity-1')
        },50)
        setTimeout(function(){
          $('.menu-open .items li:nth-child(3)').toggleClass('opacity-1')
        },100)  
        setTimeout(function(){
          $('.menu-open .items li:nth-child(4)').toggleClass('opacity-1')
        },150)  
        setTimeout(function(){
          $('.menu-open .items li:nth-child(5)').toggleClass('opacity-1')
        },200)      
      },200)
    }
   
  } 
  else {
    $('.menu-open').toggleClass('opacity-0')
    $('.menu-open .items li').removeClass('opacity-1')
    setTimeout(function(){
      $('.menu-open').addClass('d-none')
    },450)
  }
  $('.logo').toggleClass('color-black')
  $('.nav-corner').toggleClass('color-black')
  $('.nav-corner button span').toggleClass('bg-black')
  $('.nav-corner button span:nth-child(1)').toggleClass('nav-span-1')
  $('.nav-corner button span:nth-child(2)').toggleClass('nav-span-2')
  $('.nav-corner button span:nth-child(3)').toggleClass('nav-span-3')
}

$('#btn-nav-expand').on('click',function(e){
  navToggle()
})

$('.menu-open .items li').on('click',function(e){
  e.preventDefault()
  navToggle()
})

$('.home button').on('click',function(e){
  console.log('123456')
})  

window.onload = function(e){
  setTimeout(function(e){
    $('#loader').addClass('opacity-0');
    setTimeout(function(e){
      $('#loader').addClass('d-none');
    },500)
  },4000)

}