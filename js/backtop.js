(function($){
    $.fn.extend({
        "backbtn":function(options){
            //默认值 如果用户不传 就按照默认值得属性来走
        var obj={
            isBack:true,
            scrollTop:0,
            position:"left",
            width:1000,
            offset:0,
            speed:800,
            ifShow:false,
            bottom:100
            }
            //extend()将两个参数合拼，第二个的属性替换第一个的属性
            var ops = $.extend(obj,options)
            var $win=$(window)
            // console.log($win)
            var $dom = $(this)
            // console.log(this)
            //1.获取想要的值 2.设置想要的值 3.实现想要的功能
            var opr = {
                getLeft:function(){
                    var l 
                    var ww = $win.width()
                    var dw = $dom.outerWidth()
                    // console.log(dw)
                    // console.log(ww)
                    if(ops.position == "left"){
                        l=(ww-ops.width)/2-dw-ops.offset
                    }else if(ops.position == "right"){
                        l=(ww-ops.width)/2+ops.width+ops.offset
                    }
                    return l
                },
                gettop:function(){
                    var t
                    var wh = $win.height
                    var dw = $dom.outerHeight
                    t = wh -dw-ops.bottom
                    return t
                },
                setposition:function(){
                    var L = this.getLeft()
                    var T = this.gettop()
                    $dom.css({
                        left:L+"px",
                        top:T +"px"
                    })
                },
                //初始化插件
                // 
                init:function(){//插件的初始化
					this.setposition()
					$win.scroll(function(){
						if($win.scrollTop()>ops.scrollTop){
							$dom.show()
						}else{
							$dom.hide()
						}
					})
					$win.resize(function(){
						opr.setPosition()
					})
					if(ops.isBack){
						$dom.on("click",function(){
							$("body,html").animate({
								scrollTop:0
							},ops.speed)
						})
					}
					
					if(ops.ifShow){
						$dom.show()
					}else{
						$dom.hide()
					}

				}
            }
            opr.init()
            // console.log(init)
            return $dom
        }
        
    })
})(jQuery)