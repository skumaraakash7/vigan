

$(document).ready(function(){
    if($('.v-collection-toolbar .sort-position').length > 0) {
        $('.v-collection-toolbar .sort-position').select2({
            minimumResultsForSearch: -1,
            dropdownParent: '.tt-sort',
            dropdownCssClass : 'v-large-dropdown'
        });  
    }

    if($('.v-collection-list-slider').length > 0) {
        $(".v-collection-list-slider").mCustomScrollbar({
            axis: "x",
            autoHideScrollbar: true,
            theme:"dark-3" ,
           	mouseWheel:"auto",   
      		autoDraggerLength:true,   
        });
    }

    if($('.js-filter-toggle').length > 0) {
        $('.js-filter-toggle').on('click',function(){
            $('.v-collection-toolbar').addClass('open');
            $('html').addClass('filter-open');
        });
    }

    if($('.js-close-toolbar').length > 0) {
        $('.js-close-toolbar').on('click',function(){
            $('.v-collection-toolbar').removeClass('open');
            $('html').removeClass('filter-open');
        });
    }
  
  	if($('.v-collection-bottom-bar a.btn-theme').length > 0) {
        $('.v-collection-bottom-bar a.btn-theme').on('click',function(){
            $('.v-collection-toolbar').removeClass('open');
            $('html').removeClass('filter-open');
        });
    }
  

    if($('.v-filter-remove').length > 0) {
        $('.v-filter-remove').on('click',function(){
            $('.v-filter-option .filter-result-wrapper .clear_all').trigger('click');
            $('.v-collection-toolbar').removeClass('open');
            $('html').removeClass('filter-open');  
        });
    }

    $(document).mouseup(function(e){
        //var container = $(".v-collection-filter-inner .tt-collapse");

        // if the target of the click isn't the container nor a descendant of the container
        if (! $(".v-collection-filter-inner .tt-collapse").is(e.target) &&  $(".v-collection-filter-inner .tt-collapse").has(e.target).length === 0) 
        {
             $(".v-collection-filter-inner .tt-collapse").removeClass('open');
        }

        if (! $(".v-collection-toolbar.open").is(e.target) &&  $(".v-collection-toolbar.open").has(e.target).length === 0) 
        {
            $(".v-collection-toolbar").removeClass('open');
            $('html').removeClass('filter-open');
        }
    });

    // get input field and add 'keyup' event listener
    // let searchInput = document.querySelector('.v-filter-search');
    // searchInput.addEventListener('keyup', search);

    // // get all title
    // let titles = searchInput.closest('.tt-collapse-content').querySelectorAll('li');
    // let searchTerm = '';
    // let tit = '';

    // function search(e) {
    // // get input fieled value and change it to lower case
    // searchTerm = e.target.value.toLowerCase();

    // titles.forEach((title) => {
    //     // navigate to p in the title, get its value and change it to lower case
    //     tit = title.textContent.toLowerCase();
    //     // it search term not in the title's title hide the title. otherwise, show it.
    //     tit.includes(searchTerm) ? title.style.display = 'block' : title.style.display = 'none';
    // });
    // }

    if($('.v-collection-filter-inner .v-filter-search').length > 0) {
        $('.v-collection-filter-inner .v-filter-search').keyup(function(){
            
            var searchText = $(this).val().toLowerCase();
            console.log(searchText);
            
            $(this).closest('.v-filter-search-wrapper').next('.tt-list-row').children('li').each(function(){
                
                var currentLiText = $(this).text().toLowerCase(),
                    showCurrentLi = currentLiText.indexOf(searchText) !== -1;
                
                $(this).toggle(showCurrentLi);
                
            });     
        });
    }

    if($('.v-vendor-filter-search').length > 0) {
        $('.v-vendor-filter-search').keyup(function(){
            
            var searchText = $(this).val().toLowerCase();
            console.log(searchText);
            
            $(this).closest('.v-filter-search-wrapper').next('.tt-list-row').children('li').each(function(){
                
                var currentLiText = $(this).text().toLowerCase(),
                    showCurrentLi = currentLiText.indexOf(searchText) !== -1;
                
                $(this).toggle(showCurrentLi);
                
            });     
        });
    }

    // if($('.v-collapse-panel .sidenav-title').length > 0) {
    //     $('.v-collapse-panel .sidenav-title').on('click',function(e){
    //         e.preventDefault();
    //         $(this).closest('.sidenav-parent').toggleClass('active');
    //         $(this).closest('.sidenav-element').children('.children-list').slideToggle();
    //         $(".v-collapse-panel .children-list").not($(this).closest('.sidenav-element').children('.children-list')).slideUp('fast');
    //         $(".sidenav-parent").not($(this).closest('.sidenav-parent')).removeClass('active');
    //     });
    // }

    if($('.v-collection-filter-inner .tt-collapse-title').length > 0) {
        $('.v-collection-filter-inner .tt-collapse-title').on('click',function(e){
            $(".v-collection-filter-inner .tt-collapse").not($(this).closest('.tt-collapse')).removeClass('open');
        });
    }
  
    $(document).on('click', '.vendor_link a', function(e){
        e.preventDefault();
        window.location.href = $(this).attr('href');
    });
  
    // $('.v-product-list .product-slider-main').each(function (idx, item) {
    //     idx = idx + 1;
    //     var carouselId = "v-product-main-slider-" + idx;
    //     var carouselThumb = "v-product-thumb-slider-" + idx;
    //     this.id = carouselId;
    //     $('#'+carouselId).slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         fade: true,
    //         lazyload: 'progressive',
    //         asNavFor: carouselThumb
    //     });
    // });

    // $('.v-product-list .product-slider-thumb').each(function (idx, item) {
    //     idx = idx + 1;
    //     var carouselId = "v-product-main-slider-" + idx;
    //     var carouselThumb = "v-product-thumb-slider-" + idx;
    //     this.id = carouselId;
    //     $('#'+carouselThumb).slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         asNavFor: carouselId,
    //         dots: false,
    //         lazyload: 'progressive',
    //         focusOnSelect: true
    //     });
    // });
    $('.product-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slider-thumb'
      });
      $('.product-slider-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider-main',
        dots: true,
        focusOnSelect: true
      });

    // $('.product-slider-main').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1, 
    //     arrows: false,
    //     fade: true,
    //     loop: true,
    //     lazyload: 'progressive',
    //     asNavFor: '.product-thumb-slider'
    // });
    // $('.product-slider-thumb').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.product-main-slider',
    //     dots: false,
    //     lazyload: 'progressive',
    //     focusOnSelect: true
    // });
      /*
    var get_cart_footer_height = $('.v-cart-footer').outerHeight();
    var height_for_cart_box_inner = get_cart_footer_height + 121;
    //$('.v-cart-body .tt-cart-box').attr('style',`max-height:calc(100vh - ${height_for_cart_box_inner}px) !important`);
    $('.v-cart-body .tt-cart-box').attr('style',`max-height:100% !important`);
    */

    let v_cart_foooter = $('.v-cart-footer').outerHeight();
    let v_height_total = $('.tt-cart-content').innerHeight();
    let v_to_adjust = v_height_total - v_cart_foooter - 50;
    $('.v-cart-body .tt-cart-box').attr('style',`max-height:${v_to_adjust}px !important`);

});
// const showDialog = () => {
//     document.getElementById('v-cart-drawer-main').classList.add('show');
//     const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
//     const body = document.body;
//     body.style.position = 'fixed';
//     body.style.top = '-${scrollY}';
//   };
//   const closeDialog = () => {
//     const body = document.body;
//     const scrollY = body.style.top;
//     body.style.position = '';
//     body.style.top = '';
//     window.scrollTo(0, parseInt(scrollY || '0') * -1);
//     document.getElementById('v-cart-drawer-main').classList.remove('show');
//   };
//   window.addEventListener('scroll', () => {
//     document.documentElement.style.setProperty('--scroll-y', '${window.scrollY}px');
// });

$(window).resize(function(){

    /*
  var window_height = $(window).innerHeight();
  var get_cart_footer_height = $('.v-cart-footer').outerHeight();
  var height_for_cart_box_inner = get_cart_footer_height + 121;
  //$('.v-cart-body .tt-cart-box').attr('style',`max-height:calc(100vh - ${height_for_cart_box_inner}px) !important`);
  //$('.v-cart-body .tt-cart-box').css('max-height' , window_height - height_for_cart_box_inner);
  $('.v-cart-body .tt-cart-box').attr('style',`max-height:100% !important`);
  */

  let v_cart_foooter = $('.v-cart-footer').outerHeight();
  let v_height_total = $('.tt-cart-content').innerHeight();
  let v_to_adjust = v_height_total - v_cart_foooter - 50;
  $('.v-cart-body .tt-cart-box').attr('style',`max-height:${v_to_adjust}px !important`);
});

$(document).ready(function(){
    $(document).on('click','.qty-input i',function(e) {
        e.preventDefault();
        val = parseInt($(this).parent().find('input').val());    
        if ($(this).hasClass('less')) {
            val = val - 1;
        } else if ($(this).hasClass('more')) {
            val = val + 1;        }
        if (val < 1) {
            val = 1;
        }    
        $(this).parent().find('input').val(val);
        $(this).parent().find('input').trigger('change');
    });

    $(document).on('change','[data-cart-qty]',function(e){
        var cur_em = e.target;
        var cur_qty = $(cur_em).val();
        var variant_id = $(cur_em).attr('data-id');
        $.ajax({
            url : "/cart/change.js",
            data :{ id : variant_id,quantity:cur_qty},
            dataType: "JSON",
            method: "POST",
            success:function(data) {
                    var cart = data;
                    Shopify.onCartUpdate(data);
                    $(cart.items).each(function(ix,em){
                        let var_id = em.id;
                        let quantity = em.quantity;
                        $(`[data-id='${var_id}']`).parents(".tt-item-descriptions").find('.js-variant-title.data-12').find('.qty').text(`${quantity}`);
                        $(`[data-id='${var_id}']`).parents(".tt-item-descriptions").find('.js-variant-title.data-11').find('.qty').text(`${quantity}`);
                        $(`[data-id='${var_id}']`).val(em.quantity);
                    });
                    adjust_cart_bar(data.total_price);
            },
            error : function(data) {

            }
        })
    });

    $(document).on('click','.tt-item > a[title]',function(e){
        e.preventDefault();
    });

    $(document).on('click','.v-cart-body .tt-title',function(e){
        e.preventDefault();
        let currentEm = $(e.target);
        let href = $(currentEm).parents('a').eq(0).attr('href');
        window.location = href;
    });
});

function adjust_cart_bar(cart_value){
    jQuery.getJSON('/cart.js', function(cart) {
        var only_gift_cards = true;
        var cart_items = cart.items;
        if(cart_items.length == 0) {
            only_gift_cards = false;
        }
        Object.values(cart_items).forEach(item => {
            if(!item.gift_card) {
                only_gift_cards = false;
            }
            else {
                cart_value -= item.line_price;
            }
        });
        let shipping_icon_img = $(".block-cart-range-slider-truck-icon");
        let shipping_icon_line = $(".block-cart-range-slider-truck-icon-line");
        let gift_icon_img = $(".block-cart-range-slider-gift-icon");
        let gift_icon_line = $(".block-cart-range-slider-gift-icon-line");
        let shipping_free_success = $(".block--cart-meta-success-free-shipping-success");
        let gift_free_success = $(".block--cart-meta-success-free-gift-success");
        let congratulations_message = $(".cart-meta-success-top");
        let shipping_remaining = $(".block--cart-meta-free-shipping");
        let gift_remaining = $(".block--cart-meta-free-gift");
        let pink_slide_bar = $(".block--cart-range-slider-bar");
        let whole_slider = $(".block--cart-range-slider");
        let shipping_amount_span = $(".v-vat-shipping-amount-new");

        let free_shipping_threashold = 0;
        let free_gift_threashold = 0;
        let is_free_gift_enabled = false;

        let shipping_remaining_text = $(shipping_remaining).attr('data-text').toString();
        let gift_remaining_text = $(gift_remaining).attr('data-text').toString();

        $(shipping_free_success).fadeOut(0);
        $(gift_free_success).fadeOut(0);
        $(shipping_remaining).fadeOut(0);
        $(gift_remaining).fadeOut(0);
        if($('[data-free-shipping-threshold]').length > 0) {
            free_shipping_threashold = parseInt($('[data-free-shipping-threshold]').attr('data-free-shipping-threshold'));
            let free_gift_handle = false;
            let free_gift_id = false;
            if($('[data-free-gift-threshold]').length > 0) {
                free_gift_threashold = $('[data-free-gift-threshold]').attr('data-free-gift-threshold');
                is_free_gift_enabled = true;
                if($('[data-free-gift-product-handle]').length > 0) {
                    free_gift_handle = $('[data-free-gift-product-handle]').attr('data-free-gift-product-handle');
                }
                if($('[data-free-gift-product]').length > 0) {
                    free_gift_id = $('[data-free-gift-product]').attr('data-free-gift-product');
                }
                let gift_left_position = free_gift_threashold * 100 / 15000;
                $(gift_icon_img).css('left',`calc(${gift_left_position}% - 8px)`);
                $(gift_icon_line).css('left',`calc(${gift_left_position}% - 1px)`);

                let shipping_left_position = free_shipping_threashold * 100 / 15000;
                $(shipping_icon_img).css('left',`calc(${shipping_left_position}% - 8px)`);
                $(shipping_icon_line).css('left',`calc(${shipping_left_position}% - 1px)`);

            } else {
                let shipping_left_position = free_shipping_threashold * 100 / 15000;
                $(shipping_icon_img).css('left',`calc(${shipping_left_position}% - 8px)`);
                $(shipping_icon_line).css('left',`calc(${shipping_left_position}% - 1px)`);
                $(gift_icon_img).fadeOut(0);
                $(gift_icon_line).fadeOut(0);
            }
            let slide_bar_position = 0;
            if(free_gift_threashold > free_shipping_threashold) {
                slide_bar_position = (cart_value/15000)*100;
            } else {
                slide_bar_position = (cart_value/15000)*100;
            }
            if(slide_bar_position >= 100) {
                slide_bar_position = 100;
            }
            $(pink_slide_bar).css('width',`${slide_bar_position}%`);
            if(cart_value >= free_shipping_threashold) {
                $(shipping_free_success).fadeIn(100);
                $(shipping_remaining).fadeOut(100);
                if(shipping_amount_span !== undefined && shipping_amount_span.css("display") !== "none") {
                    shipping_amount_span.text("GRATIS");
                }
            } else {
                let remaining_free_shipping = free_shipping_threashold - cart_value;
                let remaining_free_shipping_formatted = Shopify.formatMoney(remaining_free_shipping,Shopify.money_format).replace('$','');
                let message_for_remaining_free_shipping = shipping_remaining_text.replace("{{remaining}}",remaining_free_shipping_formatted);
                $(shipping_remaining).text(message_for_remaining_free_shipping);
                $(shipping_free_success).fadeOut(100);
                $(shipping_remaining).fadeIn(100);
                if(shipping_amount_span !== undefined && shipping_amount_span.css("display") !== "none") {
                    if(only_gift_cards) {
                        shipping_amount_span.text("GRATIS");
                    }
                    else {
                        shipping_amount_span.text("CHF 5.95");
                    }
                }
            }
            if(is_free_gift_enabled) {
                if(cart_value >= free_gift_threashold) {
                    $(gift_free_success).fadeIn(100);
                    $(congratulations_message).fadeIn(100);
                    $(whole_slider).fadeOut(100);
                    //$(cart_range).style.paddingTop = "0px";
                    $(gift_remaining).fadeOut(100);
                    //Do atc of free gift
                    let is_free_gift_added = false;
                    if($(`[data-cart-qty][data-id='${free_gift_id}']`).length > 0) {
                        is_free_gift_added = true;
                    }
                    if(free_gift_id && is_free_gift_added == false) {
                        $.ajax({
                            method : "POST",
                            url : "/cart/add.js",
                            data : {id : free_gift_id , quantity : 1},
                            dataType: "JSON",
                            cache : false,
                            success : function(t){
                                Shopify.onItemAdded(t)
                            }
                        });
                    }
                } else {
                    let is_free_gift_added = false;
                    if($(`[data-cart-qty][data-id='${free_gift_id}']`).length > 0) {
                        is_free_gift_added = true;
                    }
                    if(free_gift_id && is_free_gift_added == true) {
                        let current_item = {};
                        current_item[free_gift_id] = 0;
                        $.ajax({
                            method : "POST",
                            url : "/cart/update.js",
                            data : { 'updates': current_item },
                            dataType: "JSON",
                            cache : false,
                            success : function(){
                                $(`[data-cart-qty][data-id='${free_gift_id}']`).parents(".tt-item").eq(0).remove();
                                Shopify.removeItem(free_gift_id, onCartUpdateCustom);
                            }
                        });
                    }
                    let remaining_free_gift = free_gift_threashold - cart_value;
                    let remaining_free_gift_formatted = Shopify.formatMoney(remaining_free_gift,Shopify.money_format).replace('$','');
                    let message_for_remaining_free_shipping = gift_remaining_text.replace("{{remaining}}",remaining_free_gift_formatted);
                    $(gift_remaining).text(message_for_remaining_free_shipping);
                    $(gift_free_success).fadeOut(100);
                    $(congratulations_message).fadeOut(100);
                    $(whole_slider).fadeIn(100);
                    //$(cart_range).style.paddingTop = "20px";
                    if(cart_value >= free_shipping_threashold) {
                        $(gift_remaining).fadeIn(100);
                    }
                }
            }
            else {
                if(cart_value >= free_shipping_threashold) {
                    $(congratulations_message).fadeIn(100);
                    $(whole_slider).fadeOut(100);
                    //$(cart_range).style.paddingTop = "0px";
                }
                else {
                    $(congratulations_message).fadeOut(100);
                    $(whole_slider).fadeIn(100);
                    //$(cart_range).style.paddingTop = "20px";
                }
            }
        }
    });
}
adjust_cart_bar(cart_data.total_price);

$(document).on('click','[data-js-checkout]',function(e){
    e.preventDefault();
    if( $('[data-free-gift-product]').length > 0 ) {
        let free_gift_id = $('[data-free-gift-product]').attr('data-free-gift-product');
        if($(`[data-id="${free_gift_id}"]`).length > 0 ) {
            let current_item = {};
            current_item[free_gift_id] = 1;
            $.ajax({
                method : "POST",
                url : "/cart/update.js",
                data : { 'updates': current_item },
                dataType: "JSON",
                cache : false,
                success : function(){
                    window.location = "/checkout";
                },
                error : function() {
                    window.location = "/checkout";
                }
            });
        } else {
            window.location = "/checkout";
        }
    } else {
        window.location = "/checkout";
    }
});