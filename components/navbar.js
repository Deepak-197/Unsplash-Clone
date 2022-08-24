let navbar =()=>{
    return `
    <div id="navbar_box">
    <div class="header_wrapper">
    <div class="header_section">
      <div class="header_left">
       <div class="header_logo">
        <a href="/index.html"> <img src="https://unsplash-assets.imgix.net/marketing/press-symbol.svg?auto=format&fit=crop&q=60" alt="unplash logo"></a>
       </div>
       <form action="./search.html">
        <div class="input_box">
           <div class="input_wrapper">
             <input type="text"  name="search" placeholder="search photos" class="search_input" >
           </div>
         <i class="fa-solid fa-magnifying-glass"></i>
         <img src="https://www.bing.com/rp/XvRHqJwJt19aXQca73hQTfvNMxk.svg" alt="visual search">
        </div>
     </form>
      </div>
      <div class="header_right">
        <ul>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Advertise</a></li>
          <li><a href="#">Blog</a></li>
          <li class="login"><a href="#">Login</a></li>
          <li class="Singup"><a href="#">Sign up</a></li>
        </ul>
        <div class="submit">
          <button>Submit a photo</button>
          <i class="fa-solid fa-bars" id="menubar"></i>
        </div> 
      </div>
     </div>
     </br>
      
      <div id="navbar_components">

      <div ><a href="#">Editorial</a></div>

      <div style="border: 0.1px solid black;"></div>
      
      <div><a href="#">Girls vs. Stereotypes</a></div>

      <div id="holiday"><a href="#">Current Events</a></div>

      <div><a href="#">Wallpapers</a></div>

      <div><a href="#">3D Renders</a></div>

      <div><a href="#">Textures & Patterns</a></div>

      <div><a href="#">Architecture</a></div>

      <div><a href="#">Experimental</a></div>

      <div id="nature"><a href="#">Nature</a></div>

      <div><a href="#">Business & Work</a></div>

      <div><a href="#">Fashion</a></div>

      <div><a href="#">Film</a></div>

      <div><a href="#">Food & Drink</a></div>

  </div>

      `
};
export default navbar ;