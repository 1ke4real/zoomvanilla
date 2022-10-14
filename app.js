let cont = document.querySelector('#container')
let img = document.querySelector('img')



cont.addEventListener( 'mousemove', (e) => {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    console.log(x, y)
});
