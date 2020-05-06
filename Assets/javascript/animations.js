$(window).resize(function() {
    // This will execute whenever the window is resized
    $(window).height(); // New height
    $(window).width(); // New width
});

// init control
var controller = new ScrollMagic.Controller();

/*starting section*/
// build scene
$(function () {
    var scene = new ScrollMagic.Scene({duration: 3000})
                    .setPin("#starting")
                    .addTo(controller);
});
// build tween
var tween1 = TweenMax.to("#title", 1, {color: "rgb(18,17,22)", ease:Power1.easeIn});

// build scene 
var scene1 = new ScrollMagic.Scene({duration: 500})
				.setTween(tween1)
                .addTo(controller);

// build tween
var tween2 = TweenMax.to("#title", 1, {fontSize: '11000px', scale: (1.575, 1.5), ease:Power2.easeIn});

// build scene 
var scene2 = new ScrollMagic.Scene({duration: 2500, offset: 500})
				.setTween(tween2)
                .addTo(controller);



/*explanation section*/
var scene3 = new ScrollMagic.Scene({triggerElement: "#explanation", triggerHook: 0, duration: 1000})
                .setPin("#explanation")
                .addTo(controller);

// build tween
var tween3 = TweenMax.to(["#title-pt1-1","#title-pt2-1"], 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene4 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 1, duration: 800})
				.setTween(tween3)
                .addTo(controller);

// build tween
var tween4 = TweenMax.to(["#title-pt1-1","#title-pt2-1"], 1, {opacity: 0, ease:Power2.easeIn});
var tween5 = TweenMax.to(["#title-pt1-2","#title-pt2-2"], 1, {opacity: 1, ease:Power2.easeIn});
// build scene 
var scene5 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 0, duration: 300, offset:250})
				.setTween(tween4)
                .addTo(controller);
var scene6 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 0, duration: 300, offset:250})
				.setTween(tween5)
                .addTo(controller);

// build tween
var tween6 = TweenMax.to(["#title-pt1-2","#title-pt2-2"], 1, {opacity: 0, ease:Power2.easeIn});
var scene7 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 0, duration: 600, offset:700})
				.setTween(tween6)
                .addTo(controller);



/*cover section*/
// build scene
var scene8 = new ScrollMagic.Scene({triggerElement: "#cover", triggerHook: 0, duration: 2720})
                .setPin("#cover")
                .addTo(controller);

// build tween
var tween7 = TweenMax.to("#album-cover", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene9 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 1500})
				.setTween(tween7)
                .addTo(controller);

// build tween
var tween8 = TweenMax.to("#album-cover", 1, {scale: (0.04,0.04), ease:Circ.easeInOut});

// build scene 
var scene10 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 1500, offset:1200})
				.setTween(tween8)
                .addTo(controller);

// build tween
var tween9 = TweenMax.to("#summary-1", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene11 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 600, offset:700})
				.setTween(tween9)
                .addTo(controller);

// build tween
var tween10 = TweenMax.to("#summary-1", 1, {opacity: 0, ease:Power2.easeIn});

// build scene 
var scene12 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 600, offset:1700})
				.setTween(tween10)
                .addTo(controller);

// build tween
var tween11 = TweenMax.to("#cover", 1, {backgroundColor: "rgb(233,231,157)", ease:Power2});

// build scene 
var scene13 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 1, offset:2000})
				.setTween(tween11)
                .addTo(controller);

// build tween
var tween12 = TweenMax.to("#summary-2", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene14 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 200, offset:2700})
                .setTween(tween12)
                .addTo(controller);
      

// define movement of panels
var wipeAnimation = new TimelineMax()
        .fromTo("#stonemilker", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("#lionsong", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        .fromTo("#family", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("#mouthmantra", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("#notget", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

// create scene to pin and link animation
new ScrollMagic.Scene({
                    triggerElement: "#mvs",
                    triggerHook: "onLeave",
                    duration: "300%"
                })
        .setPin("#mvs")
        .setTween(wipeAnimation)
        .addTo(controller);



/*mv-description section*/
// build tween
var tween13 = TweenMax.to("#mv-summary", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene16 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 300})
				.setTween(tween13)
                .addTo(controller);

var tween14 = TweenMax.to("#mv-song-1", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene17 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 520})
                .setTween(tween14)
                .addTo(controller);

var tween15 = TweenMax.to("#mv-song-2", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene18 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 670})
                .setTween(tween15)
                .addTo(controller);

var tween16 = TweenMax.to("#mv-song-3", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene19 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 820})
                .setTween(tween16)
                .addTo(controller);

var tween17 = TweenMax.to("#mv-song-4", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene20 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 970})
                .setTween(tween17)
                .addTo(controller);

var tween18 = TweenMax.to("#mv-song-5", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene21 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1120})
                .setTween(tween18)
                .addTo(controller);

var tween19 = TweenMax.to("#mv-song-6", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene22 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1270})
                .setTween(tween19)
                .addTo(controller);

var tween20 = TweenMax.to("#mv-song-vr", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene23 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1370})
                .setTween(tween20)
                .addTo(controller);

var tween21 = TweenMax.to("#song-vr-1", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene24 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1670})
                .setTween(tween21)
                .addTo(controller);

var tween22 = TweenMax.to("#song-vr-2", 1, {scale: 2.5, opacity: 1, ease:Power2.easeIn});

// build scene 
var scene25 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 270, offset: 1750})
                .setTween(tween22)
                .addTo(controller);



/*remix series section*/
var scene26 = new ScrollMagic.Scene({triggerElement: "#remix-series", triggerHook: 0, duration: 600})
                .setPin("#remix-series")
                .addTo(controller);

var tween23 = TweenMax.to("#remix-1", 1, {right: "4vh", ease:Power1.easeInOut});

// build scene 
var scene27 = new ScrollMagic.Scene({triggerElement:"#remix-series", duration: 900, offset: 0})
                .setTween(tween23)
                .addTo(controller);

var tween24 = TweenMax.to("#remix-2", 1, {right: "63vh", ease:Power1.easeInOut});

// build scene 
var scene28 = new ScrollMagic.Scene({triggerElement:"#remix-series", duration: 900, offset: 0})
                .setTween(tween24)
                .addTo(controller);
                
var tween25 = TweenMax.to("#remix-3", 1, {right: "18vh", ease:Power1.easeInOut});

// build scene 
var scene29 = new ScrollMagic.Scene({triggerElement:"#remix-series", duration: 900, offset: 0})
                .setTween(tween25)
                .addTo(controller);

var tween26 = TweenMax.to("#remix-4", 1, {right: "60vh", ease:Power1.easeInOut});

// build scene 
var scene30 = new ScrollMagic.Scene({triggerElement:"#remix-series", duration: 900, offset: 0})
                .setTween(tween26)
                .addTo(controller);

var tween27 = TweenMax.to("#remix-series-text", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene31 = new ScrollMagic.Scene({triggerElement:"#remix-series", duration: 250, offset: 500})
                .setTween(tween27)
                .addTo(controller);



/*final section*/
// build tween
var tween28 = TweenMax.to("#line-1", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene32 = new ScrollMagic.Scene({triggerElement:"#final", duration: 150, offset: 200})
				.setTween(tween28)
                .addTo(controller);

// build tween
var tween29 = TweenMax.to("#line-2", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene33 = new ScrollMagic.Scene({triggerElement:"#final", duration: 150, offset: 400})
				.setTween(tween29)
                .addTo(controller);

// build tween
var tween30 = TweenMax.to("#quote", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene34 = new ScrollMagic.Scene({triggerElement:"#final", duration: 150, offset: 550})
				.setTween(tween30)
                .addTo(controller);

// build tween
var tween31 = TweenMax.to("#final", 1, {backgroundColor: "rgb(18,17,22)"});

// build scene 
var scene35 = new ScrollMagic.Scene({triggerElement:"#final", duration: 150, offset: 1000})
				.setTween(tween31)
                .addTo(controller);