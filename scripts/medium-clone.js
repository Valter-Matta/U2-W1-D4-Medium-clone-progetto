const navbar = document.getElementsByClassName('navbar')[0]
const navbarButton = document.getElementsByClassName('header-button')[0]
const pixelnum = 5

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
