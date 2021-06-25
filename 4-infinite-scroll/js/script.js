
 //ile razy przeskrolowalismy do konca strony (domyslnie 0)
 let endOfThePage = 0;


 //zabezpieczenie przed zaladowainem sie stron podwujnie
 let preloading = false;


//funkcja pokazywania preloader'a
const showPreloader = () => {
    //pobranie preloadera
    let preloader = document.getElementById('preloader');
    console.log(`showPreloader()`);
    preloader.style.display = 'block';
    
}

//funkcja ukrycia preloader'a
const hidePreloader = () => {
    //pobranie preloadera
    let preloader = document.getElementById('preloader');
    console.log(`hidePreloader()`);
    preloader.style.display = 'none';
    
}



//funckcja getData wyswietli dane jak przeskrolujemy do konca strony
const getData = () => {

   // sprawdzic czy preloading nie jest na false
   if (!preloading){
       preloading =  true;
   }
   //pobieranie naszych danych
   fetch('https://akademia108.pl/api/ajax/get-users.php')
   .then(res => res.json())
   .then(data => {


    //zmienna body dokumentu
     let body = document.body;
    //dodanie lini horyzontalnej - separator pokazujacy nowa partie danych
    let hr = document.createElement('hr');
    body.appendChild(hr);

    //petla for of
    for(let user of data) {
        //tworzenie paragrafow dla pol e.g. users
        let pId = document.createElement('p');
        let pName = document.createElement('p'); 
        let pWebsite = document.createElement('p');

    //wrzycamy dane do utworzonych paragrafowo
        pId.innerText = `User ID: ${user.id}`;
        pName.innerText = `Name: ${user.name}`;
        pWebsite.innerHTML = `Website: ${user.website}<br /> -------`;

    //dodawanie paragrafow do strony html    
        body.appendChild(pId);
        body.appendChild(pName);
        body.appendChild(pWebsite);

    }

    //ukrycie preloadera gdy ponownie scrollujemy w dol
    preloading = false; // dane juz sa na stronie
    hidePreloader();

       console.log(data);
   })
   //obsluga bledow
   .catch(error => {
    console.error(error);
   })
  
}


//funckja pobierajaca dane po przeskrolowaniu w dol
const scrollToEndOfPage = () => {
   //zmienna dokumentu
    let d = document.documentElement;
    //zmienna, wysokosc strony (rowniez niewidocznych czesci)
    let scrollHeight = d.scrollHeight;
    //zmienna, przeskrolowane u gory (number of pixels)
    let scrollTop = d.scrollTop;
    //zmienna, wewnetrzna wysokosc okna przegladarki
    let clientHeight = d.clientHeight;

    
    //suma scrollTop + client height
    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight); //zaokraglanie ulamkow w gore


    //ile pixeli przeskrolowalismy
    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`=======================`);

    //budowanie warunku czy przeskrolowano do konca strony
    if (sumScrollTopClientHeight >= scrollHeight){

        endOfThePage += 1;

        console.log(`Scrolled to the end of the page: ${endOfThePage}`);

        //gdy jestesmy na koncu strony, pokaze sie preloader
        showPreloader();

        getData();
    }   
}


window.addEventListener('scroll', scrollToEndOfPage);