#front-back-end-demo
- 前端：React、React-Router

- 中间层：Express

- 后端：Jersey、Mybatis、MySQL

> 前端demo：[https://github.com/LeonardLT/es6-project-demo](https://github.com/LeonardLT/es6-project-demo)
> 
> 后端demo：[https://github.com/LT-java-demos/jersey-mybatis-mysql-demo](https://github.com/LT-java-demos/jersey-mybatis-mysql-demo)
 
 
##环境
- JDK 8
- MySQL
- Gradle


##运行demo

- 开启第一个terminal

```shell
$ cd es6-project-demo
$ npm install -g babel-cli
$ npm install
$ npm start

```

- 开启第二个terminal

```shell
$ cd jersey-mybatis-mysql-demo
```
初始化数据库

```
$ ./db-initial.sh(需要输入mysql root密码)
```
运行demo

```
$ gradle build
$ gradle jettyRun

```

###浏览器访问：
[http://localhost:3000/hello/1](http://localhost:3000/hello/1)

`{"gender":"female","name":"Bulma","id":1}`

[http://localhost:3000/hello/2](http://localhost:3000/hello/2)

`{"gender":"male","name":"Vegeta","id":2}`