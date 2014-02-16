$(function() {

    /*    $("#coverDisplay").css({
     "opacity": "1",
     "width": "100%",
     "height": "100%"
     });
     $("#contenedor-video").addClass("class-contenedor-video");*/
  
    $("#botonCerrarPdf").click(function() {
        $("#coverDisplay").css({
            "opacity": "0",
            "width": "0",
            "height": "0"
        });
        $("#contenedor-pdf").removeClass("class-contenedor-pdf").addClass("hide");
    });

    //$("#video").appendTo('body');
    // $("#video").css('position', 'fixed').css('width', '100%').css('height', '100%').css('margin', 0).css('margin-top', '0').css('top', '0').css('left', '0').css('float', 'left').css('z-index', 2000);

    //  $("#vidControls").css('position', 'absolute').css('bottom', '5%').css('width', '90%').css('backgroundColor', 'rgba(150, 150, 150, 0.5)').css('float', 'none').css('left', '5%').css('z-index', 700).css('-webkit-border-radius', '10px');

    var oldie = /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase());
    $('.easy-pie-chart.percentage').each(function() {
        $(this).easyPieChart({
            barColor: $(this).data('color'),
            trackColor: '#EEEEEE',
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: 8,
            animate: oldie ? false : 1000,
            size: 75
        }).css('color', $(this).data('color'));
    });

    $(".openPdf").click(function() {
        $("#coverDisplay").css({
            "opacity": "1",
            "width": "100%",
            "height": "100%"
        });
        var h = $(window).height() - 25;
        var w = $(window).width();
        $("#contenedor-pdf").css("height", h + "px").addClass("class-contenedor-pdf").removeClass("hide");
        $("#pdf,#contenedor-pdf").css({
            "height": h + "px"
//            "width": w + "px"

        });
    });
  
});
