API = new Object();
API.LMSInitialize = function(a) {
    $.ajax({
        url: "api/LMSInitialize",
        method: "post",
        data: {
            param1: a
        },
        success: function(data) {
            console.log(data);
        }
    });
}
API.LMSFinish = function(a) {
    $.ajax({
        url: "api/LMSFinish",
        method: "post",
        data: {
            param1: a
        },
        success: function(data) {
            console.log(data);
        }
    });
}
API.LMSSetValue = function(a, b) {
    $.ajax({
        url: "api/LMSSetValue",
        method: "post",
        data: {
            param1: a,
            param2: b
        },
        success: function(data) {
            console.log(data);
        }
    });
}
