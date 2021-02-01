# HTML

*标签语言*

- HTML中元素的id属性

  1. 在HTML文档中，任何元素（节点）都有id属性，id属性是该节点的唯一标识。所以在同一个HTML文档当中id值不能重复

     `<input type="text" name="username" id="username" />`

  2. 表单提交数据的时候只和name有关，和id无关

  3. JavaScript语言可以对HTML文档中的任意节点进行增删改操作，在增删改之前通常我们通过id来拿节点对象

  4. id的存在让我们获取元素（节点）更方便

  

- div和span

  - div和span都可以称为"图层"，图层的作用是为了保证页面可以灵活的布局

  - 最早的网页是采用table进行布局的，但是table布局不灵活，太死板，现代网页开发中主要使用div布局

  - 图层就是一个一个盒子，div嵌套就是盒子套盒子

  - div和span是可以定位的，只要顶下div的左上角的坐标即可

  - div和span的区别在于，默认情况下div独自占用一行，span不会独自占用一行

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title></title>
    	</head>
    	<body>
    		<div id="div1">我是一个DIV</div>
    		<div id="div2">我是一个DIV</div>
    		<span id="span1">我是一个SPAN</span>
    		<span id="span2">我是一个SPAN</span>
    		
    		<div>
    			<div>
    				<div>DIV</div>
    			</div>
    		</div>
    	</body>
    </html>
    ```

    

