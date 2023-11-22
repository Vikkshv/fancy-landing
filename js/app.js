document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
        `
    })
})

// const input = document.getElementById("input");
// const button = document.getElementById("button");

// const getColor = (value) => {
//     console.log(value)
//     if (value === 'mama' || value === 'Mama' || value ===  'мама' || value ===  'Мама') {
//         button.style.background = "red";
//     } else if (value === 'papa' || value === 'Papa' ||  value ===  'папа' || value === 'Папа') {
//         button.style.background = "blue";
//     } else {
//         button.style.background = "black";
//     }
// }
