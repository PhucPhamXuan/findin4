//  https://fakestoreapi.com/products


let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");

fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            addElement(grid, value)
        }
        
    });


// add event listener
filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}



// get value from the api create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "item justify-self-center";

    let { image, title, category, price } = value;

    div.innerHTML = `
            
            <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="chu title">${title}</h1>
                <a href="${category}" class="block"><span class="text-sm text-red-400">${category}</span></a>
            <div><span class="chu2"><span class="text-md">${price}</span></span></div>
            <button id = 'nutbam' type="button" onclick="location.href='${category}';" class="border-2 px-8 py-1 bg-blue-400 border rounded-md" >Get info now</button>
            </div> 
    `;
    appendIn.appendChild(div);
}

