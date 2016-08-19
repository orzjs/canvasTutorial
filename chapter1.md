# Canvas 初识

### 1. What is Canvas？


>  The canvas element is part of HTML5 and allows for dynamic, scriptable rendering of 2D shapes and bitmap images. It is a low level, procedural model that updates a bitmap and does not have a built-in scene graph.

### 2. How to use？
 1. canvas标签 `<canvas></canvas>`

 2. 画布宽高设置    
    2.1 行内设置：       
       ```
    <canvas id="example" width="500" height="300"></canvas> 
    如不设置的话默认宽高为300px,150px
        ```
    2.2 js设置：

        var canvas = document.getElementById("example");
        canvas.width = width;
        canvas.height = height;

    2.3 不能在css中设置     
        因为css默认宽高为300px，150排序。css中设置canvas的宽高会对300和150进行拉伸，造成图像变形。
        
 3. 进行图形绘制    
    ```
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.arc(200, 200, 200,0,Math.PI*2,true);
    ctx.fillStyle = "rgba(200,0,0,0.4)";
    ctx.fill();
    ```

### 3. Comparing the Differences width Canvas?
| Canvas | SVG |
| -- | -- |
| 依赖分辨率（基于像素） | 不依赖分辨率（基于矢量） |
| 不支持事件处理器（Pure Scripting） | 支持事件处理器（因为svg在xml中被定义，每个svg元素都被附加到DOM上） |
| 弱的文本渲染能力 | 最适合带有大型渲染区域的应用程序（比如谷歌地图） |
| 能够以 .png 或 .jpg 格式保存结果图像 | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快） |
| 最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用 |

