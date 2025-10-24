/**
* All-In-One Image CAPTCHA Pro
* Version 8.10.13
**/

let ai1ic_audio = '';


// Fectch audio file on focus
function ai1ic_fetch_audio(e) {
    if (e.target.matches('input[name=kc_captcha]')) {
        let key = e.target.closest('.kc_captcha').querySelector('input[name=kc_key]').value;
        let secret = e.target.value;
        ai1ic_audio = new Audio(ai1ic_audio_url+key+'-'+secret);
    }
}


// Play audio file when P key is released
function ai1ic_play_audio(e) {
    if (e.target.matches('input[name=kc_captcha]')) {
        if (e.keyCode == 80) {
            setTimeout(function () {
                ai1ic_audio.play();
            }, 300);
        }
    }
}


// Play "correct" tone when focussed on screen reader icon and enter or spacebar pressed or icon clicked
function ai1ic_play_correct(e) {    
    if (e.target.matches('.ai1ic_screenreader') || e.target.parentElement.matches('.ai1ic_screenreader')) {
        e.preventDefault();
        correct = new Audio(ai1ic_plugin_url+'audio/correct.mp3');
        setTimeout(function () {
            correct.play();
        }, 300);
    }
}


// Reverse honeypot, empty honeypot on mouse move or key press
function ai1ic_honeypot() {    
    document.removeEventListener('keydown', ai1ic_honeypot); // stop listening
    document.removeEventListener('click', ai1ic_honeypot); // stop listening
    window.removeEventListener('mousemove', ai1ic_honeypot); // stop listening
    let reverseHoneypot = document.querySelectorAll('input[name=name-kc]');
    for (var i = 0; i < reverseHoneypot.length; i++) {
        reverseHoneypot[i].setAttribute("value", "");
    }
}


// Check if CAPTCHA has toggle function
function ai1ic_toggle(e) {
    if (e.target.matches('input') || e.target.matches('textarea') || e.target.matches('select')) {
        let thisForm = e.target.form;
        let toggle = (thisForm.querySelector('.kc_captcha.toggle')) ? thisForm.querySelector('.kc_captcha.toggle') : null;
        if(toggle != null) {
            toggle.style.display = 'block';
        }
    }
}



// Re-add event listeners when CAPTCHA changes with ajax
let ai1ic_target = document.querySelector('body'); // get all Image CAPTCHAs
let ai1ic_observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        document.addEventListener('keydown', ai1ic_honeypot);
        document.addEventListener('click', ai1ic_honeypot);
        window.addEventListener('mousemove', ai1ic_honeypot);
    });
});
ai1ic_observer.observe(ai1ic_target, { childList: true, subtree: true });



document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('focusin', ai1ic_fetch_audio, true);
    document.addEventListener('keyup', ai1ic_play_audio);
    document.addEventListener('click', ai1ic_play_correct);
    document.addEventListener('keypress', ai1ic_toggle);
    document.addEventListener('click', ai1ic_toggle);
})



// Ajax scripts 
let ajax_class = document.getElementsByClassName('cf7ic-loader');
if (ajax_class.length > 0) {

    //ES5 - Load Image CAPTCHA
    document.addEventListener("DOMContentLoaded", function () {
        let cf7ic = document.querySelectorAll(".cf7ic-loader");
        observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {

                    /* FETCH */
                    const data = new FormData();

                    data.append( 'action', 'cf7ic_generate' );
                    data.append( 'toggle', entry.target.dataset.toggle );
                    data.append( 'generate', 'generate_full' );
                    data.append( 'lang', document.documentElement.lang.substring(0,2) );

                    fetch(cf7ic_ajax_url, {method: 'POST', credentials: 'same-origin', body: data })
                    .then((data) => data.text())
                    .then((data) => {
                        let captcha = document.querySelector("#"+entry.target.id);
                        if(captcha) { captcha.outerHTML = data }
                        //document.querySelector("#"+entry.target.id).outerHTML = data;
                        document.addEventListener('keypress', ai1ic_toggle);
                        document.addEventListener('click', ai1ic_toggle);
                    })
                    .catch((error) => { console.log(error); });

                    observer.unobserve(entry.target);
                }
            });
        });
        Array.prototype.forEach.call (cf7ic, function (node) {  
            observer.observe(node);
        });
    });

    // Load inner CAPTCHA
    Array.prototype.forEach.call(document.querySelectorAll('form'), function (el) {
        if(el.id) { // If not CF7 form
            el.addEventListener('submit', function () {
                ai1ic_load_inner('#'+el.id);
            });
        } else { // Else is a CF7 form
            el.addEventListener('wpcf7submit', function () {
                ai1ic_load_inner(event.detail.apiResponse.into);
            });
        }

        function ai1ic_load_inner(id) {
            let kc_target = id+" .captcha-image";

            /* FETCH */
            const data = new FormData();

            data.append( 'action', 'cf7ic_generate' );
            data.append( 'toggle', 'no-toggle' );
            data.append( 'generate', 'regenerate_inner' );
            data.append( 'lang', document.documentElement.lang.substring(0,2) );

            fetch(cf7ic_ajax_url, {method: 'POST', credentials: 'same-origin', body: data })
            .then((data) => data.text())
            .then((data) => {
                document.querySelector(kc_target).outerHTML = data;
            })
            .catch((error) => { console.log(error); });
        };
    }, false );


    /**
     * Copyright 2016 Google Inc. All Rights Reserved.
     * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
     * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
     */
    !function(f,_){"use strict";if("IntersectionObserver"in f&&"IntersectionObserverEntry"in f&&"intersectionRatio"in f.IntersectionObserverEntry.prototype)"isIntersecting"in f.IntersectionObserverEntry.prototype||Object.defineProperty(f.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var e=[];t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(n(f,"resize",this._checkForIntersections,!0),n(_,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in f&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(_,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(f,"resize",this._checkForIntersections,!0),o(_,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},t.prototype._checkForIntersections=function(){var h=this._rootIsInDom(),c=h?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var e=t.element,n=m(e),o=this._rootContainsTarget(e),i=t.entry,r=h&&o&&this._computeTargetAndRootIntersection(e,c),s=t.entry=new a({time:f.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:c,intersectionRect:r});i?h&&o?this._hasCrossedThreshold(i,s)&&this._queuedEntries.push(s):i&&i.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e){if("none"!=f.getComputedStyle(t).display){for(var n,o,i,r,s,h,c,a,u=m(t),l=v(t),p=!1;!p;){var d=null,g=1==l.nodeType?f.getComputedStyle(l):{};if("none"==g.display)return;if(l==this.root||l==_?(p=!0,d=e):l!=_.body&&l!=_.documentElement&&"visible"!=g.overflow&&(d=m(l)),d&&(n=d,o=u,void 0,i=Math.max(n.top,o.top),r=Math.min(n.bottom,o.bottom),s=Math.max(n.left,o.left),h=Math.min(n.right,o.right),a=r-i,!(u=0<=(c=h-s)&&0<=a&&{top:i,bottom:r,left:s,right:h,width:c,height:a})))break;l=v(l)}return u}},t.prototype._getRootRect=function(){var t;if(this.root)t=m(this.root);else{var e=_.documentElement,n=_.body;t={top:0,left:0,right:e.clientWidth||n.clientWidth,width:e.clientWidth||n.clientWidth,bottom:e.clientHeight||n.clientHeight,height:e.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),e={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||i(_,this.root)},t.prototype._rootContainsTarget=function(t){return i(this.root||_,t)},t.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},t.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},f.IntersectionObserver=t,f.IntersectionObserverEntry=a}function a(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){n(),i=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function n(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function m(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function i(t,e){for(var n=e;n;){if(n==t)return!0;n=v(n)}return!1}function v(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(window,document);

} // End of if axaj_class exists