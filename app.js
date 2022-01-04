elem = document.querySelector('.elem')
elem1 = document.querySelector('.elem1')
elem2 = document.querySelector('.elem2')
elem3= document.querySelector('.elem3')

display= ()=>{
    setTimeout(() => {
        elem.style.display="flex"
    }, 1000);
     setTimeout(() => {
        elem1.style.display="flex"
    }, 2000);
     setTimeout(() => {
        elem2.style.display="flex"
    }, 3000);
     setTimeout(() => {
        elem3.style.display="flex"
    }, 4000);
}
display()