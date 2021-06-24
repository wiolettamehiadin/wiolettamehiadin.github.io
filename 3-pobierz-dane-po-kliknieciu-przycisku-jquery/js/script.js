//wariant 1 - pobieranie za pomoca metody get (dane w roznych formatach)
$(document).ready(function(){
    $('#btn-pobierz').click(function(){
        
        $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');
            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);


            console.log(data);
        })
        .fail(function(error){
            console.error(error);
        });
    });
});



//wariant 2 - pobieranie za pomoca metody getJSON (dane tylko w formacie JSON)

$(document).ready(function(){
    $('#btn-pobierz').click(function(){
        
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');
            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);


            console.log(data);
        })
        .fail(function(error){
            console.error(error);
        });
    });
});


//Moja proba:
// let btnPobierz = document.getElementById('btn-pobierz');
// btnPobierz.addEventListener('click', $.get);


// $(document).ready(function(){
//     $.get('https://akademia108.pl/api/ajax/get-post.php')
//     .done(function(){
//         res => res.json()
//         .then(data => {
//             let pUserId = document.createElement('p');
//             let pId = document.createElement('p');
//             let pTitle = document.createElement('p');
//             let pBody = document.createElement('p');


//             pUserId = `User ID: ${data.userId}`;
//             pId = `ID: ${data.id}`;
//             pTitle = `Tile: ${data.title}`;
//             pBody = `Body: ${data.body}`;


//             document.body.appendChild(pUserId);
//             document.body.appendChild(pId);
//             document.body.appendChild(pTitle);
//             document.body.appendChild(pBody);

        
//         })
//     })
// });



