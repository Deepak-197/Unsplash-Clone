let div4=document.getElementById('photos');



async function main()
{
    let response = await searchmovies();
    let data = await response;
    console.log(data);
    append(data);
}
let movies_div = document.getElementById("photos");
let id;

async function searchmovies()
{
    try
    {
    let query = document.getElementById("search").value;
      let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=nq09tWXzARwU8KjggUE_XnNLnGWL_evJwQuoDawY-Vo`;
      let res = await fetch(url);
      let data = await res.json();
      return data.results;
     
    }
    catch(e){
        console.log(e);
    }
};

function append(movies)
{
    console.log(movies);
    movies_div.innerHTML=null;
    if(movies == undefined)
    {
       
        return false;
        
    }

    movies.forEach(function(elem)
    {
        let box= document.createElement("div")
          box.className = "movie_tab"
        let p= document.createElement("h4")
        p.innerText = elem.alt_description
    
        let poster=document.createElement("img")
        poster.src=elem.urls.regular
    
        box.append(poster,p)
    
        div4.append(box)
    })
}

function debounce(fun,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function()
    {
        fun()
    },delay)
}