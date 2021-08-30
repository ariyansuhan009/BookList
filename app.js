/*
    1. Dom Selection
    2. Event Lisener
    3. Basic Validation
    4. Creating element
    5. Append
*/

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const booklist = document.querySelector("#book-list");

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Please  fillup thoes table");
    }else{
        const newRow = document.createElement("tr");
        
        //Creating newtittle
        const  newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //Creating newAuthor
        const  newAthour = document.createElement('th');
        newAthour.innerHTML = author.value;
        newRow.appendChild(newAthour);

        //Creating newyear
        const  newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        booklist.appendChild(newRow);
    }
});