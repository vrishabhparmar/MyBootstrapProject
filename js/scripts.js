$(document).ready(function(){
    $('#mycarousel').carousel(function(){ interval: 2000});
    
        $('#carouselButton').click(function(){
            if($('#carouselButton').children("span").hasClass('fa-pause')){
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass("fa-pause");
                $("#carouselButton").children("span").addClass("fa-play");
            }else if ($('#carouselButton').children("span").hasClass("fa-play")){
                $("#mycarousel").carousel("cycle");
                $("#carouselButton").children("span").removeClass("fa-play");
                $("#carouselButton").children("span").addClass("fa-pause");
            }
        });
    
        $('#login').click(function(){
            $('#loginModal').modal('show');
        });
        $('#CancelLogin').click(function(){
            $('#loginModal').modal('hide');
        });
        $('#CancelReserve').click(function(){
            $('#ReservationModal').modal('hide');
        });
        $('#ReservationTable').click(function(){
            $('#ReservationModal').modal('show');
        });
        $('#close').click(function(){
            $('#ReservationModal').modal('hide');
        });

        
      
    });