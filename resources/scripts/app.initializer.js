( function( $ ) {
    'use strict';

    // Setup background image transitions
    var backgroundImageIndex = 1;
    var backgroundImages = [ './resources/images/blue-green_mountain-2287731_1920.jpg',
            './resources/images/green_landscape-403165_1920.jpg',
            './resources/images/green-blue_tree-247122_1280.jpg',
            './resources/images/blue-orange_sunset-229335_1920.jpg' ];

    setInterval( function() {
        $( 'header' ).css( 'backgroundImage', 'url(' + backgroundImages[backgroundImageIndex++] + ')' );

        if ( backgroundImageIndex == backgroundImages.length ) {
            backgroundImageIndex = 0;
        }
    }, 10000 );


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $( document ).on( 'click', 'a.page-scroll', function( event ) {
        var $anchor = $( this );
        $( 'html, body' ).stop().animate( {
            scrollTop : ( $( $anchor.attr( 'href' ) ).offset().top - 50 )
        }, 1250, 'easeInOutExpo' );
        event.preventDefault();
    } );

    // Highlight the top nav as scrolling occurs
    $( 'body' ).scrollspy( {
            target : '.navbar-fixed-top',
            offset : 51
    } );

    // Closes the Responsive Menu on Menu Item Click
    $( '.navbar-collapse ul li a' ).click( function() {
        $( '.navbar-toggle:visible' ).click();
    } );

    // Offset for Main Navigation
    $( '#main-nav' ).affix( {
        offset : {
            top : 100
        }
    } )

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal( '.sr-icons', {
            duration : 600,
            scale : 0.3,
            distance : '0px'
    }, 200 );
    sr.reveal( '.sr-button', {
            duration : 1000,
            delay : 200
    } );
    sr.reveal( '.sr-contact', {
            duration : 600,
            scale : 0.3,
            distance : '0px'
    }, 300 );

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $( '.popup-gallery' ).magnificPopup( {
            delegate : 'a',
            type : 'image',
            tLoading : 'Loading image #%curr%...',
            mainClass : 'mfp-img-mobile',
            gallery : {
                    enabled : true,
                    navigateByImgClick : true,
                    preload : [ 0, 1 ]
            // Will preload 0 - before current, and 1 after the current image
            },
            image : {
                tError : '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
    } );
} )( jQuery );