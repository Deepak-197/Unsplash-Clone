
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