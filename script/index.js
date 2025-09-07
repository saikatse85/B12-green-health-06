const loadCategory = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
        .then(res => res.json())
        .then(data => categoriesItem(data.categories))
        .catch(err => console.log(err));
}

const categoriesItem = (categories) => {
    const categoriesContainer = document.getElementById("category-list");
    categories.forEach(category => {
        categoriesContainer.innerHTML += `
            <li id="${category.category_name}" class="hover:bg-green-500 p-2 cursor-pointer">
                ${category.category_name}
            </li>
        `;
    });

    categoriesContainer.addEventListener("click", (event) => {
        const allLi = document.querySelectorAll('#category-list li');
        allLi.forEach(li => li.classList.remove('bg-green-500'));

        if(event.target.localName === 'li'){
            event.target.classList.add('bg-green-500');
            loadPlantCategory(event.target.id);
        }
    });
    loadPlantCategory('Fruit Tree')
}

// Plants Load
const loadPlantCategory = (categoryName) => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const categoryPlants = data.plants.filter(plant => plant.category === categoryName);
            displayPlants(categoryPlants);
        })
        .catch(err => console.log(err));
}

// Display Plants Container
const displayPlants = (plants) => {
    const plantsContainer = document.getElementById("plants-container");
    plantsContainer.innerHTML = "";

    plants.forEach(plant => {
        
        plantsContainer.innerHTML += `
            <div class="card bg-base-100 w-full gap-3 shadow-sm">
                <figure class="p-2">
                    <img class="rounded-t-lg h-80 w-full" src="${plant.image}"alt="Plant"/>
                </figure>
                <div class="card-body">
                        <h2 class="card-title">${plant.name}</h2>
                        <p>${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <a class="bg-green-100 p-2 rounded-2xl text-green-600">${plant.category}</a>
                        <a href=""><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</a>
                    </div>
                        <button id="add-to-cart" class="btn bg-green-600 text-white w-full rounded-3xl">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

loadCategory();
loadPlantCategory('Fruit Tree');

//added cart container
let cartItems=[]
const cartContainer=document.getElementById('cartContainer')
const addToCart=document.getElementById("plants-container");
addToCart.addEventListener('click', event=>{
    if(event.target.id === 'add-to-cart'){
         handleCartItem(event)
    }
})
const handleCartItem=(event)=>{
    const title=event.target.parentNode.children[0].innerText 
       const priceText=event.target.parentNode.children[2].children[1].innerText
        const price = parseFloat(priceText.slice(0));
        cartItems.push({
            title:title,
            price:price
        })
        showCartItem(cartItems);       
}
const showCartItem=(cartItems)=>{
    cartContainer.innerHTML="";

    let total=0;
    cartItems.forEach(cartItem =>{
        total+=cartItem.price
        cartContainer.innerHTML+=`
           <div class="p-2 my-2 bg-green-100 rounded-sm">
                <div class="flex justify-between mx-auto font-bold">
                    <h2>${cartItem.title}</h2>
                    <a onclick="handleRemoveCart('${cartItem.title}')" class="cursor-pointer">❌</a>
                </div>
                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${cartItem.price}</p>
            </div> 
        `
    })
    
    if(cartItems.length > 0){
        cartContainer.innerHTML+=`
        <div class="p-2 my-2 bg-green-100 rounded-sm text-right font-bold">
            <p>Total : <i class="fa-solid fa-bangladeshi-taka-sign"></i>${total}</p>
        </div>
        `
    }
}
// cart container handler
const handleRemoveCart=(cartItemTitle)=>{
cartItems=cartItems.filter(item=>item.title !== cartItemTitle)
    showCartItem(cartItems);
}
