



$(function(){
    
    $(".next").click(function(){ 
        var ul = $(".hot ul")
        if(!ul.is(":animated")){
            ul.animate({
                left: "-1000"
            },800,function(){
                //将第一个li放到最后一个li后
                ul.find("li").eq(0).appendTo($('.hot ul'))
                //再将本来移动的第一个li恢复，因为需要恢复第一个li
                ul.css("left",0)
            })
        }
       
    })

    $(".prev").click(function(){ 
        var ul = $(".hot ul")
        if(!ul.is(":animated")){
            //将li最后一个添加到ul最前面
        ul.find("li").last().prependTo($(".hot ul"))
        //将第一个li先隐藏
        ul.css("left","-1000px")
        //显示第一个li
        ul.animate({
            left:0
        },800)
        }
        
    })

    clearInterval(t)
    var t=setInterval(function(){
        var ul = $(".hot ul")
        ul.animate({
            left: "-1000"
        },1000,function(){
            //将第一个li放到最后一个li后
            ul.find("li").eq(0).appendTo($('.hot ul'))
            //再将本来移动的第一个li恢复，因为需要恢复第一个li
            ul.css("left",0)
        })
    },2000)

        $(".slide-box").mouseover(function(){
            clearInterval(t)
        })
        $(".slide-box").mouseout(function(){
            clearInterval(t)
            t=setInterval(function(){
                var ul=$(".hot ul")
                ul.animate({
                    left:"-1000"
                },1000,function(){
                    ul.find("li").eq(0).appendTo($(".hot ul"))
                    ul.css("left",0)
                })
            },2000)
        })   

            //  下拉加载
            var indexnum =0;
    $(".commore").click(function(){ 
        var self=$(this)
        self.html("正在加载中...").removeClass("clickmore").addClass("loadmore")
        $.ajax({
            type:"get",
            url:"json/json1.js",
            dataType:"json",
            success:function(data){
                console.log(data)
                // 这是数组好吗？
                // 数组内数组
                console.log(data[0][0].img)
                console.log(data[0][0].text)
                console.log(data[0][0].price)
                //获取data的索引
                var data1=data[indexnum]
                var param=""
                //data的长度
                
                for(var n=0;n<data1.length;n++){
                    param += '<li><a href="#"><img src="'+data1[n].img+'"/><div class="info"><p class="name">'+data1[n].text+'</p><p class="price left">'+data1[n].price+'</p><p class="fix right"><span class="xin">3</span><span class="talk">3</span></p></div></a></li>'
                }
                
                self.parent().prev().append(param)
                indexnum++
                self.html("点击加载更多").removeClass("loadmore").addClass("clickmore")
                if(indexnum >= data.length){
                    self.parent().html("<span>没有更多了</span>")
                  
                }
            }
        })
    })

    

    // $(window).scroll(function(){
    //     if($(window).scrollTop()>=100){
    //         $('#backtop').show()
    //     }else{
    //         $('#backtop').hide()
    //     }
    // })
    // $("#backtop").click(function(){
    //     $("html,body").animate({
    //         scrollTop:0
    //     },200)
    // })


    $("#backtop").backbtn({
		isBack:true,
		scrollTop:100,
		position:"right",
        offset:100,     
	})
 })



