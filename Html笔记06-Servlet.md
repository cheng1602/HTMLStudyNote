# Servlet

- 模拟互联网通信

  1. 在Tomcat安装地址/webapps文件夹，创建一个网站：myWeb

  2. 将一个静态资源文件添加到网站：win10.jpg

  3. 启动tomcat

  4. 启动浏览器，命令浏览器向tomcat索要win10.jpg

     URL格式：网络协议包://服务端计算机IP地址:Http服务器端口号/网站名/资源文件名称

     `http://localhost:8080/myWeb/win10.jpg`



- Servlet规范
  - Servlet规范来自于JavaEE规范中的一种
  - 作用：
    1. Servlet规范中指定了动态资源文件的开发步骤
    2. Servlet规范中指定了Http服务器调用动态文件的规则
    3. Servlet规范中指定了Http服务器管理动态资源文件实例对象的规则



- Servlet接口实现类

  - Servlet接口来自于Servlet规范下，这个接口存在于Http服务器提供的jar包中

  - Servlet规范中认为，Http服务器能调用的动态资源文件必须是一个Servlet接口实现类

  - Servlet接口实现类开发步骤

    1. 创建一个Java类继承HttpServlet父类，使之成为一个Servlet接口实现类
    2. 重写HttpServlet父类的两个方法，doGet或者doPost
    3. 将Servlet接口实现类的信息注册到Tomcat服务器中

    ```java
    package com.example.controller;
    
    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    import java.io.IOException;
    
    public class OneServlet extends HttpServlet {
        //不直接implements Servlet：简化开发难度
        //抽象类的作用：接口中不需要使用的抽象方法交给抽象类完成，降低接口实现过程难度
    
        @Override
        protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            System.out.println("Get!");
        }
    
        @Override
        protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            System.out.println("Post!");
        }
    }
    ```

    ```html
    <?xml version="1.0" encoding="UTF-8"?>
    <!-- 将Servlet接口实现类类路径地址交给Tomcat -->
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
             version="4.0">
    
        <servlet>
            <!-- 声明一个变量存储Servlet接口实现类类路径 -->
            <servlet-name>oneServlet</servlet-name>
            <servlet-class>com.example.controller.OneServlet</servlet-class>
        </servlet>
        
        <servlet-mapping>
            <servlet-name>oneServlet</servlet-name>
            <!-- 别名，便于访问 -->
            <url-pattern>/one</url-pattern>
        </servlet-mapping>
    </web-app>
    ```

    

- Servlet对象生命周期

  - 网站中所有Servlet接口实现类的实例对象只能由Http服务器负责创建，开发人员不能手动创建Servlet接口实现类的实例对象

  - 在默认情况下，当Http服务器接收到对于当前Servlet接口实现类第一次请求时，自动创建这个Servlet接口实现类的实例对象

  - 在手动配置情况下，可以要求Http服务器在启动时自动创建某个Servlet接口实现类的示例对象

    ```html
        <servlet>
            <servlet-name>oneServlet</servlet-name>
            <servlet-class>com.example.controller.OneServlet</servlet-class>
            <!-- 填写一个大于零的整数，默认值是0 -->
            <load-on-startup>1<load-on-startup>
        </servlet>
    ```

  - 在Http服务器运行期间，一个Servlet接口实现类只能被创建出一个实例对象

  - 在Http服务器关闭的时刻，自动将网站中所有的Servlet对象进行销毁



- HttpServletResponse接口

  - 基本介绍

    1. HttpServletResponse接口来自于Servlet规范中
    2. HttpServletResponse接口实现类由Http服务器负责提供
    3. HttpServletResponse接口负责将doGet/doPost方法执行结果写入到响应体交给浏览器
    4. 开发人员习惯于将HttpServletResponse接口所修饰的对象称为响应对象

  - 主要功能

    1. 将执行结果以二进制体形式写入到响应体中

       ```html
       <?xml version="1.0" encoding="UTF-8"?>
       <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
                version="4.0">
       
           <servlet>
               <servlet-name>oneServlet</servlet-name>
               <servlet-class>com.example.controller.OneServlet</servlet-class>
           </servlet>
           <servlet>
               <servlet-name>TwoServlet</servlet-name>
               <servlet-class>com.example.controller.TwoServlet</servlet-class>
           </servlet>
       
           <servlet-mapping>
               <servlet-name>oneServlet</servlet-name>
               <url-pattern>/one</url-pattern>
           </servlet-mapping>
           <servlet-mapping>
               <servlet-name>TwoServlet</servlet-name>
               <url-pattern>/Two</url-pattern>
           </servlet-mapping>
       </web-app>
       ```

       ```java
       package com.example.controller;
       
       import javax.servlet.ServletException;
       import javax.servlet.http.HttpServlet;
       import javax.servlet.http.HttpServletRequest;
       import javax.servlet.http.HttpServletResponse;
       import java.io.IOException;
       import java.io.PrintWriter;
       
       public class OneServlet extends HttpServlet {
       
           @Override
           protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
               String result = "Hello World!";//执行结果
               //响应对象结果写入到响应体中
               //1.通过响应对象，向Tomcat索要输出流
               PrintWriter out = resp.getWriter();
               //2.通过输出流，将执行结果以二进制形式写入到响应体中
               out.write(result);
       
           }//doGet执行完毕，Tomcat将响应包推送给浏览器
       
       }
       ```

       

       ```java
       package com.example.controller;
       
       import javax.servlet.*;
       import javax.servlet.http.*;
       import java.io.IOException;
       import java.io.PrintWriter;
       
       public class TwoServlet extends HttpServlet {
           @Override
           protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               int money = 50;//执行结果
               PrintWriter out = response.getWriter();
               out.write(money);//输出2
               /*
               原因在于out.write方法可将【字符】、【字符串】、【ASCII码】写入到响应体
               【ASCII码】：a---97、2---50
                */
               //实际开发中，通过out.println方法将真实数据写入响应体
               out.println(money);//输出50
       
           }
       
       }
       ```

    2. 设置响应头中[content-type]属性值，从而控制浏览器使用，对应的编译器将响应体二进制数据编译为图片/文字/视频/命令

       ```java
       package com.example.controller;
       
       import javax.servlet.*;
       import javax.servlet.http.*;
       import java.io.IOException;
       import java.io.PrintWriter;
       
       public class ThreeServlet extends HttpServlet {
           @Override
           protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               String result = "AAA<br/>BBB<br/>CCC";
               //PrintWriter out = response.getWriter();
               //out.println(result);//输出AAA<br/>BBB<br/>CCC，将<br/>当作文本内容
               
               /*
               原因在于浏览器在接收到响应包后，根据响应头中content-type属性的值，
               来采用对应的编译器对响应体中二进制内容进行处理。
       
               在默认情况下，content-type属性的值为test content-type="text"，
               此时浏览器将会采用文本编译器对响应体二进制数据进行解析。
       
               应当在得到输出流之前，通过响应对象响应头中content-type属性，
               进行一次重新赋值用于指定浏览器采用正确的编译器
                */
   
               //设置响应头content-type
           response.setContentType("text/html");
               PrintWriter out = response.getWriter();
           out.println(result);
       
       
           }
       
       }
       ```
    
       
    
    3. 设置响应头中的[locationg]属性，将一个请求地址赋值给location，从而控制浏览器向指定服务器发送请求
    
       ```java
       package com.example.controller;
       
       import javax.servlet.*;
       import javax.servlet.http.*;
       import javax.servlet.annotation.*;
       import java.io.IOException;
       
       @WebServlet(name = "FourServlet", value = "/FourServlet")
       public class FourServlet extends HttpServlet {
           @Override
           protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               String result = "http://www.baidu.com";
       
               //通过响应对象，将地址赋值给响应头中location属性
               response.sendRedirect(result);//[响应头 location="http://www.baidu.com"]
       
               /*
               浏览器在接收到响应包后如果发现响应头中存在location属性
               将自动通过地址栏向location指定网站发送请求
               sendRedirect方法远程控制浏览器请求行为【请求地址，请求方式，请求参数】
                */
       
           }
       ```
    
    

- HttpServletRequest接口

  - 基本介绍

    1. HttpServletRequest接口来自于Servlet规范
    2. HttpServletRequest接口实现类由Http服务器负责提供
    3. HttpServletRequest接口负责在doGet/doPost方法运行时读取Http请求协议包中的信息
    4. 开发人员习惯于将HttpServletRequest接口修饰的对象称为请求对象

  - 主要功能

    1. 可以读取Http请求协议包中请求行里的信息

       ```java
       package com.example.controller;
       
       import javax.servlet.*;
       import javax.servlet.http.*;
       import javax.servlet.annotation.*;
       import java.io.IOException;
       
       @WebServlet(name = "OneServlet", value = "/OneServlet")
       public class OneServlet extends HttpServlet {
           @Override
           protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               //1.通过请求对象，读取请求行中url信息
               String url = request.getRequestURL().toString();
               //2.通过请求对象，读取请求行中method信息
               String method = request.getMethod();
               //3.通过请求对象，读取请求行中uri信息
               /*
               URI：资源文件精准定位地址，在请求行中并没有URI属性
               实际上URI是URL中截取的一串字符串，格式为"/网站名/资源文件名"
               URI用于让Http服务器对被访问的资源文件进行定位
                */
               String uri = request.getRequestURI();
       
               System.out.println(url);// http://localhost:8080/myWeb/one
               System.out.println(method);// GET
               System.out.println(uri);// /myWeb/one
       
           }
       
       }
       ```

    2. 可以读取保存在Http请求协议包中请求头或者请求体中的请求参数信息

       ```html
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <title>Title</title>
       </head>
       <body>
       <center>
           <a href="/myWeb/two?userName=neo&password=123">通过超链接访问1</a>
       </center>
       </body>
       </html>
       ```

       ```java
       package com.example.controller;
       
       import javax.servlet.*;
       import javax.servlet.http.*;
       import java.io.IOException;
       import java.util.Enumeration;
       
       public class TwoServlet extends HttpServlet {
           @Override
           protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               //1.通过请求对象获得请求头中所有请求参数名称
               Enumeration paramNames = request.getParameterNames();//将所有请求参数名称保存到一个枚举对象精选返回
               while (paramNames.hasMoreElements()){
                   String paramName = (String)paramNames.nextElement();
                   //2.通过请求对象读取指定的请求参数的值
                   String value = request.getParameter(paramName);
                   System.out.println(paramName + " : " + value);
               }
           }
       }
       ```

       ```html
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <title>Title</title>
       </head>
       <body>
       <center>
           <form action="/myWeb/two" method="get">
               请求参数：<input type="text" name="userName">
               <input type="submit" value="Get访问">
           </form>
           <form action="/myWeb/two" method="Post">
               请求参数：<input type="text" name="userName">
               <input type="submit" value="Post访问">
           </form>
       </center>
       </body>
       </html>
       ```

       ```java
       package com.example.controller;
       
       import javax.servlet.*;
       import javax.servlet.http.*;
       import java.io.IOException;
       import java.util.Enumeration;
       
       public class TwoServlet extends HttpServlet {
           @Override
           protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               //通过请求对象，读取请求头参数信息
               String userName = request.getParameter("userName");
               System.out.println("从请求体得到参数信息：" + userName);
           }
           @Override
           protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
               //通过请求对象，读取请求头参数信息
               String userName = request.getParameter("userName");
               System.out.println("从请求头得到参数信息：" + userName);
           }
       }
       ```

       - 以GET方式发送中文参数内容时，得到正常结果

         浏览器以GET方式发送请求，请求参数保存在请求头，在Http请求协议包达到Http服务器之后，请求头二进制内容由Tomcat负责解码，Tomcat默认使用【utf-8】字符集，可以解释一切国家的文字

       - 以POST方式发送中文参数内容时，得到乱码

         浏览器以POST方式发送请求，请求参数保存在请求体，在Http请求协议包达到Http服务器之后，请求体二进制内容由当前请求对象（request）负责解码，request默认使用【ISO-8859-1】字符集，一个东欧语系字符集

         在POST请求方式下，在读取请求体内容之前，应该通知请求对象使用utf-8字符集对请求体内容进行一次重新解码

       

    3. 可以代替浏览器向Http服务器申请资源文件的调用