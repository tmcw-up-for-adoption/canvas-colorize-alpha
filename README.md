## HTML5 Canvas colorize-alpha

![](http://farm9.staticflickr.com/8391/8595946170_609b0d1cb4_c.jpg)

Turns the alpha channel of images into hue, using basic linear interpolation
between color stops.

### api

```js
colorizeAlpha(
    // a canvas element with things drawn on it
    canvas,
    // a list of steps, assumed to be equidistant,
    // start at 0% and end at 100%, in [r, g, b] form.
    [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255]]);
```
