jQuery(document).ready(function ($) {
  if ($(window).width() > 768) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop()
      var header = $('#header')

      if (scroll > 0) {
        header.addClass('fixed-position')
      } else {
        header.removeClass('fixed-position')
      }
    })
  }
})

// скролл -------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var scrollUpButton = document.querySelector('.scroll-up')

  function toggleScrollUpClass() {
    if (window.scrollY > 100) {
      scrollUpButton.classList.add('scrollUp-show')
    } else {
      scrollUpButton.classList.remove('scrollUp-show')
    }
  }

  window.addEventListener('scroll', toggleScrollUpClass)

  scrollUpButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  toggleScrollUpClass()
})

// скролл -------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var showInElements = document.querySelectorAll('.show-in')

  function handleScroll() {
    showInElements.forEach(function (element) {
      var rect = element.getBoundingClientRect()

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.setAttribute('now', 'now')
      } else {
        element.removeAttribute('now')
      }
    })
  }

  window.addEventListener('scroll', handleScroll)

  handleScroll()
})

// поочереди меняет текст --------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var layers = document.querySelectorAll('.layer')
  var currentIndex = 0

  function showNextLayer() {
    layers[currentIndex].style.display = 'none'

    currentIndex = (currentIndex + 1) % layers.length

    layers[currentIndex].style.display = 'block'
  }

  if (layers.length !== 0) {
    layers[currentIndex].style.display = 'block'
    setInterval(showNextLayer, 10000)
  }
})

// поочереди меняет текст --------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Выбираем все элементы с классом 'word'
  var words = document.querySelectorAll('.word')

  function toggleClasses() {
    words.forEach(function (word) {
      var letterOut = word.querySelectorAll('.letter.out')
      var letterIn = word.querySelectorAll('.letter.in')

      letterOut.forEach(function (letter, index) {
        setTimeout(function () {
          letter.classList.toggle('out')
          letter.classList.toggle('in')
        }, index * 50)
      })

      letterIn.forEach(function (letter, index) {
        setTimeout(function () {
          letter.classList.toggle('out')
          letter.classList.toggle('in')
        }, index * 50)
      })
    })
  }

  setInterval(toggleClasses, 3000)
})

//слайдер и текст ----------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide')
  var progress = document.querySelector('.progress')
  var layers = document.querySelectorAll('.layer1')
  var activeSlideIndex = 0

  function setSlideClasses() {
    slides[activeSlideIndex].classList.add('active')
    slides[(activeSlideIndex + 1) % slides.length].classList.add('fadeOut')
    progress.classList.add('active')
    progress.firstElementChild.style.transitionDuration = '10000ms'
    layers[activeSlideIndex].style.display = 'block'
  }

  if (slides.length !== 0 && progress && layers.length !== 0) {
    setSlideClasses()

    var intervalId = setInterval(function () {
      progress.classList.remove('active')
      progress.firstElementChild.style.transitionDuration = '0ms'

      slides[activeSlideIndex].classList.remove('active')
      slides[(activeSlideIndex + 1) % slides.length].classList.remove('fadeOut')
      layers[activeSlideIndex].style.display = 'none'

      activeSlideIndex = (activeSlideIndex + 1) % slides.length

      slides[activeSlideIndex].classList.add('active')
      slides[(activeSlideIndex + 1) % slides.length].classList.add('fadeOut')
      layers[activeSlideIndex].style.display = 'block'

      setTimeout(function () {
        progress.classList.add('active')
        progress.firstElementChild.style.transitionDuration = '10000ms'
      }, 100)
    }, 10000)
  }
})

//слайдер и текст ----------------------------------------------------------------------------------------------------------------------------------------------------

function updateTransform(event, translateYValue) {
  const colHolderElement = document.querySelectorAll('.col-holder')
  colHolderElement.forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active')
    }
  })

  event.currentTarget.classList.add('active')
  var slidesElement = document.querySelector('.slides')
  slidesElement.style.transform =
    'translate3d(0px, ' + translateYValue + '%, 0px)'
}

document.addEventListener('DOMContentLoaded', function () {
  const backElements = document.querySelectorAll('.back')
  let currentIndex = 0

  function updateClasses() {
    backElements[currentIndex].classList.remove('active')

    currentIndex = (currentIndex + 1) % backElements.length

    backElements[currentIndex].classList.add('active')
  }

  setInterval(updateClasses, 10000)
})

jQuery(document).ready(function ($) {
  $('.nav-opener').on('click', function () {
    $('header').toggleClass('nav-active')
  })
})
