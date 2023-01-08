let size = 16;

function changeSize() {
    size = size + 4;
    let list = document.getElementById("list")
    list.style.fontSize = size+'px';
    if (size == 32)
    {
        size = 12
    }
  }
