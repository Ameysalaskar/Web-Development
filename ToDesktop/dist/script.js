const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
    navDialog.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translate(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);


// const dtElements = document.querySelectorAll('dt');
// dtElements.forEach(element => {
//     element.addEventListener('click', ()=> {
//         const ddId = element.getAttribute('aira-controls');
//         const ddElement = document.getElementById(ddId);
//         const ddArrowIcon = element.querySelectorAll('i')[0];

//         ddElement.classList.toggle('hidden');
//         ddArrowIcon.classList.toggle('-rotate-180');
//     })
// })  



 const que1 = document.querySelector("#Que1");
 const faq1 = document.querySelector("#faq-1");
 const arrow1 = document.querySelector("#arrow1");

 que1.addEventListener('click', ()=>{
     arrow1.classList.toggle('-rotate-180');
     faq1.classList.toggle('hidden');
 })

 const que2 = document.querySelector("#Que2");
 const faq2 = document.querySelector("#faq-2");
 const arrow2 = document.querySelector("#arrow2");

 que2.addEventListener('click', ()=>{
    arrow2.classList.toggle('-rotate-180');
    faq2.classList.toggle('hidden');
})

const que3 = document.querySelector("#Que3");
const faq3 = document.querySelector("#faq-3");
const arrow3 = document.querySelector("#arrow3");

que3.addEventListener('click', ()=>{
    arrow3.classList.toggle('-rotate-180');
    faq3.classList.toggle('hidden');
})

const que4 = document.querySelector("#Que4");
const faq4 = document.querySelector("#faq-4");
const arrow4 = document.querySelector("#arrow4");

que4.addEventListener('click', ()=>{
    arrow4.classList.toggle('-rotate-180');
    faq4.classList.toggle('hidden');
})


// const questions = document.querySelectorAll(".group");

// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         const arrow = question.querySelector('#arrow');
//         const faqId = question.querySelector('dd').getAttribute('aria-controls');
//         const faqContent = document.getElementById(faqId);

//         arrow.classList.toggle('-rotate-180'); 
//         faqContent.classList.toggle('hidden'); 
//     });
// });

