$(function(){
    //判断当前是否可以请求数据，当他为true时不可以，false可以
    var load = false;
    var indexnums=[0,0,0,0]
    $(window).scroll(function(){
        var self=$(this)
        if(load) return
        //当前页面的宽度
        var dh = $("body").height();
        //当前窗口的高度
        var wh = $(this).height();
        //footer的高度
        var fh = $("footer").height()
        if($(window).scrollTop() >= dh-wh-fh){
            load = true
            //console.log(dh+","+wh+","+fh)
            //判断当前那个选项卡被选中
            var index = $(".use-nav .on").index()
            var url
            switch (index) {
                case 0:url="json/data.js"  
                break
                case 1:url="json/sq.js"
                break
                case 2:url="json/sy.js"
                break
                case 3:url="json/js.js"
                break
            }
            $.ajax({
                type:"get",
                url:url,
                dataType:"json",
                success:function(data){
                    console.log(data)
                    console.log(data[0][0].img)
                    // console.log(data[0][0].text)
                    // console.log(data[0][0].price)
                    // //获取data的索引
                    
                    if(indexnums[index]>=data.length){
                        load = false
                        return
                    }
                    var data1=data[indexnums[index]]
                    var param=""
                    // //data的长度
                    
                    for(var n=0;n<data1.length;n++){
                        param += '<li><a href="" class="con"><span class="sf">首发</span><img src="'+data1[n].img+'"><h3 class="title">'+data1[n].text+'</h3><p class="label red redline"> <span>2032</span><span>20台</span></p><p class="sq"><span>1392</span>申请</p><p class="current red">时间剩余两天</p></a></li>'
                    }
                    // console.log(self.parent().prev())
                    // self.parent().prev().append(param)
                    // $("main ul li:last-child").prev().append(param)
                    $("main ul").append(param)
                    indexnums[index]++
                    // self.html("点击加载更多").removeClass("loadmore").addClass("clickmore")
                    if(indexnums[index] >= data.length){
                        // $("main ul").append('<div class="btn-more"><span>没有更多了</span></div>')
                      
                    }
                    load = false
                }
            })
            
        }
    })
})