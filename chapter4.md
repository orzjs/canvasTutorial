#Draw Image

---

### Importing images into a canvas is basically a two step process:
1. Get a reference to an HTMLImageElement object or to another canvas element as a source. It is also possible to use images by providing a URL.
2. Draw the image on the canvas using the drawImage() function.    

### Getting Images to draw

__HTMLImageElement__    

These are images created using the Image() constructor, as well as any `<img>` element.    

__HTMLVideoElement__    

Using an HTML `<video>` element as your image source grabs the current frame from the video and uses it as an image.    

__HTMLCanvasElement__    

You can use another `<canvas>` element as your image source.     

### Creating an image from scratch

```
var img = new Image();   // Create new img element
img.src = 'myImage.png'; // Set source path
```

__Note:__ If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to be sure to use the load event so you don't try this before the image has loaded:    
```
var img = new Image();   // Create new img element
img.addEventListener("load", function() {
  // execute drawImage statements here
}, false);
img.src = 'myImage.png'; // Set source path
```

### drawImage(image, x, y)  

Draws the CanvasImageSource specified by the image parameter at the coordinates (x, y).    

### drawImage(image, x, y, width, height)

This adds the width and height parameters, which indicate the size to which to scale the image when drawing it onto the canvas.    
