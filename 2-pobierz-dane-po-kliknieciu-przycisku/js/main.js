
//1.dodaj zmienna do button
let btnPobierz = document.getElementById('btn-pobierz');

//3.stworz funkcje getData
const getData = () => {
    //4.uzycie fetch API zeby pobrac dane
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(res => res.json())
    .then(data => {
        //5. utworzenie paragrafow
        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        //8. dodanie horyzontalniej linii (dodatkowo)
        let hr = document.createElement('hr');

        //6. przypisanie danych do utowrzonych paragrafowo
        pId.innerText = `Post ID: ${data.id}`;
        pUserId.innerText = `User ID: ${data.userId}`;
        pTitle.innerText = `Title: ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;
        
        //7. wstawienie utworzonych danych do strony

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);

        //console.log(data);
    })

    //9. obsluga bledow:
    .catch(error => {
        console.error(error);
    })
}

//2.ustaw nasluch zdarzenia na button
btnPobierz.addEventListener('click', getData);












//moje proby 
// $(document).ready(function(){
//    function getData(){
//         $('#btn-pobierz').click(function(){
//             $.fetch('GET','https://akademia108.pl/api/ajax/get-post.php')
//             .then(response=>response.json())
//             .then((data)=>{
//                 $('#pobrane-dane').after(
//                     '<br><div>User Name: ' + data.userId +
//                     '<br> User Id: ' + data.id +
//                     '<br> Title: ' + data.title +
//                     '<br> Intro: ' + data.body);
//             })
                
//         });
//     }
    
// });

// getData(dane);