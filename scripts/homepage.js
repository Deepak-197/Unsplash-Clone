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




var TextureData = 
[
    // Texture & Pattern
    {
        image: "https://images.unsplash.com/photo-1659878776072-2b002700a297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1642233106024-7dc354cecdce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641996437783-14768819c2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641901853095-cfb99cf4e433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1642100091126-f02217207faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1580715198418-ee1a78fb9fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1635695563052-02abf47a6ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1642100091126-f02217207faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1642097238406-b72bfd1747af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641916739665-b0199522a08c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1642071547159-d9dfd875353a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1631371893503-048d3f05e34a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8YkRvNDhjVWh3bll8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1630094034541-c2d7ecfe9ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 10
    },
    {
        image: "https://images.unsplash.com/photo-1631269216011-e37b6e38de9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 50
    },
    {
        image: "https://images.unsplash.com/photo-1641984790242-d8aa477d306c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1600693851121-05727e24fbe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641993685499-4b5a5a55fc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641901675743-be847eb3decc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641921403073-83551d2dd59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1642189027760-3825918ecca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641933150680-42cf911265a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641982154657-9e5715d6e217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641860711101-d0cd01d97a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100

    },
    {
        image: "https://images.unsplash.com/photo-1641908164999-868dcf359593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641845449405-b8bdd3b75fe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
  
    {
        image: "https://images.unsplash.com/photo-1641666017842-f94246ef2961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641804852095-2a48b720616f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641666017160-3ca811d1b289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641341283592-bd8202706545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641666014784-fa74a058b4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641603229645-15c56358b6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641616669124-0d0b0ae8831f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1639323862560-ff513323929e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 50
    },
    {
        image: "https://images.unsplash.com/photo-1637423461846-57a52a4bc697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 80
    },
    {
        image: "https://images.unsplash.com/photo-1623841675698-8aac12636480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 80
    },
    {
        image: "https://images.unsplash.com/photo-1580687580441-96dbadf8f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 80
    },
    {
        image: "https://images.unsplash.com/photo-1569533816166-49d08c516a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1571179120659-f411b1c2a9ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641242293841-53a50ffded8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
];


let mid_div=document.getElementById('mid');

function append2(TextureData){

TextureData.forEach(function(el){

let div2=document.createElement('div');

let img2=document.createElement('img');

img2.src=el.image;



div2.append(img2);

mid_div.append(div2);



console.log(img2)



})

}

append2(TextureData)

