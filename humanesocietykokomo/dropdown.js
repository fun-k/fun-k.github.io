$(document).ready( function(){
    $('#menu li ul').hide().removeClass('submenu');
    }
    $('#menu li').hover( function () {
        $('ul', this).stop().slideDown(100);
    },function () {
        $('ul', this).stop().slideUp(100);
    });
});