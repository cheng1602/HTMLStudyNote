# HTML

*标签语言*

- 图片与背景

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>背景颜色和背景图片</title>
  	</head>
  	<body bgcolor="skyblue" background="img/win10.jpg">
  		<!-- 
  		    1.img标签是图片标签
  		    2.width宽度属性，hight高度属性，只设置宽度，高度会进行等比例缩放 
  			3.src属性是图片路径
  			4.title属性设置鼠标悬停时的信息
  			5.alt属性设置图片加载失败时显示的信息
  		 -->
  		<img src="img/baidu.png" width="100px" title="我是百度图片title" /><br />
  		<img src="img/baidu.png" width="10%" alt="图片无法找到!"/>
  	</body>
  </html>
  ```

  

- 超链接

  - 基本语法

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>超链接、热链接</title>
    	</head>
    	<body>
    		<!-- href: hot references 热引用 后接资源地址-->
    		<a href="https://github.com/cheng1602/HTMLStudyNote"\>HTML学习笔记</a>
    		
    		<!-- 图片超链接 -->
    		<a href="https://www.baidu.com/">
    			<img src="img/baidu.png" width="100px"/>
    		</a><br />
    		
    		<!--
    		    超链接中target属性可取值：
    			  _blank 新窗口
    			  _self 当前窗口（默认方式）
    			  _top 顶级窗口
    			  _parent 父窗口
    		-->
    		<a href="https://www.baidu.com/" target="_blank">
    			<img src="img/baidu.png" width="100px"/>
    		</a>
    		
    		<!-- 按F12在浏览器中调试 -->
    	</body>
    </html>
    
    ```

  - request、response

    - 通过超链接可以从浏览器向服务器发送请求
    - 浏览器向服务器发送数据（请求：request）
    - 服务器向浏览器发送数据（响应：response）
    - B/S结构的系统，每一个请求都会对应一个响应

  

- 列表

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>列表</title>
  	</head>
  	<body>
  		<!-- 有序列表 -->
  		<ol type="I">
  			<li>A
  				<ol type="A">
  					<li>a</li>
  					<li>b</li>
  				</ol>
  			</li>
  			<li>B</li>
  			<li>C</li>
  		</ol>
  
  		<!-- 无序列表 -->
  		<ul type="disc">
  			<li>中国
  				<ul type="circle">
  					<li>湖南
  						<ul type="square">
  							<li>长沙</li>
  							<li>株洲</li>
  						</ul>
  					</li>
  					<li>湖北</li>
  				</ul>
  			</li>
  			<li>美国</li>
  			<li>英国</li>
  		</ul>
  
  	</body>
  </html>
  
  ```