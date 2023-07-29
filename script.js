var logointro=document.getElementById('logointro');
var wel=document.getElementById('wel');
var about=document.querySelector('.about');
var port=document.querySelector('.port');
var folio=document.querySelector('.folio');
var skills=document.querySelector('.skills');
var sk=document.querySelector('.sk');
var psk=document.querySelector('.psk');
var projec=document.querySelector('.projec');
var s1me=document.getElementById('s1me');
var me=document.querySelector('.me');
var pme=document.querySelector('.pme');
var shape= document.getElementById('shape');
var main=document.querySelector('.main');
var s1=document.querySelector('.s1');
var s2option=document.querySelector('.s2option');
var s2dev=document.querySelector('.s2dev');
var pro=document.querySelector('.pro');
var back=document.querySelector('.back');
var office=document.querySelector('.office');
var prog=document.querySelector('.prog');
var design=document.querySelector('.design');
var select=document.querySelector('.select');
var homepage=document.querySelector('.homepage');
var pr=document.querySelector('.pr');
// const audio= new Audio();
// audio.src="./slow.mp3";
logointro.addEventListener('animationend',function(){
    wel.style.display='flex';
    logointro.style.display='none';
})
wel.addEventListener('animationend',function(){
    main.style.opacity='100%';
    main.style.display='flex';
    wel.style.display='none';
})
about.addEventListener('mouseover',function (){
    me.style.opacity='60%';
    port.style.opacity='0%';
    folio.style.opacity='0%';
    port.style.display='none';
    folio.style.display='none';
    pme.style.opacity='100%';
    skills.style.opacity='30%';
    projec.style.opacity='30%';
    audio.play();
})
about.addEventListener('mouseout',function (){
    port.style.opacity='30%';
    folio.style.opacity='30%';
    port.style.display='block';
    folio.style.display='block';
    me.style.opacity='0%';
    pme.style.opacity='0%';
    skills.style.opacity='100%';
    projec.style.opacity='100%';
})
function anim(){
    shape.style.left='0rem';
    intro.style.display='flex';
    main.style.display='none';
    intro.innerHTML='About me';
    setTimeout(
function out(){
    intro.style.display='none';
    s1.style.display='flex';
    s1me.style.opacity='100%';
    s1me.style.transitionDelay='4s';
    shape.style.left='100rem';
    intro.innerHTML='About me';
    shape.style.transition='.3s';
},1200);}
skills.addEventListener('mouseover',function (){
    port.style.display='none';
    folio.style.display='none';
    about.style.opacity='30%';
    projec.style.opacity='30%';
    sk.style.opacity='100%';
    psk.style.opacity='100%';
    audio.play();
})
skills.addEventListener('mouseout',function (){
    port.style.opacity='30%';
    folio.style.opacity='30%';
    port.style.display='block';
    folio.style.display='block';
    sk.style.opacity='0%';
    about.style.opacity='100%';
    projec.style.opacity='100%';
    psk.style.opacity='0%';

})
projec.addEventListener('mouseover',function (){
    about.style.opacity='30%';
    skills.style.opacity='30%';
    port.style.display='none';
    folio.style.display='none';
    pr.style.opacity='50%';
    pr.style.transform='rotatey(180deg)';
    audio.play();
})
projec.addEventListener('mouseout',function (){
    about.style.opacity='100%';
    skills.style.opacity='100%';
    pr.style.opacity='0%';
    pr.style.transform='rotatey(360deg)';
})
function skillsin(){
    shape.style.transition='.3s';
    main.style.display='none';
    intro.style.display='flex';
    intro.innerHTML='Skills';
    shape.style.left='0rem';
    setTimeout(
    function skillsout(){
    s2option.style.display='flex';
    office.style.animation='move 1.3s cubic-bezier(1,-0.01,0,.99)';
    design.style.animation='move .3s cubic-bezier(1,-0.01,0,.99)';
    prog.style.animation='move .8s cubic-bezier(1,-0.01,0,.99)';
    homepage.style.animation=' page 2s cubic-bezier(1,-0.01,0,.99)';
    select.style.animation='select 2s cubic-bezier(1,-0.01,0,.99)';
    shape.style.left='100rem';
    shape.style.transition='.1s';
    intro.style.display='none';
},1200);}

    function dev(){
             
    s2dev.style.display='flex';
    s2dev.style.animation='blur 1s cubic-bezier(0.07, 0.01, 0, 0.99)' ;
    s2option.style.animation='zoom 1s cubic-bezier(0.07, 0.01, 0, 0.99)';
    s2option.style.position='absolute';
    s2option.addEventListener('animationend',function (){
    s2dev.style.display='flex';
    s2option.style.display='none';
 })
    s2dev.addEventListener('animationend',function (){
    s2dev.style.display='flex';
})
        }
        pro.addEventListener('animationend',function (){
            back.style.opacity='100%';
        })

    function bac(){
    s2dev.style.display='flex';

    s2dev.style.animation='revblur 2s cubic-bezier(0,.94,0,.99)';
    s2option.style.animation='back 2s cubic-bezier(0,.94,0,.99)';
    s2option.style.display='flex';
    office.style.animation='none';
    design.style.animation='none';
    select.style.animation='none';
    homepage.style.animation='none';
    prog.style.animation='none';
    s2option.addEventListener('animationend',function (){
    s2dev.style.display='none';
    s2option.style.display='flex';
    s2option.style.animation='none';
})
    s2dev.addEventListener('animationend',function (){
    s2dev.style.display='none';
 })}
   function home(){
   shape.style.transition='.3s';
   s2option.style.display='none';
   s1.style.display='none';
   intro.style.display='flex';
   intro.innerHTML='Home';
   shape.style.left='0rem';
   setTimeout(
   function homeout(){
   main.style.display='flex';
   s2option.style.display='none';
   shape.style.left='-100rem';
   shape.style.transition='.3s';
   intro.style.display='none';
},1200); }

// copied pasted code form outside to stop zoom with scrollin
        (function () {

            /*
             * Main stopscrollwheelzoom constructor
             */
            let SSWZ = function () {
    
                /**
                 * Handler for scroll- control must be pressed.
                 * @param e
                 */
                this.keyScrollHandler = function (e) {
                    if (e.ctrlKey) {
                        e.preventDefault();
                        return false;
                    }
                }
            };
    
            if (window === top) {
                let sswz = new SSWZ();
                window.addEventListener('wheel', sswz.keyScrollHandler, { passive: false });
            }
    
        })();