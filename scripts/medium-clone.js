const navbar = document.getElementsByClassName('navbar')[0]
const navbarButton = document.getElementsByClassName('header-button')[0]
const pixelnum = 350

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop
  //   console.log(scrollTop)

  if (pixelnum < scrollTop) {
    navbar.classList.add('scroll')
    navbarButton.id = 'green'
  } else {
    navbar.classList.remove('scroll')
    navbarButton.id = ''
  }
})
const sign = document.getElementById('sign')
const write = document.getElementById('write')
const article = document.getElementById('modal')
const exit = document.getElementById('background')

sign.addEventListener('click', () => {
  article.classList.toggle('open')
  if (article.classList === 'open') {
    body.style.opacity = '0.5'
  } else {
    body.style.opacity = '0.5'
  }
})

write.addEventListener('click', () => {
  article.classList.toggle('open')
})
// article.classList.add('open')

exit.addEventListener('click', () => {
  article.classList.toggle('open')
})
