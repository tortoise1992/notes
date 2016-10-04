/**
 * Created by zhou on 2016/10/3.
 */
var str='http://www/baidu.com/news/photo.111';
var url=encodeURIComponent(str)
console.log(url);

//获取范围内的随机数
function selectRandom(low,up){
    var choices=up-low+1;
    return Math.floor(Math.random()*choices+low);
}

console.log(selectRandom(2,100))

//计算a的b次幂
console.log(Math.pow(2,30))