$(document).ready(function () {
    $(".nav-user").hover(function () {
        $(this).children(".user-down").css("display", "block");
    }, function () {
        $(this).children(".user-down").css("display", "none");
    })

    $.ajax({
        url: "http://mock.shtodream.cn/mock/5e5c7910baf5c011f5fce706/example/meizu",
        success: function (res) {
            console.log(res);
            // console.log(res.data[0].secondNav[0].name);
            $.each(res.data, function (index, value) {
                // console.log(value.secondNav[index].name);
                $(".product").append(
                    `
                        <li><a href="">${value.firstNav}</a></div></li>
                    `
                )
                value.secondNav ? $.each(value.secondNav, function (i, v) {
                    $(".down").eq(i).append(
                        `
                        <div class="down-1">
                            <div class="down-2">
                                <ul class="down-ul"></ul>
                            </div>
                        </div>
                        `
                    )
                    $(".down-ul").eq(index).append(
                        `
                            <li><a href=''><i style='background-image:url(${v.img})'></i>${v.name}<span></span><em>${v.money}</em></a></li>
                        `
                    )
                }) : null;

            })
        }
    })

    setTimeout(() => {
        $(".product").children("li:nth-child(1),li:nth-child(2),li:nth-child(3),li:nth-child(4)").hover(function (){
            $(".down").slideDown();
            $(".down-1").hide().eq($(this).index()).show();
        },function(){})
    },1000);
    $('body').mousemove(function(e) {  
        var pageY=e.pageY;
        if(pageY >264){
            $(".down").slideUp();
        }        
    })
})

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});