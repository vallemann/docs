window.onload = window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    for (let i = 0; i < 1500; i++) {
        var x = Math.floor(Math.random() * canvas.clientWidth);
        var y = Math.floor(Math.random() * canvas.clientHeight);
        ctx.fillRect(x, y, 1, 1);
    }
}

function action() {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}