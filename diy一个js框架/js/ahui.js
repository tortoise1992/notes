/**
 * Created by ahui on 2016/10/6.
 */
function Ahui(){

}
Ahui.prototype={
    ajax:function(type,url,fn){
        var request = new XMLHttpRequest();
        request.open(type, url, true);
        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    var resp = this.responseText;
                    fn();
                } else {
                    // Error :
                    console.log('fail to load info!')
                }
            }
        };
        request.send();
        request = null;
    },
    //过度效果--淡入函数
    fadeIn:function(el) {
        var opacity = 0;

        el.style.opacity = 0;
        el.style.filter = '';

        var last = +new Date();
        var tick = function() {
            opacity += (new Date() - last) / 400;
            el.style.opacity = opacity;
            el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';
            last = +new Date();
            if (opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    },
    hide:function(el){
        el.style.display='none';
    },
    show:function(el){
        el.style.display='';
    },
    addClass:function(el,classname){
        if (el.classList)
            el.classList.add(classname);
        else
            el.className += ' ' + classname;
    },
    children:function(el){
        var children = [];
        for (var i = el.children.length; i--;) {
            // Skip comment nodes on IE8
            if (el.children[i].nodeType != 8)
                children.unshift(el.children[i]);
        }
        return children;
    },
    clone:function(el){
        return el.cloneNode(true);
    },
    addEventListener:function(el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function(){
                handler.call(el);
            });
        }
    },
    ready:function (fn) {
        if (document.readyState != 'loading'){
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState != 'loading')
                    fn();
            });
        }
    }

}
var ahui=new Ahui();