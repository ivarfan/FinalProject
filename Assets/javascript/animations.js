$(window).resize(function() {
    // This will execute whenever the window is resized
    $(window).height(); // New height
    $(window).width(); // New width
});

// init control
var controller = new ScrollMagic.Controller();

//starting
// build scene
$(function () {
    var scene = new ScrollMagic.Scene({duration: 4000})
                    .setPin("#starting")
                    .addIndicators({name: "1 (duration: 4000)"}) // add indicators
                    .addTo(controller);
});
// build tween
var tween1 = TweenMax.to("#title", 1, {color: "rgb(18,17,22)", ease:Power1.easeIn});

// build scene 
var scene1 = new ScrollMagic.Scene({duration: 1000})
				.setTween(tween1)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween2 = TweenMax.to("#title", 1, {fontSize: '11000px', scale: (1.575, 1.5), ease:Power2.easeIn});

// build scene 
var scene2 = new ScrollMagic.Scene({duration: 3000, offset: 1000})
				.setTween(tween2)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);



//explanation
var scene3 = new ScrollMagic.Scene({triggerElement: "#explanation", triggerHook: 0, duration: 1000})
                .setPin("#explanation")
                .addIndicators({name: "2 (duration: 4000)"}) // add indicators (requires plugin)
                .addTo(controller);

// build tween
var tween3 = TweenMax.to(["#title-pt1-1","#title-pt2-1"], 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene4 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 1, duration: 800})
				.setTween(tween3)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween4 = TweenMax.to(["#title-pt1-1","#title-pt2-1"], 1, {opacity: 0, ease:Power2.easeIn});
var tween5 = TweenMax.to(["#title-pt1-2","#title-pt2-2"], 1, {opacity: 1, ease:Power2.easeIn});
// build scene 
var scene5 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 0, duration: 300, offset:250})
				.setTween(tween4)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);
var scene6 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 0, duration: 300, offset:250})
				.setTween(tween5)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween6 = TweenMax.to(["#title-pt1-2","#title-pt2-2"], 1, {opacity: 0, ease:Power2.easeIn});
var scene7 = new ScrollMagic.Scene({triggerElement:"#explanation", triggerHook: 0, duration: 600, offset:700})
				.setTween(tween6)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);



//cover
// build scene
var scene8 = new ScrollMagic.Scene({triggerElement: "#cover", triggerHook: 0, duration: 3000})
                .setPin("#cover")
                .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);

// build tween
var tween7 = TweenMax.to("#album-cover", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene9 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 1500})
				.setTween(tween7)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween8 = TweenMax.to("#album-cover", 1, {scale: (0.04,0.04), ease:Circ.easeInOut});

// build scene 
var scene10 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 1500, offset:1200})
				.setTween(tween8)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween9 = TweenMax.to("#summary-1", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene11 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 600, offset:700})
				.setTween(tween9)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween10 = TweenMax.to("#summary-1", 1, {opacity: 0, ease:Power2.easeIn});

// build scene 
var scene12 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 600, offset:1700})
				.setTween(tween10)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween11 = TweenMax.to("#cover", 1, {backgroundColor: "rgb(233,231,157)", ease:Power2});

// build scene 
var scene13 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 1, offset:2000})
				.setTween(tween11)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

// build tween
var tween12 = TweenMax.to("#summary-2", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene14 = new ScrollMagic.Scene({triggerElement:"#cover", duration: 200, offset:2700})
                .setTween(tween12)
                .addIndicators({name: "tween css class"}) // add indicators
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
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



// mv-description
// build tween
var tween13 = TweenMax.to("#mv-summary", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene16 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 300})
				.setTween(tween13)
				.addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween14 = TweenMax.to("#mv-song-1", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene17 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 520})
                .setTween(tween14)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween15 = TweenMax.to("#mv-song-2", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene18 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 570})
                .setTween(tween15)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween16 = TweenMax.to("#mv-song-3", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene19 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 720})
                .setTween(tween16)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween17 = TweenMax.to("#mv-song-4", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene20 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 870})
                .setTween(tween17)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween18 = TweenMax.to("#mv-song-5", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene21 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1020})
                .setTween(tween18)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween19 = TweenMax.to("#mv-song-6", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene22 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1170})
                .setTween(tween19)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween20 = TweenMax.to("#mv-song-vr", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene23 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1470})
                .setTween(tween20)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);

var tween21 = TweenMax.to("#song-vr", 1, {opacity: 1, ease:Power2.easeIn});

// build scene 
var scene24 = new ScrollMagic.Scene({triggerElement:"#mv-description", duration: 100, offset: 1770})
                .setTween(tween21)
                .addIndicators({name: "tween css class"}) // add indicators
                .addTo(controller);