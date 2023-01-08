
  const myImage = document.querySelector("img");
  const myBack = document.querySelector("body");
  var h1s = document.getElementsByTagName("h1");
 

  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        h1 = document.getElementsByTagName("h1")[0];
        h1.innerText = "Is Brave even Cooler?";
        document.body.style.backgroundColor = 'white'
        document.body.h1 
      myImage.setAttribute("src", "images/Brave_lion.png");
    } else {
        document.body.style.backgroundColor = '#FF9500'
        h1.innerText = "Mozilla is cool";
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
    
    

    // document.body.style.backgroundColor = 'white'


  };
 




  let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  
    