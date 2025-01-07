// Select main container, cursor, and image container elements
const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const imgDiv = document.querySelector('#img');

// Move cursor element based on mouse movement
main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
       x:`${e.x}px`,
       y:`${e.y}px`,
       duration: 1,    
    });
});

// Enlarge cursor and display text on mouse enter
imgDiv.addEventListener('mouseenter', () => {
    cursor.innerHTML = "View more";
    gsap.to(cursor, {
        scale: 2,
        duration: 0.5,
        ease: 'power4.out',
    });
});

// Reset cursor on mouse leave
imgDiv.addEventListener('mouseleave', () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: 'power4.out',
    });
});

