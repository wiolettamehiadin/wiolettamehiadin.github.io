


const setBackground = () => {
    let paragraph1 = document.querySelector('.first');
    let paragraph2 = document.querySelector('.last');

    //dodawanie typu inline
    // paragraph1.style.backgroundColor = 'red';
    // paragraph2.style.backgroundColor = 'yellow';
   
    //dodawanie styli via CSS
    paragraph1.classList.add('red');
    paragraph2.classList.add('yellow');
}

let btnSetColour = document.getElementById('setBackground');
btnSetColour.addEventListener('click', setBackground);



 