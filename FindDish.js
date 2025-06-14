
let searchInput = document.getElementById("searchInput"); // targeting the searchInput to search particular name of dish
let searchBtn = document.getElementById("searchBtn");





const getData = async(value) =>    // created arrow function by name of  getData here we call your url 
{
   let apidata = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`); //themealdb api
   let jsondata= await apidata.json()
   console.log(jsondata);

   let creatediv  =  document.createElement("div");   
   creatediv.classList.add("card")    
    
   

    // Check if meals exist
        if (jsondata.meals) {
            document.querySelector(".showMeal").innerHTML=""    // after searh 1 by 1 pervious item will delete & next search item will add
            jsondata.meals.forEach(meal => {
                let creatediv = document.createElement("div");// creating the div inside div-->showMeal(index.html) 
                creatediv.classList.add("card","col-12", "col-sm-6" , "col-md-4", "col-lg-3","mt-3" );// adding class to the div
               
                // adding different tags inside div-->card
                // Use meal.strMealThumb (from each meal object)
                creatediv.innerHTML = `
                                        <img src="${meal.strMealThumb}" class="card-img-top  p-4 rounded-3 img-fluid "  alt="${meal.strMeal}">
                                            <div class="card-body text-center">
                                                <p class="card-title">${meal.strMeal}</p>
                                                <button class="btn btn-success" type="button">View More</button>
                                            </div>`;
                document.querySelector(".showMeal").appendChild(creatediv);
            });
}

getData()   // this is called as calling the function 

}

// searchBtn :- after click the searchBtn button

searchBtn.addEventListener("click" , function()  // after click the 'searchBtn' 1 function should run with name 'searchItem'
{
    let searchItem = searchInput.value;   // here   what we enter in 'searchInput'(I/p bar) data pass to 'searchItem'
    if(searchItem == "")
    {
        alert("Enter the dish to search")
    }
    
          getData(searchItem)

    

});
