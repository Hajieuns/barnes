$(document).ready(function(){
    panelControl();
    searchBar();
    cartBar();
    mainSlider();
    carouselSlider();
    promoSlider();
    mainBookSlider();
    // thumbNailSlider();
    alsoSlider();
    tabMenu();
    editorailbtn();
    countSet();
    expandBook();
    detailPageAditorial();
    IconsSlider();
    passwordIcon();
    shippingIcon();
    passwordPageIcon();
    addContentIcon();
    passwordmustbe();
    changePasswordmustbe();
    mobileFooter();
    mobileNav();
});



function searchBar() {
    $('.search_container').hide();
    
    $('[data-target]').on('click', function() {
        var targetId = $(this).data('target');
        var $target = $('#' + targetId);
        $target.toggleClass('active');
        if ($target.hasClass('active')) {
            $target.show();
            $(this).addClass('active');
        } else {
            $target.hide();
            $(this).removeClass('active'); 
        }
    });
    if ($(window).width() <= 767) {
        $('.search_container input[type="button"]').on('click', function() {
            var $target = $(this).closest('.search_container');
            $target.hide();
            $('[data-target="#' + $target.attr('id') + '"]').removeClass('active');
        });
    }
}
function panelControl(){
    var currentPanel = null;
    $(".btn_open").click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}

function  cartBar(){
       $('.open').on('click', function() {
        $('[data-toggle="cartPanel"]').not(this).removeClass('active');
        $('#cartPanel').toggleClass('active');
        if ($('#cartPanel').hasClass('active')) {
            $(this).addClass('active'); 
        } else {
            $(this).removeClass('active');
        }
    });

    $('.close').on('click', function() {
        $('#cartPanel').removeClass('active');
        $('.open').removeClass('active');
    });
}


function mainSlider(){
    $(".mainSlider").bxSlider({
        touchEnabled : false
    });
}

function carouselSlider(){
    $(".carouselSlider").bxSlider({
        slideWidth: 260,
        slideMargin: 20,
        moveSlides: 1,
        maxSlides: 4,
        minSlides: 1,
        pager: false
    });
}


function promoSlider(){
    $(".promoSlider").bxSlider({
        slideWidth:455,
        slideMargin:35,
        moveSlides:1,
        maxSlides:4,
        minSlides:1,
        controls:false

    })
}


function mobileFooter() {
    const sectionHeaders = $('footer .footer_h2');

    sectionHeaders.click(function() {
        const sectionName = $(this).attr('data-section');
        const sectionList = $(`footer ul[data-section="${sectionName}"]`);

        sectionList.slideToggle();
        $(this).toggleClass('active');
        
        $('h2').not($this).removeClass('active');
        sectionName.toggle();
    });
}

function mobileNav(){
    $('h2').click(function () {
        var $this = $(this);
        var $siblings = $this.siblings('ol');
        $this.toggleClass('active');
        $('h2').not($this).removeClass('active');
        $siblings.toggle();
        $('h2').not($this).siblings('ol').hide();
        $('h2.active').not($this).siblings('ol').hide();
    });
}

function mainBookSlider(){
    var mainSlider = $(".mainBookSlider").bxSlider({
        mode: 'horizontal',
        slideWidth: 455,
        slideMargin: 35,
        moveSlides: 1,
        maxSlides: 1,
        minSlides: 1,
        controls: true,
        pager: true,
        pagerCustom: ".thumbNailSlider"
    });
}


function IconsSlider(){
    $(".ftIconsSlider").bxSlider({
        slideWidth: 105,
        slideMargin:20,
        moveSlides:1,
        maxSlides:9,
        minSlides:2,
        pager:false,
        controls: true,
        touchEnabled : false
    });

}


function alsoSlider(){
    $(".alsoSlider").bxSlider({
        slideWidth: 202,
        slideMargin: 20,
        moveSlides: 1,
        maxSlides: 5,
        minSlides:1,
        pager:false,
        controls: true
    });
}

function tabMenu() {
    $('.tabMenu li:first-child').addClass('active');
    $('.content:first-child').addClass('active');
    $('.tabMenu li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.content').eq(index).addClass('active').siblings().removeClass('active');
    });
}


function editorailbtn(){
    $("input[value='READ MORE']").click(function() {
        $(this).parent().find(".hidden").show();
        $(this).hide();
    });

    $("input[value='READ LESS']").click(function() {
        $(this).parent().hide();
        $(this).parent().parent().find("input[value='READ MORE']").show();
    });
}

function countSet(){
    $(".numberInput input[value='minBtn']").click(function(){ 
        this.parentNode.querySelector('input[type=number]').stepDown();
    });
    $(".numberInput input[value='plusBtn']").click(function(){
        this.parentNode.querySelector('input[type=number]').stepUp();
    });
}


function expandBook() {
    
    $("input[value='expandBook']").click(function() {
        var panelId = $(this).data("panel");
        $("#" + panelId).toggle();
    });
    $("input[value='X']").click(function() {
        $(this).parent().hide();
    });
    
}

function detailPageAditorial() {
    var div3Exists = $('.detailContainer > div:nth-child(3)').length > 0;
    if (!div3Exists) {
         var bxSliderStyle = $('.bx-slider').attr('style');
        $('.detailContainer > div:nth-child(3)').attr('style', bxSliderStyle);
    }
}

function passwordIcon(){
    var $toggleTarget = $(".material-symbols-outlined.toggleVisible");
    var toggleStatus = false;
    var $pwInput = $("#newuserPW");

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $pwInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $pwInput.attr("type","password");
        }
    });
}

function shippingIcon(){

    $('.btn_remove').click(function() {
        $(this).parent().find('.addShipping').slideToggle();
        $(this).toggleClass('active');
    });
}

function passwordPageIcon(){
    var $toggleTarget  = $(".material-icons.toggleVisible");
    var toggleStatus = false;
    var $pwInput = $("#newuserPW");

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus; //
        //console.log(typeof(toggleStatus)+toggleStatus);
        if(toggleStatus == true){ //
            $toggleTarget.text("visibility"); //
            $pwInput.attr("type","text"); //
        }else{
            $toggleTarget.text("visibility_off"); //
            $pwInput.attr("type","password"); //
    }
    });

}

function addContentIcon(){

    $('.btn_add, h3').click(function() {
        var $parent = $(this).closest('div');
        var isBtnAdd = $(this).hasClass('btn_add');

        $parent.find('.addContent').slideToggle();
        $parent.find('.btn_add, h3').toggleClass('active');
    });

    
}

function passwordmustbe(){
    var newPasswordInput = $("#newuserPW");
    var conditionsList = $(".resetPasswordContainer > ul");
    conditionsList.hide();
    newPasswordInput.mouseover(function() {
        conditionsList.show();
    });

    newPasswordInput.mouseout(function() {
        conditionsList.hide();
    });
}

function changePasswordmustbe(){
    var newPasswordInput = $("#newuserPW");
    var conditionsList = $(".mustBe");
    conditionsList.hide();
    newPasswordInput.mouseover(function() {
        conditionsList.show();
    });

    newPasswordInput.mouseout(function() {
        conditionsList.hide();
    });
}

// function toggleSelectForm(){
//     $('div.selectForm').click(function(){
//         $(this).toggleClass('active')
//     })
// }