/**
 * Created by zhou on 2016/10/4.
 */
var arr=[]
for(var i=0;i<10;i++){
    arr[i]=(function(sum){
        return function (){
            console.log(sum)
        }
    })(i)


}
arr[3]()
arr[4]