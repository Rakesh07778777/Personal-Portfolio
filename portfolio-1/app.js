const timeLine = gsap.timeline();

timeLine.from('nav', {
    opacity: 0,
    y : -28,
    duration: 0.5,
    delay: 0.3
})

timeLine.from('.nav-links ul li', {
    opacity: 0,
    y : -28,
    duration: 0.5,
    stagger: 0.3
})

gsap.from('.left h2',{
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    x: -100
})
gsap.from('.left > p',{
    opacity: 0,
    duration: 0.5,
    delay: 1,
    x: -100
})
gsap.from('.left button',{
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
    x: -100
}) 
gsap.from('.icons .follow, .icons a',{
    opacity: 0,
    duration: 0.5,
    delay: 2,
    x: -100
}) 

// gsap.from('.second-img',{
//     x: 100,
//     opacity:0,
//     duration:0.5,
//     delay: 2.5
// })
// gsap.from('.first-img',{
//     x: 100,
//     opacity:0,
//     duration:0.5,
//     delay: 3
// })


gsap.from('.bottom',{
    opacity: 0,
    duration: 0.5,
    delay: 3.5,
    y: 20
}) 

// gsap.from('.firsySvg',{
//     opacity: 0,
//     duration: 0.5,
//     delay: 3,
//     y: 20,
//     stagger: 0.3
// }) 