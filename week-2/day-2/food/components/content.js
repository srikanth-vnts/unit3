




async function getRecepie(url) {
        let data = await fetch(url)
        let res = await data.json();
        return res.meals;
}


 function showRecepie(data,parent){
        


        data.forEach((el)=>{


        let r_div = document.createElement('div'); 
        r_div.setAttribute('class','r_div')

        let r_category = document.createElement('p');
        r_category.setAttribute('class', 'r_category')
        r_category.innerHTML = `Category: ${el.strCategory}`;
  
        let r_title = document.createElement('p');
        r_title.setAttribute('class', 'r_title');
        r_title.innerHTML = `Recepie : ${el.strMeal}`;

        let r_description = document.createElement('p');
        r_description.setAttribute('class', 'r_description')
        r_description.innerHTML = `${el.strInstructions}. Please checkout the preparation video below if necessary`;

        let r_img = document.createElement('img');
        r_img.setAttribute('class','r_img');
        r_img.src = el.strMealThumb;

        let r_video = document.createElement('div');
        r_video.setAttribute('class', 'r_video');
        let you = el.strYoutube;
        let link = you.substring(you.length-11);
     

        r_video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${link}" title="YouTube video player"
                               frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>`;

        let r_des = document.createElement('p');
        r_des.setAttribute('class', 'r_des');
        r_des.innerHTML = `${el.strMeal} is a signature recipe of mine that I have been making for many years. 
        I tried it for the first time as a child (fresh from the can!) only to take a rather<br> lengthy hiatus while 
        my taste buds recovered (or maybe matured). I had them again many years later when I was working at La Folie in San Francisco, 
        post culinary school.<br>I was basically told<strong> “${el.strMeal} is GOLD”</strong>.`;

        let r_tags = document.createElement('h4');
        r_tags.setAttribute('class', 'r_tags');
        r_tags.innerHTML = `Tags: ${el.strTags}`;

        r_div.append(r_title,r_category, r_des,r_img,r_description,r_video,r_tags);
        parent.append(r_div);
        });
        
}

async function debounce() {
        let timerId;
}
    
export {getRecepie,showRecepie}