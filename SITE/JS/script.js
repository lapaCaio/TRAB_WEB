function toggleMenu() {
    var sidebar = document.getElementById("link_menu");
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
    } else {
      sidebar.style.display = "none";
    }
}

function showMenu(){
  var menu = document.getElementById("menu-dropdown");
  var icon = document.getElementById("menu-icon");

  var body = document.getElementById("body");
  var header = document.getElementById("header");

  if (menu.classList.contains("hidden")){
    menu.classList.remove("hidden");
    icon.src = "../SRC/x_icon.png";
    menu.style.display = "flex";
    
    body.style.touchAction = "none";
    header.style.backgroundColor = "white";

    header.classList.remove("transition");
  }else{
    menu.classList.add("hidden");
    icon.src = "../SRC/menu_icon.png";
    menu.style.display = "none";

    body.style.touchAction = "auto";
    header.style.backgroundColor = "#e7e7e6";
    
  }

  window.addEventListener("scroll", function() {
    if (this.window.scrollY > 80){
      header.style.backgroundColor = "white";
      header.classList.add("transition");
      
    }else{
      header.style.backgroundColor = "initial";
    }
  });
}
