let promptMsg = prompt ("what is your available day","write day with 3 char");
console.log(promptMsg);
alert("welcome to our page this page was made by team ");

 // Get the login form element

 function login(loginForm)
{
   if(loginForm.username.value && loginForm.password.value)

{
   var username=document.getElementById("username").value;
   document.write('<html><body><h1><center>')
       document.write("welcome"+" ");
       document.write(username);
       document.write('</center></h1></body></html>'); 
}
else
alert("please enter your Username &password");
}



  
 

 
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})

$(document).ready(function(){
    alert("we hope you a nice day ,jq ");
 
 });
  