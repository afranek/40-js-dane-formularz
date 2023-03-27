let butn = document.querySelector("button");


butn.onclick = function() {

    document.getElementById('imie').textContent = document.getElementById('name').value;

    document.getElementById('nazwisko').textContent = document.getElementById('surname').value;

    document.getElementById('telefon').textContent = document.getElementById("number").value;
    
}

