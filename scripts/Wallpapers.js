let url = `https://api.unsplash.com/photos?client_id=Rib8nTMAs3RXqWcoPCnV3kbiwygZEMwnIe5rQkSg3xU`

var res ;
    fetch(url).then((res) => {
        return res.json().then((res) => {
            appendImg(res);
            console.log(res);
            window.addEventListener("scroll", () => {
                if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) 
                {
                    appendImg(res)
                }
            })
        })
    })

    let container = document.getElementById("container5");

    function appendImg(res) {
        let i = 0;
        while (i < 11) {
            res.forEach(element => {
                let div = document.createElement("div");
                div.setAttribute("class","img_container")


                let img = document.createElement("img");
                img.setAttribute("class", "images")
                img.src = element.links.download


                let div1 = document.createElement("div");
                
                div1.setAttribute("class","top-right")
                div1.innerHTML = '<i id="fa-heart" class="fas fa-heart "></i>'
                div1.addEventListener("click",function(e){
                    heartFunc(e);
                    
                })
                

                // let div2 = document.createElement("div");
                // div1.setAttribute("class","top-right")
                // div1.innerHTML = '<i class="fa-thin fa-square-plus"></i>'
                // div1.addEventListener("click",function(e){
                //     heartFunc(e);
                    
                // 
                div.append(img,div1);
                container.append(div);
                i++
            });
        }
    }

    let localWallpaper = [];




    var count =0;
    function heartFunc(e){
        count++ ;
  
        e.target.style.color = 'red';
        alert("Added to your wish list");   
    }
