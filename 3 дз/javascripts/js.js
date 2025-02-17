document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function () {
    console.log('Кнопочка нажата')
  })

  let knopka = document.querySelectorAll('button')

  knopka.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.style.backgroundColor === 'rgb(84, 199, 238)') {
        button.style.backgroundColor = 'rgb(218, 113, 227)'
        button.style.margin = '3vw'
      } else {
        button.style.backgroundColor = 'rgb(84, 199, 238)'
        button.style.margin = '4vw'
      }
    })
  })

  // let luli = document.querySelectorAll('.luli')

  // luli.forEach(function (luli) {
  //   luli.addEventListener('click', function () {
  //     if (luli.style.backgroundColor === 'rgb(84, 199, 238)') {
  //       luli.style.backgroundColor = 'rgb(218, 113, 227)'
  //       luli.style.margin = '3vw'
  //     } else {
  //       luli.style.backgroundColor = 'rgb(84, 199, 238)'
  //       luli.style.margin = '4vw'
  //     }
  //   })
  // })
})
