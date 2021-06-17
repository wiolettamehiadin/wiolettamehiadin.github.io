//sprawdzenie podpiecia script.js
//console.log('test');


//pobranie formularza
let formularz = document.getElementById('form');
//console.log(formularz);

let allZgodaChx = document.getElementById('zgoda-all');

//funkcja validate()
const validate = (event) => {


    //pobieranie pol i wrzucanie do zmiennych
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let zgoda1 = document.getElementById('zgoda-1');
    let errors = document.getElementById('errors');

    //wyczyszczenie listy bledow
    errors.innerHTML = '';

    //warunek 'jezeli w polu imie nic nie ma' + funkcja trim() ucina biale znaki, jak spacje:
    if (txtName.value.trim() === '') {

        //tworzenie elementu listy
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imie i nazwisko!';

        //dodaj nowy element to html
        errors.appendChild(liError);

    }
    //warunek adresu email
    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adress e-mail!';
        errors.appendChild(liError);
    }

    //warunek czy email zawiera @ z ! - zaprzeczeniem
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierac @!';
        errors.appendChild(liError);
    }

      //warunek zgody marketingowej 1:
      if (!zgoda1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziles Zgody 1!';
        errors.appendChild(liError);
    }

    //jesli nie ma bledow to wysylamy formularz
    if (errors.children.length > 0) {
        event.preventDefault();  //zablokuj formularz bo jest jakis blad

    }
}


//funkcja zgoda-all

const zgodaAll = (event) => {
    let zgoda1 = document.getElementById('zgoda-1');
    let zgoda2 = document.getElementById('zgoda-2');

    //przy zaznaczeniu na all, 1&2 tez sie zaznaczy:
    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;

    //zmien pole disabled(na szaro, nie da sie zaznaczyc) dla 1&2
    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;

}



//dodajemy utworzona funkcja validate do formularza
formularz.addEventListener('submit', validate);

allZgodaChx.addEventListener('change', zgodaAll);