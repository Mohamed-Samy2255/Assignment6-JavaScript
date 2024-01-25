/// <reference typescc=c"../@types/jquery/">

// $(".sideBar").css("display" , "none")

$(".openNav").on( "click" , function(){
    $(".sideBar").animate({width : "200px"} , 1000)
    $(".semsem").animate({width : "200px"} , 1000)

    $(".openNav").css("left" , "200px");

    

        $("a").not(".closebtn").css("display" , "block" )
    
    





} );

$(".closebtn").on("click" , function(){
    $(".sideBar").animate({width : "0"} , 1000 , function(){
        $("a").not(".closebtn").css("display" , "none")
        $(".openNav").animate({left: "50px"} , 1000);
        
    });

});


$(".toggel").on("click" , function(){
      let curentText = $(this).next(".inner");
    //   console.log(curentText);
    $(".inner").not(curentText).slideUp(1000);
    curentText.slideToggle(1000);
})


let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  
  let distance = countDownDate - now;
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $(".days").text(days + "d");
  $(".hours").text(hours + "h");
  $(".minutes").text(minutes + "m");
  $(".seconds").text(seconds + "s");
  

  if (distance < 0) {
    clearInterval(x);
    $(".days").text("0d");
    $(".hours").text("0h");
    $(".minutes").text("0m");
    $(".seconds").text("0s");
  }
}, 1000);


$('textarea').on('input', function() {
    var num = $(this).val();
    var nums = 100 - num.length;
    $('#charCount').text(nums + ' characters remaining');
    if (num.length > 100) {
      $(this).val(num.substring(0, 100));
    }
  });




// function mohamed(){
//     let sectionOffest = $("#sliderDown").Offest().top
// console.log(sectionOffest);

// let all = $("#sliderDown").offset().top
// console.log(all);

// $("a").on("click" , function(){
//     let all = $("#sliderDown").offset().top;
//     $("body").animate({scrllTop : all} , 1000)
// });



// $(window).on("scroll" , function(){
//     let mohamed = $(window).scrollTop();
//     if( mohamed > 200 ){
//         console.log("hello");
//     }
// });

// }











// $(".toggel").on("click" , function(e){
//     $(e.target).slideToggel();
// });

// $(".toggel").on("click" , function(){
//     let mohamed = (".inner").html();
//     console.log(mohamed);
// });

// console.log(
// $(".toggel").on("click" , function(){
    // console.log("moahmd");

    // console.log($(".inner").html());
// })
// );



// $(".toggel").on("click" , function(e){
//     $(e.target).next().css("display" , "block")
//     $(e.target).siblings().css("display" , "none")
// });