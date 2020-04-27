## jQuery如何获取元素
```
$(document) //选择文档对象
$('#myid') //获取id是myid的元素
$('.red)//获取类名为red的元素
$('input[name=first]') //选择name属性等于first的input元素 
```
## jQuery的链式操作
```
链式操作举例：$('div').find('h3').tag(1).html('hello')
//在div元素中找到h3标签，选择h3标签中的第一个tag元素，将其中的html改为hello
//也可以写成：
$('div')
    .find('h3')
    .tag(1)
    .html('hello')
```
## jQuery如何创建元素
```
//1.创建元素
$(function)(){
    var $span = $("<span></span>);
    $("body").append($span);
}
//2.创建文本
$function(){
    var $h1 = $("<h1>DOM文档对象模型</h1>");
    $("body").append($h1);
}
//3.创建属性
$(function) (){
    var $h1 = $("<h1 title="header" class="red">DOM文档对象模型</h1>");
    $("body").append($h1);
}

```
## jQuery如何移动元素
```
//假定我们选中了一个div元素，需要把它移动到p元素后面,第一种方法.insertAfter()
$('div').insertAfter($('p')); //返回div元素

//第二种方法使用.after(), 把p元素加到div元素前面
$('p').after($('div'));//返回p元素

类似的操作方法一共有4对：
.insertAfter() .after()
.insertBefore() .before()
.appendTo() .append()
.prependTo() .prepend()

```
## jQuery如何修改元素属性
```
//jQuery用attr()方法来获取和设置元素属性
$(selector).attr(attribute) //读取被选元素的属性
$(selector).attr(attribute, value) //设置被选元素的属性和值

//还可以用removeAttr删除属性
$("div1").removeAttr("style");

```