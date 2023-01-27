


function showMenu(){
  var icon = document.getElementById("menu-icon");
  var body = document.getElementById("body");
  var header = document.getElementById("header");
  var menu = document.getElementById("menu-dropdown");

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
    
  }
  changeColor();
}

function hideMenu(){
  var mn = document.getElementById("menu-dropdown");
  mn.style.display = "none";
  changeColor();
}

function scrollElement(){
  var element = document.getElementById("about");
  element.scrollIntoView();
 }

function changeColor(){
  window.addEventListener("scroll", function() {
    if (this.window.scrollY > 80){
      header.style.backgroundColor = "white";
      header.classList.add("transition");
      
    }else{
      header.style.backgroundColor = "initial";
    }
  });
}
