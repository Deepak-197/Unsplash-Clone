function navbar()
{
  return `
  <div id="navbar_container">

    <div id="navbar_box">
    
        <div><a href="index.html"><img  id="logo" src="https://unsplash-assets.imgix.net/marketing/press-symbol.svg?auto=format&fit=crop&q=60"/></a></div>

        <input type="text" placeholder="Search free high resolution photos" id="search"/>

        <div id="navigation" >

            <div><a href="#">Explore</a></div>
        
            <div><a href="#"> Advertise</a> </div>

            <div><a href="#">Blog</a></div>  
            

            <div style="width: 60px;"><a href="login.html">Log in</a></div>
            <h2 style="margin-top:-5px;">|</h2>
            <div style="width: 80px;"> <a href="signup.html">sign up</a></div>

            <div id="submit_photo">
            <a href="login.html">Submit a Photo</a>
            </div>

            <div id = "Rex">
            <a href = "cart.html"<i class="fa-regular fa-bell"></i></a>
            <a href = "wishlist.html"<i class="fas fa-heart"></i></a>
            </div>

        </div>

            <div>
                <a href="#"><img class="nav_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///90d3lydXdvcnT8/PySlZekpafT09PIysq2t7l4en1ydXj19fXt7e1+gYO5urvg4eGeoKGJjI2Vl5nm5uasrq+FiIrDxcZ9gIHQ0tK+wMBrbnCZm53Z2dnp6uqPkZS8MJHGAAADZElEQVR4nO3di46jIBQGYDm0ar2PVWurre//lqvTmUl2A9TukJBz8n9PwB9QvHAgigAAAAAAAAAAAAAAAAAAAAAAwK24X1Nurvdyd7zbopTmh1Rb7wl5uI254oqyU/Eq4OOsQzfzV6alcQdsKgrdxl9LXAE7/vlUPjkiFlXo5nmR2e83Pe9r8Bt9WC9CAWP0k7aN05jvNPE3OpoDlkPolnmTmaeMRMZVuNE3yfeZT7Mx4SzlRrNqjQmX0M3yqDImbEM3yyNzwrOcUUqDMWEsJ6EyT4gXOfdSOhkTdlnohvlzNyY8HMUM08Hypp9KGaa6NgeMDq2MTqTK+rFGwiv+Spuvwk83CeN06u0Bo+jE/xVRx66AUVQr5iOVnD24aQbNN2OuK8c1+CNdlFZEOS9ESuft5bAj4DprNJd4PnIzx7dmX77vmNy8Ew4AAAAAAAAAAAAAAADAmzKpY37qpNz5i635GLVSxI1SOpv3/OMu54nvegya2u5VwDTju05hQ8q8iP3HLXQLf8+93CTl3YFP1nV72zUYunF+kLUEUcoCUxpss8ZVRsB1nF4sCefQLfOFWvMC024M3TJ/zDO/mEXQayeab6eS6i3OxoTya2bk1z3JTzjzfaf4F5nrDyXVkJrr1QXNFpaH74eMHRU2llru6EPMdLFYHr3vUoapTs0B106UEZHO1m9upYgay5wcX6PuU+jmeTBZx+hGwEuw9fX3S9Nq1o82unJuorQpesbVa6TiPfuZdX2l8tCbr/0HUlX8YqOvH4curU/c1Ol7hV0AAAAAAAAAAAAAAAAA3oTeJPBt74Qr7v2xyripljh5edjTM9+pynmuq9E09jt+cl8HnvGedPVyB9MT53wr0rE7ooB1X3pxBexZr6X5oq3HPYk5S8e+NLEQs+u87Y4q5oALbT7eYu3C0C3zZjR3YhO6XR5djQlFHBvwZKkFlrOQ3XaSjpAa2U0uv7JrNCaUfyqZoOuQzM+m8iu7xJTMWNfrF3JO6RwtNSW9lAuRzEdYRtEjdMt8sR/4xP0Txheyn4ck41gyGh0fFUsBR6tT5txIqWN/P6XqRd1MMU+su3FaHu6Aq2TQOdOQpCtn7eG3QxIPKnSZ1n9QQ3zd9+NiG6tlk3DTPHbHAwAAAAAAAAAAAAAAAAAQ6g+lMYZLvXN4BwAAAABJRU5ErkJggg==" alt="">
                </a>
            </div>
    </div>
</div>

    <div id="navbar_components">
        <div class="ken" ><a href="#">Editorial</a></div>

        <div>|</div>

        <div class="ken"><a href="girlsVsStereotype.html">Girls vs. Stereotypes</a></div>

        <div class="ken"><a href="currentEvents.html">Current Events</a></div>

        <div class="ken"><a href="Wallpapers.html">Wallpapers</a></div>

        <div class="ken"><a href="#">3D Renders</a></div>

        <div class="ken"><a href="texture.html">Textures & Patterns</a></div>

        <div class="ken"><a href="experimental.html">Experimental</a></div>
        
        <div class="ken"><a href="#">Architecture</a></div>

        <div class="ken"><a href="nature.html">Nature</a></div>

        <div class="ken"><a href="Business.html">Business & Work</a></div>

        <div class="ken"><a href="fashion.html">Fashion</a></div>

        <div class="ken"><a href="Film.html">Film</a></div>

        <div class="ken"><a href="#">Food & Drink</a></div>
    </div>`    
}
export default navbar