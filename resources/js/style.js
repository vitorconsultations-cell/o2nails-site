// goolge
(function(i,s,o,g,r,a,m){
	i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-80309870-1', 'auto');
ga('send', 'pageview');


(function(a) {
    a.fn.hoverDelay = function(c, f, g, b) {
        var g = g || 200,   //hover entry time
        b = b || 200,       //hover departure time
        f = f || c;
        var e = [],
        d = [];
        return this.each(function(h) {
            a(this).mouseenter(function() {
                var i = this;
                clearTimeout(d[h]);
                e[h] = setTimeout(function() {
                    c.apply(i)
                },
                g)
            }).mouseleave(function() {
                var i = this;
                clearTimeout(e[h]);
                d[h] = setTimeout(function() {
                    f.apply(i)
                },
                b)
            })
        })
    }

})(jQuery);


$(function(){

    $(".hover-dropdown").hoverDelay(
        function() {
            $(this).children('.block-dropdown-menu').slideDown()
            $(this).children('.block-dropdown-sm-menu').slideDown()
        },
        function() {
            $(this).children('.block-dropdown-menu').slideUp()
            $(this).children('.block-dropdown-sm-menu').slideUp()
        }
    );

    $('.navbar-nav > li.hover-dropdown > a').click(function(){
        $(this).next('.block-dropdown-menu').slideToggle()
        $(this).next('.block-dropdown-sm-menu').slideToggle()
    })
    // $('body').css('padding-top',$('nav').height())
    $('.openMenu').click(function(){
    	$('body').css({'position':'fixed','width':'100%','overflow':'hidden'});
    })
    $('.closeMenu').click(function(){
    	$('body').css({'position':'','width':'','overflow':''});
    })
    
    //cookie 询问
    /*setTimeout(function(){
		if(!localStorage.getItem('cookiesRead')){

            //显示询问层
	    	$('#cookies-usage').fadeIn()
	    	var scrollTimer = undefined;
    	 	$(window).scroll(function () {
                $("#cookies-usage").addClass('cookiesHide');
                clearTimeout(scrollTimer);
                scrollTimer = 
                    setTimeout(function () {
                        $("#cookies-usage").removeClass('cookiesHide');
                    }, 500);
            });
	    }
    },1000)*/

    
});

/**
 * 视频弹窗
 * 
 */
function modalVideo(url){
    if($('.videoBox').length <= 0){
		$('body').append(
	    	'<div class="modal fade videoBox" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static">'+
			  '<div class="hideModalVideo" data-dismiss="modal" onclick="hideModalVideo()">'+
	        		'<img src="../resources/img/icon/x.png" style="width: 100%;" />'+
	    		'</div>'+
			  '<div class="modal-dialog modal-lg" role="document">'+
			    	'<div class="embed-responsive embed-responsive-16by9">'+
						'<iframe class="embed-responsive-item" src="" allowfullscreen></iframe>'+
					'</div>'+
			  '</div>'+
			'</div>'
	    )
    }
    $('.videoBox iframe').attr('src',url)
    $('.videoBox').modal('show')
}

/**
 * 关闭视频弹窗
 * 
 */
function hideModalVideo(){
	$(".videoBox iframe").attr('src','')
	$(".videoBox iframe").html('')
}

/**
 * 右侧
 */
$(".btn-top").click(function(){
    $("html, body").animate({
        "scroll-top":0
    },"fast");
});
$(".menubtn").mouseenter(function(){
    $(this).find(".gobox").slideDown(100)
});
$(".menubtn").mouseleave(function(){
    $(this).find(".gobox").fadeOut(100);
});

/**
 * cookei操作
 */

//设置cookei
function setCookie(name,value) { 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/"; 
} 
//获取cookei
function getCookie(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
}
//
function agreeCookies() {
	localStorage.setItem('cookiesRead',Date.parse(new Date()))
	$('#cookies-usage').fadeOut()
}

