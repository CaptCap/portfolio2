let index = 0;
let fontTypes = ["Roboto", "Mansalva","Courier New", "Grenze", "Turret Road"]
function changeFont() {
    
    document.body.style.fontFamily = fontTypes[index];
    index = index+1
    
    if (index == 5)
    {
        index = 0
    }
  }
