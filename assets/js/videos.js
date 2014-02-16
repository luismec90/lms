$(function() {
    var player = new MediaElementPlayer('#video');
    $('audio,video').mediaelementplayer({
        success: function(player, node) {
            $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
        }
    });
    $(".openVideo").click(function() {
        $("#coverDisplay").css({
            "opacity": "1",
            "width": "100%",
            "height": "100%"
        });

        $("#contenedor-video").addClass("class-contenedor-video").removeClass("hide");
        $("#video").get(0).load();
        player.play();
    });
    $("#botonCerrarVideo").click(function() {
        $("#coverDisplay").css({
            "opacity": "0",
            "width": "0",
            "height": "0"
        });
        $("#contenedor-video").removeClass("class-contenedor-video").addClass("hide");
        player.pause();
    });
});