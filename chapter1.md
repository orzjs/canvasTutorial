# Canvas 初识

### 1. What is Canvas？


>  The canvas element is part of HTML5 and allows for dynamic, scriptable rendering of 2D shapes and bitmap images. It is a low level, procedural model that updates a bitmap and does not have a built-in scene graph.

### 2. How to use？


> 1. canvas标签    
>    <canvas></canvas>    
> 2. 画布宽高设置    
>    2.1 行内设置：       
>        <canvas id="example" width="500" height="300"></canvas>  
>        如不设置的话默认宽高为300px,150px
>    2.2 js设置：
>        var canvas = document.getElementById("example");
>        canvas.width = width;
>        canvas.height = height;



### 3. Why not SVG?