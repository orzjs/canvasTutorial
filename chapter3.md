#Transformations   

---

### translate(x, y)

Moves the canvas and its origin on the grid. x indicates the horizontal distance to move, and y indicates how far to move the grid vertically.

### rotate(angle)
Rotates the canvas clockwise around the current origin by the angle number of radians.    

__Note:__The rotation center point is always the canvas origin. To change the center point, we will need to move the canvas by using the translate() method.

### scale(x, y)
Scales the canvas units by x horizontally and by y vertically. Both parameters are real numbers. Values that are smaller than 1.0 reduce the unit size and values above 1.0 increase the unit size. Values of 1.0 leave the units the same size.    

Using negative numbers you can do axis mirroring (for example using translate(0,canvas.height); scale(1,-1); you will have the well-known Cartesian coordinate system, with the origin in the bottom left corner).    

By default, one unit on the canvas is exactly one pixel. If we apply, for instance, a scaling factor of 0.5, the resulting unit would become 0.5 pixels and so shapes would be drawn at half size. In a similar way setting the scaling factor to 2.0 would increase the unit size and one unit now becomes two pixels. This results in shapes being drawn twice as large.

```
//autoscale.js
module.exports = function(canvasList, opt) {
  var ratio = window.devicePixelRatio || 1,
    ctx = null;

  canvasList.forEach(canvas => {
    ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.width = opt.width + 'px';
    canvas.style.height = opt.height + 'px';
    canvas.width = opt.width * ratio;
    canvas.height = opt.height * ratio;
    ctx.scale(ratio, ratio);
  });

  return canvasList;
};
```

<!--sec data-title="A pixel is not a pixel is not a pixel" data-id="section0" data-show=true data-collapse=true ces-->
__Google:__ 像素是不是一个像素不是像素    

__Baidu:__ 像素不是一个像素不是一个像素    

__Web:__ 此像素非彼像素  |   那些年我们误解的像素 

<!--endsec--> 

#### 设备像素比
window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。    

公式表示就是：window.devicePixelRatio = 物理像素 / dips    

dip或dp,（device independent pixels，设备独立像素）与屏幕密度有关。dip可以用来辅助区分视网膜设备还是非视网膜设备。    

MacBook采用视网膜显示屏，其devicePixelRatio是（如果不出意外）2. 视网膜MacBook的物理像素是2800×1800，而显示出分辨率为1400×900，如果把分辨率作为dips层，则devicePixelRatio为2应该是无误的。    

![px](/img/px.png)

### transform(a, b, c, d, e, f)

__a (m11)__    

Horizontal scaling.    

__b (m12)__    

Horizontal skewing.    

__c (m21)__    

Vertical skewing.    

__d (m22)__    

Vertical scaling.    

__e (dx)__    

Horizontal moving.    

__f (dy)__    

Vertical moving.        

### setTransform(a, b, c, d, e, f)
Resets the current transform to the identity matrix, and then invokes the transform() method with the same arguments. This basically undoes the current transformation, then sets the specified transform, all in one step.
### resetTransform()
Resets the current transform to the identity matrix. This is the same as calling: ctx.setTransform(1, 0, 0, 1, 0, 0);    
