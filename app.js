let cont = document.querySelector('#container')
let img = document.querySelector('img')


cont.addEventListener( 'mousemove', (e) => {

    // mouse position recovery

    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    console.log(x, y)

    // zoom effect

    img.style.transformOrigin = ` ${x}px ${y}px`
    img.style.transform = 'scale(2)'
});

// off effect 

cont.addEventListener( 'mouseleave', () => {
    img.style.transformOrigin = 'center'
    img.style.transform = 'scale(1)'
})
