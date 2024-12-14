const defaultMain = document.getElementById("defaultMain");
const containerInputs = document.getElementById("containerInputs");
const containerRecipies = document.getElementById("containerRecipies");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const inputTitle = document.getElementById("inputTitle");
const textAreaIngredients = document.getElementById("textAreaIngredients");
const textAreaHow = document.getElementById("textAreaHow");
let activeRecipe;
let recipies = [];

addButton.addEventListener("click", function(){
    const newRecipe = document.createElement("div");
    newRecipe.classList.add("recipe");
    newRecipe.innerText = "Sem título";
    recipies.push({"recipe": newRecipe, "content": {"title": "Sem título", "ingredients": "", "how": ""}});
    newRecipe.addEventListener("click", function(){
        defaultMain.style.display = "none";
        containerInputs.style.display = "block";
        if(activeRecipe !== undefined){
            activeRecipe.classList.remove("recipeActive");
        }
        activeRecipe = newRecipe;
        newRecipe.classList.add("recipeActive");
        let content;
        for(const recipe of recipies){
            if(recipe["recipe"] === newRecipe){
                content = recipe["content"];
                break;
            }
        }
        inputTitle.value = content["title"];
        textAreaIngredients.value = content["ingredients"];
        textAreaHow.value = content["how"];
        
        
    });
    containerRecipies.appendChild(newRecipe);
});

inputTitle.addEventListener("input", function(){
    let targetRecipe;
    let index;
    for(const recipe of recipies){
        if(recipe["recipe"] === activeRecipe){
            index = recipies.indexOf(recipe)
            targetRecipe = recipe;
            break;
        }
    }
    targetRecipe["content"]["title"] = this.value;
    activeRecipe.innerText = this.value;
    recipies[index] = targetRecipe;
})

textAreaIngredients.addEventListener("input", function(){
    let targetRecipe;
    let index;
    for(const recipe of recipies){
        if(recipe["recipe"] === activeRecipe){
            index = recipies.indexOf(recipe)
            targetRecipe = recipe;
            break;
        }
    }
    targetRecipe["content"]["ingredients"] = this.value;
    console.log(recipies[index]);
    recipies[index] = targetRecipe;
})

textAreaHow.addEventListener("input", function(){
    let targetRecipe;
    let index;
    for(const recipe of recipies){
        if(recipe["recipe"] === activeRecipe){
            index = recipies.indexOf(recipe)
            targetRecipe = recipe;
            break;
        }
    }
    targetRecipe["content"]["how"] = this.value;
    recipies[index] = targetRecipe;
})

deleteButton.addEventListener("click", function() {
    let targetRecipe;
    let index;
    for(const recipe of recipies){
        if(recipe["recipe"] === activeRecipe){
            index = recipies.indexOf(recipe)
            targetRecipe = recipe;
            break;
        }
    }
    containerRecipies.removeChild(activeRecipe);
    containerInputs.style.display = "none";
    defaultMain.style.display = "block";
    recipies.splice(index,1);
    activeRecipe = undefined;
})