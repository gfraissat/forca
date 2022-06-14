var popup = document.querySelector('.popup-wrapper')

var popupPerde = document.querySelector('.popup-wrapper-perde')
//Reiniciando */
popup.addEventListener('click', event => {
  var classeClicada = event.target.classList[0]
  var classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  classeClicada = classNames.some(className => className === classeClicada)
   if(classeClicada) {
      location. reload()
  }
})
popupPerde.addEventListener('click', event => {
  var classeClicada = event.target.classList[0]
  var classNames = ['popup-close', 'popup-wrapper-perde', 'popup-link']
  classeClicada = classNames.some(className => className === classeClicada)
   if(classeClicada) {
      location. reload()
  }
})
