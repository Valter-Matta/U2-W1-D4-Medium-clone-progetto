const arrM = document.getElementsByTagName('g')

const int = function () {
  const random = Math.round(Math.random() * arrM.length)
  const letter = arrM[random]

  letter.style.opacity = '0'
  setTimeout(() => {
    letter.style.opacity = '1'
  }, 500)
}

setInterval(int, 100)
