# HTML

*标签语言*

## 表单

*form*

- 概述

  1. 表单用于收集用户数据：表单展现后，用户填写表单，点击提交按钮提交数据给服务器

  2. 使用form标签画表单

  3. 一个网页中可以有多个表单

  4. 表单最终是要提交数据给服务器的 form标签中有一个action属性，这个属性用来指定服务器地址

     - action属性用来指定数据提交给哪个服务器

     - action属性和超链接中的href属性一样，都可以向服务器发送请求（request）

       

- 基础语法

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>表单</title>
  	</head>
  	<body>
  		<img src="img/baidu.png" width="175px" />
  		<form action="https://www.baidu.com/">
  			<!-- 画一个提交按钮用于提交表单 -->
  			<!-- 可使用input输入域,type="submit"表示该按钮是一个提交按钮 -->
  			<input type="text" />
  			<input type="submit" value="搜索" />
  			<!-- 超链接与表单都可以发送请求，不过表单发送请求的同时可以携带数据 -->
  		</form>
  		<form action="http://localhost:8080/oa/save">
  			<table>
  				<tr>
  					<td>用户名</td>
  					<!-- 没有name是无法提交的 -->
  					<!-- http://localhost:8080/oa/save?username=123&userpassword=123 -->
  					<!-- ？之前是路径，？之和是数据，提交的是name=value&…… -->
  					<td><input type="text" name="username" /></td>
  				</tr>
  				<tr>
  					<td>密码</td>
  					<!-- 文本框和密码框的value不需要程序员指定，用户输入的即value -->
  					<!-- value的默认值是空字符串"" ，java代码得到的是String username = ""; -->
  					<td><input type="password" name="userpassword" /></td>
  				</tr>
  				<tr>
  					<td colspan="2" align="center">
  						<input type="submit" value="登录" />
  						&nbsp;&nbsp;
  						<input type="reset" value="清空" />
  						<!-- 表单项写了name属性的一律会提交给服务器，不想提交就不要写name属性 -->
  					</td>
  				</tr>
  			</table>
  
  		</form>
  		
  	</body>
  </html>
  
  ```

  

- 用户注册表单的实现

  ```html
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="utf-8">
  		<title>用户注册</title>
  	</head>
  	<body>
  		<img src="img/baidu.png" width="100px" />
  		<!-- 
  		    form的method属性：
  			    get：采用get方式提交的时候，用户提交的信息会显示在浏览器的地址栏上
  			    post：采用post方式提交的时候，用户提交的信息不会显示在浏览器地址栏上
  			    当用户提交的信息中含有敏感信息（如密码），建议采用post方式提交
  				
  			method属性默认get方式	
  			超链接是get请求
  			post方式与get方式提交数据的方式相同，只是不显示出来
  		 -->
  		<form action="url" method="post">
  			<table>
  				<tr>
  					<td>
  						用户名
  					</td>
  					<td>
  						<input type="text" name="username" />
  					</td>
  				</tr>
  				<tr>
  					<td>
  						密码
  					</td>
  					<td>
  						<input type="password" name="userpassword" />
  					</td>
  				</tr>
  				<tr>
  					<td>
  						确认密码
  					</td>
  					<td>
  						<input type="password" />
  					</td>
  				</tr>
  				<tr>
  					<td>
  						<!-- name相同时，为单选 -->
  						<!-- 单选按钮的value必须手动指定 -->
  						性别
  					</td>
  					<td>
  						<!-- input中checked属性默认选中 -->
  						<input type="radio" name="sex" value="1" checked />男
  						<input type="radio" name="sex" value="0" />女
  					</td>
  				</tr>
  				<tr>
  					<td>
  						爱好
  					</td>
  					<td>
  						<input type="checkbox" name="interest" value="astronomy" />天文
  						<input type="checkbox" name="interest" value="geography" />地理
  						<input type="checkbox" name="interest" value="history" />历史
  					</td>
  				</tr>
  				<tr>
  					<td>
  						学历
  						<!-- 下拉选项框 -->
  					</td>
  					<td>
  						<select name="grade">
  							<option value="gz">高中</option>
  							<!-- select中selected属性默认选中 -->
  							<option value="bk" selected>本科</option>
  							<option value="yjs">研究生</option>
  						</select>
  					</td>
  				</tr>
  				<tr>
  					<td>
  						简介
  						<!-- 文本域 -->
  					</td>
  					<td>
  						<textarea rows="10" cols="22" name="introduce"></textarea>
  					</td>
  				</tr>
  				<tr align="center">
  					<td colspan="2">
  						<input type="submit" value="注册" />
  						<input type="reset" value="清空" />
  					</td>
  				</tr>
  			</table>
  
  		</form>
  	</body>
  </html>
  
  ```

  

