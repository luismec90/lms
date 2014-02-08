findAPITries = 0;

function findAPI(win)
{
// Check to see if the window (win) contains the API
// if the window (win) does not contain the API and
// the window (win) has a parent window and the parent window
// is not the same as the window (win)
    while ((win.API == null) && (win.parent != null) && (win.parent != win))
    {
// increment the number of findAPITries
        findAPITries++;
// Note: 7 is an arbitrary number, but should be more than sufficient
        if (findAPITries > 7)
        {
            alert("Error finding API -- too deeply nested.");
            return null;
        }
// set the variable that represents the window being
// being searched to be the parent of the current window
// then search for the API again
        win = win.parent;
    }
    return win.API;
}
function getAPI()
{
// start by looking for the API in the current window
    var theAPI = findAPI(window);
// if the API is null (could not be found in the current window)
// and the current window has an opener window
    if ((theAPI == null) &&
            (window.opener != null) &&
            (typeof (window.opener) != "undefined"))
    {
// try to find the API in the current window’s opener
        theAPI = findAPI(window.opener);
    }
// if the API has not been found
    if (theAPI == null)
    {
// Alert the user that the API Adapter could not be found
        alert("Unable to find an API adapter");
    }
    return theAPI;
}

function build() {
    a = Math.floor((Math.random() * (15 + 1)) + -5);
    b = Math.floor((Math.random() * (10 + 1)) + (a + 1));
    c = Math.floor((Math.random() * (8 + 1)) + 1);
    e = Math.floor((Math.random() * (5 + 1)) + 1);
    document.getElementById("value_b").innerHTML = a;
    document.getElementById("value_a").innerHTML = b;
    document.getElementById("value_c").innerHTML = c;
    document.getElementById("value_e").innerHTML = e;
}


$(function() {
    API = getAPI();

    API.LMSInitialize("");

    build();
    var correctAnswer = (c * Math.pow(b, e + 1) / (e + 1)) - (c * Math.pow(a, e + 1) / (e + 1));
    var missConception1 = (c * Math.pow(b, e + 1)) - (c * Math.pow(a, e + 1));
    var missConception2 = (c * Math.pow(b, e + 1) / (e)) - (c * Math.pow(a, e + 1) / (e));
    console.log(correctAnswer + " " + missConception1 + " " + missConception2);

    $("#verificar").click(function() {
        var valor = $("#answer").val();
        if (valor != undefined) {
            $("#correcto").addClass("hide");
            $("#feedback").addClass("hide");
            var calificacion = 0;

            valor = parseInt(valor);

            switch (valor) {
                case correctAnswer:
                    calificacion = 5.0;
                    $("#correcto").html("Calificación: <b>" + calificacion + "</b>").removeClass("hide");
                    break;
                case missConception1:
                    calificacion = 2.5;
                    $("#feedback").html("Calificación: <b>" + calificacion + "</b> <br> Probablemente se te olvido dividir por " + (e + 1)).removeClass("hide");
                    break;
                case missConception2:
                    calificacion = 2.5;
                    $("#feedback").html("Calificación: <b>" + calificacion + "</b> <br> Probablemente se te olvido sumar una unidad al divisor  <br> Te recomendamos este <a href='http://www.slideshare.net/zq0/reglas-basicas-de-integracion-25786244' target='_blank'>documento</a> donde podras repasar las reglas de integración.").removeClass("hide");
                    break;
                default:
                    calificacion = 0.0;
                    $("#feedback").html("Calificación: <b>" + calificacion + "</b> <br> Te recomendamos este <a href='http://www.youtube.com/watch?v=8QccEGEBBTM' target='_blank'>video</a> acerca de como integrar.").removeClass("hide");
                    break;
            }
            API.LMSSetValue("cmi.core.score.raw", calificacion);
            API.LMSFinish("");
        }
    });
});
/*
 switch ($("#contenedor input[type='radio']:checked").val()) {
 case "7":
 calificacion = 2.5;
 $("#feedback").html("Calificación: <b>" + calificacion + "</b> <br> Probablemente se te olvido dividir por el 3").removeClass("hide");
 
 break;
 case "3":
 calificacion = 0.0;
 $("#feedback").html("Calificación: <b>" + calificacion + "</b> <br> Te recomendamos este <a href='http://www.youtube.com/watch?v=8QccEGEBBTM' target='_blank'>video</a> acerca de como integrar.").removeClass("hide");
 
 break;
 case "2.67":
 calificacion = 5.0;
 $("#correcto").html("Calificación: <b>" + calificacion + "</b>").removeClass("hide");
 break;
 case "none":
 calificacion = 0.0
 $("#feedback").html("Calificación: <b>" + calificacion + "</b> <br> Te recomendamos este <a href='http://www.youtube.com/watch?v=8QccEGEBBTM' target='_blank'>video</a> acerca de como integrar.").removeClass("hide");
 break;
 }
 */