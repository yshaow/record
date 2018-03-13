# underscore #
>   underscore一个js实用库，提供了一整套函数式编程的使用功能，但是没有扩展任何js内置对象。

## 集合函数(数组或对象) ##
* each  
> alias: forEach
```
//list 需要遍历的对象 或 数组 或类数组 即 集合
//iteratee 回调函数 (item,index,list) => {}
//context 绑定this对象
_.each(list,iteratee,[context])
```

* map
> alias：conllect
```
//通过对list里的每个元素调用转换函数 生成一个与之相对应的数组
_.map(list,iteratee,[context])
```

* reduce
> aliases：inject或foldl
```
//reduce方法把list中元素归结为一个单独的数值
//memo 是reduce函数的初始值，会被每一次成功调用iteratee函数的返回值所取代
//iteratee (memo,value,index,list) => {}
//如果没有memo传递给reduce的初始调用,iteratee不会被列表中的第一个元素调用，第一个元素将取代memo参数传递给列表中下一个元素调用的iteratee函数
_.reduce(list,iteratee,[memo],[context])
```

* reduceRight
> alias：foldr
```
//reduceRight是从右侧开始组合元素的reduce函数
_.reduceRight(list,iteratee,memo,[context])
```

* find
> alias：detect
```
//在list中逐项查找 返回第一个通过predicate迭代函数真值检查的元素值，如果没有元素通过检查则返回undefined，如果找到匹配的元素 函数将立即返回 不会遍历整个list
_.find(list,predicate,[context]);
```

* filter
> alias：select
```
//遍历list中的每个值，返回所有通过predicate真值检查的元素所组成的数组。
_.filter(list,predicate,[context])
```

* where
```
//遍历list中的每个值，返回一个数组，这个数组里的元素包含properties所列出的键值对
_.where(list,properties);
```