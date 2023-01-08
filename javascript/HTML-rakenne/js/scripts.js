// // const para = document.createElement("p")
// const node = document.createTextNode("This is new paragraph.")

// para.appendChild(node)
// const element = document.getElementById("div1")
// element.appendChild(para)

// const otsikko = document.getElementsByTagName("body")[0]
// const hooyks = document.createElement(h1)
// const node2 = document.createTextNode("Uusi 1. tason otsikko")


// hooyks.appendChild(node2)
// otsikko.element.appendChild(hooyks)


// const body = document.getElementsByTagName("body")[0]
// const div = document.createElement("div")
// div.setAttribute("id", "div1")

// const paragraph = document.createElement("p")
// paragraph.setAttribute("id", "paragraph1")

// const text = document.createTextNode("lorem ipsum blablab")
// paragraph.appendChild(text)
// div.appendChild(paragraph)

// body.appendChild(div)
const body = document.getElementsByTagName("body")[0]

const header = document.createElement("header")
header.setAttribute("class", "yatunniste")
const title = document.createElement("h1")
const para = document.createTextNode("Tämä on artikkelin otsikko")
title.appendChild(para);
const text = document.createElement("p")
const textconsist = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries")
text.appendChild(textconsist)
header.appendChild(title)
header.appendChild(text)
body.appendChild(header)

const section = document.createElement("section")
section.setAttribute("id","rinnakain")
const p = document.createElement("p")
const para1 = document.createTextNode("  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin imperdiet lobortis. Nam ultricies neque in est eleifend tempor. Integer luctus dolor nibh. Maecenas orci sapien, tincidunt vitae felis in, imperdiet sagittis justo. Nullam lobortis metus id dictum semper. Sed eleifend vitae sapien a tristique. Donec consequat, magna vel mattis pharetra, nisl elit porta sem, eget rhoncus est diam non eros. Nullam bibendum cursus velit, non mollis velit interdum sed.Mauris eget lorem semper, ornare nisi eget, convallis diam. Fusce ac consectetur ligula. Aenean non diam ut sem tempus vulputate. In non facilisis erat. Vivamus massa magna, facilisis ut ullamcorper a, luctus vel dolor. Nam consequat, enim eget cursus aliquet, risus lacus dignissim libero, in eleifend arcu massa et lectus. Suspendisse malesuada nunc ex, non luctus lectus fermentum eu. Proin at lobortis lectus. Sed id aliquet orci. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries")
p.appendChild(para1)
const figure = document.createElement("figure")
figure.setAttribute("id", "kuvanpaikka")
const img = document.createElement("img")
img.setAttribute("src", "https://www.w3schools.com/tags/pic_trulli.jpg")

figure.appendChild(img)
section.appendChild(p)
section.appendChild(figure)
body.appendChild(section)

const footer = document.createElement("footer")
const p2 = document.createElement("p")
const para2 = document.createTextNode("@ 2022 Vasyl Trapeznikov")
p2.appendChild(para2)
footer.appendChild(p2)
body.appendChild(footer)





