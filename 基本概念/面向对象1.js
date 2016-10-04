/**
 * Created by zhou on 2016/10/3.
 */
function Person(){

}
Person.prototype.name='ahui';
Person.prototype.age=25;
Person.prototype.sayname=function(){
    console.log(this.name)
};
var p1=new Person();
var p2=new  Person();
p1.name='qinghui';
console.log(p1.hasOwnProperty('name'));
console.log(p2.hasOwnProperty('name'));
console.log('name' in p1);
console.log('name' in p2);
console.log(p1.constructor==Person);