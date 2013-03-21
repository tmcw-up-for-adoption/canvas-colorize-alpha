function colorizeAlpha(canvas, gradient) {
    var ctx = canvas.getContext('2d'),
    data = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (var i = 0, l = data.data.length; i < l; i += 4) {
        var alpha = data.data[i + 3] / 255,
        color = getGradientPoint(gradient, alpha);
        data.data[i + 0] = color[0];
        data.data[i + 1] = color[1];
        data.data[i + 2] = color[2];
    }

    ctx.putImageData(data, 0, 0);

    function lerp(a, b, t) { return a + (b - a) * t; }

    function lerpRgb(a, b, t) {
        return [
            lerp(a[0], b[0], t),
            lerp(a[1], b[1], t),
            lerp(a[2], b[2], t)];
    }

    function getGradientPoint(gradient, pt) {
        var splits = 1 / (gradient.length - 1),
            through = pt / splits,
            from = Math.floor(through),
            to = Math.ceil(through),
            remainder = through - from;
        return lerpRgb(gradient[from], gradient[to], remainder);
    }
}

if (typeof module !== 'undefined') module.exports = colorizeAlpha;
