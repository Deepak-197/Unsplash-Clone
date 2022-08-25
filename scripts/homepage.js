let id=document.getElementById('id');
let data;
async function searchMovies()
{

    try{
    
        let url=`https://api.unsplash.com/photos/?client_id=o_k9t3W826h3GhoXShOFpc83POspnrHGc_83U5zrSqI`;
        let res= await fetch(url)
        
         data= await res.json();
         append(data)
        // append()
     console.log(data)

    }catch(err){
    console.log(err)
    }


};

searchMovies()


function append(data){

data.forEach(function(el){

let div=document.createElement('div')

 let img=document.createElement('img');
 img.src=el.urls.regular;


 div.append(img);

 id.append(div)





})


    
}

