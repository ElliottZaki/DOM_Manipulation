const body = document.body
const div = document.createElement('div')

// inner.html allows us to use the html tags to affect our page as seen below. 

div.innerHTML = '<strong>Hello World</strong>'
body.appendChild(div)

// const div = document.querySelector('div')

// console.log(div.textContent);
// console.log(div.innerText);
