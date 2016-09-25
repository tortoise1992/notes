/**
 * Created by zhou on 2016/9/25.
 */
//var obj1=new Object();
//var obj2=obj1;
//obj1.name='ahui';
//obj2.name='666'
//console.log(obj1.name+' '+obj2.name)

//参数按值传递的
//function a(obj){
//    obj.name='test1'
//}
//var p=new Object();
//p.name='test2'
//a(p)
//console.log(p.name)

//function a(obj){
//    obj.name='test1'
//    obj=new Object();
//    obj.name='test3'
//}
//var p=new Object();
//p.name='test2'
//a(p)
//console.log(p.name)

//var co=[1,2,3,4]
//console.log(co instanceof Array)

//for(var i=0;i<3;i++){
//    console.log('haha')
//}
//function add(i){
//    return i+i
//}
//i=4
//console.log(i)
//console.log(add(i));

//var a=['ahui','666','hahaha']
//console.log(a.join('-'))

//var num=[34,52,12,2,46,8]
//function compare(val1,val2){
//    return val2-val1
//}
//num.sort(compare);
//console.log(num)

//数组slice()
var a=[1,2,4,5,7,22,356]
console.log(a.slice(3))
console.log(a.slice(3,5))

a.splice(2,2,'ahui','666')
console.log(a)

//数组迭代的方法
var b=a.every(function(item,index,array){
    return item>2
})
console.log(b)
var c=a.some(function(item,index,array){
    return item>2
})
console.log(c)

var d=a.filter(function(item,index,array){
    return item>2
})
console.log(d)

var e=a.map(function(item,index,array){
    return item+' '+index

})
console.log(e)

//仅支持ie9以上，遍历数组
a.forEach(function(item,index,array){
    console.log(item)
})