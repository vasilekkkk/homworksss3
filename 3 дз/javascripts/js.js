document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function () {
    console.log('Кнопочка нажата')
  })

  let luli = document.querySelector('.luli')
  let raaaaaaarrr = document.querySelector('.raaaaaaarrr')

  luli.addEventListener('click', function () {
    if (luli.style.backgroundColor === 'rgb(84, 199, 238)') {
      luli.style.backgroundColor = 'rgb(218, 113, 227)'
      luli.style.margin = '3vw'
    } else {
      luli.style.backgroundColor = 'rgb(84, 199, 238)'
      luli.style.margin = '4vw'
    }
  })

  raaaaaaarrr.addEventListener('click', function () {
    if (raaaaaaarrr.style.backgroundColor === 'rgb(84, 199, 238)') {
      raaaaaaarrr.style.backgroundColor = 'rgb(218, 113, 227)'
      raaaaaaarrr.style.margin = '3vw'
    } else {
      raaaaaaarrr.style.backgroundColor = 'rgb(84, 199, 238)'
      raaaaaaarrr.style.margin = '4vw'
    }
  })
})
