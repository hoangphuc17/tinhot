// POPUP TIN HOT
function openPopupTinHot (obj) {
    document.getElementById('popup-tin-hot').innerHTML = '';

    var hrefTinHot = obj.getAttribute("data-url");
    var cate = obj.getAttribute("data-cate");

    switch(cate) {
        case "cafe-tam-su":
            $('.header-popup-cafe-tam-su').addClass('active');
            break;
        case "tin-hot":
            $('.header-popup-tin-hot').addClass('active');
            break;
    }
    
    document.getElementsByName('popup-tin-hot')[0].src = hrefTinHot;
    document.getElementsByClassName('bg-overlay')[0].classList.add("active3");
    document.getElementsByClassName('popup-tin-hot')[0].classList.add("active");
    document.getElementsByClassName('popup-tin-hot')[0].classList.add("animated");
    document.getElementsByClassName('popup-tin-hot')[0].classList.add("slideInDown");

    $('body').css('overflow', 'hidden');

    window.addEventListener('message', handleMessage, false);

    // ga('send', 'pageview', hrefTinHot );

}
function closePopupTinHot () {
    $('.popup-tin-hot').removeClass('active animated slideInDown');
    $('.bg-overlay').removeClass('active3');
    $('.header-popup-cafe-tam-su').removeClass('active');
    $('.header-popup-tin-hot').removeClass('active');
    document.getElementsByName('popup-tin-hot')[0].src = '';
    $('body').css('overflow', 'unset');
    $('.post-layer').html('');
}

document.addEventListener("DOMContentLoaded", function (event) {
    $('.bg-overlay').click(function(){
        closePopupTinHot();
    });
    $('.popup-tin-hot .close').click(function(){
        closePopupTinHot(); 
    });


});

var slotsPopup = [];
window.slotsPopup = slotsPopup;
window.addEventListener('message', handleMessage, false);
function handleMessage(event) {  
    console.log('handle mess');
    if (event.origin != "https://tinnong.saostar.vn" && event.origin != "https://cafetamsu.saostar.vn" ) { return; }  
    console.log('handle mess 2');
    var data = event.data.msg;
    data = $.parseHTML(data);
  
    $('.post-layer').append(data);
    var random = Math.floor(Math.random() * 20); 
    
    googletag.cmd.push(function() {//ads detail
        slotsPopup['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai1_top', [[970, 250], [970, 90]], 'div-gpt-ad-1530933373532-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai1_hot1'] = googletag.defineSlot('/22552065/tinnong_single_bai1_hot1', [[300, 600], [300, 500]], 'div-gpt-ad-1530933520569-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai1_med1'] = googletag.defineSlot('/22552065/tinnong_single_bai1_med1', [300, 250], 'div-gpt-ad-1530933729639-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai1_med2'] = googletag.defineSlot('/22552065/tinnong_single_bai1_med2', [300, 250], 'div-gpt-ad-1530933837275-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai1_btmed1'] = googletag.defineSlot('/22552065/tinnong_single_bai1_btmed1', [300, 250], 'div-gpt-ad-1530933958516-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai1_btmed2'] = googletag.defineSlot('/22552065/tinnong_single_bai1_btmed2', [300, 250], 'div-gpt-ad-1530934047188-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai1_bottom'] = googletag.defineSlot('/22552065/tinnong_single_bai1_bottom', [970, 90], 'div-gpt-ad-1530934128975-0').addService(googletag.pubads());
        slotsPopup['/22552065/tinnong_single_bai2_hot1'] = googletag.defineSlot('/22552065/tinnong_single_bai2_hot1', [[300, 500], [300, 600]], 'div-gpt-ad-1530934621918-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai2_med1'] = googletag.defineSlot('/22552065/tinnong_single_bai2_med1', [300, 250], 'div-gpt-ad-1530934711988-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai2_med2'] = googletag.defineSlot('/22552065/tinnong_single_bai2_med2', [300, 250], 'div-gpt-ad-1530934769335-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai2_btmed1'] = googletag.defineSlot('/22552065/tinnong_single_bai2_btmed1', [300, 250], 'div-gpt-ad-1530934898452-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai2_btmed2', [300, 250], 'div-gpt-ad-1530934947463-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai2_bottom', [970, 90], 'div-gpt-ad-1530935145519-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai3_hot1', [[300, 600], [300, 500]], 'div-gpt-ad-1530935350179-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai3_med1', [300, 250], 'div-gpt-ad-1530935401820-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai3_med2', [300, 250], 'div-gpt-ad-1530935538675-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai4_hot1'] = googletag.defineSlot('/22552065/tinnong_single_bai4_hot1', [300, 600], 'div-gpt-ad-1530935600860-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai4_med1', [300, 250], 'div-gpt-ad-1530935662876-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai4_med2', [300, 250], 'div-gpt-ad-1530935709490-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai5_hot1', [300, 600], 'div-gpt-ad-1530935772839-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai5_med1tinnong_single_bai5_med1', [300, 250], 'div-gpt-ad-1530935850083-0').addService(googletag.pubads());
        slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/tinnong_single_bai5_med2', [300, 250], 'div-gpt-ad-1530935908496-0').addService(googletag.pubads());
        // slots['/22552065/tinnong_single_bai1_top'] = googletag.defineSlot('/22552065/pc_topbanner_slots[/22552065/tinnong_single_bai1_top] = home_1000x90', [[1000, 90], [970, 250] ], 'div-gpt-ad-1478165578373-25').addService(googletag.pubads());

        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
              if(isEmpty)
              {   
                  //console.log(event.slot);     
                  if(event.isEmpty)
                  {
                      var name = event.slot.L;
                      if(name == null || typeof name != 'string')
                      {
                          name = event.slot.K;

                      }
                      if(name == null || ! typeof name != 'string')
                      {
                          name = event.slot.M;

                      }

                      console.log("single ads " + typeof name);
                      console.log("single ads " +  name);
                      // console.log(window.slots[name]);
                      googletag.pubads().refresh([window.slotsPopup[name]]);
                 
                  }

              }

      });
    });
    try{
        /*banner right top*/
        $('.ads_home_hot').html('<div id="div-gpt-ad-1530933520569-0"></div>');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1530933520569-0'); googletag.pubads().refresh([window.slotsPopup['/22552065/tinnong_single_bai1_hot1']]);});
        
    }catch(err){
    }
    try{
        /*banner right med 1*/
        $('.ads_home_med2').html('<div id="div-gpt-ad-1530935600860-0"></div>');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1530935600860-0');   googletag.pubads().refresh([window.slotsPopup['/22552065/tinnong_single_bai4_hot1']]);});

    }catch(err){
    }
    try{
        /*banner right med 2*/
        $('.ads_home_med1').html('<div id="div-gpt-ad-1530933837275-0"></div>');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1530933837275-0');  googletag.pubads().refresh([window.slotsPopup['/22552065/tinnong_single_bai1_med2']]); });
    }catch(err){
    }
    try{
        /*banner right sponsored 1*/
        $('.ads_sponsored_1').html('<div id="div-gpt-ad-1530933958516-0"></div>');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1530933958516-0');   googletag.pubads().refresh([window.slotsPopup['/22552065/tinnong_single_bai1_btmed1']]);});
    }catch(err){
    }
    try{
        /*banner right sponsored 2*/
        $('.ads_sponsored_2').html('<div id="div-gpt-ad-1530934047188-0"></div>');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1530934047188-0');   googletag.pubads().refresh([window.slotsPopup['/22552065/tinnong_single_bai1_btmed2']]);});
    }catch(err){
    }

    var mgid = "<div id='M338951PreloadC254813'>Loading...    </div>"
            +"<script>"
             +       "(function(){"
              +  "var D=new Date(),d=document,b='body',ce='createElement',ac='appendChild',st='style',ds='display',n='none',gi='getElementById',lp=d.location.protocol,wp=lp.indexOf('http')==0?lp:'https:';"
               + "var i=d[ce]('iframe');i[st][ds]=n;d[gi]('M338951ScriptRootC254813')[ac](i);try{var iw=i.contentWindow.document;iw.open();iw.writeln('<ht'+'ml><bo'+'dy></bo'+'dy></ht'+'ml>');iw.close();var c=iw[b];}"
                +"catch(e){var iw=d;var c=d[gi]('M338951ScriptRootC254813');}var dv=iw[ce]('div');dv.id='MG_ID';dv[st][ds]=n;dv.innerHTML=254813;c[ac](dv);"
                +"var s=iw[ce]('script');s.async='async';s.defer='defer';s.charset='utf-8';s.src=wp+'//jsc.mgid.com/s/a/saostar.vn.254813.js?t='+D.getYear()+D.getMonth()+D.getUTCDate()+D.getUTCHours();c[ac](s);})();"
            +'</script>';
    $('#M338951ScriptRootC254813').html('');
    // $('#M338951ScriptRootC254813').html(mgid);
    
}

// END POPUP TIN HOT
function cafetamsu() {
    function renTemplateCafe(post){
        var tpl = $('#template-block-cafe-tam-su').html();
        tpl = tpl.replace(/{link}/g, post.link);
        tpl = tpl.replace(/{title}/g, post.title);
        tpl = tpl.replace(/{thumb_src}/g, post.thumb);
        return tpl;
    }
    $.ajax({
        type: 'GET',
        url: 'https://cafetamsu.saostar.vn/widget.res',   
        success: function(data, textStatus, jxhr)
        {
            console.log(data);
            var array_posts = data;
            // for(var i = 0; i< array_posts.length; i++)
            for(var i = 0; i<3; i++)
            {
                $('.block.cafe-tam-su .content-block').append(renTemplateCafe(array_posts[i]));
            }
        }

    })
}
$(document).ready(function() {
    // home
    if($('.saostar-wrapper.home').length > 0)
    {
        randombaitrongboxtinnong('.tinhotnhat', '.content-block', '.post' , 'post clearfix' );
        randombaitrongboxdanhchoban('.duoc-quan-tam', '.content-block', '.post', 'post clearfix');
        randombaitrongboxdsk('.dsk2', '.content-block', '.post' , 'post mb10' );
        randombaitrongboxdsk('.dsk3', '.content-block', '.post' , 'post mb10' );
        $(".dsk-sticky").stick_in_parent({
            parent: ".stream-index",
            spacer: '.dsk-sticky-wrapper',
            offset_top: 50
        });

    }
    else if ($('.tag-page').length > 0 && $('.tinhotnhat ').length > 0) {
        randombaitrongboxtinnong('.tinhotnhat', '.content-block', '.post' , 'post clearfix' );
    }

});
function stickysidebarsg(postID)
{
    var el = document.getElementById("ss-sidebar-"+postID);
    var inview = InView(el, function(isInView, data) {
        if (isInView) {
            //console.log("inview");
            $("#ss-sidebar-"+postID).stick_in_parent({
                parent: ".article",
                spacer: ".sidebar",
                offset_top: 50
            });
            this.destroy();
        }
    })
}
function randombaitrongboxdsk(parent, wrapper, child , divwrapClass )
{
    $(parent).on('inview', function(event, isInView) {
        if(isInView && !$(parent).hasClass('hascontent'))
        {
 
            $(parent).addClass('hascontent');
            var content = '';
            var randomSo  = Math.floor( Math.random() * 19);
            var posts = $(parent + " " +  child);
            var divwrap = '<div class="'+ divwrapClass +'">';
            var divwrapclose = '</div>';
            for (var i = randomSo; i < 5 + randomSo; i++) {
                var y = i;
                var stt = '';
                if(i >= 20)
                {
                    y = i - 20;
                }

                content += divwrap +  $(posts[y]).html() + divwrapclose;
            }
            $(parent + " " +  wrapper).html(content);
            $(parent + " " +  wrapper).css('display', 'block');
            $(parent).css('height', '');

        }
    })
}
function randombaitrongboxdanhchoban(parent, wrapper, child , divwrapClass )
{

            $(parent).css('display', 'none');

            $(parent).addClass('hascontent');
            var content = '';
            var randomSo  = Math.floor( Math.random() * 39);
            console.log("randomSo " + randomSo);
            var posts = $(parent + " " +  child);
            var divwrap = '<div class="'+ divwrapClass +'">';
            var divwrapclose = '</div>';
            for (var i = randomSo; i < 40 + randomSo; i++) {
                var y = i;
                var stt = '';
                if(i >= 40)
                {
                    y = i - 40;
                }
                if(i - randomSo + 1 > 9)
                {
                    stt = (i - randomSo + 1) + ".";
                }
                else
                {
                    stt = "0" + (i - randomSo + 1) + ".";
                }
               
                content += divwrap +  $(posts[y]).html().replace(/\>[0-9]*.\</, ">" + stt + "<") + divwrapclose;
                if(i - randomSo + 1 > 4)
                {
                    break;
                }
            }

            $(parent + " " +  wrapper).html(content);
            $(parent).css('display', 'block');     
          
}

function randombaitrongboxtinnong(parent, wrapper, child , divwrapClass )
{

    $(parent).closest('.wrapper-thn').css('display', 'none');

    $(parent).addClass('hascontent');
    var content = '';
    var randomSo  = Math.floor( Math.random() * 39);
    console.log("randomSo " + randomSo);
    var posts = $(parent + " " +  child);
    var divwrap = '<div class="'+ divwrapClass +'">';
    var divwrapclose = '</div>';
    for (var i = randomSo; i < 40 + randomSo; i++) {
        var y = i;
        var stt = '';
        if(i >= 40)
        {
            y = i - 40;
        }
        if(i - randomSo + 1 > 9)
        {
            stt = (i - randomSo + 1) + ".";
        }
        else
        {
            stt = "0" + (i - randomSo + 1) + ".";
        }
        content += divwrap +  $(posts[y]).html().replace(/\>[0-9][0-9].\</, ">" + stt + "<") + divwrapclose;
        if(i - randomSo + 1 > 19)
        {
            break;
        }
    }

    $(parent + " " +  wrapper).html(content);
    $(parent).closest('.wrapper-thn').css('display', 'block');     
  
}
// sidebar trang chi tiết
$(document).ready(function() {
    if($('.single-default').length > 0)
    {
        getdatasidebarsingle();
    }
});
var datasidebarsingle = '';
window.datasidebarsingle = datasidebarsingle; 
window.requesteddatasidebarsingle = false;
function getdatasidebarsingle()
{
    requesteddatasidebarsingle = true;
    $.ajax({
        type: 'GET',
        url: '/cache-dong-su-kien/',   
        success: function(data, textStatus, jxhr)
        {
           datasidebarsingle =  data;
            initRandomDongSuKien('.dsk2');
            initRandomDongSuKien('.dsk3');
            initRandomtinnong('.tinhotnhat', '.content-block', '.post' , 'post clearfix' );
            var postID = $('.w1100.article')[0].id;
            stickysidebarsg(postID);

        }

    })
}
function initRandomDongSuKien(dsk)
{
    $(dsk).on('inview', function(event, isInView) {


        if(isInView && !$(dsk).hasClass('hascontent'))
        {
            //console.log(dsk);
            //console.log("randombaitrongboxdsk 1");

            if(datasidebarsingle.length == 0)
            {

                if(!requesteddatasidebarsingle)
                {
                    getdatasidebarsingle();

                }
                           //console.log("randombaitrongboxdsk 2");
            }
            else
            {
                //console.log(dsk.slice(-5) +'.hascontent');
                //  dsk.slice(-5) để lấy : .dsk2, 
                if($(dsk.slice(-5) +'.hascontent').length == 0 )
                { 

                               //console.log("randombaitrongboxdsk 3");
                    var classElement ='.' + $(this).attr('class');
                    var wrapper = dsk + " " + ".block";
                    $(this).addClass('hascontent');
                    ////console.log(classElement);
                    var dataguive = ''; 
                    dataguive = $(datasidebarsingle).find(classElement).html();


                    var lastenddiv = '</div>';
                    var background = $(datasidebarsingle).find(classElement + ' .background').html();
                    ////console.log("background   " + datasidebarsingle);
                    var n = background.lastIndexOf(lastenddiv);
                    background = background.slice(0, n);
                    ////console.log("background " + background);

                    var posts = $(dataguive).find('.post');

                    var total = posts.length;
       
                    var content = '';
                    var randomSo  = Math.floor( Math.random() * (total-1));
                    var divwrapClass = 'post mb10';
                    var divwrap = '<div class="'+ divwrapClass +'">';
                    var divwrapclose = '</div>';
                    for (var i = randomSo; i < total + randomSo; i++) {
                        var y = i;
                        var stt = '';
                        if(i >= total)
                        {
                            y = i - total;
                        }
                        content += divwrap +  $(posts[y]).html() + divwrapclose;
                        if(i >= randomSo + 1)
                        {
                            break;
                        }
                    }

                    $(wrapper).html(background + content + lastenddiv);
                 
                }
                else
                {
                    //console.log("randombaitrongboxdsk 4");
                    $(this).html($($(dsk.slice(-5))[0]).html());
                    $(this).addClass('hascontent');
           
                }
                $(this).css('height', 'auto');
            }
        }
    })

}
function initRandomtinnong(parent, wrapper, child , divwrapClass)
{
    $(parent).on('inview', function(event, isInView) {
        if(isInView && !$(parent).hasClass('hascontent'))
        {
            //console.log("initRandomtinnong D0");
            if(datasidebarsingle.length == 0)
            {
                if(!requesteddatasidebarsingle)
                {
                    getdatasidebarsingle();
                }
            }
            else
            {
                if($('.tinhotnhat' + '.hascontent').length == 0)
                {
                    //console.log("initRandomtinnong D1");

                    $(parent).addClass('hascontent');
                    var content = '';
                    ////console.log("randomSo " + randomSo);
                    var posts = $(datasidebarsingle).find('.tinhotnhat' + " " +  child);
                    var total = posts.length;
                    var randomSo  = Math.floor( Math.random() * (total - 1));
                    var divwrap = '<div class="'+ divwrapClass +'">';
                    var divwrapclose = '</div>';
                    for (var i = randomSo; i < total + randomSo; i++) {
                        var y = i;
                        var stt = '';
                        if(i >= total)
                        {
                            y = i - total;
                        }
                        if(i - randomSo + 1 > 9)
                        {
                            stt = (i - randomSo + 1) + ".";
                        }
                        else
                        {
                            stt = "0" + (i - randomSo + 1) + ".";
                        }

                        ////console.log("Stt " + stt);
                        content += divwrap +  $(posts[y]).html().replace(/\>[0-9][0-9].\</, ">" + stt + "<") + divwrapclose;
                        if(i - randomSo + 1 > 19)
                        {
                            break;
                        }
                    }

                    $(parent + " " +  wrapper).html(content);
                }
                else
                {
                    //console.log("initRandomtinnong D2");

                    $('.tinhotnhat').each(function(index, el) {
                        if(!$(this).hasClass('hascontent'))
                        {
                            $(this).html($($('.tinhotnhat')[0]).html());
                            $(this).addClass('hascontent');
                        }
                    });
                }

            }

        }
    })
}



// function handle adblock
function layoutWhenAdBlock() {
    $('.adblock.banner-top-home').addClass('active');
    $('.adblock.full-width-banner-ads').addClass('active');
    $('.banner-ads').addClass('active');
    $('.banner-middle').addClass('active');
    $('.adblock.banner-mid-home').addClass('active');
    $('.adblock.tin-hot-nhat').addClass('active');
    $('.full-width-banner-ads').removeClass('p10-0 p20-0 m20-0 mt20');
    $('.xem-tiep-cuoi-bai').addClass('mb10');

    if ($('.single-page').length) {
        $('.adblock.full-width-banner-ads').addClass('active');
        
        $('.non-adblock.dsk-sidebar').css('display', 'none');
        $('.adblock.dsk-sidebar').css('display', 'block');

        $('.non-adblock.tin-hot-nhat').css('display', 'none');
        $('.adblock.tin-hot-nhat').css('display', 'block');

        $('.adblock.tin-hot-nhat .bg-f2f3f5').addClass('p10 mb10');
        $('.single-page-content').addClass('mt20');
        $('.block.ket-noi-ss').removeClass('mt20');

    }

    if ($('.home').length) {
        $('.non-adblock.tin-hot-nhat').css('display', 'none');
        $('.adblock.tin-hot-nhat .bg-f2f3f5').addClass('p10');

        $('.non-adblock.dsk-sidebar').css('display', 'none');
        $('.adblock.dsk-sidebar').css('display', 'block');

    }

    if ($('.tag-page').length) {
        $('.wrapper-thn').css('display', 'block');
    }
    
}
$(document).ready(function(){
    if ($('.home').length) {
        $('.non-adblock.tin-hot-nhat .bg-f2f3f5').addClass('p10');
    }
    if ($('.single-page').length) {
        $('.non-adblock.tin-hot-nhat .bg-f2f3f5').addClass('p10');
    }
    if ($('.tag-page').length) {
        $('.wrapper-thn').css('display', 'block');
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    if(document.getElementsByClassName("single-page").length > 0)
    {    
        var ID_POST = $('.w1100.article')[0].id;
       themblockquangcaovaobai(ID_POST);
    }
});
$(document).ready(function(){

    if ($('.home').length) {
        if ($().stick_in_parent) {
            $(".col1.stick-menu").stick_in_parent({
                offset_top: 60
            });
        }
    }
    if ($('.tag-page').length) {
        if ($().stick_in_parent) {
            $(".col1.stick-menu").stick_in_parent({
                offset_top: 50
            });
        }
    }
    if ($('.category-page').length) {
        if ($().stick_in_parent) {
            $(".col1.stick-menu").stick_in_parent({
                offset_top: 50
            });
            $(".ss-sidebar").stick_in_parent({
                parent: ".cate-wrap",
                spacer: ".sidebar",
              
            });
        }

    }

    

    
});
function themblockquangcaovaobai(postID, delta)
{

    var element = '.single-page.single-default #' + postID +  ' .article-body  > *:not(.adsbygoogle)';
    var tongkytu = 0;
    var arrIndex = [];
    arrIndex[0] = 0;
    arrIndex[1] = 0;
    arrIndex[2] = 0;
    arrIndex[3] = 0;
    $(element).each(function(index, el) {
        // Trường hợp thẻ div img
        if($(this).hasClass('wp-video') )
        {
            tongkytu += 500;
          
        }
        else
        {
            tongkytu += $(this).text().length;
        }
        if($(this).find('img').length)
        {
            tongkytu += $(this).find('img').length*500;
            ////console.log("D0 " + $(this).find('img').length*500);
        }
        //////console.log("D1 " +el.tagName);
        //////console.log("D2 " + "tongkytu " + tongkytu);

        if(tongkytu > 2000 && arrIndex[0] == 0)
        {
            tongkytu = 2000;
            arrIndex[0] = index;
            ////console.log("index " + index);
        }
        if(tongkytu > 4000 && arrIndex[1] == 0)
        {
            tongkytu = 4000;
            arrIndex[1] = index;
             return false;
           // //console.log("index " + index);

        }

    });

    var adinpage = [];

    adinpage[0] = '<ins class="adsbygoogle mb20" id="inpage'+ 0 + postID+'" style="display:block" data-ad-format="fluid" data-ad-layout-key="-gl+35+5c-gx+fs" data-ad-client="ca-pub-7727207322311778" data-ad-slot="9023194073"></ins>';
    //adinpage[1] = '<ins class="adsbygoogle mb20" id="inpage'+ 1 + postID+'" style="display:block" data-ad-format="fluid" data-ad-layout-key="-gk+44-g-en+ss" data-ad-client="ca-pub-7727207322311778" data-ad-slot="7411455852"></ins>';
    // adinpage[2] = '<ins class="adsbygoogle mb20" id="inpage'+ 2 + postID+'" style="display:block" data-ad-format="fluid" data-ad-layout-key="-gk+44-g-en+ss" data-ad-client="ca-pub-7727207322311778" data-ad-slot="3101509907"></ins>';
    for (var i = 0; i < 1; i++) {
       
        if(arrIndex[i] != 0)
        {
            console.log("arrIndex[i] + i + 1" + arrIndex[i] + i + 1);
            $( adinpage[i]).insertAfter(element + ':nth-child('+ (arrIndex[i] + i + 1) +')');

            var el = document.querySelector('#inpage'+ i+ postID);
            var inview = InView(el, function(isInView, data) {
                if (isInView) {
                    //console.log("Inview Push Quảng Cáo");
                    (adsbygoogle = window.adsbygoogle || []).push(function(){googletag.display('inpage'+ i+ postID)});
                    this.destroy();
                    
                }
            })

            
        }
        
    }
}
   
       

function holderForEmptyBanner () {
    if( window.canRunAds != undefined ){
        var bannerType1 = $('.full-width-banner-ads');
        var bannerType2 = $('.banner-ads');
        var holder1 = '<p>Liên hệ quảng cáo: 0938 305 588</p>';
        var holder2 = '<div><p>Liên hệ quảng cáo</p><p>0938 305 588</p></div>';

        bannerType1.each(function(){
            if (!$(this).hasClass('has-holder')) {
                $(this).append(holder1);
                $(this).addClass('has-holder');
            }
            
        });
        bannerType2.each(function(){
            if (!$(this).hasClass('has-holder')) {
                $(this).append(holder2);
                $(this).addClass('has-holder');   
            }
            
        });
    }   

}
$(document).ready(function(){
    holderForEmptyBanner();
});


function stickArticleTool (postID) {
    $("#article-tool"+postID).stick_in_parent({
        offset_top: 70,
    });
    $("#col1-"+postID).stick_in_parent({
        offset_top: 70
    });
    // $("#ss-sidebar-"+postID).stick_in_parent({
    //     parent: ".article",
    //     spacer: ".sidebar",
    //     offset_top: 50
    // });
}
function pushEventScrollDetailGTM(scrolltrangthu)
{
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'scrolltracking',
        'thutubaiscroll' : 'PC-detail-scroll-trang-' + scrolltrangthu,
    });
}
$(document).ready(function() {
    if ($('.single-page').length) {
        var ID_POST = document.getElementsByClassName("article")[0].id;
        reuniteHuuIchMoiNgay(ID_POST); 
    }
});
(function(root) {
    
    var $template_article =
        '<div class="post clearfix">'
        +'<div class="post-thumb"><a href="{link}" rel="{doitac}" class="thumb {tracking}"><img src="{src}"></a></div>'
        +'<div class="post-info">{motbai}<h4 class="post-title"><a href="{link}" rel="{doitac}" class="{tracking}">{title}</a></h4></div>'
        +'</div>';

    var $template_parent = '<div class="block huu-ich-moi-ngay">{haibai}{content}</div>';
    var soluongbaithaydoitemplate = '<h3 class="title-block"><a>HỮU ÍCH MỖI NGÀY</a></h3>';
    window.blocksthuuichmoingay = [];


    window.reuniteHuuIchMoiNgay = reuniteHuuIchMoiNgay;
    
    function reuniteHuuIchMoiNgay(postID)
     {
        if(blocksthuuichmoingay.length == 0)        
        {        
            jQuery.getJSON('/he-thong-bai-pr/', function(data, textStatus) {
               // //////console.log(data);
                if(Array.isArray(data))
                {
                    blocksthuuichmoingay[0] = renhuuichmoingayposttrongbai(data[0], 'huuichmoingaydetail ' + 'pc-detail-block'  + 1);
                    appendHuuIch(postID);
                    changePrCoTheBanQuanTam(data[0], postID);

                }
            });
        }
        else
        {
            ////////console.log("reuniteHuuIchMoiNgay");
            $('.content-r .article-body').each(function(index, el) {
                if($(this).find('.huu-ich-moi-ngay').length == 0)
                {
                    appendHuuIch(postID);
                }
                
            });
        }
    }

    function appendHuuIch(postID)
    {
        var element = "#" + postID +  ' .article-body  > *';
        var tongkytu = 0;
        var arrIndex = [];
        arrIndex[0] = 0;
        $(element).each(function(index, el) {
            // Trường hợp thẻ div img
            if($(this).hasClass('wp-video') )
            {
                tongkytu += 500;
            }
            else
            {
                tongkytu += $(this).text().length;
            }
            if($(this).find('img').length)
            {
                tongkytu += $(this).find('img').length*500;
            }

            if(tongkytu > 2000 && arrIndex[0] == 0)
            {
                tongkytu = 2000;
                // console.log("index " + index);
                $(blocksthuuichmoingay[0]).insertAfter(element + ':nth-child('+ (index +  1) +')');
                // console.log(blocksthuuichmoingay[0]);
                return false;
                
            }
        });
    }
    function renhuuichmoingayposttrongbai(block, tracking)
    {   
        if(Array.isArray(block))
        {
            var url = window.location.href;
            var tempparent = $template_parent;
            var str= '';
            var cobai = false;
            var soluongbaitrongblock = 0;
            ////console.log("soluongbaitrongblock " + soluongbaitrongblock);

            var temp = $template_article;
            if(block[0].title != '' && block[0].link != '')
            {
                soluongbaitrongblock++; 
                temp = temp.replace(/{link}/g, block[0].link);
                temp = temp.replace(/{title}/g, block[0].title);
                temp = temp.replace(/{src}/g, block[0].thumb);
                temp = temp.replace(/{tracking}/g, tracking);
                if(block[0].doitac)
                {
                    temp = temp.replace(/{doitac}/g, 'nofollow"  target= "_blank');
                }
                else
                {
                    temp = temp.replace(/{doitac}/g, 'follow');
                }
                str += temp;
                cobai=true;
            }
            
            tempparent = tempparent.replace(/{content}/g, str);
            tempparent = tempparent.replace(/{motbai}/g, soluongbaithaydoitemplate);
            tempparent = tempparent.replace(/{haibai}/g, '');

            
            var n = tempparent.search("post");
            if(!cobai || n == -1) return '';
            return tempparent;
        }
        return '';
    }
    function changePrCoTheBanQuanTam(block, idPost)
    {

        if(block[1].title != '' && block[1].link != '')
        {
            var eltitle = $('.co-the-ban-quan-tam[data-id_post="'+ idPost +'"] .post:nth-child(3)').find('.post-title a');
            var elthumb = $('.co-the-ban-quan-tam[data-id_post="'+ idPost +'"] .post:nth-child(3)').find('.post-thumb a img');
            eltitle.attr('href', block[1].link);
            eltitle.html(block[1].title);
            elthumb.attr('src', block[1].thumb);
            eltitle.addClass('pc-single-cothebanquantam-pr');
            elthumb.closest('a').addClass('pc-single-cothebanquantam-pr');
        }

    }
})(window);

    var randomNumber = Math.floor( Math.random() * 24);
    var dulieugoive = '';

    var player_youtube_template = '<div style="width: 100%;">'+
    '            <video muted data-videotype="youtube" data-buildedvj="false" id="ssvideo{id-video}" poster="{poster-video}" playsinline="" webkit-playsinline="" class="video-js vjs-hot vjs-default-skin vjs-paused vjs-fluid vid1-dimensions vjs-controls-enabled vjs-workinghover vjs-user-inactive" controls="" preload="none" data-setup=\'{"playsinline": true, "fluid": true, "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "{src-video}"}] , "youtube": { "playsinline" : 1}}\'>'+
    '                <p class="vjs-no-js">?? xem video b?n vui lòng b?t Javascript<a href="http://videojs.com/html5-video-support/" target="_blank">h? tr? HTML5 video</a></p>'+
    '            d</video>'+
    '        </div>';

    var player_video_template = '<div style="width: 100%;">'+
    '                <video muted data-videotype="mp4" poster="{poster-video}" data-buildedvj="false" id="ssvideo1{id-video}" playsinline="" webkit-playsinline="" class="video-js vjs-hot vjs-default-skin vjs-paused vjs-fluid vid1-dimensions vjs-controls-enabled vjs-workinghover vjs-user-active vjs-paused" controls="" preload="none" data-setup=\'{"playsinline": true, "fluid": true}\'><source src="{src-video}" type="video/mp4">'+
    '                    <p class="vjs-no-js">?? xem video b?n vui lòng b?t Javascript<a href="http://videojs.com/html5-video-support/" target="_blank">h? tr? HTML5 video</a></p>'+
    '                </video>'+
    '            </div>';

    var template_video = '<div class="item-video" id="{r}">'+
    '                <div class="thumb-video">{player-template}</div>'+
    '                <div class="info-video">'+
    '                    <a href="{link}" class="title-video">{title}</a>'+
    '                    <div class="detail-info">'+
    '                        <span class="category"><a href="{catelink}" class="category">{catename}</a></span>'+
    '                        <span class="dot"></span>'+
    '                        <time class="time-ago" datetime="{timeu}">1 gi? tr??c</time>'+
    '                        <a class="share-fb-normal fr" onclick="shareFB(this)" data-image="{thumb}" data-title="<?php the_title(); ?>" data-desc="{sapo}" data-url = "{link}">Share</a>'+
    '                    </div>'+
    '                </div>'+
    '            </div>';
    
    
    function initboxvideocuoibai()
    {
        //console.log("dulieugoive.length " + dulieugoive.length);
        if(dulieugoive.length == 0)
        { 
            dulieugoive = '0';
            $.ajax({
                type: 'GET',
                url: '/danh-sach-video-moi-nhat/',   
                success: function(data, textStatus, jxhr)
                {
                    dulieugoive = JSON.parse($(data).find('#data-video').html());
                    initboxvideocuoibai();
                }

            })
        }
        else
        {
            ////console.log("D3");
            $('.video-cuoi-bai-chi-tiet').each(function(index, el) {
                ////console.log("DD");
                if($(this).hasClass('holder'))
                {
                    randomNumber = Math.floor( Math.random() * 24);
                    while($('#r' + randomNumber).length != 0)
                    {
                        randomNumber = Math.floor( Math.random() * 24);
                    }
                    $(this).html("");
                    $(this).append(taohtmlboxvideocuoibai( dulieugoive ,randomNumber));
                    timeago_element($('#r' + randomNumber).find('.time-ago'));
                    //console.log($('#r' + randomNumber).find('.time-ago'));
                    ////console.log(typeof timeago_element);
                    $(this).removeClass('holder');
                    initSSPlayers();
                }
            });
        }
    }
    function taohtmlboxvideocuoibai(data, randomNumber)
    {
        var tplate ='';
        var post = data[randomNumber];
        var videoplayer = renPlayer(post);
        //console.log("post " +videoplayer);
        var link = post.video_post.url;
        var title = post.video_post.title;
        var catelink = post.video_post.catelink;
        var catename = post.video_post.catename;
        var sapo = post.video_post.sapo;
        var timeu = post.video_post.timeU;
        var thumb = post.video_post.thumb;
        var tplate = template_video;

        tplate = tplate.replace(/{r}/g, 'r' + randomNumber);
        tplate = tplate.replace(/{player-template}/g, videoplayer);
        tplate = tplate.replace(/{link}/g, link);
        tplate = tplate.replace(/{title}/g, title);
        tplate = tplate.replace(/{catelink}/g, catelink);
        tplate = tplate.replace(/{catename}/g, catename);
        tplate = tplate.replace(/{catelink}/g, catelink);
        tplate = tplate.replace(/{catename}/g, catename);
        tplate = tplate.replace(/{sapo}/g, sapo);
        tplate = tplate.replace(/{timeu}/g, timeu);
        tplate = tplate.replace(/{thumb}/g, thumb);
        //console.log("videoplayer " + tplate);

        return tplate;
    }
    function renPlayer(post)
    {
        var id = post.video.id;
        var src = post.video.src;
        var poster = post.video.poster;
        var tpl;
        var n = src.indexOf("youtube");
        if(n != -1)
        {

            tpl = player_youtube_template;

        }
        else
        {
            tpl = player_video_template;
        }
        tpl = tpl.replace(/{src-video}/g, src);
        tpl = tpl.replace(/{poster-video}/g, poster);
        tpl = tpl.replace(/{id-video}/g, id);
        return tpl;
    }
$(document).ready(function() {
    initboxvideocuoibai();

});

function randomTinLienQuanGiuaBai (postID) {
    var len = $("#" + postID + " #content_detail>p").length/2;
    var random = Math.floor( Math.random() * len );
    if (random == 0) {random = 1;}
    var markup = $('#tin-lien-quan-giua-bai-'+postID).prop("outerHTML");
    if ($("#" + postID + " #content_detail>p").eq(random).hasClass('wp-caption-text')) {
        random = 2;
    } 
    $(markup).insertAfter($("#" + postID + " #content_detail>p").eq(random));
    // //console.log('RANDOM: ' + postID + ' '+ random);
    // //console.log(markup);
    $('#tin-lien-quan-giua-bai-'+postID).remove();
    $('#tin-lien-quan-giua-bai-'+postID).css('display','block');
}

function inittinnong(postID)
{
    ////console.log("inittinnong");
    function ren_postboxtinnong(post){
        var tpl = $('#article-template').html();
        tpl = tpl.replace(/{link}/g, post.link);
        tpl = tpl.replace(/{title}/g, post.title);
        tpl = tpl.replace(/{thumb_src}/g, post.thumb);
        tpl = tpl.replace(/{nguonbaiviet}/g, post.source);
        tpl = tpl.replace(/{thoigianxuatban}/g, post.published_at);
        return tpl;
    }
    if(($('.tinhot-main .holder').length > 0|| $('.tinhot-main article').length == 0) && $('#article-template').length > 0)
    {
        $.ajax({
            type: 'GET',
            url: 'https://tinnong.saostar.vn/widget.res',   
            success: function(data, textStatus, jxhr)
            {
                $('.tinhot .thn').html("");
                ////console.log(data);
                var array_posts = data;
                for(var i = 0; i< array_posts.length; i++)
                {
                    $('.tinhot .thn').append(ren_postboxtinnong(array_posts[i]));
                }
                var swiperboxtinong = new Swiper('.tinhot-main', {
                    slidesPerView: 'auto',
                    // slidesPerGroup: 4,
                    loopFillGroupWithBlank: true,
                    // loop: true,
                    pagination: '.swiper-pagination-tinhot'
                });
                var swiper = new Swiper('.tinhot-main', {
                    slidesPerView: 'auto',
                    slidesPerGroup: 2,
                    loopFillGroupWithBlank: true,
                    prevButton: '.tinhot-btn.prev',
                    nextButton: '.tinhot-btn.next',
                });
                
            }

        })
    }
    else if($('.tinhot').length >= 2)
    {
        for (var i = 0; i < $('.tinhot').length; i++) {
            if(i != 0)
            {
                $($('.tinhot')[i]).addClass('tinnong' + postID);
                $($('.tinhot')[i]).html($($('.tinhot')[0]).html());
                var swiper = new Swiper('.tinnong' + postID + ' .tinhot-main', {
                    slidesPerView: 'auto',
                    slidesPerGroup: 4,
                    loopFillGroupWithBlank: true,
                    prevButton: '.tinnong' + postID + ' .tinhot-btn.prev',
                    nextButton: '.tinnong' + postID + ' .tinhot-btn.next',
                });

            }
        }
    }
}
$(document).ready(function() {
    initTB('.inviewcontent'); 
});
function initTB(element)
{
    if($('.inviewcontent').length > 0)
    {
        var el = document.querySelector(element);
        var idketieps = JSON.parse(document.getElementById('id-next').innerHTML.trim());
        var inview = InView(el, function(isInView, data) {
        var idhientai = el.getAttribute("data-id");
        var idketiep = 0;
       
          //idketiep = idketieps[idketieps.indexOf(idhientai) + 1];
        for (var i = idketieps.length - 1; i >= 0; i--) {
            if(idketieps[i] == idhientai)
            {
                idketiep = idketieps[i + 1];
            }

        }
        if(idketiep == 0)
        {
              idketiep = idketieps[0];
        }

        if (isInView && typeof(idketiep)!="undefined") {
    
            // // //console.log("A " + (data.elementOffsetTopInViewHeight));
            // // //console.log("A1 " + el.clientHeight);
            // // //console.log("B " + data.inViewHeight);
            // // //console.log("C " + el.clientHeight/2);
            if (Math.abs(data.elementOffsetTopInViewHeight)  < el.clientHeight/2) {
                //// //console.log('in view (top half)');
                    
                    document.getElementById("baitieptheo" + idketiep).classList.remove('truot-len');
                
                    document.getElementById("baitieptheo" + idketiep).classList.add('truot-xuong');
                    document.getElementById("doc-tiep" + idketiep).classList.remove('active');
                
            } else {
                //// //console.log(idketieps);
                //// //console.log("idketieps.indexOf(idhientai) " + idketieps.indexOf(idhientai));
                //// //console.log("ID HIEN TAI " + idhientai);
                //// //console.log("ID KE TIEP " + idketiep);
                document.getElementById("baitieptheo" + idketiep).classList.add('truot-len');
                
                document.getElementById("baitieptheo" + idketiep).classList.remove('truot-xuong');
                
                if(!document.getElementById('comments1-' + idhientai)){
                    var iDiv = document.createElement('div');
                    iDiv.id = 'comments1-' + idhientai;
                    document.getElementById("baitieptheo" + idketiep).appendChild(iDiv);
                    document.getElementById("baitieptheo" + idketiep).classList.add('active');
                    document.getElementById("doc-tiep" + idketiep).classList.add('active');

                }
                if(data.elementOffsetTopInViewHeight < 0 && Math.abs(data.elementOffsetTopInViewHeight) + data.inViewHeight > el.clientHeight)
                {
                    document.getElementById("baitieptheo" + idketiep).classList.add('active');
                    document.getElementById("baitieptheo" + idketiep).classList.remove('close');
                    document.getElementById("doc-tiep" + idketiep).classList.add('active');
                    //// //console.log('in view (bottom half)');
                    //// //console.log("Chạm đáy");
                }
            }
          } else if(typeof(idketiep)!="undefined") {

            document.getElementById("baitieptheo" + idketiep).classList.remove('truot-len');
            document.getElementById("baitieptheo" + idketiep).classList.add('truot-xuong');
            document.getElementById("doc-tiep" + idketiep).classList.remove('active');
            document.getElementById("baitieptheo" + idketiep).classList.remove('active');

            if (data.windowScrollTop - (data.elementOffsetTop - data.inViewHeight) > data.inViewHeight) {
                // // //console.log(data.windowScrollTop);
                // // //console.log("SSSSSSS " + $(el).offset().top);
              //// //console.log('not in view (scroll up)');
            } else {
              //// //console.log('not in view (scroll down)');
            }
          }

        });

    }
}
$('body').on('click', '.next-article.truot-len.active .post', function(event) {
    var hash = "#" + $(this).attr('data-postid'); 
    if($(hash).length > 0)
    {
       // //console.log("$(hash).offset().top " + $(hash).offset().top - 150);
        $('html, body').animate({
            scrollTop: ($(hash).offset().top - 120)
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
            //window.location.hash = hash;
        });
    }
});
function initSSPlayers() {
    initVideoPlayers();
    // var mediajsfeautyres = ['prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume', 'fullscreen','playlist'];
    // if (document.getElementById('SxpQEqvTutaL')) {
    //     mediajsfeautyres.push('ads');
    // }
    // var mediaElements = document.querySelectorAll('video.mejs__saostar, audio.mejs__saostar'),
    //     i, total = mediaElements.length;
    // for (i = 0; i < total; i++) {
    //     if (mediaElements[i].dataset.builded === "false") {
    //         var media = new MediaElementPlayer(mediaElements[i], {
    //             videoVolume: 'horizontal',
    //             alwaysShowControls: false,
    //             youtube: {
    //                 imageQuality: 'maxresdefault',
    //             },
    //             // vastUrl: ['https://pubads.g.doubleclick.net/gampad/ads?iu=/22552065/video_preroll&description_url=[placeholder]&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=640x480&unviewed_position_start=1'],
    //             vastUrl: ['https://delivery.adnetwork.vn/247/xmlvideoad/zid_1526349767/wid_1517458684/type_inline/cb_[timestamp]/w_[player-width]/h_[player-height]/purl_[content-page-url]'],
    //             features: mediajsfeautyres,
    //             success: function(mediaElement, node, mediaElementPlayer) {
    //                 // mediaElementPlayer.adsLayer.setAttribute('data-ads', false);
    //                 mediaElement.setAttribute('data-builded', true);
    //                 node.setAttribute('data-builded', true);
    //                 node.setAttribute('data-autoplay', false);
    //                 var timer;
    //                 var el = document.getElementById(mediaElementPlayer.id);
    //                 var inView = InView(el, function(isInView, data) {
    //                     if (isInView) {
    //                         if ((data.elementOffsetTopInViewHeight <= Math.round((data.inViewHeight - el.offsetHeight) /2) && data.elementOffsetTopInViewHeight > -10) && (data.elementOffsetTopInViewHeight < (data.inViewHeight - el.offsetHeight))) {
                                
    //                         } else {
    //                             if (mediaElementPlayer.adsManager) {
    //                                 if (mediaElementPlayer.adPlaying) {
    //                                     mediaElementPlayer.adsManager.pause();
    //                                     mediaElementPlayer.layers.querySelector('.mejs__overlay-play').style.display = 'flex';
    //                                 }
    //                             }
    //                             mediaElement.pause();
    //                             node.setAttribute('data-autoplay', false);
    //                             mediaElement.setAttribute('data-inview', false);
    //                             node.setAttribute('data-inview', false);
    //                             if (mediaElementPlayer.isVideo) {
    //                                 clearTimeout(timer);
    //                                 var bigPlay = mediaElementPlayer.layers.querySelector('.mejs__overlay-play');
    //                                 bigPlay.innerHTML = '<div class="mejs__overlay-button" role="button" tabindex="0" aria-label="Play" aria-pressed="false"></div>';
    //                                 var pauseButton = mediaElementPlayer.layers.querySelector('.bigpausebutton');
    //                                 pauseButton.style.display = "none";
    //                             }
    //                         }

    //                     } else {
    //                         if (mediaElementPlayer.adsManager) {
    //                             if (mediaElementPlayer.adPlaying) {
    //                                 mediaElementPlayer.adsManager.pause();
    //                             }
    //                         }
    //                         mediaElement.pause();
    //                         node.setAttribute('data-autoplay', false);
    //                         mediaElement.setAttribute('data-inview', false);
    //                         node.setAttribute('data-inview', false);
    //                         if (mediaElementPlayer.isVideo) {
    //                             clearTimeout(timer);
    //                             var bigPlay = mediaElementPlayer.layers.querySelector('.mejs__overlay-play');
    //                             bigPlay.innerHTML = '<div class="mejs__overlay-button" role="button" tabindex="0" aria-label="Play" aria-pressed="false"></div>';
    //                             var pauseButton = mediaElementPlayer.layers.querySelector('.bigpausebutton');
    //                             pauseButton.style.display = "none";
    //                         }
    //                     }
    //                 });

    //             }
    //         });
    //     }
    // }
}
document.addEventListener('DOMContentLoaded', initSSPlayers);
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function initSwitchVideo(article_right, video, item_left_click, width, height, elementShare)
{
    var str_video_ss =
        '<video muted id="box-video" width="'+width+'" height="'+height+'" autoplay playsinline data-builded="false" webkit-playsinline controls class="mejs__saostar" muted poster><source src type="video/mp4"></video>';
    var str_video_youtube =
        '<video muted id="box-video" width="'+width+'" height="'+height+'" autoplay data-builded="false" playsinline webkit-playsinline controls class="mejs__saostar" muted><source src type="video/youtube"></video>';

    $('body').on('click', item_left_click , function(){
        top.window.history.pushState("", "", $(this).attr('href'));
        document.title = $(this).closest(article_right.item).data('title');

        $(video.item).find(video.title).html($(this).closest(article_right.item).data('title'));
        $(video.item).find(video.sapo).html($(this).closest(article_right.item).data('sapo'));
        $(video.item).find(video.title).attr('href',$(this).attr('href'));
        $(video.item).find(video.category).html($(this).closest(article_right.item).data('category'));
        $(video.item).find(video.category).attr('href',$(this).closest(article_right.item).data('href_category'));
        $(video.item).find(video.time).attr('datetime', $(this).closest(article_right.item).data('time'));
        $(article_right.item + '.active').removeClass('active');
        $(this).closest(article_right.item).addClass('active');
        timeago_element($(video.item).find(video.time));
        ////console.log($(video.item).find(video.time).attr('datetime'));
        ////console.log($($(video.item).find(video.time)).attr('datetime'));
        var url = $(this).closest(article_right.item).data('url_video');
        var thumb_src = $(this).closest(article_right.item).data('poster');
        if(url.indexOf('youtube') == -1)
        {
            var id = url.replace(/[^a-zA-Z0-9]/g,'_');
            var str_video_ss = "<div style=\"width: 100%;\">"+
    "<video muted data-videotype=\"mp4\" poster=\""+thumb_src+"\" data-buildedvj=\"false\" id=\"ssvideo-box-"+id+makeid()+"\" playsinline webkit-playsinline class=\"video-js vjs-default-skin vjs-paused vjs-fluid vid1-dimensions vjs-controls-enabled vjs-workinghover vjs-user-active vjs-paused\" controls preload=\"auto\" data-setup='{\"playsinline\": true, \"fluid\": true}'>"+
  "<source src=\""+url+"\" type=\"video/mp4\">"+
    "<p class=\"vjs-no-js\">Để xem video bạn vui lòng bật Javascript<a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">hỗ trợ HTML5 video</a></p>"+
  "</video></div>";
            $(video.item).find(video.contentElement).find('.thumb-video').html(str_video_ss);
            // var CDN_MEDIA = $(this).closest(article_right.item).data('cdn_media');
            // if(url != '')
            // {
            //     url = url.replace('img.saostar.vn', CDN_MEDIA);
            // }
        }
        else
        {
            var id = url.replace(/[^a-zA-Z0-9]/g,'_');
            var str_video_youtube = "<div style=\"width: 100%;\">"+
    "<video muted data-videotype=\"youtube\" poster=\""+thumb_src+"\" data-buildedvj=\"false\" id=\"ssvideo-box-"+id+makeid()+"\" playsinline webkit-playsinline class=\"video-js vjs-default-skin vjs-paused vjs-fluid vid1-dimensions vjs-controls-enabled vjs-workinghover vjs-user-inactive\" controls preload=\"auto\" data-setup='{\"playsinline\": true, \"fluid\": true, \"techOrder\": [\"youtube\"], \"sources\": [{ \"type\": \"video/youtube\", \"src\": \""+url+"\"}] , \"youtube\": { \"playsinline\" : 1}}'>"+
    "<p class=\"vjs-no-js\">Để xem video bạn vui lòng bật Javascript<a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">hỗ trợ HTML5 video</a></p>"+
  "</video></div>";
            $(video.item).find(video.contentElement).find('.thumb-video').html(str_video_youtube);
            ////console.log("$(video.item).find('source') " + $(video.item).find('source'));
            $(video.item).find('source').attr('src', url);
        }
        $(video.item).find('#video-bv').data('poster', thumb_src);
        $(video.item).find('source').attr('src', url);
        //ssplayerinit('.swxw-left .swxwl-video',"video-bv");
        initSSPlayers();
        initShareData($(this).closest(article_right.item), elementShare);



        
    })

}



function initShareData(element, elementShare)
{
    ////console.log($(elementShare + ' div:nth-child(1) a').data('image'));

    $(elementShare + ' div:nth-child(1) a').attr('data-image', element.data('thumb'));
    ////console.log(element.data('thumb'));
    ////console.log($(elementShare + ' div:nth-child(1) a').data('image'));
    $(elementShare + ' div:nth-child(1) a').attr('data-title', element.data('title'));
    ////console.log($(elementShare + ' div:nth-child(1) a').data('title'));
    ////console.log(element.data('title'));
    $(elementShare + ' div:nth-child(1) a').attr('data-url', element.data('url-post'));
    $(elementShare + ' div:nth-child(1) a').attr('data-desc', element.data('sapo'));
    $(elementShare + ' div:nth-child(2) a').attr('data-clipboard-text', element.find('.info-video a').attr('href'));
    $(elementShare + ' div:nth-child(3) a').attr('href', '"mailto:?subject='+element.data('title')+'&amp;body=' + element.find('.info-video a').attr('href'));

}


function timeago_element(element)
{

    var $this = element;

    var posttime = new Date($this.attr('datetime'));
    if($this.attr('datetime') !=  '')
    {
        var now = new Date();

        var diff = now - posttime;


        if (diff < 86400000 && diff > 0) {

            if (diff < 3600000) {

                $this.html((Math.floor(diff / 1000 / 60)) + ' phút trước');

            } else {

                $this.html((Math.floor(diff / 1000 / 60 / 60)) + ' giờ trước');

            }

        }
        else
        {
            var mydate = new Date($this.attr('datetime'));
            var minutes = mydate.getMinutes();
            var hours = mydate.getHours();
            var dates = mydate.getDate();
            var month = mydate.getMonth() + 1;
            var str = minutes+":" + hours + " | " + dates + "/" + month;
            $this.html(str);
        }
    }

}
// ẩn sidebar mini-special

function CurrentPost(elementContent)
{

    this.id_post = 0;
    this.minY_Post = 0;
    this.maxY_Post = 0;
    this.elementContent = elementContent;
    this.changeCurrentPostElement = function (elementContent) {
        this.elementContent = elementContent;
    };
    this.changeYFromCurrentContent = function()
    {
        this.id_post = $(this.elementContent).attr('id');
        this.minY_post =  $(this.elementContent).offset().top;
        this.maxY_post =  this.minY_post  + $(this.elementContent).outerHeight(true);
    };



}
function Sidebar(sidebarElement)
{
    this.idSidebar = 0;
    this.minY = 0;
    this.maxY = 0;
    this.sidebarElement = sidebarElement;
    this.changeSidebarElement = function (sidebarElement) {
        this.sidebarElement = sidebarElement;
    };
    this.changeYSidebar = function()
    {
        this.idSidebar = $(this.sidebarElement).attr('id');
        this.minY =  $(this.sidebarElement).offset().top;
        this.maxY =  this.minY  + $(this.sidebarElement).outerHeight(true);
    };
  
}
function GroupFullWidth(arrayElement)
{
    this.arrayElement = arrayElement;
    this.arrayLocationGroupFW = [];
    this.changeArrayElement = function(arrayElement)
    {
        this.arrayElement = arrayElement;
    };
    this.changeYWhenScroll = function(){
        ////console.log("Debug: " + typeof this.arrayLocationGroupFW);
        var self = this;
        this.arrayElement.forEach(function(item, index){
            var minY = $(item).offset().top;
            var maxY =  minY + $(item).outerHeight(true);
            self.arrayLocationGroupFW[index] = [minY, maxY];
        })
    };

}



function SidebarInit(element)
{ 
    if($(element).length > 0)
    {
        ////console.log("Debug 0");
        if(jQuery.isEmptyObject(currentPost))
        {
           // //console.log("Debug 1");
            var sidebar = '.swbd-left';
            var contentPost = '.swbdwn-content';
            var fw_element = '.fullwidth .u-fade' ;
            var class_fade_in = 'u-menu-fadeIn';
            var class_fade_out = 'u-menu-fadeOut';
            var currentPost = {} || currentPost;
            var currentSidebar = {}|| currentSidebar;
            var groupFullWidth = {} || groupFullWidth;
        }

        if($(sidebar).length > 0  && $(contentPost).length > 0 && $(fw_element).length > 0 )
        {
            ////console.log("Debug 2");
            if(jQuery.isEmptyObject(currentPost))
            {
                currentPost  = new CurrentPost('#' + $($(contentPost)[0]).attr('id'));
                currentPost.changeYFromCurrentContent();
                currentSidebar =  new Sidebar('#' + $($($(contentPost)[0]).find(sidebar)[0]).attr('id'));
                currentSidebar.changeYSidebar();
                groupFullWidth = new GroupFullWidth($($(contentPost)[0]).find(fw_element).toArray());
                groupFullWidth.changeYWhenScroll();
               // //console.log("Debug 3");

            }

            $(contentPost).on('inview', function(event, isInView) {
               // //console.log("Debug 4");
                if(isInView)
                {
                   // //console.log("Debug 5");
                    if($(this).find(fw_element).length > 0 && $(this).attr('id') != currentPost.id_post)
                    {    
                      //  //console.log("Debug 6");                  
                        currentPost.changeCurrentPostElement('#' + $(this).attr('id'));
                        currentPost.changeYFromCurrentContent();
                        currentSidebar.changeSidebarElement('#' +  $($(this).find(sidebar)[0]).attr('id'));

                        currentSidebar.changeYSidebar();
                        groupFullWidth.changeArrayElement($(this).find(fw_element).toArray());
                        groupFullWidth.changeYWhenScroll();

                    }
                }

            })
        }
        if(!jQuery.isEmptyObject(currentPost))
        {

            $(window).scroll(function() {
                ////console.log("Debug 7");
                ////console.log(currentPost);
                
                currentPost.changeYFromCurrentContent();
                currentSidebar.changeYSidebar();
                groupFullWidth.changeYWhenScroll();
                var ishided = $(currentSidebar.sidebarElement).hasClass(class_fade_out);
                if(!ishided)
                {
                    groupFullWidth.arrayLocationGroupFW.forEach(function(item, index){
                        if((item[0] < currentSidebar.minY && currentSidebar.minY < item[1]) || (item[0] < currentSidebar.maxY && currentSidebar.maxY < item[1]))
                        {     
                            $(currentSidebar.sidebarElement).addClass(class_fade_out);
                            $(currentSidebar.sidebarElement).removeClass(class_fade_in);                                 
                        }

                    })
                }
                else
                {
                    var ismid = false;
                    groupFullWidth.arrayLocationGroupFW.forEach(function(item, index){

                        if((item[0] < currentSidebar.minY && currentSidebar.minY < item[1]) || (item[0] < currentSidebar.maxY && currentSidebar.maxY < item[1]))
                        {
                            ismid = true;
                        }
                    })
                    if(!ismid)
                    {
                        if(ishided)
                        {
                            $(currentSidebar.sidebarElement).addClass(class_fade_in);
                            $(currentSidebar.sidebarElement).removeClass(class_fade_out);
                        }
                    }
                }

            })
        }
    }

} 

SidebarInit('.swbd-minispecial');


// end ẩn sidebar mini-special
var lastScrollTop = 0;
var scrollstatus = "";
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       scrollstatus = "down";
   } else {
      // upscroll code
      scrollstatus = "up";
   }
   lastScrollTop = st;
});
function changeURL(){
      //console.log("D0");
    if($('.xem-tiep-cuoi-bai').length>0){
          //console.log("D1");
            $('.xem-tiep-cuoi-bai').on('inview', function(event, isInView) {
                if (!isInView && scrollstatus == "up") {

                    var link = $(this).data('href');
                    var title = $(this).data('title');
                    if(top.window.location.href != link){
                        top.window.history.pushState("", "", link);
                        document.title = title;
                    }

                    ////console.log(link);
                    ////console.log(title);
                    ////console.log(top.window.location.href);
                }
        })
    }
    if($('.article-title').length>0){
        $('.article-title').on('inview', function(event, isInView) {
                if (isInView) {

                    var link = $(this).data('href');
                    var title = $(this).data('title');
                    if(top.window.location.href != link){
                        top.window.history.pushState("baiketiep", "", link);
                        document.title = title;
                    }

                    ////console.log(link);
                    ////console.log(title);
                    ////console.log(top.window.location.href);
                }
        })
    }
}

$(document).ready(function(){
    changeURL();
})

$(document).ready(function() {
    // $(".ss-gif").jqGifPreview();
    //Datecount
    var datecount = new Date(),
    date_number = datecount.getDay(),
    date = null,
    day = datecount.getDate(),
    month = datecount.getMonth() + 1,
    year = datecount.getFullYear();

    switch(date_number) {
        case 0:
        date = 'Chủ nhật';
        break;
        case 1:
        date = 'Thứ hai';
        break;
        case 2:
        date = 'Thứ ba';
        break;
        case 3:
        date = 'Thứ tư';
        break;
        case 4:
        date = 'Thứ năm';
        break;
        case 5:
        date = 'Thứ sáu';
        break;
        case 6:
        date = 'Thứ bảy';
        break;
    }

    $('.datecount .date').text(date);
    $('.datecount .day').text(day);
    $('.datecount .month').text(month);
    $('.datecount .year').text(year);


    //Menu
    // $('.swn-list .swnl-item:last-child').click(function() {
    //     $(this).toggleClass('active');
    //     $('.swn-menu').toggle();
    // });

    //Hotnews

    $('.swqwm-right').height($('.swqwm-left').height());
    if ($('.saostar-wrapper').length) {
        
        $('.swxw-right').slimScroll({
            height: '400px',
            width: 380,
            wheelStep: 100,

        });
    }
    

    var hotnews = new Swiper('.block.tin-hot-nhat .swiper-container', {
        slidesPerView: 3.3,
        slidesPerGroup: 3,
        spaceBetween: 15,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    }),
    
    quagiang = new Swiper('#swiper-qua-giang', {
        // direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        // freeMode: true,
        // scrollbar: '.qua-giang .swiper-scrollbar',
        // scrollbarHide: false,
        // mousewheelControl: true,
        // autoHeight: true,
        // scrollbarDraggable : true,
        prevButton: '.swiper-button-prev.qua-giang',
        nextButton: '.swiper-button-next.qua-giang',
        pagination: '.swiper-pagination.qua-giang'

    }),
    snshome_thumb = new Swiper('.snsh-thumb', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20, 
        loop : true,
    }),
    snshome_info = new Swiper('.snsh-info', {
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop : true,
        effect: 'fade',
        pagination: '.snshi-pagination',
        prevButton: '.snshi-prev',
        nextButton: '.snshi-next'
    });

    snshome_thumb.params.control = snshome_info;
    snshome_info.params.control = snshome_thumb;

    var special = new Swiper('.special .swiper-container', {
        slidesPerView: 'auto',
        loop : true,
        spaceBetween: 15,
        slidesPerGroup: 2,
        prevButton: '.swiper-button-prev.special',
        nextButton: '.swiper-button-next.special',
        pagination: '.swiper-pagination.special'
        // slidesPerGroup: 1,
    });

})



function indexfuncion()
{
    var onlyonePart1 = true;
    //Load block tin hotface khi detect scroll
    window.addEventListener("scroll",function () { //detect scroll
            // Load focus news, tin hot nhat, dong su kien
            if(onlyonePart1)
            {
                // scrollLoadContent('.hotface','.special', '.special','/cache-special', 0,reunitSpecial);
                scrollLoadContent('.hotface','.sw-quagiang-focus', '.sw-quagiang-focus','/cache-qua-giang', 0,reunitQuaGiang);
                // scrollLoadContent('.swbhfl-hotface','.sw-focus', '.sw-focus','/cache-focus', 0,reunitFocus);

                scrollLoadContent('.hotface','.cates', '.cates','/cache-index-cate-pc-v5', 0,reunitSNS);
            }

    })

    function scrollLoadContent(node, eappend, epage, link, onlyone, callback = null)
    {       

        if($(node).length)
        {

            var hT = $(node).offset().top,
                hH = $(node).outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();

            if (wS > (hT + hH - wH)) { //scrolled to bottom of the page 
                switch (onlyone)
                {
                    case 0:
                        onlyonePart1 = false;  
                        break;
                }
                ssLoadContent(eappend, epage , link, callback);
                
            }   
        }

           
    }

    function ssLoadContent(eappend, epage, link, callback = null) {
        $.ajax({
            type: "GET", url: link, success: function (data) {
                $(data).find(epage).each(function () {
                    $(eappend).append($(this).html());
                    if(typeof(callback) == 'function')
                    {
                        callback();
                    }
                });
            }
        });

    };
    function reunitSNS()
    {
        var newSns1 = new Swiper('.sns .col2', {
          
            nextButton: '.sns .swiper-button-next-2',
            
            pagination: '.sns .swiper-pagination-bullets',
            loop: true,
          
        });
        
        var newSns2 = new Swiper('.sns .col3', {
          
            nextButton: '.sns .swiper-button-next-2',
            
            pagination: '.sns .swiper-pagination-bullets',
            loop: true,
          
        });
       
        newSns1.params.control = newSns2;
        newSns2.params.control = newSns1;

        $('.box-video .list').css("height", "465px");
        var boxvideo = new Swiper('.box-video .list',{
            direction: 'vertical',
            slidesPerView: 'auto',
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: false,
            mousewheelControl: true,
            autoHeight: true,
            scrollbarDraggable: true,
            mousewheel: true,
            speed : 300,
        });

        var article_right = {} || article_right;
        article_right.item = '.item-video';
        article_right.thumb = '.thumb-video a';
        article_right.title = '.info-video a';

        var video = {}||video;
        video.item = '.box-video .feature';
        video.contentElement = '.item-video';
        video.title = '.info-video > a';
        video.category = 'a.category';
        video.time = '.time-ago';
        video.sapo = '.sapo-video';

        //block video

        var item_left_click = '.box-video .list .item-video a';
        var elementShare =  '.index-box.box-video .share-option';

        initSwitchVideo(article_right, video,  item_left_click, 550, 309, elementShare);
        initSSPlayers();
        initShareButton();
        cafetamsu();
    }

    function openIframeFocus(){
        var lasturl = '';
        $(".news-focus .item a").click(function(event) {
            lasturl = window.location.href;
            focus_link = $(this).attr('href');
            document.body.style.overflow = "hidden";
            $('.news-focus .focus-view iframe').attr("src", focus_link);
            $('.news-focus .focus-view').removeClass('zoomOut');
            $('.news-focus .focus-view').removeClass('zoomIn');
            $('.news-focus .focus-view').css('display', 'block').addClass('zoomIn');
            return false;
        });
          
        $('.news-focus div[class*="close-modal-"]').click(function(event) {
            document.body.style.overflow = "visible";
            $('.focus-view iframe').attr("src", "about:blank");
            $('.news-focus .focus-view').removeClass('zoomIn');
            $('.news-focus .focus-view').addClass('zoomOut');
            setTimeout(function(){
                $('.news-focus .focus-view').css('display', 'none');
            }, 500);
            posturl = lasturl;
            window.top.document.title = 'Saostar - Trang tin tức giải trí tổng hợp hàng đầu Việt Nam';
            top.window.history.pushState("", "", posturl);
            // window.document.title = 'Saostar - Trang tin tức giải trí tổng hợp hàng đầu Việt Nam';
            // window.history.pushState("", "", posturl);
            return false;
        });
    }

    function reunitQuaGiang()
    {
        initSSPlayers();
        var heightQuaGiang = $(".swqw-main").height();
        
        quagiang = new Swiper('#swiper-qua-giang', {
            // direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop : true,
            // freeMode: true,
            // scrollbar: '.qua-giang .swiper-scrollbar',
            // scrollbarHide: false,
            // mousewheelControl: true,
            // autoHeight: true,
            // scrollbarDraggable : true,
            prevButton: '.swiper-button-prev.qua-giang',
            nextButton: '.swiper-button-next.qua-giang',
            pagination: 'swiper-pagination.qua-giang'

        }),
        focus = new Swiper('.fc-list-container', {
            slidesPerView: 'auto',
            // loop : true,
            spaceBetween: 20,
            prevButton: '.prev-focus',
            nextButton: '.next-focus',
            pagination: '.bullet-focus',
            slidesPerGroup: 4,
            loopFillGroupWithBlank: true,

        });
        openIframeFocus();
    }
    
    function reunitSpecial(){
        // var special = new Swiper('.special .swiper-container', {
        //     slidesPerView: 'auto',
        //     loop : true,
        //     spaceBetween: 15,
        //     slidesPerGroup: 2,
        //     prevButton: '.swiper-button-prev',
        //     nextButton: '.swiper-button-next',
        //     slidesPerGroup: 2,
        // });
    }
}
function timeago()
{
    $('.time-ago').each(function() {

        var $this = $(this);

        var posttime = new Date($this.attr('datetime'));
        if($this.attr('datetime') !=  '')
        {
            var now = new Date();

            var diff = now - posttime;


            if (diff < 86400000 && diff > 0) {

                if (diff < 3600000) {

                    $this.html((Math.floor(diff / 1000 / 60)) + ' phút trước');

                } else {

                    $this.html((Math.floor(diff / 1000 / 60 / 60)) + ' giờ trước');

                }

            }

        }

    });
}
jQuery(document).ready(function($) {
    timeago();
});



// Không để trong document ready
// Hàm load More 
function genLinkLoadMore(e, $trang, $paged)
{
    var $link0 = $(e).data('link');
    var $link1 = ""; 

    switch($trang) {
        case 'tag':
            ////console.log($link0);
            $link1 = $link0.split('page');
            // //console.log($link1[0][$link1[0].length - 1]);
            if($link1[0][$link1[0].length - 1] == "/")
            {
                $link = $link1[0] + 'page/' + $paged;
            }
            else
            {
               $link = $link1[0] + '/page/' + $paged;
           }


           break;
           case 'search':
           var query_string = $(e).data('search_string');
           $link1 = $link0.split('page');
          // //console.log($link1[0][$link1[0].length - 1]);
           if($link1[0][$link1[0].length - 1] == "/")
           {
            $link = $link1[0] + 'page/' + $paged;
        }
        else
        {
           $link = $link1[0] + '/page/' + $paged;
       }
       if(query_string)
       {
        $link = $link + '/?s=' + query_string;
    }

    break;
    default:
    break; 

}
return $link;
}
function loadmore(e, $trang, id_waitpoint = '', autol = false, times = 0, callback = null, flg = null)
{
    var hasData = false;
    var appendmore = '.' + $(e).data('appendmore');
    var rmdiv = '.' +  $(e).data('rmdiv');
    var $paged =  $(e).data('paged');
    $paged  +=  1;
    var $link = genLinkLoadMore(e, $trang, $paged);
    $('.vm-loading').slideDown("slow");
    $(e).slideUp("slow");
    $(e).data('paged',  $paged);
    $.ajax({ type: "GET", url: $link, 
        success: function(data)
        {

            $(data).find(rmdiv).each(function(){
                if(!flg){
                    $(appendmore).append($(this).html()).show('slow');
                    if($('.sw-button')){
                        initShareButton();
                        // lấy like khi load more trang sinh nhật sao
                        if ($('.ss-birthday').length) {  
                            
                            var iconLikeSNS = $('.ss-birthday .bottom-info-left');
                            var arrElementLinkSNS = $('.sns-fm .item h2 a');    
                            var arrLinkSNS = [];
                            for (let i = 0; i < arrElementLinkSNS.length; i++) {
                                const element = arrElementLinkSNS[i];
                                var href = element['href'];
                                arrLinkSNS.push(href);
                            }
                            get_likes_shares_sns(arrLinkSNS, iconLikeSNS);

                        }
                    }
                }
                
                $('.vm-loading').slideUp("slow");
                if(typeof(callback) == 'function')
                {
                    if(!flg){
                        callback();
                    }
                    else{
                        callback($(this).html());
                    }
                }
                if($(this).html().length > 50)
                {
                    initSSPlayers();
                    hasData = true;
                    ////console.log($(this).html());
                }
               // //console.log($(this).html());

           });
            if(hasData)
            {
                timeago();
                $(e).slideDown("slow");
                if(autol && times > 0)
                {
                    autoload(e, $trang, id_waitpoint, times, callback);
                }
            }
            else
            {
                $('.vm-loading').slideUp("slow");
            }
            top.window.history.pushState("", "", $link);
        }, fail : function(){
            $('.vm-loading').slideUp();
        }

    });
    
}
// e : element, $trang: trang tag, search, caterogy, id_waitpoint: scroll đến đó thì auto scroll, $time : số lần autoload
function autoload(e, $trang, id_waitpoint, $time = 0, callback = null, flg = null)
{
    ////console.log(document.getElementById(id_waitpoint));

    var t = true;
    var waypoint = new Waypoint({
        element: document.getElementById(id_waitpoint),
        handler: function() {
            waypoint.destroy();
           // //console.log("autoload run");
            if($time > 0)
            {   
               // //console.log("I am here id_waitpoint");
                $time--;
                loadmore(e, $trang, id_waitpoint, true, $time, callback, flg); 
            }


        },
        offset: '100%',
    })


}
jQuery(document).ready(function($) {
    if($('.qwmr-vote').length)
    {
        $('body').on('click', '.qwmrvli-vote', function(){
        id_post = $('#data').data('post-qw');
        $(this).addClass('voted');
        position = $(this).data('position');
        voted =  Number($(this).data('voted')) + 1;
        vote_QW(id_post, position, voted);

        });
        $('body').on('click', '.qwmrvli-submit', function(){

                sendMail($(this).closest('.qwmrvl-input').find('input'));
        });

        function vote_QW(post_id, position, voted)
        {
            $link = $('#data').data('admin_url') + "admin-ajax.php?action=ss_ban_muon_qua_giang_cung_ai";
            ////console.log({"post_id" : post_id, "position" : position, "voted" : voted} );
            $.ajax({
                type: "POST",
                data: {"post_id" : post_id, "position" : position, "voted" : voted} ,
                url: $link,
                success : function(data){
                    ////console.log(data);
                },

            });
        }
        function sendMail(element) {
            var link = "mailto:khuyentran@saostar.vn"
                     + "?subject=" + "Bạn Muốn Quá Giang Cùng Ai"
                     + "&body=" + element.val()
            ;

            window.location.href = link;
        }

    } 
});
              

// End Khuyen



// phuc.js
// INIT FACEBOOK
$(window).bind("load", function() {
    $.getScript('/data/themes/saostarv5/assets/js/fb.js', function() {});
});
// END INIT FACEBOOK

// LIKE SHARE FACEBOOK
function hai_gio_mot_link(list_url) {
    var d = new Date();
    var h = (d.getHours() < 10 ? '0' : '') + d.getHours();
    var m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var dayString = d.toDateString();
    dayString = dayString.replace(/ /g, '');
    var link = '/data/themes/saostarv5/get_like_fb.php?';

    for (i = 0; i < list_url.length; i++) {
        // var encode_base64_link = list_url[i].btoa()
        var Base64 = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }
                        t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            },
            decode: function(e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) { t = t + String.fromCharCode(r) }
                        if (a != 64) { t = t + String.fromCharCode(i) }
                    }
                t = Base64._utf8_decode(t);
                return t
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128)
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128)
                    }
                }
                return t
            },
            _utf8_decode: function(e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3
                    }
                }
                return t
            }
        };
        var encodeBase64Link = Base64.encode(list_url[i]);
        link = link + 'l' + i + '=' + encodeBase64Link + '&';
        if (i == (list_url.length - 1)) {
            link = link.slice(0, -1);
        }
    }

    if ((h % 2) != 0) {
        h = h - (h % 2);
        link = link + '&t=' + dayString + h;
        return link;
    } else {
        link = link + '&t=' + dayString + h;
        return link;
    }

}

function kFormatter(num) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
}

function hien_so_hay_khong(num) {
    if (num == 0) {
        return '';
    } else {
        return kFormatter(num);
    }
}


function get_likes_shares_sns(list_url, list_item) {
    $.get(hai_gio_mot_link(list_url), function(data) {
        data = JSON.parse(data);

        for (i = 0; i < list_item.length; i++) {
            var like = data[i][0];
            var share = data[i][1];
            $(list_item[i]).find(".like")[0].innerHTML = hien_so_hay_khong(like);
        }
    });
}


function get_likes_shares_tin_hot_nhat(list_url, list_item) {
    $.get(hai_gio_mot_link(list_url), function(data) {
        data = JSON.parse(data);
        for (i = 0; i < list_item.length; i++) {
            var like = data[i][0];
            var share = data[i][1];
            $(list_item[i]).find(".like-number")[0].innerHTML = hien_so_hay_khong(like);
            $(list_item[i]).find(".share-number")[0].innerHTML = hien_so_hay_khong(share);
        }
    });

}

$(document).ready(function(){

        if ($('.ss-birthday').length) {  

    // get like share sinh nhat sao

    var iconLikeSNS = $('.ss-birthday .bottom-info-left');
    var arrElementLinkSNS = $('.sns-fm .item h2 a');    
    var arrLinkSNS = [];
    for (let i = 0; i < arrElementLinkSNS.length; i++) {
        const element = arrElementLinkSNS[i];
        var href = element['href'];
        arrLinkSNS.push(href);
    }
    get_likes_shares_sns(arrLinkSNS, iconLikeSNS);
    
}

    // get like share tin hot nhat, chuyển view thành dạng k
    if ($('.block.tin-hot-nhat').length) {  

        var listIconTinHotNhat = $('.block.tin-hot-nhat .post-info .flexbox');
        var arrElementLinkTinHotNhat = $('.block.tin-hot-nhat .post .post-title a');    
        var arrLinkTinHotNhat = [];
        for (let i = 0; i < arrElementLinkTinHotNhat.length; i++) {
            const element = arrElementLinkTinHotNhat[i];
            var href = element['href'];
            var res = href.replace("cms.", "");
            arrLinkTinHotNhat.push(res);

        // chuyển view thành dạng k
        var view = $(listIconTinHotNhat[i]).find(".view-number")[0].innerHTML;
        $(listIconTinHotNhat[i]).find(".view-number")[0].innerHTML = kFormatter(view);
    }
    get_likes_shares_tin_hot_nhat(arrLinkTinHotNhat, listIconTinHotNhat);
    
    
}

});


// END LIKE SHARE FACEBOOK


function initShareButton(){
    //share button
    $('.sw-button').mouseenter(function(e){
        var button = $(this);
        var parentnode = $(this).parent();
        var parentparent = $(parentnode).parent();
        var sharewrapper = $(parentnode).find('.share-option-wrapper');
        var sharewrapperOffset = sharewrapper.offset();
        var sharewrapperX = sharewrapperOffset.left;
        var sharewrapperY = sharewrapperOffset.top;
        // var limitX = sharewrapperX + sharewrapper.width();
        // var limitY = sharewrapperY + sharewrapper.height() + 11;


        $(button).addClass('sw-button-active');
        $(parentnode).find('.share-option-wrapper').addClass('share-option-wrapper-active');

        $(parentparent).mousemove(function(e){
            var pageX = e.pageX || e.clientX,
            pageY = e.pageY || e.clientY;

            if (pageX >= sharewrapperX && pageY >= sharewrapperY)  {
                return;
            }

            $(button).removeClass('sw-button-active');
            $(parentnode).find('.share-option-wrapper').removeClass('share-option-wrapper-active');

        });
        $(parentparent).mouseleave(function(e){
            $(button).removeClass('sw-button-active');
            $(parentnode).find('.share-option-wrapper').removeClass('share-option-wrapper-active');
        });
    });

    $('.share-item').click(function(){
        $('.share-option-wrapper').removeClass('share-option-wrapper-active');
    });

}

// SHARE BUTTON
$(document).ready(function(){
    initShareButton();
});



function shareFB(e) {
    // var url = $(this).data('url');
   // //console.log(e);
 //   //console.log('a');
    var url = $(e).data('url');
    var desc = $(e).data('desc');
    var title = $(e).data('title');
    var image = $(e).data('image');
    // //console.log(url);
    // //console.log(desc);
    // //console.log(title);
    // //console.log(image);
    var obj = {
        method: 'feed',
        link: url,
        picture: image,
        name: title,
        description: desc,
    };

    function callback(response) {}

    FB.ui(obj, callback);
}


function copyLink() {
    var clipboard = new ClipboardJS('.copy-link');
    clipboard.on('success', function(e) {
    });
    clipboard.on('error', function(e) {

    });


}

function sendMessage (link) {
    FB.ui({
        method: 'send',
        link: link,
    });
}





$(document).ready(function(){
    $('.header-bottom .list>a:last-child').click(function(){
        if ($('.header-bottom .menu').css('display') == 'none') {
            showMenu();
        } else {
            hideMenu();
        }
    });

    $('.bg-overlay').click(function(){
        hideMenu();
    });

    $('.header-top form').mouseenter(function() {
        $('.header-top input').focus();
    });
});

function showMenu(){
    $('.header-bottom .menu').slideDown('fast');
    $('.header-bottom .list>a:last-child').addClass('active');
    $('.bg-overlay').addClass('active');
}

function hideMenu(){
    $('.header-bottom .menu').slideUp('fast');   
    $('.header-bottom .list>a:last-child').removeClass('active');
    $('.bg-overlay').removeClass('active');
}

// fixed when scroll
var pointOfPost = {};
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

function choosePost (st, objectPostID, firstPostID) {
    var chosenPostID = '';
    var arrDiff = {};

    // //console.log(firstPostID);
    for (post in objectPostID) {
        var diff = st - objectPostID[post][0];
        // //console.log(diff);

        if (diff > 0) {
            arrDiff[post] = diff;
        }
    }

    var arr = Object.keys( arrDiff ).map(function ( key ) { return arrDiff[key]; });
    var min = Math.min.apply( null, arr );

    for (post in arrDiff) {
        if (arrDiff[post] == min) {
            chosenPostID = post;
        }
    }

    // //console.log(arrDiff);
    if (isEmpty(arrDiff)) {
        // //console.log('arrDiff empty nen chon la id ban dau');
        chosenPostID = firstPostID;
    } else {
        // //console.log('a');
    }


    return chosenPostID;
}

function fixWhenScroll (postID) {
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        if ($('.swbd-sapo').length) {  

            var point1 = '#point-menu-' + postID;
            if ($('.ssd-cmsnn').length) {
                var point2 = '#ssd-cmsnn-' + postID;    
            } else {
                var point2 = '#end-point-' + postID;
            }

            var heightToTopPoint1 = $(point1).offset().top;
            var heightToTopPoint2 = $(point2).offset().top  - 40;
           

            pointOfPost[postID] = [ heightToTopPoint1, heightToTopPoint2];

            var st = $(this).scrollTop();

            var firstPostID = $('.swbdwn-content')[0].id;

            var chosenPost = choosePost(st, pointOfPost, firstPostID);
            // //console.log('post dang duoc chon la: ' + chosenPost);

            var height1 = pointOfPost[chosenPost][0];
            var height2 = pointOfPost[chosenPost][1];

            var wrap = $('#fixed-item-' + chosenPost);
            // //console.log(st);
            // //console.log('height1: '+height1);
            // //console.log('height2: '+height2);
            // //console.log(wrap);



            if (st > lastScrollTop){
                // down          
                if (st > height1) {
                    wrap.addClass('scroll-fixed');
                    wrap.removeClass('top-absolute');
                    if (st > height2) {
                        wrap.removeClass('scroll-fixed');
                        wrap.addClass('bottom-absolute');
                    }
                } else {
                    wrap.addClass('top-absolute');
                }
            } else {
                // up    
               
                if (st < height2) {
                    wrap.removeClass('bottom-absolute');
                    wrap.addClass('scroll-fixed');
                    if (st < height1) {
                        wrap.removeClass('scroll-fixed');
                        wrap.addClass('top-absolute');
                    } else {
                        wrap.removeClass('bottom-absolute');


                    }

                } else {
                    // //console.log($('.swbd-left'));
                    $('.swbd-left').each(function(){
                        $(this).removeClass('scroll-fixed');
                    });


                    wrap.removeClass('scroll-fixed');
                    wrap.removeClass('bottom-absolute');
                }
            }
            lastScrollTop = st;
        }
    });
}

$(document).ready(function(){
    if ($('.sg-wrapper .swbdwn-content').length) {  
        // trang chi tiet binh thuong
        var firstPostID = $('.sg-wrapper .swbdwn-content')[0].id;
        fixWhenScroll(firstPostID);
    }
    if ($('.swbd-wrapper .swbdwn-content').length) {  
        // trang chi tiet sinh nhat sao
        var firstPostID = $('.swbd-wrapper .swbdwn-content')[0].id;
        fixWhenScroll(firstPostID);
    }
});

// end fix when scroll
// end phuc.js


// khuyen.js
/*******************************
* Comments 
* 
* ******************************/
// Kiểm tra lúc mới vào trang đã đăng nhập facebook lúc đầu chưa
$(document).ready(function() {

    if($('.single-page').length || $('.ss-birthday').length)// Đoạn code chỉ dành cho trang single
    { 
        if($('#data-autoload').length > 0)
        {
            // auto load 5 bài
            var autoloadposts = JSON.parse(document.getElementById('data-autoload').innerHTML.trim());
            // //console.log(autoloadposts);
            
            $(window).on('scroll', function () { 

                for(var i = 0; i< autoloadposts.length; i++)
                {

                    if(i > 0)
                    {
                        // //console.log('autoload :' + 1);
                        if(!autoloadposts[i][2])
                        {
                            if($('#comments1-' + autoloadposts[i-1][1]).length > 0)
                            {
                                var myVar = setInterval(function(){ initCheckLoginFacebook(myVar) }, 1000);
                                var nextPostID = autoloadposts[i][1];
                                scrollToLoadMore('.single-page', '.trang-chi-tiet', autoloadposts[i][0], 'comments1-'+ autoloadposts[i-1][1], autoloadposts[i][2], fixWhenScroll, nextPostID, autoloadposts[i][3], i);
                                autoloadposts[i][2] = true;

                            }
                            
                        }
                    }
                    else
                    {
                        if(!autoloadposts[i][2])
                        {
                            // //console.log('autoload :' + 0);
                            if($('div[id ^= "comments1-"]').length > 0)
                            {
                                var nextPostID = autoloadposts[i][1];
                                // //console.log(nextPostID);
                                scrollToLoadMore('.single-page', '.trang-chi-tiet', autoloadposts[i][0], 'comments1-' + $('div[id ^= "comments-"]').data('post_id'), autoloadposts[i][2],fixWhenScroll, nextPostID, autoloadposts[i][3], i);
                                autoloadposts[i][2] = true;

                            }
                            
                        }  
                    }

                }


            })

        } 
 // Code comment 
        var comment = comment || {};
        comment.id = 0;
        comment.postID = 0;
        comment.parent = 0;
        comment.content = '';
        comment.numberLike = 0;

 
        var user = user || {};
        user.fb = user.fb || {};
        user.fb.userID = '';
        user.fb.mail = '';
        user.fb.name = '';
        user.fb.image = '';
        user.fb.login = false;
        user.email = user.email || {};
        user.email.name = '';
        user.email.mail = '';
        user.name = '';
        user.mail = '';
        user.login_status = false;
        user.defaultImageAvatar = "/data/themes/saostarv5/assets/images/default-user.jpg";

        var resultSendComment = resultSendComment || {};
        resultSendComment.error = resultSendComment.error || {};
        resultSendComment.error.common = "Bình luận của bạn đã xảy ra lỗi";
        resultSendComment.error.error409 = "Bạn đã gửi bình luận này rồi"; 
        resultSendComment.error.error429 = "Bạn gửi bình luận quá nhanh, vui lòng chờ 15 giây trước khi gửi bình luận tiếp theo";
        resultSendComment.success = "Bình luận của bạn đã được gửi. Saostar sẽ đăng tải trong thời gian sớm nhất.";
        

        var formLoginMail = formLoginMail || {};
        formLoginMail.idElementEmail = 'comment-mail';
        formLoginMail.idElementName = 'comment-username';
        formLoginMail.idElementNamePopup = 'my_popup';
        formLoginMail.elementEmail = '#' +  formLoginMail.idElementEmail;
        formLoginMail.elementName = '#' +  formLoginMail.idElementName;
        formLoginMail.elementButtonLogin = '.logingmail';
 
        formLoginMail.elementNamePopup = '#my_popup';
        formLoginMail.popup = '<div id="'+ formLoginMail.idElementNamePopup +'"><h2 class="pop_bl">Bình Luận</h2>'+ 
        '<div class="binhluan_submit"  accept-charset="utf-8">'+
        '<input type="text" id="'+ formLoginMail.idElementName +'" name="name" value="" placeholder="Tên hiển thị">'+
        '<input type="text" id="'+ formLoginMail.idElementEmail +'" name="email" value="" placeholder="Email">'+
        '<a href="javascript:void(0)" class="btn-bl logingmail my_popup_close" title=""> Đăng nhập </a>' +
        '</div>'+
        '<button class="my_popup_close">'+
        '<i class="icon icon-times" aria-hidden="true"></i>'+
        '</button>'+
        '</div>';

        var  elementThoatFacebook = '.sw-thoat';

        var actionComment = actionComment || {};
        actionComment.sendComment = 'a[class ^= "btn-bl-"]';
        actionComment.sendCommentButton = 'btn-bl-';
        actionComment.inputtextelement =  'textarea';


        actionComment.replyComment = '.repcmt';
        actionComment.likeComment = '.btnLike';
        actionComment.resultElement = '.kq-scmt';
        actionComment.elementClicked = {};

        actionComment.contentSendComment = {};
        actionComment.contentSendComment.closestParentNode = 'div[class ^= "form-send-commen-"]';
        actionComment.contentSendComment.element = 'textarea';

        actionComment.contentReplyComment = {};
        actionComment.contentReplyComment.closestParentNode = '.form-rep';
        actionComment.contentReplyComment.element = '.reply-cmt-input';
        actionComment.errorInputContent = "Bình luận của bạn quá ngắn";

        var elementHtmlUserProfile = elementHtmlUserProfile || {};
        elementHtmlUserProfile.imageSource = '.thumb-avatar';
        elementHtmlUserProfile.name = '';

        function initCheckLoginFacebook(myVar)
        {
            if(typeof FB != "undefined")
            {
                FB.getLoginStatus(function(response) {
                    if (response.status == 'connected') {
                        $(elementThoatFacebook).addClass('active');
                        user.fb.login = true;
                        user.login_status = true;
                        user.fb.userID = response.authResponse.userID;
                        getNameFacebookLogin(updateUserProfile);
                        
                    } 
                })
                clearInterval(myVar);
            }  
        }
        ;

        var myVar = setInterval(function(){ initCheckLoginFacebook(myVar) }, 1000);
        function checkLogin()
        {
            if(user.login_status)
            {
                return true;
            }
            return false;
        }

        function loginFacebook()
        {
            FB.login(function(response){
                if(response.status)
                {
                    if(response.status == 'connected')
                    {
                        $(elementThoatFacebook).addClass('active');
                        user.fb.userID = response.authResponse.userID;
                        user.fb.login = true;
                        user.login_status = true;
                        getNameFacebookLogin(updateUserProfile);
                        
                    }
                    else
                    {
                        user.fb.login = false;
                        $(formLoginMail.elementNamePopup).popup('show');
                    }

                }
            });
        }

        function loginMail()
        {
            var name = $(formLoginMail.elementName).val();
            var email = $(formLoginMail.elementEmail).val();
            ////console.log(name);
            ////console.log(email);
            if(name && email)
            {
                user.login_status = true;
                user.name = name;
                user.mail = email;
                updateUserProfile();
            }
            else
            {
                 user.login_status = false;
            }

        }
        function updateUserProfile()
        {
            if(user.login_status)
            {
                if(user.fb.login)
                {
                    setsrcImageAvatarFacebook();
                    $(formLoginMail.elementThoatFacebook).addClass('active');
                    getEmailUser();
                    getUserName();
                }
                else
                {
                    setsrcImageAvatarDefault();
                } 

            }
            else
            {
                setsrcImageAvatarDefault();
            }
        }
        function setsrcImageAvatarFacebook()
        {
            var srcImageAvatar = '//graph.facebook.com/' + user.fb.userID + '/picture?type=large';
            $(elementHtmlUserProfile.imageSource).find('img').attr('src',srcImageAvatar);
        }
        function setsrcImageAvatarDefault()
        {
            var srcImageAvatar = user.defaultImageAvatar;
            $(elementHtmlUserProfile.imageSource).find('img').attr('src',srcImageAvatar);
        }

        function sendComment()
        {
            var data = {
                'email': user.mail ,
                'author': user.name,
                'comment': comment.content,
                'comment_post_ID': comment.postID,
                'comment_parent': comment.parent,
            };
             ////console.log(data);
            $.ajax({
                type: 'post',
                url: '/wp-comments-post.php',   
                data: data,
                beforeSend: function(){

                },
                success: function(data, textStatus, jxhr){

                    var status = '';
                    var msg = '';
                    var jsondata = '';
                    try{
                        jsondata = JSON.parse(data);
                        status = jsondata.status;
                        msg = jsondata.msg;
                        ////console.log("stauts  " + status);
                    } catch(err){
                        status = 'error';
                    }

                    if(status == 'success'){
                        replySuccess(actionComment.elementClicked,  resultSendComment.success);
                    } else {
                        errorSendComment(actionComment.elementClicked, resultSendComment.error.common );
                    }
                    ////console.log(data);
                }, 
                error: function(jxhr, textStatus){
                    if(jxhr.status == '409'){
                        errorSendComment(actionComment.elementClicked, resultSendComment.error.error409);
                    } else if(jxhr.status == '429'){
                        errorSendComment(actionComment.elementClicked, resultSendComment.error.error429);                    
                    }
                }
            })
        }


        function replySuccess($elementClicked, resultSendComment)
        {

            resultBothSendReplyComment($elementClicked, resultSendComment);
        }
        function errorSendComment($elementClicked, resultSendComment)
        {
            resultBothSendReplyComment($elementClicked, resultSendComment);
        }
        $("body").on('click', actionComment.sendComment  + ','+ actionComment.replyComment, function(){
            actionComment.elementClicked = $(this);
            var lenghtComment = getContentComment($(this));
            if(lenghtComment)
            {
                getPostIdComment($(this));
                getParentComment($(this));
                ////console.log(checkLogin());
                if(checkLogin())
                {
                    sendComment();
                }
                else
                {
                    loginFacebook();
                }
            }
            else
            {
                errorSendComment(actionComment.elementClicked, actionComment.errorInputContent);
            }
        })
           
        $("body").on('click',formLoginMail.elementButtonLogin, function(){
            loginMail();
        })
        $("body").on('click',elementThoatFacebook, function(){
            FB.logout(function(response){
                user.login_status = false;
                user.fb.login = false;
                user.mail ='';
                user.name = '';
                $(elementThoatFacebook).removeClass('active');
                updateUserProfile();
                ////console.log(response);
            });
        })
        function getEmailUser()
        {
            if(user.login_status)
            {
                if(user.fb.login)
                {
                    user.mail = user.fb.userID  +'@facebook.com';
                }
                else
                {
                    user.mail = user.email.mail;
                } 
            }
            else
            {
                user.mail = '';
            }

        }
        function getUserName()
        {
            ////console.log(user.name);
            if(user.login_status)
            {
                if(user.fb.login)
                {
                    if(!user.name)
                    {
                        user.name = user.fb.name;
                    }
                    
                }
                else
                {
                    user.name = user.email.name;
                } 
            }
            else
            {
                user.name = '';
            }

        }
        function getContentComment($elementClicked)
        {

            if($elementClicked.attr('class').indexOf(actionComment.sendCommentButton) >= 0)
            {

                var val = $elementClicked.closest(actionComment.contentSendComment.closestParentNode).find(actionComment.contentSendComment.element).val();
                ////console.log(val);
                if(checklength(val, 10))
                {
                     comment.content = escapeHtml(val);
                     return true;
                }


            }
            else
            {

                var val = $elementClicked.closest(actionComment.contentReplyComment.closestParentNode).find(actionComment.contentReplyComment.element).val();
                if(checklength(val, 10))
                {
                     comment.content = escapeHtml(val);
                     return true;
                }

            }
            return false;

        }
        function getPostIdComment($elementClicked)
        {
            comment.postID = $elementClicked.data('post_id');
        }
        function getParentComment($elementClicked)
        {
            
            if($elementClicked.data('parent_id'))
            {
                comment.parent = $elementClicked.data('parent_id');
            }
            else
            {
                 comment.parent = 0;
            }
        }
        function getNameFacebookLogin(callback = null)
        {

            FB.api('/me', function(response) {
                ////console.log(response);
                user.name =   response.name;
                ////console.log(response.name);
                if(typeof callback == 'function')
                {
                    callback();
                }              
            });
        }

        function resultBothSendReplyComment($elementClicked, content)
        {

            if($elementClicked.attr('class').indexOf(actionComment.sendCommentButton) >= 0)
            {
                resultActionComment($elementClicked, actionComment.contentSendComment.closestParentNode, actionComment.resultElement, content);
            }
            else
            {
                resultActionComment($elementClicked,actionComment.contentReplyComment.closestParentNode, actionComment.resultElement, content);
            }
        }

        function resultActionComment($elementClicked, closestParentNode, resultElement, content)
        {
            var element = $elementClicked.closest(closestParentNode).find(resultElement);

            element.addClass('show');
            element.html(content);

            setTimeout(function(){
                $elementClicked.closest(closestParentNode).find(resultElement).addClass('show');
            }, 500);
            setTimeout(function(){
                $elementClicked.closest(closestParentNode).find(resultElement).removeClass('show');
            }, 5000);

            $elementClicked.closest(closestParentNode).find(actionComment.inputtextelement).val('');

        }

        function validateFormLogin(valueinput, length)
        {
            var output = escapeHtml(valueinput);
            if(checklength(output, length))
            {
                return output;
            }
            return false;
        }
        // function check form
        function checklength(text, length = 5) {
            if(typeof(text) == 'string')
            {
                if(text.length < length)
                {
                    return false;
                }
                return true;
            }
        }
        function escapeHtml(str)
        {
            var map =
            {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return str.replace(/[&<>"']/g, function(m) {return map[m];});
        }
        // Những hàm nhỏ
        if (!$('#my_popup').length) { 
            $('body').append(formLoginMail.popup);
            $('#my_popup').popup();

        }
        $("body").on('click', '.btnLike', function() {
            // Tăng 1 khi like
            $(this).addClass('active');
            
            $(this).find('span').html(1 + Number($(this).find('span').html()));
            
            var comment_id = $(this).closest('li').attr('id').replace('comment-', '');

            // //console.log(comment_id);
            var home = $('#data').data('home');

            // //console.log(home);

            var url = home + '/wp-admin/admin-ajax.php';

            var str = '&comment_id=' + comment_id + '&like_comment=' + '1' + '&action=ss_update_comment_like';


            $.ajax({ type: "POST", url: url,  data : str ,
                success: function(data)
                {
                    // //console.log(data);
                }, fail : function(){

                }

            });
        });
        $("body").on('click','.btn-reply', function(){
            $(this).closest('.pre-cm-tl').next('.form-rep').addClass('active');
        })
                // show more 5 comments
        $("body").on('click', 'a[id^="rmcmt-"]', function() {
            var aE =   $(this).closest('.sw-binhluan').find('.box-cm:not(.active)'); 
            if(aE.length < 5)
            {
                $(this).css('display','none');
            }
            for(var key in aE){
                if(key < 5)
                {
                       // //console.log(aE[key]);
                       $(aE[key]).addClass('active');
                   }
                   else
                   {
                    break;
                }
            }
        });
        // show more 5 comments (reply)
        $("body").on('click', '.reply-xemthem', function() {
            var aE =   $(this).closest('.sw-reply').find('.cm-reply:not(.active)');
            if(aE.length < 5)
            {
                $(this).closest('.cm-xemthem').css('display','none');
            }
            for(var key in aE){
                if(key < 5)
                {
                       // //console.log(aE[key]);
                       $(aE[key]).addClass('active');
                   }
                   else
                   {
                    break;
                }
            }
        });
        // End code comment
        // scroll smooth to binh luan
        $("body").on('click','.article-comment-btn, .tracking-binhluan', function(){
            if (this.hash !== "") {
                event.preventDefault();
                // //console.log(this.hash);
                var hash = this.hash;
                ////console.log($(hash));
                if($(hash).length)
                {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 100
                    }, 700, function () {
                        // window.location.hash = hash;
                    });
                }
                

            }
        });

        
        
    }
    if($('.home').length || $('.single-default').length || $('.category').length ||$('.single-sns').length||$('.ss-birthday').length||$('.sssp').length||$('.qw-header').length||$('.taglovewins').length||$('#thevoice').length||$('#manbirth').length)
    {

        // sticky menu
        var element;
        if($('.header-bottom').length)
        {
            element = '';
        }
        else if($('.head-bar').length)
        {
            element = '.head-bar';
        }
        else if($('.spc-header').length)
        {
            element = '.spc-header';
        }
        else if($('.qw-header').length)
        {
            element = '.qw-header';
        }
        else if($('.ssfull-header').length)
        {
            element = '.ssfull-header';
        }
        if($(element).length){
            //// //console.log($(element));
            var stickyNavTop = $(element).offset().top;
            // our function that decides weather the navigation bar should have "fixed" css position or not.
            var stickyNav = function(){
                var scrollTop = $(window).scrollTop(); // our current vertical position from the top

                // if we've scrolled more than the navigation, change its position to fixed to stick to top,
                // otherwise change it back to relative
                //// //console.log("scrollTop " + scrollTop);
                //// //console.log("stickyNavTop " + stickyNavTop);
                if (scrollTop > stickyNavTop) { 
                    $(element).addClass('sticky');

                } else {
                    $(element).removeClass('sticky'); 
                }
            };

            stickyNav();
            // and run it again every time you scroll
            $(window).scroll(function() {
                stickyNav();
            });
        }
    }



    function scrollToLoadMore(rmdiv, appendmore, link, id_waitpoint, done, callback, postID, title, loadlanthu)
    {
            // //console.log(typeof(waypoint));
            if(typeof(waypoint) == 'undefined' && !done)
            {
                var waypoint = new Waypoint({
                    element: document.getElementById(id_waitpoint),
                    handler: function() {
                        waypoint.destroy();
                        $.ajax({ type: "GET", url: link, 
                            success: function(data)
                            {
                                loadlanthu++;
                                $(data).find(rmdiv).each(function(){
                                    $(appendmore).append($(this).clone());
                                    if (typeof(FB) != 'undefined') {
                                        FB.XFBML.parse();
                                    }
                                    
                                    if (typeof(callback) == 'function') {
                                        callback(postID);
                                    }
                                    var e = "#"+postID;
                                    $(e).find('.banner-middle').css("display","none");
                                    
                                    $(e).find('.native-single').css("display","none");
                                    //$(e).find('.tin-moi-cap-nhat').html('');
                                    //// //console.log($(e).find('.native-single'));
                                    //// //console.log("native-single");
                                    if(loadlanthu == 2)
                                    {
                                        $('.sw-recommend[data-id_post="'+postID+'"]').css("margin-bottom","0px");
                                        $('.xem-tiep-cuoi-bai[data-id_post="'+postID+'"]').css("display","none");
                                    }
                                    $('.banner-bottom[data-id_post="'+postID+'"]').css("display","none");
                                    
                                    
                                    reInitBanner(
                                        loadlanthu,
                                        [$(e).closest('.article').find('.banner-reinit1'), 
                                        $(e).closest('.article').find('.banner-reinit2'),
                                        $(e).closest('.article').find('.banner-reinit3'),
                                        ]);
                                    rerunInit();
                                    send_view_pvc(data, postID);
                                    timeago();
                                    SidebarInit('.swbd-minispecial');
                                    initTB('.inviewcontent' + postID);
                                    inittinnong(postID);
                                    randomTinLienQuanGiuaBai(postID);
                                    initboxvideocuoibai();
                                    reuniteHuuIchMoiNgay(postID);
                                    themblockquangcaovaobai(postID);
                                    stickArticleTool(postID);
                                    pushEventScrollDetailGTM(loadlanthu);
                                    holderForEmptyBanner();

                                    initRandomDongSuKien(e + ' .dsk2');
                                    initRandomDongSuKien(e + ' .dsk3');
                                    initRandomtinnong(e + ' .tinhotnhat', '.content-block', '.post' , 'post clearfix' );
                                    stickysidebarsg(postID);

                                    $('.non-adblock.tin-hot-nhat .bg-f2f3f5').addClass('p10');
                                    $('.adblock.tin-hot-nhat .bg-f2f3f5').addClass('p10');

                                    $('#yomedia-balloon-expandable-8d9c32685c454f91a502c7e978cfba3c').remove(); 
                                              
                                     $('iframe[id^="if_abd_media"]').remove(); 
                                    
                                    // //console.log('alo alo');
                                    //// //console.log($(this).html());
                                    // top.window.history.pushState("", "", link);
                                    // document.title = title;  

                                    // // //console.log("loadlanthu " + loadlanthu);
                                      $('.swbdwn-content').each(function(){
                                       // // //console.log("Debug 0");
                                        if($(this).find('#adpr').length == 0)
                                        {
                                            //// //console.log("Debug 1");
                                           // // //console.log($(this).find('.detail-content p:nth-child(5)'));
                                            for (var i = 6; i > 1; i--) {
                                            var element = '.detail-content p:nth-child('+i+')';
                                            if($(this).find(element).length > 0)
                                            {
                                                $("#adpr").clone().insertAfter($(this).find(element));
                                                $('#adpr').show();
                                                break;
                                            }
                                            }
                                            
                                        }
                                    });
                                        //mgid

                                       (function(){
            var D=new Date(),d=document,b='body',ce='createElement',ac='appendChild',st='style',ds='display',n='none',gi='getElementById',lp=d.location.protocol,wp=lp.indexOf('http')==0?lp:'https:';
            var i=d[ce]('iframe');i[st][ds]=n;d[gi]("M338951ScriptRootC254813")[ac](i);try{var iw=i.contentWindow.document;iw.open();iw.writeln("<ht"+"ml><bo"+"dy></bo"+"dy></ht"+"ml>");iw.close();var c=iw[b];}
            catch(e){var iw=d;var c=d[gi]("M338951ScriptRootC254813");}var dv=iw[ce]('div');dv.id="MG_ID";dv[st][ds]=n;dv.innerHTML=254813;c[ac](dv);
            var s=iw[ce]('script');s.async='async';s.defer='defer';s.charset='utf-8';s.src=wp+"//jsc.mgid.com/s/a/saostar.vn.254813.js?t="+D.getYear()+D.getMonth()+D.getUTCDate()+D.getUTCHours();c[ac](s);})();
                      

                                }); 
                            }
                        });

                    },
                    offset: '150%',
                })
            }
    }
    function rerunInit(){
            $(".wp-caption img").each(function() {
            $(this).next(".wp-caption-text").width($(this).attr('realWidth') ); // + 2px border
            // //console.log($(this).attr('realWidth'));
        });
            
            var parent = $(".ss-gif").parent();
            $(parent).css("text-align","center");
            $(".ss-gif").jqGifPreview();
            initSSPlayers();

        changeURL();
    }
    function send_view_pvc(data, postID)
    {
        var nonce = '';
        var requestURL = '';
        if(typeof(data) == 'string')
        {


            var myRe = /pvcArgsFrontend[={\\,\":\/\w \.-]*requestURL":"([a-z:\\/.-]*)[={\\,\":\/\w \.-]*nonce":"([a-z0-9]*)"};/g;
            var match = myRe.exec(data);
            if(match.length > 0)
            {
                   nonce =  match[2]; // cho postview counter
                   requestURL = match[1];
                   
               }
           }
           var request = {
            action: 'pvc-check-post',
            pvc_nonce: nonce,
            id: postID
        };
        // //console.log(requestURL);

        $.ajax( {
            url: requestURL,
            type: 'post',
            async: true,
            cache: false,
            data: request,
            success: function(data, textStatus, jxhr){
                // //console.log("pvc reponse " + data);
            }
        } );
    }
    function reInitBanner(loadlanthu, elements)
    {
        // //console.log( elements[0]);
        // //console.log("loadlanthu " + loadlanthu);
        var str1_med12 = "<div id='";
        var str2_med12 = "' style='height:250px; width:300px;'><script>googletag.cmd.push(function() { googletag.display('";
        var str3_med12 = "'); });</script></div>";


        var str2_med3 = "' style='height:600px; width:300px;'><script>googletag.cmd.push(function() { googletag.display('";

        var arrayIDAd;
        switch(loadlanthu) {
            case 1:
            arrayIDAd = ["div-gpt-ad-1521693778813-0", "div-gpt-ad-1521696387505-0","div-gpt-ad-1521696480548-0"];
            break;
            case 2:
            arrayIDAd = ["div-gpt-ad-1521711523745-0", "div-gpt-ad-1521711754173-0","div-gpt-ad-1521711854998-0"];
            break;
            case 3:
            arrayIDAd = ["div-gpt-ad-1521712168718-0", "div-gpt-ad-1521712239814-0","div-gpt-ad-1521712404287-0"];
            break;
            case 4:
            arrayIDAd = ["div-gpt-ad-1521712529131-0", "div-gpt-ad-1521712569782-0","div-gpt-ad-1521712812171-0"];
            break;
            case 5:
            arrayIDAd = ["div-gpt-ad-1521712888188-0", "div-gpt-ad-1521712941400-0","div-gpt-ad-1521713002464-0"];
            break;
            default:
            break;
        }
        elements[0].html(str1_med12 + arrayIDAd[0]+ str2_med12 + arrayIDAd[0] + str3_med12);
        elements[1].html(str1_med12 + arrayIDAd[1]+ str2_med12 + arrayIDAd[1] + str3_med12);
        elements[2].html(str1_med12 + arrayIDAd[2]+ str2_med3 + arrayIDAd[2] + str3_med12);
    }
    




})
/*******************************
* End Comments 
* 
* ******************************/
function hasScrolled() {
    var st = $(this).scrollTop();
    // //console.log(st);
    
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.sw-nav').removeClass('nav-down').addClass('nav-up');

    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.sw-nav').removeClass('nav-up').addClass('nav-down');

        }
    }
    lastScrollTop = st;
}
// load detail lastest news
// end khuyen.js


// mediajs.js
function SSTimer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    this.resume();
}


// progressive-image.js, v1.1
// by Craig Buckler, @craigbuckler
if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function() {

    // start
    var pItem = document.getElementsByClassName('progressive replace'),
        pCount, timer;

    // scroll and resize events
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', scroller, false);

    // DOM mutation observer
    if (MutationObserver) {

        var observer = new MutationObserver(function() {
            if (pItem.length !== pCount) {
                inView2();
                //inView();
            }
        });
        observer.observe(document.body, {
            subtree: true,
            childList: true,
            attributes: true,
            characterData: true
        });

    }

    // initial check
    inView2();


    // throttled scroll/resize
    function scroller() {
        // inView2();
        timer = timer || setTimeout(function() {
            timer = null;
            inView2();
        }, 50);
    }

    function inView2() {
        ////console.log(pItemSS.length);
        if (pItem.length) requestAnimationFrame(function() {

            var wT = window.pageYOffset,
                wB = wT + window.innerHeight,
                cRect, pT, pB, p = 0;
            while (p < pItem.length) {

                cRect = pItem[p].getBoundingClientRect();
                pT = wT + cRect.top;
                pB = pT + cRect.height;

                // //console.log(wT + " < " + pB + " ; " + wB + " > " + pT);
                if (wT < pB && wB > pT ) {
                    // //console.log(pItem[p]);
                    loadFullImage2(pItem[p]);
                    loadFullImage(pItem[p]);
                    // setTimeout(loadFullImage(pItem[p]), 100);
                    pItem[p].classList.remove('replace');
                } else p++;

            }

            pCount = pItem.length;

        });

    }

    function loadFullImage2(item) {
        var item2 = item.querySelector('.preview_ss');
        // //console.log(item2);
        var href = item2.getAttribute('data-src');
        ////console.log(href);
        if (!href) return;
        //return;
        // load image
        var img = new Image();
        if (item.dataset) {
            img.srcset = item2.dataset.srcset || '';
            img.sizes = item2.dataset.sizes || '';
        }
        var width = item2.getAttribute('data-width');
        var height = item2.getAttribute('data-height');
        img.src = href;
        img.className = 'preview';
        img.alt = item2.alt;
        img.title = item2.title;
        // //console.log(width);
        // //console.log(height);
        if(width > 0){
            img.width = width;
            img.style.width = width+'px';
        }
        if(height > 0){
            // img.height = height;
            img.style.height = 'auto';
        }

        //item.removeChild(item2);
        if (img.complete) addImg2();
        else img.onload = addImg2;

        // replace image
        function addImg2() {
            item.appendChild(img);

            var pImg = item.querySelector('.preview_ss');
            if (pImg) {
                pImg.remove();
                // setTimeout(pImg.remove(), 1);
            }
        }

    }


    // replace with full image
    function loadFullImage(item) {

        var href = item && (item.getAttribute('data-href') || item.href);
        // //console.log(item);
        if (!href) return;

        // load image
        var img = new Image();
        if (item.dataset) {
            img.srcset = item.dataset.srcset || '';
            img.sizes = item.dataset.sizes || '';
        }
        var width = item.clientWidth;
        var height = item.clientHeight;

        img.src = href;
        img.className = 'reveal';
        img.alt = item.alt;
        img.title = item.title;

        if(width > 0){
            img.width = width;
            img.style.width = width+'px';
        }
        if(height > 0){
            // img.height = height;
            img.style.height = 'auto';
        }

        if (img.complete) addImg();
        else img.onload = addImg;

        // replace image
        function addImg() {

            requestAnimationFrame(function() {

                // disable click
                if (href === item.href) {
                    item.style.cursor = 'default';
                    item.addEventListener('click', function(e) {
                        e.preventDefault();
                    }, false);
                }

                // add full image
                item.appendChild(img).addEventListener('animationend', function(e) {

                    // remove preview image
                    var pImg = item.querySelector && item.querySelector('img.preview');
                    if (pImg) {
                        e.target.alt = pImg.alt || '';
                        item.removeChild(pImg);
                        e.target.classList.remove('reveal');
                    }

                });
                setTimeout(function(){
                    var pImg = item.querySelector && item.querySelector('img.preview');
                    if (pImg) {
                        e.target.alt = pImg.alt || '';
                        item.removeChild(pImg);
                        e.target.classList.remove('reveal');
                    }
                },2000);

            });

        }

    }

}, false);



// end mediajs.js
//mini special
$(document).ready(function(){
    if($('.ss_gallery').length > 0)
    {

        $('.ss_gallery').each(function(index, el) {
            ////console.log($(this).closest('.vc_row').next('.vc_row').find('.wpb_gallery'));
            if($(this).closest('.vc_row').next('.vc_row').find('.ss_gallery').length > 0 )
            {
                $(this).closest('.vc_row').next('.vc_row').css('margin-top', '-28px');
            }
        });  
    }
})
function unmute_cover(){
    //console.log('bat tieng video cover');

    if( $("#video-cover").prop('muted') ) {
          $("#video-cover").prop('muted', false);
    } else {
      $("#video-cover").prop('muted', true);
    }
    // $(".unmute-btn-cover").fadeOut( "slow" );
    $(".unmute-btn-cover a").toggleClass('muted');
}