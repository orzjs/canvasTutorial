#Draw Some Shapes

<!--sec data-title="Rectangle" data-id="section0" data-show=true ces-->
#### fillRect(x, y, width, height)
Draws a filled rectangle.`x, y specify the position of the top-left corner`
#### strokeRect(x, y, width, height)
Draws a rectangular outline.
#### clearRect(x, y, width, height)
Clears the specified rectangular area, making it fully transparent.
#### rect(x, y, width, height)
Draws a rectangle whose top-left corner is specified by (x, y) with the specified width and height.    

__Note:__The rect function on the other hand is a "path" function - ie you use it when building paths. It doesn't draw anything to the canvas until you call the stroke() or fill() functions.
{% codeeditor src='./code/01.html' %}
{% endcodeeditor %}
<!--endsec-->    

<!--sec data-title="Drawing paths" data-id="section1" data-show=true ces-->
#### beginPath()
Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
#### closePath() `optional step`
This method tries to close the shape by drawing a straight line from the current point to the start. If the shape has already been closed or there's only one point in the list, this function does nothing.    

__Note:__ When you call fill(), any open shapes are closed automatically,     
so you don't have to call closePath().     
This is not the case when you call stroke().
#### stroke()
Draws the shape by stroking its outline.
#### fill()
Draws a solid shape by filling the path's content area
#### moveTo(x, y)
Moves the pen to the coordinates specified by x and y.
#### lineTo(x, y)
Draws a line from the current drawing position to the position specified by x and y.
{% codeeditor src='./code/02.html' %}
{% endcodeeditor %} 
<!--endsec-->  

<!--sec data-title="Drawing Arcs" data-id="section2" data-show=true ces-->
#### arc(x, y, radius, startAngle, endAngle, anticlockwise)
Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by anticlockwise (defaulting to clockwise).    

__Note:__ Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression: radians = (Math.PI/180)*degrees. 
#### arcTo(x1, y1, x2, y2, radius)
Draws an arc with the given control points and radius, connected to the previous point by a straight line.

{% codeeditor src='./code/03.html' %}
{% endcodeeditor %} 
<!--endsec-->  

<!--sec data-title="Bezier and quadratic curves" data-id="section3" data-show=true ces-->
#### quadraticCurveTo(cp1x, cp1y, x, y)
Draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y.
#### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
Draws a cubic Bézier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y).    

![curves](/img/Canvas_curves.png)
{% codeeditor src='./code/04.html' %}
{% endcodeeditor %}
<!--endsec-->  

<!--sec data-title="Path2D objects" data-id="section4" data-show=true ces-->
#### Path2D()
The Path2D() constructor returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.
#### Path2D.addPath(path [, transform])
Adds a path to the current path with an optional transformation matrix.    

{% codeeditor src='./code/05.html' %}
{% endcodeeditor %}
<!--endsec-->  

<!--sec data-title="Applying styles and colors" data-id="section5" data-show=true ces-->
#### fillStyle = color
Sets the style used when filling shapes.
#### strokeStyle = color
Sets the style for shapes' outlines.     

__Note:__ When you set the strokeStyle and/or fillStyle property, the new value becomes the default for all shapes being drawn from then on. For every shape you want in a different color, you will need to reassign the fillStyle or strokeStyle property.__Use save() and Restore()__    

#### lineWidth = value
Sets the width of lines drawn in the future.
#### lineCap = type
Sets the appearance of the ends of lines.     

type=[butt]    

The ends of lines are squared off at the endpoints.    

type=[round]    

The ends of lines are rounded.    

type=[square]    

The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

#### lineJoin = type
Sets the appearance of the "corners" where lines meet.
#### createLinearGradient(x1, y1, x2, y2)
Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
#### createRadialGradient(x1, y1, r1, x2, y2, r2)
Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.
#### gradient.addColorStop(position, color)
Creates a new color stop on the gradient object. The position is a number between 0.0 and 1.0 and defines the relative position of the color in the gradient, and the color argument must be a string representing a CSS <color>, indicating the color the gradient should reach at that offset into the transition.


{% codeeditor src='./code/06.html' %}
{% endcodeeditor %}
<!--endsec--> 

