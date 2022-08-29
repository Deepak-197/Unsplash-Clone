async function Prox()
{
    let response = await SearchPhotos();
    let data = await response;
    Append(data);
    window.location.href = "searchbox.html"
}
let ID;
async function SearchPhotos()
{
    try
    {
      let query = document.getElementById("query").value;
      let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=nq09tWXzARwU8KjggUE_XnNLnGWL_evJwQuoDawY-Vo`
      let res = await fetch(url);
      let data = await res.json();
      return data.results;
      
    }
    catch(e){
        console.log(e);
    }
};

function Append(data)
{
    localStorage.setItem("query",JSON.stringify(data));
    if(data == undefined)
    {
        return false;
    }

    data.forEach(function(elem)
    {
        let box= document.createElement("div")
          box.className = "collection_tab";

        let p= document.createElement("p")
        p.innerText = elem.alt_description
    
        let poster=document.createElement("img")
        poster.src=elem.urls.regular;

        box.append(poster,p)
    })
}

function debounce(fun,delay)
{
    if(ID)
    {
        clearTimeout(ID);
    }
    ID = setTimeout(function()
    {
        fun()
    },delay)
}


let Attach_Photos=document.getElementById('photos');
let Collection_Arr = JSON.parse(localStorage.getItem("query"));
display(Collection_Arr);
function display(data)
{
    console.log(data);
    Attach_Photos.innerHTML=null;
    if(data == undefined)
    {
       
        return false;
        
    }

    data.forEach(function(elem)
    {
        let box= document.createElement("div")
        box.className = "movie_tab"
        let p= document.createElement("h4")
        p.innerText = elem.alt_description;
        p.className = "head_Sec";
        let poster=document.createElement("img")
        poster.src=elem.urls.regular
    
        box.append(poster,p)
    
        Attach_Photos.append(box)
    })
}