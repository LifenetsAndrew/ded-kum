

function getClickPosition(e, el) {
    const rect = el.getBoundingClientRect()

    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    x = (el.width / rect.width) * x;
    y = (el.height / rect.height) * y;

    return { x: x, y: y };
}

function selectDed(ded) {
    var img = new Image();
    img.src = ded;
    
    img.onload = function () {
        var el = document.getElementById('ded-canvas');
        var ctx = el.getContext('2d');
        ctx.lineJoin = ctx.lineCap = 'round';
    
        var isDrawing;
    
        el.onmousedown = function (e) {
            isDrawing = true;
            drawDed(e);
        };
    
        el.onmousemove = function (e) {
    
            if (!isDrawing) return;
            drawDed(e);
        };
    
        el.onmouseup = function () {
            isDrawing = false;
        };
    
        el.onmouseleave = function () {
            isDrawing = false;
        };
    
        function drawDed (e) {
            const currentPoint = getClickPosition(e, el);
            ctx.drawImage(img, currentPoint.x - (img.naturalWidth / 2), currentPoint.y - (img.naturalWidth / 2));
        }
    }
}

selectDed('ded1.png');

