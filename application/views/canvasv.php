<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Canvas</title>
        <script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <style>
            #canvas{
                border:1px solid #444;
            }
            .circular {
                width: 300px;
                height: 300px;
                border-radius: 150px;
                -webkit-border-radius: 150px;
                -moz-border-radius: 150px;
                background: url(http://link-to-your/image.jpg) no-repeat;
            }
        </style>
    </head>
    <body>
    <center> <canvas id="canvas" width="500" height="500"></canvas></center>
    <script>
        $(function() {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image();

            var ang = 0; //angle
            var fps = 1000 / 60; //number of frames per sec
            img.onload = function() { //on image load do the following stuff

                ang = 0;
                setInterval(function() {
                    ctx.clearRect(00, 0, canvas.width, canvas.height); //clear the canvas
                    var angle = (ang += 0.5) * Math.PI / 180; // 124 degrees angle of rotation in radians
                    var rx = 250, ry = 250; // the rotation x and y
                    var px = 50, py = 50; // the objects center x and y
                    var radius = ry - py; // the difference in y positions or the radius
                    var dx = rx + radius * Math.sin(angle); // the draw x 
                    var dy = ry - radius * Math.cos(angle); // the draw y
                    ctx.beginPath();
                    ctx.arc(250, 250, 200, 0, 2 * Math.PI, false);
                    ctx.fillStyle = '#444';
                    ctx.fill();
                    ctx.save();
                    ctx.translate(dx, dy);
                    ctx.rotate(angle);
                    ctx.translate(-dx, -dy);
                    ctx.drawImage(img, dx - img.width / 2, dy - img.height / 2);
                    ctx.restore();
                }, fps);
            };
            img.src = 'https://lh5.googleusercontent.com/-Tbbtt4UifpE/AAAAAAAAAAI/AAAAAAAAAAA/tvsNw49ti0Q/s32-c/photo.jpg'; //img
        });
    </script>
</body>
</html>