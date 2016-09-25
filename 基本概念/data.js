/**
 * Created by zhou on 2016/9/25.
 */
function sum(a,b){
    return a+b
}
function asum(x,y){
    return sum.apply(this,[x,y])
}
function bsum(x,y){
    //apply()函数接受arguments和参数的数组
    return sum.apply(this,arguments)
}
function csum(x,y){
    //call的参数只能以枚举的形式
    return sum.call(this,x,y)
}
console.log(asum(10,20))
console.log(bsum(60,20))
console.log(csum(60,50))


//call实现的继承方法
function person(name,age){
    this.name=name;
    this.age=age;
}
person.prototype.sayhi=function(){
    console.log(this.name)
}
function student(name){
    this.name=name
}
//对象的call必须是在实例上的，而不是原型
var A=new person();
var a=new student('ahui');
A.sayhi.call(a)

