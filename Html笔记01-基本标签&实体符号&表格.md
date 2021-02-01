# HTML

*标签语言*

- HelloWorld

  ```html
  <!-- HTML的注释 -->
  <html>
  	<head>
  		<title>HelloWorld</title>
  	</head>
  	<body>
  		HelloWorld！
  	</body>
  </html>
  <!-- HTML不区分大小写，语法松散不严格 -->
  
  ```

  

- 基本标签

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>HTML基本标签</title>
  	</head>
  	<body>
  		
  		<!-- 标题字是HTML预留的格式，与word中的标题字相同，h1~h7 -->
  		<h1>匆匆</h1>
  		<h2>朱自清</h2>
  		<h3>1922年3月28日</h3>
  		
  		<!-- 段落标记，p -->
  		<p>
  			燕子去了，有再来的时候；杨柳枯了，有再青的时候；桃花谢了，有再开的时候。但是，聪明的，你告诉我，我们的日子为什么一去不复返呢？——是有人偷了他们罢：那是谁？又藏在何处呢？是他们自己逃走了罢：现在又到了哪里呢？我不知道他们给了我多少日子；但我的手确乎是渐渐空虚了。在默默里算着，八千多日子已经从我手中溜去；像针尖上一滴水滴在大海里，我的日子滴在时间的流里，没有声音，也没有影子。
  		</p>
  		<p>
  			我不禁头涔涔而泪潸潸了。去的尽管去了，来的尽管来着；去来的中间，又怎样地匆匆呢？早上我起来的时候，小屋里射进两三方斜斜的太阳。太阳他有脚啊，轻轻悄悄地挪移了；我也茫茫然跟着旋转。于是——洗手的时候，日子从水盆里过去；吃饭的时候，日子从饭碗里过去；默默时，便从凝然的双眼前过去。我觉察他去的匆匆了，伸出手遮挽时，他又从遮挽着的手边过去，天黑时，我躺在床上，他便伶伶俐俐地从我身上跨过，从我脚边飞去了。
  		</p>
  		
  		<!-- 换行标记 br标签是一个独目标记 -->
  		Hello <br /> World
  		
  		<!-- 水平线 hr也是独目标记 -->
  		<hr />
  		<!-- color和width都是hr标签的属性 -->
  		<hr color="aqua" width="60%">
  		<!-- HTML语法很松散 -->
  		<hr color=red width=80%>
  		
  		<!-- 预留格式 pre -->
  		<pre>
  			1
  			12
  			123
  		</pre>
  		
  		<!-- 删除字，插入字，粗体字，斜体字 -->
  		<del>删除字</del>
  		<ins>插入字</ins>
  		<b>粗体字</b>
  		<i>斜体字</i>
  		
  		<!-- 右上角加字 sup -->
  		10<sup>2</sup>
  		<!-- 右下角加字 sub -->
  		10<sub>m</sub>
  		
  		<!-- 字体标签 font -->
  		<font color="blue" size="50">字体标签</font>
  		
  		
  	</body>
  </html>
  
  ```

  

- 实体符号

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>实体符号</title>
  		<!-- 用于区分符号与标签 -->
  	</head>
  	<body><font color="blue" size="5">
  	
  		<!-- 小于号：&lt; 大于号：&gt; -->
  		10&lt;20<br />10&gt;5<br />
  		
  		<!-- 空格：&nbsp; -->
  		2021&nbsp;2&nbsp;1
  		
  	</font></body>
  </html>
  
  ```



- 表格

  - 基本语法

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>表格</title>
    	</head>
    	<body>
    		<!-- 表格 table -->
    		<!-- 设置表格边框为1像素 border="1px" -->
    		<!-- width/height既可写像素也可写百分比 百分比的好处是会随着拖动改变 -->
    		<table border="1px" width="60%" height="30%">
    			<!-- 行 tr -->
    			<!-- 对齐方式 align -->
    			<tr align="center">
    				<!-- 行中的单元格 td -->
    				<td>a</td>
    				<td>b</td>
    				<td>c</td>
    			</tr>
    			<tr>
    				<td align="center">d</td>
    				<td>e</td>
    				<td>f</td>
    			</tr>
    			<tr>
    				<td>g</td>
    				<td>h</td>
    				<td>i</td>
    			</tr>
    		</table>
    	</body>
    </html>
    
    ```

  - 单元格合并

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>单元格合并</title>
    	</head>
    	<body>
    		<hr />
    		<table border="1px" width="30%" height="20%">
    			<tr>
    				<td>A</td>
    				<td colspan="2">C</td>
    				
    			</tr>
    			<tr>
    				<td>A</td>
    				<td>B</td>
    				<!-- 单元格合并：先删除一格，再使用rowspan -->
    				<td rowspan="2">C</td>
    			</tr>
    			<tr>
    				<td>A</td>
    				<td>B</td>
    				<!-- 注意：row合并时，删除下面的 colspan没有要求 -->
    			</tr>
    			
    		</table>
    		<hr />
    		<table border="1px" width="30%" height="20%">
    			<tr>
    				<!-- th标签也是单元格标签，相当于居中加粗的td标签 -->
    				<th>员工编号</th>
    				<th>员工姓名</th>
    				<th>部门名称</th>
    			</tr>
    			<tr>
    				<td>0001</td>
    				<td>张三</td>
    				<td>销售</td>
    			</tr>
    		</table>
    	</body>
    </html>
    
    ```

  - thead、tbody、tfoot标签

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<!-- 在table中不是必须的，只是这样做方便后期的JS代码编写 -->
    		<title>thead、tbody、tfoot标签</title>
    	</head>
    	<body>
    		<table border="1px" width="30%" height="20%">
    			
    					<thead>
    						<tr>
    							<th>员工编号</th>
    							<th>员工姓名</th>
    							<th>部门名称</th>
    						</tr>
    					</thead>
    					
    					<tbody>
    						<tr>
    							<td>0001</td>
    							<td>张三</td>
    							<td>销售</td>
    						</tr>
    					</tbody>
    					
    					<tfoot>
    						<tr>
    							<td>0002</td>
    							<td>李四</td>
    							<td>销售</td>
    						</tr>
    					</tfoot>
    					
    				</table>
    	</body>
    </html>
    
    ```