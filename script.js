const main = document.querySelector('#main');

const cursor = document.querySelector('#cursor');


main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
       x:`${e.x}px`,
       y:`${e.y}px`,
       duration: 1,
       ease: 'power4.out',
         
    });
    
});


