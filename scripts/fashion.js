
let middlediv=document.getElementById('mid_section');
var imagesData = 
[
    // Texture & Pattern
    {
        image: "https://images.unsplash.com/photo-1618522755367-bcbb050438b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1660866838287-d2239bb99976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1614071071386-b765b023f79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1660062909682-14020b176b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1616108252323-58ad5d1da34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1660658697408-8641b1f9ac44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1539800925050-60b19309954e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1660590333913-7912028fad69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1660541196422-dae4d510f0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1660246156333-eea5fc75b540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1659632777910-cc7736eaeffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1659932820288-92ee407b7215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1659966738458-68f60804ad15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 10
    },
    {
        image: "https://images.unsplash.com/photo-1640600984860-9580f0b45ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
        image: "https://images.unsplash.com/photo-1659735648127-845e286b34f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1641242293841-53a50ffded8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1657815928649-e781b9d92dc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1640600984860-9580f0b45ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1659462306513-478ac16140a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1659240498821-6d919dab2c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1647184504231-82e360dbcddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
    {
        image: "https://images.unsplash.com/photo-1658664752194-92089c3f471f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 100
    },
];

function appendImages(imagesData){

imagesData.forEach(function(el){

let div= document.createElement('div');

let img=document.createElement('img')

img.src=el.image;


div.append(img);


middlediv.append(div);

})


}

appendImages(imagesData)