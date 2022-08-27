
let car_data = JSON.parse(localStorage.getItem("nature"))
display(car_data);

function display(data)
{
    let redirect_data= document.getElementById("redirect");
    redirect_data.innerHTML = "";
    data.forEach(function(elem)
    {
        let box= document.createElement("div")
          box.className = "movie_tab"
    
        let poster=document.createElement("img")
        poster.src=elem.image
        box.append(poster)
        redirect_data.append(box);
    })
}


let home_data = JSON.parse(localStorage.getItem("home"))
display(home_data);

function display(data)
{
    let redirect_data= document.getElementById("redirect");
    redirect_data.innerHTML = "";
    data.forEach(function(elem)
    {
        let box= document.createElement("div")
          box.className = "movie_tab"
    
        let poster=document.createElement("img")
        poster.src=elem.image
        box.append(poster)
        redirect_data.append(box);
    })
}