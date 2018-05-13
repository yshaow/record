## angular2.x文档总结
1. ### 架构
> 模块
>> 1.angular定义了NgModule，它和js的模块不同而且有一定的互补性。NgModule为一个组件集声明了编译的上下文环境，它专注于某个应用领域、某个工作流或一组紧密相关的能力。NgModule可以将其组件和一组相关代码(如服务)关联起来，形成功能单元。
>> 2.每个angular应用都有一个根模块，通常命名为AppModule，根模块提供了用来启动应用的引导机制。一个应用通常会包含很多功能模块。
>> 3.像js模块一样，NgModule也可以从其他NgModule中导入功能，并允许导出他们自己的功能供其它NgModule使用。

> 组件
>> 1.每个angular应用都至少有一个组件，也就是根组件，它会把组件树和页面中的DOM连接起来。每个组件都会定义一个类，其中包含应用的数据和逻辑，并与一个HTML模板相关联，该模板定义了一个供目标环境下显示的视图。
>> 2.@Component装饰器表明紧跟随它的那个类是一个组件，并提供模板和该组件专属的元数据。
>> 3.装饰器是一些用于修饰js类的函数。angular定义了许多装饰器，这些装饰器会把一些特定种类的元数据附加到类上，以便angular了解这些类的含义以及如何使用它们。

> 模板、指令和数据绑定
>> 1.模板会把HTML和angular的标记markup组合起来，这些标记可以在HTML元素显示出来之前修改它们。模板中的指令会提供程序逻辑而绑定标记会把你应用中的数据和DOM连接在一起。
>> 2.事件绑定让你的应用可以通过更新应用的数据来响应目标环境下的用户输入。
>> 3.属性绑定让你将从应用数据中计算出来的值插入到HTML中。
>> 4.在视图显示出来之前，angular会先根据你的应用数据和逻辑来运行模板中的指令并解析绑定表达式，以修改HTML和DOM。angular支持双向数据绑定，这意味着DOM中发生的变化同样可以反映你的程序数据中。
>> 5.模板也可以用管道转换要显示的值以增强用户体验，如：使用管道来显示适合用户所在地区的日期和货币格式。

> 服务于依赖注入
>> 1.对于与特定视图无关并希望跨组件共享的数据或逻辑可以创建服务类。服务类的定义通常紧跟在@injectable装饰器之后，该装饰器提供的元数据可以让你的服务作为依赖被注入到客户组件中。
>> 2.依赖注入或DI让你可以保持组件类的精简和高效。有DI组件就不用从服务器获取数据、验证用户输入或直接把日志写到控制台，而是会把这些任务委托给服务。

> 路由
>> 1.angular的Router模块提供了一个服务，它可以让你定义在应用的各个不同状态和视图层次结构之间导航时要使用的路径。它的工作模型基于人们熟知的浏览器导航约定。
>>> 1.在地址栏输入 URL，浏览器就会导航到相应的页面。
>>> 2.在页面中点击链接，浏览器就会导航到一个新页面。
>>> 3.点击浏览器的前进和后退按钮，浏览器就会在你的浏览历史中向前或向后导航。
>> 2.不过路由器会把类似URL的路径映射到视图而不是页面。当用户执行一个动作时(如：点击链接)，本应该在浏览器中加载一个新的页面，但是路由器拦截了浏览器的这个行为并显示或隐藏一个视图层次结构。

2. ### 模块NgModule
> 简介
>> 1.angular应用是模块化的，它拥有自己的模块化系统称为NgModule。一个NgModule就是一个容器，用于存放一些内聚的代码块，这些代码块专注于某个应用领域、某个工作流或一组紧密相关的功能，它可以包含一些组件、服务提供商或其他代码文件，其作用域由包含它们的NgModule定义。它还可以导入一些由其他模块中导出的功能，并导出一些指定的功能供其他NgModule使用。
>> 2.每个angular应用都至少有一个NgModule类，也就是根模块，它习惯上命名为AppModule，并位于一个名叫app.module.ts的文件中。引导这个根模块就可以启动你的应用。虽然小型的应用可能只有一个NgModule，不过大多数应用都会有很多特性模块。应用的根模块之所以叫根模块是因为他可以包含任意深度的层次化的子模块。

> NgModule的元数据
>> 1.NgModule是一个带有@NgModule装饰器的类。@NgModule装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。
>> 2.元数据对象
>>> 1.declarations 可声明对象表，那些属于本NgModule的组件、指令、管道
>>> 2.exports 导出表，那些能在其他模块的组件模板中使用的可声明对象的子集
>>> 3.imports 导入表，那些导出了本模块中的组件模板所需的类的其他模块
>>> 4.providers 本模块向全局服务中贡献的那些服务的创建器，这些服务能被本应用中的任何部分使用。**你也可以在组件级别指令服务提供商，这通常是首选方式**
>>> 5.bootstrap 应用的主视图，称为根组件。它是应用中所有其他视图的宿主。**只有根模块才应该设置这个bootstrap属性**

>> 3.示例
    ```
    import {NgModule} from '@angular/core';
    import {BrowserModule} from '@angular/platform-browser';

    @NgModule({
        imports: [BrowserModule],
        providers: [Logger],
        declarations: [AppComponent],
        exports: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule{}
    ```
> NgModule和组件
>> 1.NgModule为其中的组件提供了一个编译上下文环境。根模块总会有一个根组件，并在引导期间创建它。但是人物模块都能包含任意数量的其他组件，这些组件可以通过路由器加载，也可以通过模板创建。那些属于这个NgModule的组件会共享同一个编译上下文环境。
> NgModule和js的模板
>> 1.NgModule系统与js用来管理js对象的模块系统不同，而且也没有直接关联。这两种模块系统不同但互补，你可以使用它们来共同编写的应用。
>> 2.js中每个文件是一个模块，文件中定义的所有对象都从属于哪个模块。通过export关键字模块可以把它的某些对象声明为公共的，其他的js模块可以使用import语句来访问这些公共对象。
>> 3.示例
```
import { NgModule }     from '@angular/core';
import { AppComponent } from './app.component';
export class AppModule { }
```

> angular自带的库
>> 1.angular自带了一组js模块，可以把他们看成库模块。每个angular库的名称都带有@angular前缀。使用npm安装他们，并使用js的import语句导入其中的各个部分。
>> 2.示例
>>> 从@angular/core中导入Component装饰器 js模块
`import {Component} from '@angula/core'`
>>> 从angular库中导入angular模块 js模块
`import {BrowserModule} from '@angular/platform-browser'`
>>> NgModule模块
`imports: [BrowserModule]`

3. ### 组件
> 简介
>> 1.组件控制屏幕上被称为视图的一小片区域。你在类中定义组件的应用逻辑，为视图提供支持，组件通过一些由属性和方法组成的API与视图交互。

> 组件的元数据
>> 1.@Component装饰器会指出紧跟随其后的那个类是个组件类，并为其指定元数据。
>> 2.组件的元数据告诉angular到哪里获取它需要的主要构造块，以创建和展示这个组件及其视图。具体来说它把一个模板无论是直接内联在代码中还是引用的外部文件和该组件关联起来。该组件及其模板共同描述了一个视图。除了包含或指向模板之外，@Component的元数据还会配置要如何在HTML中引用该组件，以及该组件需要哪些服务等等。
>> 3.元数据对象
>>> 1.selector 是css选择器，它会告诉angular一旦在模板HTML中找到这个选择器对应的标签就创建并插入该组件的一个实例。
>>> 2.templateUrl 该组件的HTML模板文件相对于这个组件文件的地址。另外还可以用template属性的值来提供内联的HTML模板。这个模板定义了该组件的宿主视图。
>>> 3.providers 是当前组件所需的依赖注入提供商的一个数组。

> 模板与视图
>> 1.你要通过组件的配套模板来定义其视图。模板就是一种HTML，它会告诉angular如何渲染该组件。

> 模板语法
>> 1.模板很像标准的HTML，但是它还包含angular的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和DOM数据来修改这些HTML。你的模板可以使用**数据绑定**来协调应用和DOM中的数据，使用**管道**在显示出来之前对其进行转换，使用**指令**来把程序逻辑应用到要显示的内容上。
>> 2.数据绑定
>>> 1. {{value}} 插值表达式，显示组件中的属性值
>>> 2. [property]="value" 属性绑定，把父组件的值传到子组件的属性中
>>> 3. (event)="handler"
>>> 4. [(ng-model)]="property" 双向数据绑定，它把属性绑定和事件绑定合成一种单独的写法。数据属性值通过属性绑定从组件流到输入框，用户的修改通过事件绑定流回到组件。

>> 3.管道
>>> 1.angular的管道可以让你在模板中声明显示值的转换逻辑。带有@Pipe装饰器的类中会定义一个转换函数，用来把输入值转换成供视图显示用的输出值。
>>> 2.要在HTML模板中指定值的转换方式，需使用管道操作符(**|**)。如：`{{interpolated_value | pipe_name}}`
>>> 3.可以把管道串联起来，把一个管道函数的输出送给另一个管道函数进行转换。管道还能接收一些参数来控制它该如何转换。`<p>The time is {{today | date:'shortTime'}}</p>`。

>> 4.指令
>>> 1.angular的模板是动态的，当angular渲染他们的时候，会根据指令给出的指示对DOM进行转换。指令就是一个带有@Directive装饰器的类。
>>> 2.组件从技术角度上说就是一个指令，但是由于组件对angular应用来说非常独特、非常重要，因此angular专门定义了@Component装饰器，它使用一些面向模板的特性扩展了@Directive装饰器。
>>> 3.除了组件外，还有两种指令：**结构型指令**和**属性型指令**，和组件一样，指令的元数据把指令类和一个selector关联起来，selector用来把该指令插入到HTML中。在模板中指令通常作为属性出现在元素标签上，可能仅仅作为名字出现，也可能作为赋值目标或绑定目标出现。
>>> 4.结构型指令
>>>> 结构型指令通过添加、移除或替换DOM元素来修改布局。如*ngFor *ngIf
>>> 5.属性型指令
>>>> 属性型指令会修改现有元素的外观或行为。在模板中它们看起来像普通的HTML属性一样。ngModel指令就是一个属性型指令，它实现了双向数据绑定，ngModel修改现有元素的行为：设置其属性值，并响应change事件。

4. ### 服务与依赖注入
> 简介
>> 1.服务是一个广义的概念，它包括应用所需的任何值、函数或特性、狭义的服务是一个明确定义了用途的类，它应该做一些具体的事并做好。
>> 2.angular把组件和服务区分开，以提高模块性和复用性。
> 依赖注入，简称DI被引入到angular框架中，并且到处使用它，来为新建的组件通过所需的服务或其他东西。
>> 1.注入器是主要的机制，你不用自己创建angular注入器，angular会在启动过程中为你创建全应用级的注入器，该注入器维护了一个保护它已经创建的依赖实力的容器，并尽可能的复用他们。
>> 2.提供商是一个创建依赖的菜谱，对于服务来说它通常就是这个服务类本身，你在应用中要用到的任何类都必须使用该应用的注入器注册一个提供商，以便注入器可以使用它来创建新实例。
>> 3.当angular创建组件类的新实例时，它会通过查看该组件类的构造器，来决定该组件依赖那些服务或其他依赖项。如:`constructor(private service: HeroService) { }`
>> 4.当angular发现某个组件依赖某个服务时，它会首选检查是否该注入器中已有了那个服务的任何现有实例，如果所请求的服务尚不存在，注入器就会使用以前注册的服务提供商来制作一个，并把它加入注入器中，然后把该服务返回给angular。
>> 5.提供服务
>>> 对于要用到的任何服务，你必须至少注册一个提供商，可以在模块中或组件中注册这些提供商。当你往根模块中添加服务提供商时，服务的同一实例会服务于你的应用中的所有组件。
```
providers: [
  BackendService,
  HeroService,
  Logger
],
```
>>> 当你在组件级注册提供商时，你会为该组件的每一个新实例提供该服务的一个新实例，要在组件级注册，就要在@Component元数据的providers属性中注册服务提供商。
```
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
```

5. ### 模板与数据绑定
> 显示数据
>> 1.在angular中最典型的数据显示方式就是把HTML模板中的控件绑定到angular组件的属性。
>> 2.使用插值表达式显示组件属性
>>> 要显示组件的属性，最简单的方式就是通过插值表达式来绑定属性名。要使用插值表达式就把属性名包裹在双花括号里放进视图模板，如{{name}}

>> 3.内联inline模板还是模板文件
>>> 你可以在两个地方存放组件模板，你可以使用template属性把它定义为内联的或者把模板定义在独立的HTML文件中，在通过@Component装饰器中的templateUrl属性，在组件元数据中把它链接到组件。
>>> 默认情况即 ng generate component hero 生成的组件时会带有模板文件，你可以通过ng generate component hero -it生成内联的。

>> 4.使用构造函数还是变量初始化？
>>> 使用了变量赋值的方式初始化组件，你也可以使用构造函数来声明和初始化属性。
```
export class AppCtroComponent {
    title: string;
    myHero: string;

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
    }
}
```

>> 5.使用ngFor显示数组属性
```
<li *ngFor="let hero of heroes">{{hero}}</li>
```

>> 6.为数据创建一个类 ng generate class hero
```
export class Hero {

    // 具有一个构造函数和两个属性 利用了TypeScript提供的简写形式，用构造函数的参数直接定义属性
    constructor(
        // 声明了一个构造函数参数及其类型
        // 声明了一个同名的公共属性
        // 当创建该类的一个实例时把该属性初始化为相应的参数值
        public id: number,
        public name: string
    ) {}
}

// 返回一个类型化的Hero对象数组
heroes = [
    new Hero(1, 'Windstorm')
];
```

>> 7.通过ngIf进行条件显示 在DOM中添加和移除这个段落
```
<p *ngIf="heroes.length > 3">There are many heroes!</p>
```

> 模板语法
>> 1.从使用模型-视图-控制器MVC或模型-视图-视图模型MVVM的经验中，很多开发人员都熟悉了组件和模板这两个概念。在angular中，组件扮演者控制器或视图模型的角色，模板扮演着视图的角色。

>> 2.模板中的HTML
>>> HTML是angular模板的语言，几乎所有的HTML语法都是有效的模板语法。但值得注意的是**`<script>`**元素它被禁用了，以阻止脚本注入攻击的风险(实际上`<script>`只是被忽略了)。
>>> 有些合法的HTML被用在模板中是没有意义的。`<html>、<boby>、<base>`元素这个舞台上中并没有扮演有用的角色。

>> 3.插值表达式 {{...}}
>>> 插值表达式可以把计算后的字符串插入到HTML元素标签内的文本或对标签的属性进行赋值。

>> 4.模板表达式
>>> 模板表达式产生一个值。angular执行这个表达式，并把它赋值给绑定目标的属性，这个绑定目标可能是HTML元素、组件或指令。
>>> {{1+1}}中所包含的模板表达式是1+1，在属性绑定中会在此看到模板表达式，它出现在=右侧的引号中如： [property]="expression"。
>>> 很多js表达式是合法的模板表达式，但不全是合法的。js中那些具有或可能引发副作用的表达式是被禁止的。
>>>+ 赋值(= += -=...)
>>>+ new运算符
>>>+ 使用;或,的链式表达式
>>>+ 自增或自减运算符 ++ --

>>> 和js语法其他显著不同的包括：
>>>+ 不支持位运算| 和 &
>>>+ 具有新的模板表达式运算符 如| ?. !

>> 5.表达式上下文
>>> 表达式的上下文包括：组件内的属性、模板输入变量(let hero)、模板引用变量(#heroInput)。
```
 {{title}}
 <div *ngFor="let hero of heroes">{{hero.name}}</div>
 <input #heroInput> {{heroInput.value}}
```
>>> 表达式的上下文变量是由模板变量、指令的上下文变量和组件的成员叠加而成的。如果你要引用的变量名存在于一个以上的命名空间中，那么**模板变量是最优先的,其次是指令的上下文变量,最后是组件的成员**。
>>> 模板表达式不能引用全局命名空间中的任何东西，如window或document。它们也不能调用console或Math的方法。它们只能引用表达式上下文中的成员。

>> 6.表达式指南,其原则：
>>+ 没有可见的副作用
>>+ 执行迅速
>>+ 非常简单
>>+ 幂等性

>> 7.模板语句
>>> 模板语句用来响应由绑定目标(HTML元素、组件或指令)触发的事件。模板语句将在事件绑定一节看到，它出现在=号的右侧的引号中(event)="statement"
>>> 模板语句有副作用，这是事件处理的关键，因为你要根据用户的输入更新应用状态。
>>> 和模板表达式一样，模板语句使用的语言也像js。模板语句解析器和模板表达式解析器有所不同，特别之处在于它支持基本赋值(=)和表达式链(;和,)。
>>> 然而某些js语法任然是不允许的：
>>>+ new运算符
>>>+ 自增和自减运算符 ++ --
>>>+ 操作并赋值 += -=
>>>+ 位操作符 | &
>>>+ 模板表达式运算符

>>> 1.语句上下文
>>>> 和表达式一样，语句只能引用语句上下文 通常是正在绑定事件的那个组件实例。
>>>> 典型的语句上下文就是当前组件的实例
>>>> 语句上下文可以引用模板自身上下文中的属性如模板的$event对象、模板输入变量let hero 和模板引用变量#heroForm
```
<button (click)="onSave($event)">Save</button>
<button *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
<form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
```
>>>> 模板上下文中的变量名的优先级高于组件上下文中的变量名。模板语句不能引用全局命名空间的任何东西如：window document等等。

>>> 2.语句指南
>>>> 和表达式一样，避免写复杂的模板语句，常规是函数调用或者属性赋值。

>> 8.绑定语法
>>> 1.数据绑定是一种机制，用来协调用户所见和应用数据。虽然你能往HTML推送值或从HTML拉取值，但如果把这些琐事交给数据绑定框架来处理，应用会更加容易编写与维护。
>>> 2.绑定的类型可以根据数据流的方向分成三类：
>>>+ 从数据源到视图 -- 单向
>>>>- {{expression}} 插值表达式
>>>>- [target]='expression'或bind-target='expression' 属性 css类样式
>>>+ 从视图到数据源
>>>>- (target)='statement'或on-target='statement' 事件
>>>+ 从视图到数据源再到视图 -- 双向
>>>>- [(target)]='expression'或bindon-target='expression'

>>> 3.模板绑定是通过property和事件来工作的而不是attribute
>>>+ attrbute是由HTML定义的 property是由DOM定义的
>>>+ attrbute初始化DOM property，然后attrbute就任务完成了，property的值是可变的，attribute的值是不能改变得。

>>> 4.绑定目标
>>>> 数据绑定的目标是DOM中的某些东西，这个目标可能是元素|组件|指令的property、元素|组件|指令的事件、或极少数情况下的attribute名
>>>>+ 属性
```
<img [src]='heroImageUrl'/> // 元素的property
<app-hero-detail [hero]='currentHero'/> //组件的property
<div [ngClass]="{'special': isSpecial}"/> //指令的property
```
>>>>+ 事件
```
<button (click)="onSave()"/> // 元素的事件
<app-hero-detail (deleteRequest)='deleteHero()'/> // 组件的事件
<div (myClick)="cliced=$event" clickable> //指令的事件
```

>>>>+ 双向 事件与property
`<input [(ngModel)]='name'/>`

>>>>+ attribute
`<button [attr.aria-label]='help'/>`

>>>>+ css类 class property
`<div [class.special]="isSpecial">Special</div>`

>>>>+ 样式 style property
`<button [style.color]="isSpecial ? 'red' : 'green'">`

>>> 5.属性绑定[属性名]
>>>> 当要把视图元素的属性property设置为模板表达式时，就要写模板的属性property绑定。
>>>> 最常用的属性绑定就是把元素属性设置为组件属性的值：`<img [src]="heroImageUrl">`
>>>> 设置指令的属性：<div [ngClass]="classes">[ngClass] binding to the classes property</div>
>>>> 设置自定义组件的模型属性 -- 这是父子组件之间通讯的重要途径
`<app-hero-detail [hero]="currentHero"></app-hero-detail>`

>>>>- 单向输入，经常把属性绑定描述成单向数据绑定，因为值的流动是单向的，从组件的数据属性流动到目标元素的属性。不能使用属性绑定来从目标元素拉取值，也不能绑定到目标元素的属性来读取它。只能设置它，

>>>>- 绑定目标，包裹早方括号中的元素属性名记着目标属性。
```
<img [src]='heroImageUrl'/>

// 用bind-前缀的可选形式，称为 规范形式
<img bind-src="heroImageUrl"/>
```

>>>>- 消除副作用，模板表达式的计算不能有可见的副作用。表达式语言本身提供一部分安全保障。不能再属性绑定表达式中对任何东西赋值，也不能使用自增 自减运算符。

>>>>- 返回恰当的类型，模板表达式应该返回目标属性所需类型的值

>>>>- 需要方括号，方括号告诉angular要计算模板表达式，如果忘了加方括号，angular会把这个表达式当做字符串常量看待，并用该字符串来初始化目标属性，它不会计算这个字符串。

>>>>- 一次性字符串初始化，当满足下列条件时，应该省略括号。
>>>>>+ 目标属性接收字符串值
>>>>>+ 字符串是固定值，可以直接合并到模块中。
>>>>>+ 这个初始值永不改变。
>>>>>+ 如：<app-hero-detail prefix="You are my" ></app-hero-detail>

>>>>- 属性绑定还是插值表达式？
```
// 如下是完全一样的效果
<p><img src="{{heroImageUrl}}"> is the <i>interpolated</i> image.</p>
<p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>

<p><span>"{{title}}" is the <i>interpolated</i> title.</span></p>
<p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>

// 在多数情况下，插值表达式是更方便的备选项。实际上，在渲染视图之前，angular把这些插值表达式翻译成相应的属性绑定。
// 当要渲染的数据类型是字符串时，倾向于插值表达式，但是数据类型不是字符串时就必须使用**属性绑定**了。
```

>>> 6.attribute、class、style绑定，模板语法为那些不太适合使用属性绑定的场景提供了专门的单向数据绑定形式。
>>>+ attribute绑定，可以通过attribute绑定来设置attrbute的值。考虑到aria、svg和table中的colspan/rowspan等attribute。它们是纯粹的attribute，没有对应的属性property可供绑定。
```
// 错误 插值表达式和属性绑定只能设置property属性  不能设置attribute。
<td colspan="{{ 1 + 1}}">

// attribute绑定的语法与属性绑定类似，但方括号中的部分不是元素的属性名，而是由attr前缀、一个点.、和attribute的名字组成，可以通过值为字符串的表达式来设置attribute的值。
<td [attr.colspan]="1 + 1">

// attribute绑定的主要用例之一是设置ARIA attribute(ARIA指可访问性，用于给残障人士访问互联网提供便利)
<button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
```

>>>+ CSS类绑定，借助CSS类绑定，可以从元素的class attribute上添加和移除CSS类名。css类绑定的语法与属性绑定类似，但是方括号中的部分不是元素的属性名而是由class前缀、点.、css类的名字组成，其中**后两部分是可选的**如:[class.class-name]。
```
<div [class.special]="isSpecial">The class binding is special</div>
// 可以通过ngClass指令来同时管理多个类名
```

>>>+ 样式绑定，通过样式绑定，可以设置内联样式，由style前缀、点.、css样式的属性名组成。如:[style.style-property]
```
<button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>

// 有些样式带有单位，根据条件用em和%来设置字体大小的单位
<button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>

// 可以使用ngStyle指令来同时设置多个内联样式
// 注意：样式属性命名方法可以用中划线命名法，也可以用驼峰式命名法。
```

>>> 7.事件绑定 (事件名)，事件绑定语法由等会左侧带圆括号的目标事件和右侧引号中的模板语句组成。`<button (click)="onSave()">Save</button>`
>>>+ 目标事件 圆括号中的名称
```
<button (click)="onSave()">Save</button>
// 规范形式
<button on-click="onSave()">On Save</button>
```
>>>+ $event和事件处理语句，在事件绑定中，angular会为目标事件设置事件处理器。
```
<input [value]="currentHero.name"
       (input)="currentHero.name=$event.target.value" >
```

>>>+ 使用EventEmitter实现自定义事件，通常指令使用EventEmitter来触发自定义事件。指令创建一个EventEmitter实例，并且把它作为属性暴露出来。指令调用EventEmitter.emit(payload)来触发事件，可以传入任何东西作为消息载荷。父指令通过绑定到这个属性来监听事件，并通过$event对象来访问载荷。
```
// hero-deatil
template:`
    <span [style.text-decoration]='lineThrough'>
        {{prefix}} {{hero?.name}}
    </span>
    <button (click)="delete()">Delete</button>
`

deleteRequest = new EventEmitter<Hero>();

delete(){
    this.deleteRequest.emit(this.hero);
}

// 假设现有一个宿主的父组件，它绑定了HeroDetailComponent 的 deleteRequest 事件。
<app-hero-detail (deleteRequest)="deleteHero($event)" [hero]="currentHero"></app-hero-detail>
// 当deleteRequest事件触发时，angular调用父组件的deleteHero方法，在$event变量中传入要删除的英雄(来自HeroDetail)
```
>>>+ 模板语句有副作用，deleteHero方法有副作用：删除了一个英雄。模板语句的副作用不仅没有问题，反而正是所期望的。

>>> 8.双向数据绑定 [(...)],需要显示数据属性并在用户做出更改时更新该属性。即既要设置元素属性，又要监听元素事件变化。
```
//sizer.component
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component ({
    selector: 'app-sizer',
    template: `
        <div>
            <button (click)="dec()" title="smaller">-</button>
            <button (click)="inc()" title="bigger">+</button>
            <label [style.font-size.px]="size">{{size}}px</label>
        </div>
    `
})
export class SizerComponent {
    @Input() size: number | string;
    @Output() sizeChange = new EventEmitter<number>();

    dec() {this.resize(-1)}
    inc() {this.resize(+1)}

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }
}

// app.component
<app-sizer [(size)]="fontSizePx"></app-sizer>
<div [style.font-size.px]="fontSizePx">Resizable Text</div>
// SizerComponent.size初始值是AppComponent.fontSizePx。点击按钮时通过双向绑定更新AppComponent.fontSizePx。

// 双向绑定语法实际上是属性绑定和事件绑定的语法糖，即上面代码分解如下：
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>

// 如果能在<input>和<select>这样的HTML元素上使用双向数据绑定就好啦，可惜原生的HTML元素不遵循x值和xChange事件的模式。幸运的是angular以ngModel指令为桥梁允许在表单元素上使用双向数据绑定。
```

>>> 9.内置指令
>>>+ 属性型指令，会监听和修改其他HTML元素或组件的行为、元素属性attribute、DOM属性property。它们通常会作为HTML属性的名称而应用在元素上。
>>>>- NgClass 添加或移除一组CSS类
```
// CSS类绑定是添加或删除单个类的最佳途径
<div [class.special]="isSpecial">The class binding is special</div>

// 当想要同时添加或移除多个CSS类时，NgClass指令可能是更好的选择
// 把NgClass绑定到一个key:value形式的控制对象，这个对象中的每个key都是一个CSS类名，如果它的value是true，这个类就会被加上，否则就会被移除。

currentClasses: {};
setCurrentClasses() {
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}
<div [ngClass]="currentClasses"></div>
```
>>>>- NgStyle 添加或移除一组CSS样式
```
// 样式绑定是设置单一样式值的简单方式
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >
  This div is x-large or smaller.
</div>

// 如果要同时设置多个内联样式，NgStyle指令可能是更好的选择
// NgStyle需要绑定到一个key：value控制对象，对象的每个key是样式名，它的value是能用于这个样式的任何值
currentStyles: {};
setCurrentStyles() {
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}
<div [ngStyle]="currentStyles"></div>
```
>>>>- NgModel 双向绑定到HTML表单元素
```
// 当开发数据输入表单时，通常都要既显示数据属性又根据用户的更改去修改那个属性
// 使用NgModel指令进行双向数据绑定可以简化这种工作
<input [(ngModel)]="currentHero.name">

// 同上
<input [value]='currentHero.name'
    (input)='currentHero.name=$event.target.value'
>
// 同上 ngModel指令通过自己的输入属性ngModel和输出属性ngModelChange隐藏了上面细节
<input
    [ngModel]='currentHero.name'
    (ngModelChange)='currentHero.name=$event'
>

// [(ngModel)]语法只能设置数据绑定属性，如果要做更多或者不一样的事，可以写它的展开式
<input
    [ngModel]="currentHero.name"
    (ngModelChange)="setUppercaseName($event)">
>

// 注意：使用ngModel时需要FormsModule，在使用ngModel指令进行双向数据绑定之前，必须导入FormsModule并把它添加到angular模块的imports列表中。

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule {}

```
>>>+ 结构型指令,它的职责是HTML布局。它们塑造或重塑DOM的结构，这通常是通过添加、移除和操纵它们所附加到的宿主元素来实现的。
>>>>- NgIf 根据条件把一个元素添加到DOM中或从DOM中移除
```
// 通过把NgIf指令应用到元素上(称为宿主元素)，你可以往DOM中添加或从DOM中移除这个元素
<app-hero-detail *ngIf="isActive"></app-hero-detail>

// 这和显示隐藏不一样，可以通过类绑定或样式绑定来显示或隐藏一个元素
<app-hero-detail [class.hidden]="isSpecial"></app-hero-detail>
<div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>

// ngIf指令通常会用来防范空指针错误，而显示隐藏式无法防范的，当一个表达式尝试访问空值的属性时，angular就会抛出一个异常。
<div *ngIf="currentHero">Hello, {{currentHero.name}}</div>
```
>>>>- NgSwitch 一组指令，用来在多个可选视图之间切换，NgSwitch指令类似于js的switch语句，它可以从多个可能的元素中根据switch条件来显示某一个。angular只会把选中的元素放进DOM中。NgSwitch实际上包括三个相互协作的指令：NgSwitch NgSwitchCase NgSwitchDefault。
```
<div [ngSwitch]="currentHero.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
</div>
```


>>>>- NgForOf 对列表中的每个条目重复套用同一个模板
```
// NgFor是一个重复器指令，自定义数据显示的一种方式。
<div *ngFor="let hero of heroes">{{hero.name}}</div>
<app-hero-detail *ngFor="let hero of heroes" [hero]="hero"></app-hero-detail>

// 模板输入变量
// hero前的let关键字创建了一个名叫hero的模板输入变量。ngFor指令在由父组件的heroes属性返回的heroes数组上迭代，每次迭代都从数组中把当前元素赋值给hero变量。你可以在ngFor的宿主元素及其子元素中引入模板输入变量hero从而方法该英雄的属性。

// 带索引的*ngFor
// NgFor指令上下文的index属性返回一个从零开始的索引，表示当前条目在迭代中的顺序，你可以通过模板输入变量捕获这个index的值，并把它用模板中。
<div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>

// 带trackBy的*ngFor 避免angular在数据更新时都重新渲染，提高性能，使用trackBy来追踪值
trackByHeroes(index: number, hero: Hero): number { return hero.id; }
<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
  ({{hero.id}}) {{hero.name}}
</div>

```

>>> 10.模板引用变量 #var,模板引用变量通常用来引用模板中的某个DOM元素，它还可以引用angular组件或指令或Web Component。
```
// 使用井号 # 来声明引用变量 #phone的意思是声明一个名叫phone的变量来引用<input>元素
<input #phone placeholder="phone number">

// 你可以在模板中的任何地方引用模板引用变量，比如声明在<input>上的变量phone变量就是在模板另一侧<button>上使用的
<button (click)="callPhone(phone.value)">Call</button>

// 模板引用变量怎么得到它的值的？
// 大多数情况下，angular会把模板引用变量的值设置为声明它的那个元素，不过指令也可以修改这种行为，让这个值引用到别处，如它自身，NgForm指令就是这么做的。
<form (ngSubmit)="onSubmit(heroForm)" #heroForm="ngForm">
  <div class="form-group">
    <label for="name">Name
      <input class="form-control" name="name" required [(ngModel)]="hero.name">
    </label>
  </div>
  <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>
</form>
<div [hidden]="!heroForm.form.valid">
  {{submitMessage}}
</div>

// 注意：模板引用变量的作用范围是整个模板，不要再同一模板中多次定义同一变量名，否则它在运行期间的值是无法确定的。

// 也可以用ref-前缀代替#
<input ref-fax placeholder="fax number">
<button (click)="callFax(fax.value)">Fax</button>
```

>>> 11.输入和输出属性
```
// 输入属性是一个带有@Input装饰器的可设置属性，当它通过属性绑定的形式被绑定时，值会流入这个属性。

// 输出属性是一个带有@Output装饰器的可观察对象型的属性，这个属性几乎总是返回angular的EventEmitter。当它通过事件绑定的形式被绑定时，值会流出这个属性。

// 总是可以在组件自己的模板中绑定到组件的**公共属性**，而不用管他们是否输入或输出属性。
<img [src]="iconUrl"/>

// 所有数据绑定属性必须是TypeScript的公共属性即public，angular永远不会绑定到TypeScript中的私有属性。所以不能用TypeScript的public和private访问控制符来表明组件之间的公共API。
// 因此angular需要一些其他方式来标记出那些允许被外部组件绑定到的属性，这种其他方式就是@Input 和 @Output()装饰器。

// 声明输入与输出属性
// 方式1
@Input() hero: Hero;
@Output() deleteRequest = new EventEmitter<Hero>()
// 方式2
@Component({
  inputs: ['hero'],
  outputs: ['deleteRequest'],
})

// 输入属性通常是接收数据值，输出属性是暴露事件生产者

// 给输入 输出属性启别名
<div (myClick)="clickMessage=$event" clickable>click with myClick</div>
// 方式1
@Output('myClick') clicks = new EventEmitter<string>();
// 方式2
@Directive({
  outputs: ['clicks:myClick']  // propertyName:alias
})

```

>>> 12.模板表达式操作符，模板表达式语言使用了js语法的子集，并补充了几个用于特定场景的特殊操作符。
>>>+ 管道操作符 |, 管道是一个简单的函数，它接收一个输入的值，并返回转换结果
```
<div>Title through uppercase pipe: {{title | uppercase | lowercase}}</div>

// 使用参数
<div>Birthdate: {{currentHero?.birthdate | date:'longDate'}}</div>
```
>>>+ 安全导航操作符 ?. 和空属性路径，?.是一种流畅而便利的方式，用来保护出现在属性路径中的null和undefined值。
```
// 当currentHero为空时保护视图渲染器，让他免于失败
{{currentHero?.name}}
```

>>>+ 非空断言操作符!
```
// 在TypeScript 2.0中，你可以使用--strictNullChecks标志强制开启严格空值检查。
// TypeScript就会确保不存在意料以外的null或undefined。
// 在这种模式下，有类型的变量默认是不允许null或undefined值的，如果有未赋值的变量，或者试图把null或undefined赋值给不允许为空的变量，类型检测器就会抛出错误。如果类型检查器在运行期间无法确定一个变量是null或undefined，那么他也会抛出错误，你自己可能知道它不会为空，但类型检查器不知道，所以你要告诉类型检查器，它不会为空，这时就要用到***非空断言操作符*。
<div *ngIf="hero">
  The hero's name is {{hero!.name}}
</div>
//在 Angular 编译器把你的模板转换成 TypeScript 代码时，这个操作符会防止 TypeScript 报告 "hero.name 可能为 null 或 undefined"的错误。

// 与安全导航操作符不同的是，非空断言操作符不会防止出现 null 或 undefined。 它只是告诉 TypeScript 的类型检查器对特定的属性表达式，不做 "严格空值检测"。

// 如果你打开了严格控制检测，那就要用到这个模板操作符，而其它情况下则是可选的。
```

>>> 13.类型转换函数$any $any<表达式>
```
// 有时候，绑定表达式可能会报类型错误，并且它不能或很难指定类型，要消除这种报错，可以使用$any转换函数把表达式转换成any类型。
<div>
  The hero's marker is {{$any(hero).marker}}
</div>
// 当angular编译器把模板转换成TypeScript代码时，$any表达式可以防止TypeScript编译器报错说marker不是Hero接口的成员。

// $any转换函数可以和this联合使用，以便访问组件中未声明过的成员
<div>
  Undeclared members is {{$any(this).member}}
</div>
// $any 转换函数可以在绑定表达式中任何可以进行方法调用的地方使用。
```

> 生命周期钩子



























