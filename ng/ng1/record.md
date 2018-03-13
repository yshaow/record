# mardown的常用语法

## mardown 是一种轻量级标记语言，它用简介的语法代替排版 使我们专心于码字，它的目标是实现易读易写 成为一种适用于网络的书写语言。同时markdown支持嵌入html标签

## 注意：markdown使用 # + * 等符号来标记 符号后面必须跟上至少1个空格才有效。

### 标题的几种写法
#### 第一种通过#来实现标题
# 一级标题
## 二级标题
###### 一直到六级标题 分别表示h1 - h6 而且h1下面会有一条横线 注意 #号后面有空格

#### vscode菜单 文件-> 首选项 -> 用户设置中修改vscode预览md文件的样式 如下：
`{
    "window.zoomLevel": 1,
    "files.autoSave": "afterDelay",
    "markdown.styles":["file:///D:/tools/VScode/markdown.css/md.css"]
}`

#### 第二种实现标题的方式
这是一级标题
===========
这是二级标题
-----------
###### 这种方式只能表示一级和二级标题  而且=和-的数量没有限制 只要大于一个就行

#### 第三种实现标题的方式
# 一级标题 #
## 二级标题 ##
###### 这种方式支持h1 - h6 相当于第一种的闭合标签


### 列表
#### 无序列表 可以用* + -三种方式来创建
* 1
+ 2
- 3
#### 有序列表 注意：数字后面的点只能是英文的点，特别注意，有序列表的序号是根据第一行列表的数字顺序来的。
3. 列表1
2. 列表2
1. 列表3

### 区块引用 通过>来实现
##### 比如说你想对某个部分做的内容做一些说明或者引用某某的话等
* 不以结婚为目的的谈恋爱都叫耍流氓
> 这是毛爷爷说的
>> 在嵌套中用的很多 多个嵌套之间 使用多个>>

### 分割线
> 分割线可以由* - _ 这3个符号的至少3个符号表示 可以不连续
***
--- -
__ _

### 链接
> 支持行内式和参数式 都是用[方括号]来标记链接文字
>> 行内式 地址放在随后的()中
[百度](www.baidu.com)
>> 链接可以带title属性 在链接地址后面空一格 然后用引号引起来
[百度](www.baidu.com "百度")

>> 参数式 可能有些编辑器不支持
这里是[百度]
[百度]: http://www.baidu.com "百度"


### 图片 前面要加!
> 图片也有2中方式 行内式 参数式
>> 我是图片 ![图片](https://www.baidu.com/img/bd_logo1.png);
>> 这里是百度 ![百度]
[百度] : https://www.baidu.com/img/bd_logo1.png


### 代码框
> 当需要展示一些代码的时候可以用到
>> 如果代码量较少 只有单行 可以用反引号
 `<p>哈哈哈</p>`
 >> 多行用三个`
 ``` 可以写注释
 <p>哈哈哈</p>
 <p>哈哈哈</p>
 <p>哈哈哈</p>
 ```

 ### 表格
 > 方式1
 | name | age |
 |:----:|:---:|
 | tony | 20  |

 > 方式2
  name | age
  ------ | -----
  tony | 20

> 方式3
  name|age|分数
  -|-|-
  哈哈|男|100

 ### 强调
 *字体倾斜*
 _字体倾斜_

 **字体加粗**
 __字体加粗__


  ### 转义
  * \\
  * \'
  * \~
  * \*
  * \.
  * \!

### 删除线
~~干掉我啊~~



# angular1.x #
## angularJS简介

* angularjs是一个js框架，它可通过`<script>`标签添加到html页面上。
> `<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular.min.js"></script>`
> 各个版本下载：https://github.com/angular/angular.js/releases

* angularjs通过 指令 扩展了html，且通过 表达式 绑定数据到html。

* angularjs扩展了html
> 1.angularjs通过ng-directives扩展了html
> 2.ng-app指令定义一个angularjs应用程序
> 3.ng-model指令把元素值(如输入域的值)绑定到应用程序
> 4.ng-bind指令把应用程序数据绑定到html视图
> 5.示例
```
//ng-app指令告诉ng <div>是angularjs应用程序的所有者
//如果移除ng-app html将直接把表达式显示出来 不会去计算表达式的结果
 <div ng-app="">
      <p>名字：<input ng-model="name" type="text"/></p>
      <h1>hello {{name}}</h1>
      <h2 ng-bind="name" />>
  </div>
```

* 什么是angularjs
> 1.angularjs是的开发现代的单页面应用变得更加容易
> 2.angularjs把应用程序数据绑定到html元素
> 3.angularjs可以克隆和重复html元素
> 4.angularjs可以隐藏和显示html元素
> 5.angularjs可以在html元素背后添加代码
> 6.angularjs支持输入验证

* angularjs指令
> angularjs指令是以ng作为前缀的html属性
> 示例
```
//ng-init 初始化angularjs应用程序变量
  <div ng-init="firstName='John'">
      <p>name: <span ng-bind="firstName" /></p>
  </div>
```

> html5允许扩展的属性以data-开头，angularjs属性以ng-开头。但您可以使用data-ng-来让网页对html5有效
>示例
```
<div data-ng-init="a='b'">
    <p>a: <span data-ng-bind="a"/></p>
</div>
```

* angularjs表达式
> angularjs表达式写在双大括号内:{{ expression }}。
> angularjs表达式把数据绑定到html，这与ng-bind指令有异曲同工之妙。
> angularjs将在表达式书写的位置 输出 数据。
> angularjs表达式很像js表达式：它可以包含文字 运算符 变量。

* angularjs应用
> angularjs模块(module)定义了angularjs应用
> angularjs控制器(controller)用于控制angularjs应用
> ng-app指令定义了应用，ng-controller定义了控制器
> 示例
```
<div ng-app="myApp" ng-controller="myCtrl">
    <input ng-model="firstName" type="text"/>
    <hr/>
    <input ng-model="lastName" type="text" />
    <h1>firstName:{{firstName}},lastName:{{lastName}}</h1>
</div>
<script>
    //模块定义应用
    var app = angular.module('myApp',[]);
    //控制器控制应用
    app.controller('myCtrl',function($scope){
        $scope.firstName = 'John';
        $scope.lastName = 'Doe';
    })
</script>
```

## angularJS表达式
> angularjs表达式 -- 使用表达式把数据绑定到HTML
> angularjs表达式
>> 表达式写在双大括号内 -- {{ expression }}
>> 表达式把数据绑定到HTML，这与ng-bind指令有异曲同工之妙
>> 在表达式书写的位置 输出 数据
>> angularjs表达式 和 js表达式很像：它可以包含文字 运算符 变量。
>> 示例
>> `<div><p>第一个表达式: {{ 5 +5 }}</p></div>`

> angularjs数字 -- 和js数字一样
>> 示例
```
    <div ng-init="quantity=10;cost=5">
        <p>总价:{{quantity * cost}}</p>
        <p>总价:<span ng-bind="quantity * cost"/></p>
    </div>
```

> angularjs字符串
>> 示例
```
    <div ng-init="first='John';last='Doe'">
        <p>姓名：{{ first + " " + last}}</p>
        <p>姓名：<span ng-bind=" first + ' ' + last"/></p>
    </div>
```

> angularjs对象
>> 示例
```
    <div ng-init=" person={firstName:'哈哈'} ">
        <p>姓名:{{person.firstName}}</p>
        <p>姓名:<span ng-bind="person.firstName"/></p>
    </div>
```

> angularjs数组
>> 示例
```
    <div ng-init=" points=[1,2] ">
        <p>points第二个值:{{points[1]}}</p>
        <p>points第二个值:<span ng-bind="points[1]"/></p>
    </div>
```

> angularjs表达式 VS js表达式
>> 1.类似于js表达式，ng表达式可以包含字母 操作符 变量
>> 2.与js表达式不同，ng表达式可以写在HTML中
>> 3.与js表达式不同，ng表达式不支持条件判断，循环以及异常
>> 4.与js表达式不同，ng表达式支持过滤器

## angularJS指令
> angularjs指令
>> 1.angularjs通过被称为 指令 的新属性来扩展HTML
>> 2.angularjs通过内置的指令来为应用添加功能
>> 3.angularjs允许你自定义指令
>> 4.angularjs指令是扩展的HTML属性，带有前缀ng-

> 如:
>> ng-app 初始化一个angularjs应用程序
>> ng-init 初始化应用程序数据
>> ng-model 把元素值(如：输入域的值)绑定到应用程序

> 数据绑定
>> {{ firstName }}表达式是一个angularjs数据绑定表达式，angularjs中的数据绑定，同步了angularjs表达式与angularjs数据。{{ firstName }}是通过ng-model='firstName'进行同步的。
>> 示例
```
    <div ng-init="quantity=1;price=5">
        <h2>价格计算器</h2>
        <div>
            数量：<input ng-model="quantity" type="number"/>
        </div>
        <div>
            价格：<input ng-model="price" type="number"/>
        </div>
        <p><strong>总价：</strong>{{quantity*price}}</p>
    </div>
```

> 重复HTML元素
>> ng-repeat指令会重复一个HTML元素
```
    <div ng-init="names=['a','b','c']">
        <ul>
            <li ng-repeat="name in names">{{name}}</li>
        </ul>
    </div>
```

> ng-app指令
>> 1.ng-app指令定义了angularjs应用程序的**根元素**
>> 2.ng-app指令在网页加载完毕时会**自动引导**(自动初始化)应用程序

> ng-init指令
>> 1.ng-init指令为angularjs应用程序定义了初始值
>> 2.通常情况下，不使用ng-init，将使用一个控制器或模块来代替它。

> ng-model指令
>> 1.ng-model指令 **绑定html元素** 到应用程序数据
>> 2.该指令还可以为应用程序数据提供类型验证(number email required)
>> 3.为应用程序数据提供状态(invalid dirty touched error)
>> 4.为html元素提供css类
>> 5.绑定HTML元素到HTML表单

> ng-repeat
>> ng-repeat指令对于集合中的每一项会**克隆一次HTML元素**

> 自定义的指令
>> 除了angularjs内置的指令外，我们还可以创建自定义指令。你可以使用directive函数来添加自定义的指令。要调用自定义指令html元素上需要添加自定义指令名。使用驼峰命名一个指令，runoobDirective。但在使用它时需要以-分隔runoob-directive。
```
    <div>
            <my-derictive></my-derictive>
    </div>
    <script>
        var myDeri = angular.module('myApp',[]);
        myDeri.directive('myDerictive',function(){
            return {
                template:"<h1>自定义指令！</h1>",
            }
        })
    </script>
```
>> 可以通过以下方式来调用指令
>>> 元素名 `<my-derictive></my-derictive>`
>>> 属性 `<div my-derictive></div>`
>>> 类名 `<div class="my-derictive"></div>`
>>> 注释 `<!-- 指令: my-derictive -->`

>> 限制使用 -- 你可以限制你的指令只能通过特定的方式来调用
>>> 通过添加restrict属性来指定通过什么方式来调用指令
```
          var app = angular.module("myApp", []);
          app.directive("myDerictive", function() {
              return {
                  restrict : "A",
                  template : "<h1>自定义指令!</h1>"
              };
          });
```
>>> restrict值 -- restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。
>>>> 1.E 作为元素名使用
>>>> 2.A 作为属性使用
>>>> 3.C 作为类名使用
>>>> 4.M 作为注释使用

## ng-model指令
> ng-model指令用于绑定应用程序数据到HTML控制器(input select textarea)的值。

> ng-model指令
>> ng-model指令可以将输入域的值与angularJs创建的变量绑定。
```
    <div ng-controller="myCtrl">
        姓名:<input ng-model="name"/>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('myCtrl',function($scope){
            $scope.name = 'John Doe'
        });
    </script>
```

> 双向绑定
>> 双向绑定 在修改输入域的值时，angularjs属性的值也将修改
```
    <div ng-controller="myCtrl">
        姓名:<input ng-model="name"/>
        <h1>输入了:{{name}}</h1>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('myCtrl',function($scope){
            $scope.name = 'John Doe'
        });
    </script>
```

> 验证用户输入
```
  <form  name="myForm">
      Email:<input type="email" name="myAddress" ng-model="text">
      //当ng-show属性返回true时显示
      <span ng-show="myForm.myAddress.$error.email">不是一个合法的邮箱地址</span>
  </form>
```

> 应用状态
>> ng-model可以为应用数据提供状态值(invalid dirty touched error)。
```
    <form name="myForm" ng-init="myText='yshaow@126.com'">
        Email:
        <input type="email" name='myAddress' ng-model="myText" required>
        <h1>状态</h1>
        {{myForm.myAddress.$valid}}
        {{myForm.myAddress.$dirty}}
        {{myForm.myAddress.$touched}}
        {{myForm.myAddress.$error}}
    </form>
```
>> ng-model基于它们的状态为HTML元素提供了CSS类
```
  <style>
    input.ng-invalid {
        background-color: lightblue;
    }
  </style>
  <body>

  <form ng-app="" name="myForm">
      输入你的名字:
      <input name="myAddress" ng-model="text" required>
  </form>
```
>> ng-model指令根据表单域的状态 添加 / 移除以下类
>>> 1.ng-empty
>>> 2.ng-not-empty
>>> 3.ng-touched
>>> 4.ng-untouched
>>> 5.ng-valid
>>> 6.ng-invalid
>>> 7.ng-dirty
>>> 8.ng-pending
>>> 9.ng-pristine

## angular 作用域(scope)
> angularjs scope
>> 1. scope是应用在HTML(视图)和js(控制器)之间的纽带
>> 2. scope是一个对象，有可用的方法和属性
>> 3. scope可应用在视图和控制器上的

> **如何使用scope**
>> 当你在angularjs创建控制器时，你可以将$scope对象当作一个参数传递
```
    //控制器中的属性对应了视图上的属性
    <div ng-controller="ctrl1">
        <h1>{{name}}</h1>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.name='我是$scope';
        });
    </script>
    //注意：视图中不需要添加$scope前缀，只需要添加属性名即可
```

> **scope概述**
>> angularjs 应用组成如下:
>> 1. View视图 即HTML
>> 2. Model模型 当前视图中可用的数据(scope)
>> 3. Controller控制器 即js函数，可以添加或修改属性

>> scope是模型，它是一个js对象，带有属性和方法，这些属性和方法可以在视图和控制器中使用。
```
    //当修改了视图，模型和控制器也会相应的更新
    <div ng-controller="ctrl1">
        <input type="text" ng-model="name">
        <h1>名字：{{name}}</h1>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.name='我是$scope';
        });
    </script>
```

> **scope作用范围**
>> 当前作用域
  ```
    //当前作用域
    <div ng-controller="ctrl1">
        <ul>
            <li ng-repeat="name in names">{{name}}</li>
        </ul>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.names=["Emil","Tobias","Linus"];
        });
    </script>
  ```
>> 根作用域
>>> 所有的应用都有一个$rootScope，它可以作用在ng-app指令包含的所有HTML元素中。
>>> $rootScope可以作用域整个应用中。是各个controller的scope的桥梁。用rootscope定义的值，可以在各个controller中使用。
```
    //创建控制器时，将$rootScope作为参数传递 可在应用中使用
    <div ng-controller="ctrl1">
        <ul>
            <li ng-repeat="name in names">{{name}}</li>
        </ul>
        <h1>{{name}}</h1>
    </div>
    <div ng-controller="ctrl2">
        <ul>
            <li ng-repeat="name in names">{{name}}</li>
        </ul>
        <h1>{{name}}</h1>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope,$rootScope){
            $scope.names=["Emil","Tobias","Linus"];
            $rootScope.name ='我是root scope'
        });
        app.controller('ctrl2',function($scope){

        })
    </script>
```

## angularjs控制器
> angularjs控制器 控制angularjs 应用程序的数据
> angularjs控制器时常规的**js对象**
#### angularjs控制器
> angularjs应用程序被控制器控制
> ng-controller定义了应用程序的控制器
> 控制器是js对象，由标准的js对象的构造函数创建
> angularjs使用$scope对象来调用控制器，$scope是一个应用象(属于应用变量和函数)。控制器的$scope(相当于作用域、控制范围)用来保存angularjs model的对象。
```
    <div ng-controller="ctrl1">
        <ul>
            <li ng-repeat="name in names">{{name}}</li>
        </ul>
        <button ng-click="say()">点我！</button>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.names=["Emil","Tobias","Linus"];
            $scope.say = function(){
                alert('你好！')
            }
        });
    </script>
```

## angularjs过滤器
> 过滤器可以使用一个管道字符(|)添加到表达式和指令中
#### angularjs过滤器 -- 用于转换数据
> 1. currency 格式化数字为货币格式
> 2. filter 从数组项中选择一个子集
> 3. lowercase 格式化字符串为小写
> 4. orderBy 根据某个表达式排列数组
> 5. uppercase 格式化字符串大写
##### 表达式中添加过滤器
> 过滤器可以通过一个管道符号|和一个过滤器添加到表达式中
`<p>{{'Abc' | uppercase}}</p>`
##### 指令中添加过滤器
> 过滤器可以通过管道符号和一个过滤器添加到指令中
`<p ng-bind="100 | currency"></p>`
##### 过滤器输入
> 输入过滤器可以通过一个管道符号和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称
```
    <div ng-controller="ctrl1">
            <p><input type="text" ng-model="test"></p>
        <ul>
            <li ng-repeat="name in names | filter:test | orderBy:'country'">
                {{(name.name | uppercase) + ', ' + name.country }}
            </li>
        </ul>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.names=[
            {name:'Jani',country:'Norway'},
            {name:'Hege',country:'Sweden'},
            {name:'Kai',country:'Denmark'}
            ];
        });
    </script>
```

## angularjs服务
> angularjs中你可以创建自己的服务或使用内建服务。
#### 什么是服务
> 在angularjs中，服务是一个函数或对象，可以在你的angularjs应用中使用，angularjs内建了30多个服务。
> 示例：有个$location服务，它可以返回当前页面的URL地址
```
    //注意：$location服务是作为一个参数传递到controller中，如果要使用它，需要在controller中定义
    <div ng-controller="ctrl1">{{myUrl}}</div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope,$location){
            $scope.myUrl = $location.absUrl();
        });
    </script>
```
#### 为什么要使用服务
> $http是angularjs应用中最常见的服务。服务向服务器发送请求，应用响应服务器传递过来的数据
> angularjs会一直监控应用，处理事件变化，angularjs使用$location服务比使用window.location对象更好。

#### $http服务
> $http是angularjs应用中最常见的服务。服务向服务器发送请求，应用响应服务器传送过来的数据
```
    <div ng-controller="ctrl1">{{data}}</div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope,$http){
           $http.get('test.json').then(function (response) { 
               $scope.data = JSON.stringify(response.data);
           })
        });
    </script>
```

#### $timeout服务
> $timeout服务对应js window.setTimeout函数
```
    <div ng-controller="ctrl1">{{data}}</div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope,$timeout){
           $scope.data = '你好';
           $timeout(function(){
            $scope.data = "不好！"
           },3000)
        });
    </script>
```

#### $interval服务
> angularjs $interval服务对应js window.setInterval函数
```
    <div ng-controller="ctrl1">{{date}}</div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope,$interval){
           $scope.date = new Date().toLocaleTimeString();
           $interval(function(){
            $scope.date = new Date().toLocaleTimeString()
           },1000)
        });
    </script>
```

#### 创建自定义服务
> 可以创建访问自定义服务，链接到你的模块中
```
    <script>
        var app = angular.module('myApp',[]);
        //创建名为myService的服务
        app.service('myService',function(){
            this.myFunc = function(x){
                return x.toString(16);
            };

            this.say = function(msg){
                alert(msg);
            }

        })
        //在控制器中使用自定义的服务
        app.controller('ctrl1',function($scope,myService){
           myService.say('自定义服务！');
        });
    </script>
```
> 过滤器中，使用自定义服务
>> 当创建了自定义服务，并链接到你的应用上后，你可以在控制器，指令，过滤器或其他服务中使用它
>> 注意：过滤器要使用访问自定义服务，需要在定义过滤器的时候独立添加
```
    <div ng-controller="ctrl1">{{255 | myFormat}}</div>
    <script>
        var app = angular.module('myApp',[]);
        //创建名为myService的服务
        app.service('myService',function(){
            this.myFunc = function(x){
                return x.toString(16);
            };

            this.say = function(msg){
                alert(msg);
            }

        })
        //在控制器中使用自定义的服务
        app.controller('ctrl1',function($scope,myService){
           myService.say('自定义服务！');
        });

        //自定义过滤器中使用自定义服务
        app.filter('myFormat',['myService',function(myService){
            return function(x){
                return myService.myFunc(x);
            }
        }])
    </script>
```

## angularjs XMLHttpRequest
> $http服务是angularjs中的一个核心服务，用于读取远程服务器的数据

#### $http.get(url)用于读取服务器数据的函数
```
    <div ng-controller="ctrl1">
        <ul>
            <li ng-repeat="name in names">{{name.Name + ', ' + name.Country }}</li>
        </ul>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        //在控制器中使用自定义的服务
        app.controller('ctrl1',function($scope,$http){
           $http.get('http://www.runoob.com/try/angularjs/data/Customers_JSON.php')
           .success(function(response){
               $scope.names = response.records;
           });
        });
    </script>
```

## angularjs select 选择框
> angularjs 可以使用数组或对象创建一个下拉列表的选项
#### 使用ng-options创建选择框
> 在angularjs中我们可以使用ng-option指令来创建一个下拉列表，列表项通过对象和数组循环输出。
```
    <div ng-controller="ctrl1">
        <select 
        ng-model="selectedName"
        ng-options="x for x in names"
        ></select>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        //在控制器中使用自定义的服务
        app.controller('ctrl1',function($scope){
           $scope.names = ["Google", "Runoob", "Taobao"];
           $scope.selectedName = "Runoob";
        });
    </script>
```
#### ng-options VS ng-repeat
> 我们也可以使用ng-repeact来创建下拉列表
```
  <select>
    <option ng-repeat="x in names">{{x}}</option>
  </select>
```
> ng-repeat指令是通过数组来循环html代码来创建下拉列表，但ng-options指令更适合创建下拉列表。它的优势：使用ng-options的选项的一个对象，ng-repeat是一个字符串。
> 假如:
```
$scope.sites = [
    {site : "Google", url : "http://www.google.com"},
    {site : "Runoob", url : "http://www.runoob.com"},
    {site : "Taobao", url : "http://www.taobao.com"}
];
```
> ng-repeact的局限性，选择值时一个字符串
```
<select ng-model="selectedSite">
  <option ng-repeat="x in sites" value="{{x.url}}">{{x.site}}</option>
</select>
```
> 使用ng-options指令 选择的值是一个对象
```
<select ng-model="selectedSite" ng-options="x.site for x in sites">
</select>
```

> 数据源是一个对象
```
    $scope.sites = {
        site01 : "Google",
        site02 : "Runoob",
        site03 : "Taobao"
    };

    <div ng-controller="ctrl1">
        <select 
        ng-model="selectedName"
        ng-options="key for (key,value) in names"
        ></select>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        //在控制器中使用自定义的服务
        app.controller('ctrl1',function($scope){
           $scope.names = {
            site01 : "Google",
            site02 : "Runoob",
            site03 : "Taobao"
           };
           $scope.selectedName = "Runoob";
        });
    </script>
```

## angularjs 表格
> ng-repeat指令可以完美的显示表格
#### 在表格中显示数据
```
    <div ng-controller="ctrl1">
       <table>
           <tr ng-repeat="x in names">
               <td>{{x.City}}</td>
               <td>{{x.Country}}</td>
           </tr>
       </table>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope,$http){
            $http.get('test.json')
            .success(function(response){
                $scope.names = response.records;
            })
        });
    </script>
```

#### 使用orderBy过滤器
```
  <table>
      <tr ng-repeat="x in names | orderBy:'Country'">
          <td>{{x.City}}</td>
          <td>{{x.Country}}</td>
      </tr>
  </table>
```

#### 使用uppercase过滤器
```
  <table>
      <tr ng-repeat="x in names | orderBy:'Country'">
          <td>{{x.City}}</td>
          <td>{{x.Country | uppercase}}</td>
      </tr>
  </table>
```

#### 显示序号$index
```
 <table>
      <tr ng-repeat="x in names | orderBy:'Country'">
          <td>{{$index + 1}}</td>
          <td>{{x.City}}</td>
          <td>{{x.Country | uppercase}}</td>
      </tr>
  </table>
```

#### 使用$even $odd
```
  <table>
      <tr ng-repeat="x in names | orderBy:'Country'">
          <td>{{$index + 1 +","+ $even+","+ $odd}}</td>
          <td>{{x.City}}</td>
          <td>{{x.Country | uppercase}}</td>
      </tr>
  </table>
```

## angularjs HTML DOM
> angularjs 为HTML DOM元素的属性提供了绑定应用数据的指令
> 1. ng-disabled 直接绑定应用程序数据到html的disabled属性
```
    <div ng-controller="ctrl1" ng-init="mySwitch=true">
        <button ng-disabled="mySwitch" ng-click="click()">点我啊</button>
        <p><input type="checkbox" ng-model="mySwitch"></p>
        <p>{{mySwitch}}</p>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
           $scope.click = function(){
               alert('哈哈');
           };
        });
    </script>
```
> 2. ng-show 隐藏或显示html元素
```
  <p ng-show="true">我是可见的。</p>
  <p ng-show="false">我是不可见的。</p>
```
> 3. ng-hide指令用于隐藏或显示HTML元素
```
  <p ng-hide="true">我是不可见的。</p>
  <p ng-hide="false">我是可见的。</p>
```

## angularjs 事件
> angularjs有自己的HTML事件指令
#### ng-click指令 定义angularjs的点击事件
```
    <div ng-controller="ctrl1" ng-init="count = 0">
        <button ng-click="count = count + 1">点我啊！</button>
        <p>{{ count }}</p>
    </div>
```

## angularjs 模块
> 模块定义了一个应用程序
> 模块是应用程序中不同部分的容器
> 模块是应用控制器的容器
> 控制器通常属于一个模块
#### 创建模块
> 可以通过angularjs的angular.module函数来创建模块
```
  <div ng-app="myApp"></div>
  <script>
    var app = angular.module('myApp',[]);
  </script>
```
#### 添加控制器
```
  <div ng-app="myApp" ng-controller='myCtrl'></div>
  <script>
    var app = angular.module('myApp',[]);
    app.controller('myCtrl',function($scope){

    })
  </script>
```
#### 添加自定义指令
```
  <div ng-app="myApp" runoob-directive></div>
  <script>
    var app = angular.module("myApp", []);
    app.directive("runoobDirective", function() {
        return {
            template : "我在指令构造器中创建!"
        };
    });
  </script>
```

## angularjs 表单
> angularjs 表单是输入控件的集合
```
    //novalidate 属性是在 HTML5 中新增的。禁用了使用浏览器的默认验证。
    <div ng-controller="ctrl1">
       <form novalidate>
           <div>
               First Name:
               <input ng-model="user.firstName" type="text">
           </div>
           <div>
               Last Name:
               <input ng-model="user.lastName" type="text">
           </div>
           <button ng-click="reset()">重置</button>
       </form>
       <p>form:{{user}}</p>
       <p>master:{{master}}</p>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.master = {firstName:'哈哈',lastName:'嘻嘻'};
            $scope.reset = function(){
                $scope.user = angular.copy($scope.master);
            }
            $scope.reset();
        });
    </script>
```

## angularjs 输入验证
> angularjs 表单和控件可以验证输入的数据
> angularjs 表单和控件可以提供验证功能，并对用户输入的非法数据进行警告
```
    <div ng-controller="ctrl1">
        <form name="myForm" novalidate>
            <p>
                用户名:<br/>
                <input type="text" name="user" ng-model="user" required>
                <span style="color:red" ng-show="myForm.user.$dirty && myForm.user.$invalid">
                    <span ng-show="myForm.user.$error.required">用户名是必须的</span>
                </span>
            </p>
            <p>
                邮箱:<br/>
                <input type="email" name='email' ng-model='email' required>
                <span style="color:red" ng-show="myForm.email.$dirty && myForm.email.$invalid">
                    <span ng-show="myForm.email.$error.required">邮箱是必须的</span>
                    <span ng-show="myForm.email.$error.email">非法的邮箱</span>
                </span>
            </p>
            <p>
                <input 
                ng-disabled="
                myForm.user.$dirty && myForm.user.$invalid ||
                myForm.email.$dirty && myForm.email.$invalid
                "
                type="submit">
            </p>
        </form>
    </div>
    <script>
        var app = angular.module('myApp',[]);
        app.controller('ctrl1',function($scope){
            $scope.user = '小五';
            $scope.email = 'yshaow@126.com';
        });
    </script>
    //$dirty	表单有填写记录
    //$valid	字段内容合法的
    //$invalid	字段内容是非法的
    //$pristine	表单没有填写记录
```

## angularjs Bootstrap
> angularJs的首选样式表是Twitter Bootstrap。
> `<link rel="stylesheet" href="//apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css">`

## angularjs 包含
#### angularjs 包含
> 在angularjs中，你可以在HTML中包含HTML文件
##### 在html中包含html文件
> 在html中，目前还不支持包含html文件的功能
##### 服务端包含
> 大多数服务端脚本都支持包含文件功能，使用ssl可以在html中包含html文件并发送到客户端浏览器。
```
//PHP实例
<?php require("navigation.php"); ?>
```
##### 客户端包含
> 通过js有很多方式可以在html中包含html文件。通常我们使用http请求从服务端获取数据，返回的数据我们可以通过使用innerHTML写入到HTML元素中。
##### angularjs包含
> 使用angularjs，可以使用ng-include指令来包含HTML内容
```
<div ng-include=" 'test.html' "></div>

//test.html
<p>我是测试</p>
```

## angularjs 动画
> angularjs提供了动画效果，可以配合css使用
> angularjs使用动画需要引入angular-animate.min.js 库
  `<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular-animate.min.js"></script>`
> 还需要在应用中使用模型ngAnimate
  `<body ng-app="ngAnimate">`
> 示例
```
    <div ng-controller="ctrl1">
        隐藏: <input type="checkbox" ng-model="myCheck">
        <div ng-hide='myCheck'>哈哈哈</div>
    </div>
    <script>
        //如果我们应用已经设置了应用名，可以把 ngAnimate 直接添加在模型中：
        var app = angular.module('myApp',['ngAnimate']);
        app.controller('ctrl1',function($scope){
            
        });
    </script> 
```
#### ngAnimate做了什么？
> ngAnimate模型可以添加或移除class
> ngAnimate模型并不能使HTML元素产生动画，但是ngAnimate会检测事件，类似隐藏显示HTML元素，如果事件发生ngAnimate就会使用预定义的class来设置HTML元素的动画。
> angularjs添加或移除class的指令
>> 1. ng-show
>> 2. ng-hide
>> 3. ng-class
>> 4. ng-view
>> 5. ng-include
>> 6. ng-repeat
>> 7. ng-if
>> 8. ng-switch

>> ng-show和ng-hide指令用于添加或移除ng-hide class的值。其他指令会在进入DOM会添加ng-enter类，移除DOM会添加ng-leave属性。
>> 当HTML元素位置改变时，ng-repeat指令同样可以添加ng-move类
>> 此外，在动画完成后，html元素的类集合将被移除，如：ng-hide指令会添加以下类：
```
    ng-animate
    ng-hide-animate
    ng-hide-add (如果元素将被隐藏)
    ng-hide-remove (如果元素将显示)
    ng-hide-add-active (如果元素将隐藏)
    ng-hide-remove-active (如果元素将显示)
```
#### 使用CSS动画
> 使用css transition或css动画让HTML元素产生动画效果。
##### CSS过渡
```
    <div ng-controller="ctrl1">
        隐藏: <input type="checkbox" ng-model="myCheck">
        <div ng-hide='myCheck' class="test">哈哈哈</div>
    </div>
    <style>
        div.test{
            transition:height linear 3000ms;
            text-align: center;
            background-color:lightblue;
            height:100px;
        }

        .ng-hide{
            height:0 !important
        }
    </style>
    <script>
        //如果我们应用已经设置了应用名，可以把 ngAnimate 直接添加在模型中：
        var app = angular.module('myApp',['ngAnimate']);
        app.controller('ctrl1',function($scope){
            
        });
    </script> 
```
##### CSS动画
```
    div.test{
        text-align: center;
        background-color:lightblue;
        height:100px;
    }

    .ng-hide{
        animation: .5s myChange;
    }

    @keyframes myChange {
        0%{
            height:100px;
        }
        100%{
            height:0;
        }
    }
```

## angularjs 依赖注入
#### 什么是依赖注入
> 依赖注入(dependency injection 简称DI)是一种软件设计模式，在这种模式下，一个或更多的依赖(或服务)被注入(或通过引用传递)到一个独立的对象(或客户端)中，然后成为了该客户端状态的一部分。
> 该模式分离了客户端依赖本身行为的创建，这使得程序设计变得送耦合，并遵循了依赖反转和单一职责原则。与服务定位器模式形成直接对比的是，它允许客户端了解客户端如何使用该系统找到依赖。

#### angularjs提供很好的依赖注入机制，以下5个核心组件用来作为依赖注入
> value
> factory
> service
> provider
> constant

#### value 是一个简单的js对象，用于向控制器传递值(配置阶段)
```
//定义一个模块
var mainApp = angular.module('mainApp',[]);

//创建value对象 "defaultInput"并传递数据
mainApp.value("defaultInput",5);

//将 defaultInput注入到控制器
mainApp.controller('CalcController',function($scope,CalcService,defaultInput){
  $scope.number = defaultInput;

})
```

#### factory 是一个函数用于返回值 在service和controller需要时创建
> 通常我们使用factory函数来计算或返回值
```
//创建factory MathService 用于两数的乘积
mainApp.factory('MathService',function(){
  var factory = {};

  factory.multiply = function(a,b){
    return a * b;
  }

  return factory;
});


//在service中注入 factory MathService
mainApp.service('CalcService',function(MathService){

  this.square = function(a){
    return MathService.multiply(a,a);
  }
})
```

#### provider
> angularjs中通过provider创建一个service factory等
> provider中提供了一个factory方法get(),它用于返回value 或 service 或factory。
```
mainApp.config(function($provide) {
  $provide.provider('MathService',function(){
    this.$get = function(){
      var factory = {};

      factory.multiply = function(a,b){
        return a * b;
      }

      return factory;
    }
  })
};
```
#### constant
> constant常量 用来在配置阶段传递数值，注意这个常量在配置阶段是不可用的

#### 示例
```
    <div ng-controller="CaloController">
        <p>输入一个数字: <input type="number" ng-model="number"></p>
        <button ng-click="square()">X<sup>2</sup></button>
        <p>结果:{{ result }}</p>
    </div>
    <script>
        var app = angular.module('myApp',[]);

        // app.config(function($provide){
        //     $provide.provider('MathService',function(){
        //         this.$get = function() {
        //             var factory = {};

        //             factory.multiply = function(a,b) {
        //                 return a * b;
        //             }

        //             return factory;
        //         }
        //     });
        // });

        app.value('defaultInput',5);

        app.factory('MathService',function(){
            return {
                multiply:function(a,b){
                    return a * b;
                }
            }
        });

        app.service('CalcService',function(MathService){
            this.square = function(a){
                return MathService.multiply(a,a);
            }
        });

        app.controller('CaloController',function($scope,CalcService,defaultInput){
            $scope.number = defaultInput;
            $scope.result = CalcService.square($scope.number);

            $scope.square = function(){
                $scope.result = CalcService.square($scope.number);
            }
        });
    </script>
```

## angularjs 路由
> angularjs路由允许我们通过不同的URL访问不同的内容
> 通过angularjs可以实现多视图的单页web应用。
> 通常我们的URL形式为http://runoob.com/first/page,但在单页web应用中angularjs通过# + 标记实现。如：http://runoob.com/#/first
> `<script src="http://apps.bdimg.com/libs/angular-route/1.3.13/angular-route.js"></script>`
> 示例
```
    <div>
        <h2>angularjs 路由应用</h2>
        <ul>
            <li><a href="#/">首页</a></li>
            <li><a href="#/computers">电脑</a></li>
            <li><a href="#/printers">打印机</a></li>
            <li><a href="#/blabla">其他</a></li>
        </ul>
        <!-- 会根据路由的变化而变化 -->
        <div ng-view></div>
    </div>
    <script>
        var app = angular.module('myApp',['ngRoute']);

        //$routeProvider 用来定制路由规则
        app.config(['$routeProvider',function($routeProvider){
            $routeProvider
            .when('/',{
                template:'首页'
            })
            .when('/computers',{
                template:'电脑分页'
            })
            .when('/printers',{
                template:'打印页面'
            })
            .otherwise({
                redirectTo:'/'
            });
        }]);
    </script>
```
#### 路由设置对象
> angularjs路由也可以通过不同的模板来实现，$routeProvider.when函数的第一个参数式URL或URL正则规则，第二个参数为路由配置对象
```
$routeProvider.when(url,{
  //如果我们只需要在ng-view中插入简单的HTML内容 则使用该参数
  template: string,//如：.when('/computers',{template:'这是电脑分类页面'})
  //如果我们只需要在ng-view中插入HTML模板文件 则使用该参数
  templateUrl: string,//templateUrl: 'views/computers.html',
  //在当前模板上执行的controller函数，生成新的scope
  controller: string, function 或 array,
  //为controller指定别名
  controllerAs: string,
  //重定向的地址
  redirectTo: string, function,
  //指定当前controller所依赖的其他模块
  resolve: object<key, function>
});

```
> 示例
```

```


## angularjs API
#### angularjs 全局API
> angularjs 全局API用于执行常见的任务的js函数集合，使用angular对象进行访问。
>> 1. angular.isNumber()
>> 2. angular.isString()
>> 3. angular.uppercase()
>> 4. angular.lowercase();

















