 findAPITries = 0;

function findAPI(win)
{
// Check to see if the window (win) contains the API
// if the window (win) does not contain the API and
// the window (win) has a parent window and the parent window
// is not the same as the window (win)
    while ((win.API == null) &&(win.parent != null) && (win.parent != win))
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
            (typeof(window.opener) != "undefined"))
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

$(function() {
    API = getAPI();

    API.LMSInitialize("");


    $("#verificar").click(function() {
        var valor = $("#contenedor input[type='radio']:checked").val();
        if (valor != undefined) {
            $("#correcto").addClass("hide");
            $("#feedback").addClass("hide");
            var calificacion;
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
            $("#contenedor input[type='radio']").prop("disabled", "true");
            $(this).attr("disabled", "true");
            API.LMSSetValue("cmi.core.score.raw",calificacion);
            API.LMSFinish("");
        }
    });
});
