/**
 * Created by zhou on 2016/9/30.
 */
define(function(){
    var add=function(x,y){
        return x+y
    };
    var sum=function(x,y){
        var res=add(x,y)*x
        return res
    }
    return {
        su:sum,
        add:add
    }
})