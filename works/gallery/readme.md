###
> html代码部分

```
    <div class="light-box">
        <div class="box-close">

        </div>
        <div class="content">
            <img class="loading" src="../ajax-loader-overlay.gif" >
            <img class="imgs" src alt="" >
        </div>
    </div>
```

> css代码部分
```

.light-box{
    position: fixed;
    left: 0;
    top:0;
    background-color: rgba(0,0,0,.5);
    z-index: 1000;
    display: none;
}
.light-box .foot-review{
    position: absolute;
    width: 100%;
    height: 130px;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.75);
}
.light-box .foot-review .item{
    float: left;
    margin: 15px 10px 0 0;
    cursor: pointer;
}
.light-box .foot-review .item img{
    height: 100px;
    display: block;
}
.foot-review .item .cover{
    position: absolute;
    left: 0;
    top:0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.light-box .loading{
    position: fixed;
    left: 50%;
    top:50%;
    margin: -16px 0 0 -16px;
}
.light-box .content{
    position: absolute;
    top:0;
    left: 50%;
}
.light-box .imgs{
    display: none;
    cursor: pointer;

}
.light-box .box-close{
    position: fixed;
    right: 10px;
    top:10px;
    width: 60px;
    height: 60px;
    background:url("../img/close.png") no-repeat center center;
    cursor: pointer;
}
```

> js主要逻辑
```

function getSearchDate(data) {
    var num=0;
    var i=0;
    var W=$(window).width()+17;
    var H=$(window).height();
    var photonav=$('.foot-review');

    //根据传递的数据创建相册

    var str='';
    var url = baseUrl + "/motif/motifByPicList?objectid=" + data;
    $.ajax({
        url: url,
        dataType: "json",
        cache: false,
        async: false,
        success: function (data) {
            var photoList = data.response.photoList;
            if (photoList != null && photoList != "" && photoList.length > 0) {
                for (var a = 0; a < photoList.length; a++) {

                    var bean = photoList[a];
                    var picPath = bean.photoHost + bean.photoUrl + bean.photoBuff;
                    str +='<div class="item relative">'
                    str +='<img src="'+picPath+'" alt="">'
                    str +='<div class="cover"></div>'
                    str +='</div>'

                }
                photonav.append(str);
                //初始化相册
                $('body').css('overflow','hidden');
                $('.light-box').show();

                $('.light-box').width(W).height(H);
                //打开相册默认加载第一张
                $('.foot-review .item').first().children('.cover').hide();
                var furl=$('.foot-review .item').first().find('img').attr('src');
                $('.light-box .content').find('.imgs').attr('src',furl).load(function(){
                    $('.light-box .loading').hide();
                    var ml=-($('.light-box .imgs').width()/2);
                    $('.light-box .content').css('margin-left',ml+'px');
                    $(this).fadeIn();
                });
                var imgheight=H-150;
                $('.light-box .imgs').height(imgheight);


                //清空相册
                function clearGallery(){
                    photonav.empty();
                }

                //底部缩略图切换

                $('.foot-review .item').on('click',function(){
                    i=$(this).index();
                    $('.light-box .imgs').hide();
                    $('.light-box .loading').show();
                    $('.light-box .content').find('.imgs').attr('src','')
                    $('.foot-review .cover').show();
                    $(this).children('.cover').hide();
                    var localurl=$(this).children('img').attr('src');
                    $('.light-box .content').find('.imgs').attr('alt',i)
                    $('.light-box .content').find('.imgs').attr('src',localurl).load(function(){
                        $('.light-box .loading').hide();
                        $(this).fadeIn();
                        var ml=-($('.light-box .imgs').width()/2);
                        $('.light-box .content').animate({'margin-left':ml+'px'},0);


                    });
                })
                //点击图片区分左右进行切换
                function img_switch(){
                    $('.light-box .imgs').on('click',function(e){
                        var limit=$('.foot-review .item').size();
                        num=Number($(this).attr('alt'));
                        var pos= e.pageX-$(this).offset().left;
                        var border=$(this).width()/2;
                        // 判断点击了右半部分
                        if(pos>border && pos<border*2){
                            num++;
                            if(num<limit){
                                $('.light-box .imgs').hide();
                                var switchurl=$('.foot-review .item').eq(num).children('img').attr('src');
                                $('.light-box .content').find('.imgs').attr('alt',num);

                                $('.foot-review .cover').show();
                                $('.foot-review .item').eq(num).children('.cover').hide();

                                $('.light-box .content').find('.imgs').attr('src',switchurl).load(function(){
                                    $('.light-box .loading').hide();
                                    $(this).fadeIn();
                                    var ml=-($('.light-box .imgs').width()/2);
                                    $('.light-box .content').animate({'margin-left':ml+'px'},0);

                                });
                            }
            // 判断点击了左半部分
                        }else if(pos>0 && pos<border){
                            num--;
                            if (num>=0){
                                $('.light-box .imgs').hide();
                                var switchurl=$('.foot-review .item').eq(num).children('img').attr('src');
                                $('.light-box .content').find('.imgs').attr('alt',num);

                                $('.foot-review .cover').show();
                                $('.foot-review .item').eq(num).children('.cover').hide();

                                $('.light-box .content').find('.imgs').attr('src',switchurl).load(function(){
                                    $('.light-box .loading').hide();
                                    $(this).fadeIn();
                                    var ml=-($('.light-box .imgs').width()/2);
                                    $('.light-box .content').animate({'margin-left':ml+'px'},0);


                                });
                            }
                        }

                    })
                }

                img_switch();

                //关闭相册
                function closeGallery(){

                    $('.box-close').on('click',function(){
                        $('body').css('overflow','auto');
                        $('.light-box').hide();
                        clearGallery();
                        $('.light-box .content').find('.imgs').attr('alt','');
                    })
                }
                closeGallery();

            }
        }
    });
}
```