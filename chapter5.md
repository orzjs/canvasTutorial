#How to create a simple game    

---

![px](/img/game1.jpg)      
![px](/img/game2.jpg)

[Demo](http://www.cat666.com/mydemo/FlappyBird/index.html)    

<!--sec data-title="What we need to prepare" data-id="section0" data-show=true data-collapse=true ces-->
* Bird Class
* Pipe Class
* gameMonitor Class
* Image Loader
* EventListener
* collision detection

<!--endsec--> 

### Draw Pipes

```
function Pipe(id) {
    this.id = id;
    this.isPass = false;
    this.left = gameMonitor.bgWidth;
    this.top = 0;
    this.width = 50;
    this.height = getRandom(100,200);
    this.pic_down = gameMonitor.im.createImage('images/pipe_down.png');
    this.pic_up = gameMonitor.im.createImage('images/pipe_up.png');
}
//利用随机数随机生成上管道高度，下管道与上管道距离固定
Pipe.prototype.draw = function() {
    ctx.drawImage(this.pic_down, this.left, this.top, this.width, this.height); //上管道           
    ctx.drawImage(this.pic_up, this.left, gameMonitor.gapHeight + this.height, this.width, 280);//下管道           
}
//管道左移。我们的所有生成的管道放在数组pipeList中，为了优化性能，
//判断每一个管道是否移出屏幕，移出的时候将其置为null,不再渲染
Pipe.prototype.move = function() {
    this.left -= gameMonitor.SpeedX;
    if(this.left < -50) {
        gameMonitor.pipeList[this.id] = null;
    }//出界后不再渲染
    
}
```

```
    startPipe: function() {
        var _this = this;
        _this.pipe_timer = setInterval(function() {
            var id = _this.pipeList.length;
            _this.drawPipe(id);
        },_this.gapPipe);   
    }

    drawPipe: function(id) {
        var p = new Pipe(id);
        this.pipeList.push(p);
    }
    . . . 
    //在点击开始游戏时开始绘制
```

### Draw Bird

```
function Bird() {
    this.left = 120;
    this.top = 250;
    this.width = 34;
    this.height = 24;
    this.g = 1;
    this.timer = null;
    this.timer2 = null;
    this.pic = gameMonitor.im.createImage('images/bird.png');
    this.draw = function() {
        ctx.drawImage(this.pic, this.left, this.top, this.width, this.height);
    }
    //鸟进行位移
    this.setPosition = function() {
        var _this = this;
        
        this.timer = setInterval(function(){
            _this.top -= 5;
        },1000/60);
        
        this.timer2 = setTimeout(function() {
            clearInterval(_this.timer);
        },300);
        
    }
    //模拟重力
    this.gravity = function() {
        this.g *= 1.06; 
        this.top += this.g;
    }
    //是否停止位移
    this.isStop = function() {
        if(this.top < 0) {
            this.top = 10;
        }else if(this.top > 480) {
        
            gameMonitor.stop();
            
        }
    }
    //重置定时器
    this.reset = function() {
        clearInterval(this.timer);
        clearTimeout(this.timer2);
    }
    //碰撞检测
    this.isCollision = function(pipeList) {
        var _this = this;
        //碰到上下边界,游戏结束
        if(_this.top < 0 || this.top > 480) {
        
            gameMonitor.gameOver();
            
        }else {
            for(var i = 0,l = pipeList.length; i < l; i++){
                var p = pipeList[i];
                if(p && p.isPass == false) {
                    if(p.left <= (_this.left + _this.width) && p.left > (_this.left - p.width)) {
                        if(_this.top < p.height || _this.top > (p.height + gameMonitor.gapHeight - _this.height)) {
                            setTimeout(function() {
                                gameMonitor.gameOver();
                            },0);   
                        }
                    }else if(p.left < (_this.left - p.width)) {
                        //Pass
                        gameMonitor.s_point.play();//播放音效
                        gameMonitor.score += 1;
                        p.isPass = true;
                    }
                }
            }
        }
    }
}  
```

### run

``` 
    //setInterval or requestAnimationFrame to recursive loop

    run: function() {
        var _this = this;
        ctx.clearRect(0, 0, _this.bgWidth, _this.bgHeight);
        _this.drawBg();//绘制背景

        //循环绘制管道数组
        for(var i = 0,l = this.pipeList.length;i < l;i++) {
            var p = _this.pipeList[i];
            if(p){
                p.draw();
                p.move();
            }
        }
        //暂停开关控制        
        _this.drawPause(_this.isPause);
        
        //分数
        _this.drawScore(_this.score,50,140,100,'#fff'); 
        
        //绘制鸟
        _this.bird.draw();//重绘鸟
        _this.bird.gravity();
        
        //碰撞检测
        _this.bird.isCollision(_this.pipeList);
        
        _this.timer = setTimeout(function() {
            _this.run();
        },_this.intval);
        //requestAnimationFrame(_this.run(ctx));    
        
    }

    ...

    coverListener:function() {
        
        _this = this;
        _this.handler2 = function(e){
        
            var theEvent = window.event || e;
            var p = getEventPosition(theEvent);
                
            if(p.x > 100 && p.x < 216 && p.y > 350 && p.y < 420) {
                
                _this.isControl = true;
                _this.bird = new Bird();
                
                _this.s_click.play();//播放音效
                _this.reset();
                _this.run();
                //循环生成管道
                _this.startPipe();
                EventUtil.removeEvent(main, _this.eventType.start,_this.handler2);//点击之后就移除该按钮点击
                _this.initListener();               
            }
            
        }
        EventUtil.addEvent(main, _this.eventType.start, _this.handler2);
        
    }
```

### EventListener

```
//获取点击的坐标
function getEventPosition(ev){
  var x, y;
  if(ev.touches) {
    x = ev.touches[0].pageX;
    y = ev.touches[0].pageY;
  }else if (ev.layerX || ev.layerX == 0) {
    x = ev.layerX;
    y = ev.layerY;
  } else if (ev.offsetX || ev.offsetX == 0) { // Opera
    x = ev.offsetX;
    y = ev.offsetY;
  }
  return {x: x, y: y};
}
```

```
_this.handler2 = function(e){
        
            var theEvent = window.event || e;
            var p = getEventPosition(theEvent);
                
            if(p.x > 100 && p.x < 216 && p.y > 350 && p.y < 420) {
                
                _this.isControl = true;
                _this.bird = new Bird();
                
                _this.s_click.play();//播放音效
                _this.reset();
                _this.run();
                //循环生成管道
                _this.startPipe();
                EventUtil.removeEvent(main, _this.eventType.start,_this.handler2);//点击之后就移除该按钮点击
                _this.initListener();               
            }
            
        }
        EventUtil.addEvent(main, _this.eventType.start, _this.handler2);
```
