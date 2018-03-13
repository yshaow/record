var arr = [1,2,3];
// each
_.forEach(arr,function(item,index,arr){
    //console.log(item,index,arr);
});

_.each(arr,function(item,index,arr){
    //console.log(item,index,arr);
});
//map
var result = _.map({one:1,two:2},function(num,key){
    return num * 3;
})

var result2 = _.collect({one:1,two:2},function(num,key){
    return key;
});

//console.log(result,result2);

//reduce
var red = _.reduce(arr,function(memo,value){ return memo + value},0);
var inj = _.inject(arr,function(memo,value){ return memo + value},0);
var fd = _.foldl(arr,function(memo,value){ return memo + value},0);
//console.log(red,inj,fd);

//reduceRight
var list = [[0,1],[2,3],[4,5]];
var flat = _.reduceRight(list,function(a,b){ return a.concat(b)},[]);
var flat2 = _.foldr(list,function(a,b){ return a.concat(b)});
//console.log(flat,flat2);

//find
var even = _.find([1,2,3,4],function(num){return num % 2 === 0});
var even1 = _.detect([1,2,3,4],function(num){return num % 2 === 0});
//console.log(even,even1);

//filter
var evens = _.filter([1,2,3,4],function(num){return num % 2 === 0});
var evens1 = _.select([1,2,3,4],function(num){return num % 2 === 0});
//console.log(evens,evens1);

//where
var whe = _.where({a:1,b:2},{c:3,d:4});
console.log(whe);


