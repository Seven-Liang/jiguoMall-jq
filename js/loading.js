



$(function(){

            //  下拉加载
            var indexnum =0;
    $(".commore").click(function(){ 
        var self=$(this)
        self.html("正在加载中...").removeClass("clickmore").addClass("loadmore")
        $.ajax({
            type:"get",
            url:"json/json.js",
            dataType:"json",
            success:function(data){
                console.log(data)
                // 这是数组好吗？
                // 数组内数组
                // console.log(data[0][0].img)
                // console.log(data[0][0].text)
                // console.log(data[0][0].price)
                // //获取data的索引
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


    
 })



