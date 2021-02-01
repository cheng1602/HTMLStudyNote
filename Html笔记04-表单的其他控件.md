# HTML

*标签语言*

## 表单的其他控件

- 下拉列表支持多选

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>下拉列表支持多选</title>
  	</head>
  	<body>
  		<!-- multiple="multiple"支持多选的，size设置显示的条目数量 -->
  		<select multiple="multiple" size="2">
  			<option>湖南</option>
  			<option>湖北</option>
  			<option>广东</option>
  			<option>广西</option>
  		</select>
  	</body>
  </html>
  ```

  

- file控件

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>file控件</title>
  	</head>
  	<body>
  		<!-- file控件，文件上传专用 -->
  		<input type="file" />
  	</body>
  </html>
  ```

  

- hidden控件

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>hidden控件</title>
  	</head>
  	<body>
  		<form action="url" method="post">
  			<!-- 隐藏域，网页上看不到，但是表单提交的时候数据会自动提交给服务器 -->
  			<input type="hidden" name="userid" value="123" />
  			用户代码<input type="text" name="usercode" />
  			<input type="submit" value="提交" />
  		</form>
  
  	</body>
  </html>
  ```

  

- readonly与disabled

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>readonly与disabled</title>
  	</head>
  	<body>
  		<form action="url">
  			<!-- 
  			    readonly与disabled都是只读，不能修改
  				readonly数据可以提交给服务器
  				disabled数据不会提交，即使有name属性也不会提交
  			 -->
  			用户代码<input type="text" name="usercode" value="123" readonly />
  			<br />
  			用户姓名<input type="text" name="username" value="123" disabled />
  			<br />
  			<input type="submit" value="提交数据" />
  		</form>
  	</body>
  </html>
  ```

  

- input控件的maxlength属性

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>input控件的maxlength属性</title>
  	</head>
  	<body>
  		<!-- maxlength属性设置文本框中可输入的字符数量 -->
  		<input type="text" maxlength="3" />
  	</body>
  </html>
  ```

  