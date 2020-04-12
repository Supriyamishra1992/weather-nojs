console.log('clientside js loaded')

fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

// Example of api call in clientsode js
// fetch('http://localhost:3000/weather?address=!').then((response) => {
//   response.json().then((data) => {
//     if(data.error) {
//       console.log(data.error)
//     } else {
//       console.log(data)
//     }
//   })
// })


const weatherForm =document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

//messageOne.textContent = 'from javascript'

weatherForm.addEventListener('submit',(e) => {
  e.preventDefault()

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  const location = search.value

  fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        //console.log(data.error)
        messageOne.textContent = data.error
      } else {
        //console.log(data)
        messageTwo.textContent = data
      }
    }) 
  })

})




