//spr czy js jest podpiety prawidlowo
console.log('tytul');

//funkcja  (event- zdarzenie submit)

const submitForm = (event) => {
    event.preventDefault();  //formularz nie wysyla
   
    //dodajemy pola zmiennych
    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');
    
    //wyswietl w konsoli wartosc pol
    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);  
}

//pobranie formularza
let form = document.getElementById('form')
console.log(form);

//dodajemy utworzone zdarzenie do formularza
form.addEventListener('submit', submitForm);












