// Upper Search Function
async function Prox()
{
    let response = await SearchPhotos();
    let data = await response;
    Append(data);
    window.location.href = "Search.html"
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
    localStorage.setItem("QUERY",JSON.stringify(data));
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

// Middle Search Function
async function main()
{
    let response = await searchphotos();
    let data = await response;
    append(data);
    window.location.href = "searchbox.html"
}

let id;

async function searchphotos()
{
    try
    {
      let query = document.getElementById("wanda").value;
      let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=nq09tWXzARwU8KjggUE_XnNLnGWL_evJwQuoDawY-Vo`
      let res = await fetch(url);
      let data = await res.json();
      return data.results;
      
    }
    catch(e){
        console.log(e);
    }
};

function append(data)
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
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function()
    {
        fun()
    },delay)
}

var HomeData = 
[
    // Home Data
    {
        image: "https://images.unsplash.com/photo-1659535828770-6d9e1915b5dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661458079058-dff4d487c7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661463991924-0eab3481b9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661493567913-91cc1c60d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661464139731-d80cf83b40ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661466188999-b15479ec0ec3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661435806039-7fd9dd9ee459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1659536540434-fabeb68f6fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661470539019-6847429e86b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1661474039567-9de2a29ef6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1657299143548-658603d76b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
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


localStorage.setItem("home", JSON.stringify(HomeData));

var Home_Data = JSON.parse(localStorage.getItem("home"));

var wish_arr = JSON.parse(localStorage.getItem("Wish")) || [];

var cart_arr = JSON.parse(localStorage.getItem("cart")) || [];

Home_Data.map(function (item) 
{
    var box = document.createElement("div");
    box.setAttribute("class", "Overlay")

    var image = document.createElement("img");
    image.setAttribute("src", item.image);

    var box1 = document.createElement("div");
    box1.setAttribute("class", "align")

    var btn1 = document.createElement("button");
    btn1.innerHTML = '<i class="fas fa-heart"></i>';
    btn1.addEventListener("click", function () {
        addedtowish(item);
    });

    var btn2 = document.createElement("button");
    btn2.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    btn2.addEventListener("click", function () {
        addedtocart(item);
    });

    box1.append(btn1, btn2);

    box.append(image, box1);

    document.querySelector("#mid").append(box);
});
function addedtowish(item) 
{
    console.log(item);
    wish_arr.push(item);
    localStorage.setItem("Wish", JSON.stringify(wish_arr));
    alert("Added to wishlist")
}
function addedtocart(item) {
    console.log(item);
    cart_arr.push(item);
    localStorage.setItem("cart", JSON.stringify(cart_arr));
    alert("Added to cart")
}
