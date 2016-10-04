/**
 * Created by zhou on 2016/10/4.
 */
function Super(name){
    this.name=name;
    this.colors=['yellow','black','green'];
}
Super.prototype.sayname=function(){
    console.log(this.name);
}

function Sub(name,age){
    Super.call(this,name);
    this.age=age;
}
//Sub.prototype=new Super();
//Sub.prototype.constructor=Super;
Sub.prototype.sayage=function(){
    console.log('hello,'+this.age)
}
var a=new Sub('ahui',30)
console.log(a.name)
console.log(a.sayage())