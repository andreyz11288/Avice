/**
 * Generates multiple customizable animated sines waves
 * using a canvas element. Supports retina displays and
 * limited mobile support
 *
 * I've created a seperate library based on this pen.
 * Check it out at https://github.com/isuttell/sine-waves
 */
function SineWaveGenerator(options) {
  jQuery.extend(this, options || {})

  if (!this.el) {
    throw 'No Canvas Selected'
  }
  this.ctx = this.el.getContext('2d')

  if (!this.waves.length) {
    throw 'No waves specified'
  }

  // Internal
  this._resizeWidth()
  window.addEventListener('resize', this._resizeWidth.bind(this))
  // User
  this.resizeEvent()
  window.addEventListener('resize', this.resizeEvent.bind(this))

  if (typeof this.initialize === 'function') {
    this.initialize.call(this)
  }
  // Start the magic
  this.loop()
}

// Defaults
SineWaveGenerator.prototype.speed = 10
SineWaveGenerator.prototype.amplitude = 50
SineWaveGenerator.prototype.wavelength = 50
SineWaveGenerator.prototype.segmentLength = 10

SineWaveGenerator.prototype.lineWidth = 2
SineWaveGenerator.prototype.strokeStyle = 'rgba(255, 255, 255, 0.2)'

SineWaveGenerator.prototype.resizeEvent = function () {}

// fill the screen
SineWaveGenerator.prototype._resizeWidth = function () {
  this.dpr = window.devicePixelRatio || 1

  this.width = this.el.width = window.innerWidth * this.dpr
  this.height = this.el.height = window.innerHeight * this.dpr
  this.el.style.width = window.innerWidth + 'px'
  this.el.style.height = window.innerHeight + 'px'

  this.waveWidth = this.width * 0.95
  this.waveLeft = this.width * 0.025
}

SineWaveGenerator.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.width, this.height)
}

SineWaveGenerator.prototype.time = 0

SineWaveGenerator.prototype.update = function (time) {
  this.time = this.time - 0.007
  if (typeof time === 'undefined') {
    time = this.time
  }

  var index = -1
  var length = this.waves.length

  while (++index < length) {
    var timeModifier = this.waves[index].timeModifier || 1
    this.drawSine(time * timeModifier, this.waves[index])
  }
  index = void 0
  length = void 0
}

// Constants
var PI2 = Math.PI * 2
var HALFPI = Math.PI / 2

SineWaveGenerator.prototype.ease = function (percent, amplitude) {
  return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5
}

SineWaveGenerator.prototype.drawSine = function (time, options) {
  options = options || {}
  amplitude = options.amplitude || this.amplitude
  wavelength = options.wavelength || this.wavelength
  lineWidth = options.lineWidth || this.lineWidth
  strokeStyle = options.strokeStyle || this.strokeStyle
  segmentLength = options.segmentLength || this.segmentLength

  var x = time
  var y = 0
  var amp = this.amplitude

  // Center the waves
  var yAxis = this.height / 2

  // Styles
  this.ctx.lineWidth = lineWidth * this.dpr
  this.ctx.strokeStyle = strokeStyle
  this.ctx.lineCap = 'round'
  this.ctx.lineJoin = 'round'
  this.ctx.beginPath()

  // Starting Line
  this.ctx.moveTo(0, yAxis)
  this.ctx.lineTo(this.waveLeft, yAxis)

  for (var i = 0; i < this.waveWidth; i += segmentLength) {
    x = time * this.speed + (-yAxis + i) / wavelength
    y = Math.sin(x)

    // Easing
    amp = this.ease(i / this.waveWidth, amplitude)

    this.ctx.lineTo(i + this.waveLeft, amp * y + yAxis)

    amp = void 0
  }

  // Ending Line
  this.ctx.lineTo(this.width, yAxis)

  // Stroke it
  this.ctx.stroke()

  // Clean up
  options = void 0
  amplitude = void 0
  wavelength = void 0
  lineWidth = void 0
  strokeStyle = void 0
  segmentLength = void 0
  x = void 0
  y = void 0
}

SineWaveGenerator.prototype.loop = function () {
  this.clear()
  this.update()

  window.requestAnimationFrame(this.loop.bind(this))
}

new SineWaveGenerator({
  el: document.getElementById('waves1'),

  speed: 10,

  waves: [
    {
      timeModifier: 1,
      lineWidth: 10,
      amplitude: 100,
      wavelength: 250,
      segmentLength: 20,
      //       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1,
      lineWidth: 8,
      amplitude: 150,
      wavelength: 100,
      //       strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
  ],

  initialize: function () {},

  resizeEvent: function () {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
    gradient.addColorStop(0, 'rgba(0, 205, 255, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 205, 255, 0.5)')
    gradient.addColorStop(1, 'rgba(0, 205, 255, 0)')

    var index = -1
    var length = this.waves.length
    while (++index < length) {
      this.waves[index].strokeStyle = gradient
    }

    // Clean Up
    index = void 0
    length = void 0
    gradient = void 0
  },
})

new SineWaveGenerator({
  el: document.getElementById('waves2'),

  speed: 10,

  waves: [
    {
      timeModifier: 1,
      lineWidth: 10,
      amplitude: 100,
      wavelength: 250,
      segmentLength: 20,
      //       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1,
      lineWidth: 8,
      amplitude: 150,
      wavelength: 100,
      //       strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
  ],

  initialize: function () {},

  resizeEvent: function () {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
    gradient.addColorStop(0, 'rgba(0, 205, 255, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 205, 255, 0.5)')
    gradient.addColorStop(1, 'rgba(0, 205, 255, 0)')

    var index = -1
    var length = this.waves.length
    while (++index < length) {
      this.waves[index].strokeStyle = gradient
    }

    // Clean Up
    index = void 0
    length = void 0
    gradient = void 0
  },
})

new SineWaveGenerator({
  el: document.getElementById('waves3'),

  speed: 10,

  waves: [
    {
      timeModifier: 1,
      lineWidth: 10,
      amplitude: 100,
      wavelength: 250,
      segmentLength: 20,
      //       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1,
      lineWidth: 8,
      amplitude: 150,
      wavelength: 100,
      //       strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
  ],

  initialize: function () {},

  resizeEvent: function () {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
    gradient.addColorStop(0, 'rgba(0, 205, 255, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 205, 255, 0.5)')
    gradient.addColorStop(1, 'rgba(0, 205, 255, 0)')

    var index = -1
    var length = this.waves.length
    while (++index < length) {
      this.waves[index].strokeStyle = gradient
    }

    // Clean Up
    index = void 0
    length = void 0
    gradient = void 0
  },
})

new SineWaveGenerator({
  el: document.getElementById('waves4'),

  speed: 10,

  waves: [
    {
      timeModifier: 1,
      lineWidth: 10,
      amplitude: 100,
      wavelength: 250,
      segmentLength: 20,
      //       strokeStyle: 'rgba(255, 255, 255, 0.5)'
    },
    {
      timeModifier: 1,
      lineWidth: 8,
      amplitude: 150,
      wavelength: 100,
      //       strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
  ],

  initialize: function () {},

  resizeEvent: function () {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
    gradient.addColorStop(0, 'rgba(0, 205, 255, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 205, 255, 0.5)')
    gradient.addColorStop(1, 'rgba(0, 205, 255, 0)')

    var index = -1
    var length = this.waves.length
    while (++index < length) {
      this.waves[index].strokeStyle = gradient
    }

    // Clean Up
    index = void 0
    length = void 0
    gradient = void 0
  },
})

jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    var header = $('#header')
    var headerHolder = $('.header-holder')
    var headerHolder2 = $('.header-holder2')

    if (scroll > 0) {
      header.addClass('fixed-position')
    } else {
      header.removeClass('fixed-position')
    }
  })
})

// поочереди меняет текст --------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Выбираем все элементы с классами "layer1", "layer2" и "layer3"
  var layers = document.querySelectorAll('.layer')
  // var layers1 = document.querySelectorAll('.layer1')
  var currentIndex = 0

  // Функция, которая отображает следующий элемент и скрывает предыдущий
  function showNextLayer() {
    // Скрываем текущий элемент
    layers[currentIndex].style.display = 'none'
    // layers1[currentIndex].style.display = 'none'

    // Переходим к следующему элементу
    currentIndex = (currentIndex + 1) % layers.length
    // currentIndex = (currentIndex + 1) % layers1.length

    // Отображаем следующий элемент
    layers[currentIndex].style.display = 'block'
    // layers1[currentIndex].style.display = 'block'
  }

  // Показываем первый элемент
  layers[currentIndex].style.display = 'block'
  // layers1[currentIndex].style.display = 'block'

  // Запускаем интервал для отображения слоев с интервалом в 5 секунд
  setInterval(showNextLayer, 10000)
})
// поочереди меняет текст --------------------------------------------------------------------------------------------------------------------------------------------

// скролл -------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var scrollUpButton = document.querySelector('.scroll-up')

  // Функция для добавления/удаления класса в зависимости от прокрутки
  function toggleScrollUpClass() {
    if (window.scrollY > 100) {
      scrollUpButton.classList.add('scrollUp-show')
    } else {
      scrollUpButton.classList.remove('scrollUp-show')
    }
  }

  // Обработчик события прокрутки
  window.addEventListener('scroll', toggleScrollUpClass)

  // Обработчик события клика для прокрутки вверх
  scrollUpButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Плавная прокрутка вверх
  })

  // Вызываем функцию для начальной проверки при загрузке страницы
  toggleScrollUpClass()
})

// скролл -------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Выбираем все элементы с классом 'word'
  var words = document.querySelectorAll('.word')

  // Функция, которая меняет классы местами с задержкой
  function toggleClasses() {
    words.forEach(function (word) {
      // Находим все элементы с классами 'out' и 'in' внутри текущего элемента 'word'
      var letterOut = word.querySelectorAll('.letter.out')
      var letterIn = word.querySelectorAll('.letter.in')

      // Переключаем классы для каждого элемента с задержкой
      letterOut.forEach(function (letter, index) {
        setTimeout(function () {
          letter.classList.toggle('out')
          letter.classList.toggle('in')
        }, index * 50) // 500 миллисекунд (0,5 сек) * индекс элемента
      })

      letterIn.forEach(function (letter, index) {
        setTimeout(function () {
          letter.classList.toggle('out')
          letter.classList.toggle('in')
        }, index * 50) // 500 миллисекунд (0,5 сек) * индекс элемента
      })
    })
  }

  // Запускаем интервал для изменения классов с задержкой каждые 3 секунды
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
})

//слайдер и текст ----------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var showInElements = document.querySelectorAll('.show-in')

  function handleScroll() {
    showInElements.forEach(function (element) {
      var rect = element.getBoundingClientRect()

      // Проверяем, если элемент появляется в видимой области
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.setAttribute('now', 'now')
      } else {
        // Если элемент не виден, можно удалить атрибут now
        element.removeAttribute('now')
      }
    })
  }

  // Добавляем обработчик события прокрутки
  window.addEventListener('scroll', handleScroll)

  // Вызываем обработчик события прокрутки при загрузке страницы для начальной проверки
  handleScroll()
})

//******************************************************
// Yet Another Particle Engine
var cos = Math.cos,
  sin = Math.sin,
  sqrt = Math.sqrt,
  abs = Math.abs,
  atan2 = Math.atan2,
  log = Math.log,
  random = Math.random,
  PI = Math.PI,
  sqr = function (v) {
    return v * v
  },
  particles = [],
  drawScale = 1,
  emitters = [],
  forces = [],
  collidedMass = 0,
  maxParticles = 100,
  emissionRate = 1

//-------------------------------------------------------
// Vectors, and not the kind you put stuff in
function Vector(x, y, z) {
  this.x = x || 0
  this.y = y || 0
  this.z = z || 0
}
Vector.prototype = {
  add: function (vector) {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
    return this
  },
  subtract: function (vector) {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z
    return this
  },
  multiply: function (another) {
    this.x /= another.x
    this.y /= another.y
    this.z /= another.z
    return this
  },
  divide: function (another) {
    this.x /= another.x
    this.y /= another.y
    this.z /= another.z
    return this
  },
  scale: function (factor) {
    this.x *= factor
    this.y *= factor
    this.z *= factor
    return this
  },
  magnitude: function () {
    return sqrt(sqr(this.x + this.y))
  },
  distance: function (another) {
    return abs(sqrt(sqr(this.x - another.x) + sqr(this.y - another.y)))
  },
  angle: function (angle, magnitude) {
    if (angle && magnitude) return Vector.fromAngle(angle, magnitude)
    return atan2(this.y, this.x)
  },
  clone: function () {
    return new Vector(this.x, this.y, this.z)
  },
  equals: function (another) {
    return this.x === another.x && this.y === another.y && this.z === another.z
  },
  random: function (r) {
    this.x += random() * r * 2 - r
    this.y += random() * r * 2 - r
    return this
  },
}
Vector.fromAngle = function (angle, magnitude) {
  return new Vector(
    magnitude * cos(angle),
    magnitude * sin(angle),
    magnitude * sin(angle)
  )
}

//******************************************************
// A thing with mass, position, and velocity - like your mom
function Particle(pt, vc, ac, mass) {
  this.pos = pt || new Vector(0, 0)
  this.vc = vc || new Vector(0, 0)
  this.ac = ac || new Vector(0, 0)
  this.mass = mass || 1
  this.alive = true
}
Particle.prototype.move = function () {
  this.vc.add(this.ac)
  this.pos.add(this.vc)
}
Particle.prototype.reactToForces = function (fields) {
  var totalAccelerationX = 0
  var totalAccelerationY = 0

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i]
    var vectorX = field.pos.x - this.pos.x
    var vectorY = field.pos.y - this.pos.y
    var distance = this.pos.distance(field.pos)
    if (distance < 1) field.grow(this)
    if (distance < 100) this.doubleSize = true
    var force = G(this.forceBetween(field, distance))
    totalAccelerationX += vectorX * force
    totalAccelerationY += vectorY * force
  }
  this.ac = new Vector(totalAccelerationX, totalAccelerationY)

  totalAccelerationX = 0
  totalAccelerationY = 0
  for (var i = 0; i < particles.length; i++) {
    var field = particles[i]
    if (field === this || !field.alive) continue
    var vectorX = field.pos.x - this.pos.x
    var vectorY = field.pos.y - this.pos.y
    var distance = this.pos.distance(field.pos)
    if (distance < 1) {
      if (this.mass >= field.mass) {
        var massRatio = this.mass / field.mass
        if (particles.length <= maxParticles && this.mass > 40) {
          this.alive = false
          this.nova = true
          collidedMass += this.mass
        } else this.grow(field)
      } else this.alive = false
    }
    if (this.alive) {
      var force = G(this.forceBetween(field, distance))
      totalAccelerationX += vectorX * G(force)
      totalAccelerationY += vectorY * G(force)
    }
  }

  var travelDist = this.pos.distance(this.lastPos ? this.lastPos : this.pos)
  this.velocity =
    travelDist - (this.lastDistance ? this.lastDistance : travelDist)
  this.lastDistance = travelDist
  this.lastPos = this.pos.clone()

  this.ac.add(new Vector(totalAccelerationX, totalAccelerationY))
  this.lastPos = this.pos.clone()
  // if(this.mass > 20) {
  //   var chance = 1 / (this.mass - 20);
  //   if(Math.random()>chance) {
  //     this.supernova = true;
  //     this.supernovaDur = 10;
  //     this.alive = false;
  //     if(particles.length <= maxParticles) collidedMass += this.mass;
  //     delete this.size;
  //   }
  // }
}
Particle.prototype.grow = function (another) {
  this.mass += another.mass
  this.nova = true
  another.alive = false
  delete this.size
}
Particle.prototype.breakApart = function (minMass, maxParts) {
  if (!minMass) minMass = 1
  if (!maxParts) maxParts = 2
  var remainingMass = this.mass
  var num = 0
  while (remainingMass > 0) {
    var np = new Particle(this.pos.clone().random(this.mass), new Vector(0, 0))
    np.mass = 1 + Math.random() * (remainingMass - 1)
    if (num >= maxParts - 1) np.mass = remainingMass
    np.mass = np.mass < minMass ? minMass : np.mass
    remainingMass -= np.mass
    num++
  }
  this.nova = true
  delete this.size
  this.alive = false
}
Particle.prototype.forceBetween = function (another, distance) {
  var distance = distance ? distance : this.pos.distance(another.pos)
  return (this.mass * another.mass) / sqr(distance)
}

//******************************************************
//This certainly doesn't *sub*mit to particles, that's for sure
function ParticleEmitter(pos, vc, ang) {
  // to do config options for emitter - random, static, show emitter, emitter color, etc
  this.pos = pos
  this.vc = vc
  this.ang = ang || 0.09
  this.color = '#999'
}
ParticleEmitter.prototype.emit = function () {
  var angle = this.vc.angle() + this.ang - Math.random() * this.ang * 2
  var magnitude = this.vc.magnitude()
  var position = this.pos.clone()
  position.add(
    new Vector(
      ~~(Math.random() * 100 - 50) * drawScale,
      ~~(Math.random() * 100 - 50) * drawScale
    )
  )
  var velocity = Vector.fromAngle(angle, magnitude)
  return new Particle(position, velocity)
}

//******************************************************
// Use it, Luke
// to do collapse functionality into particle
function Force(pos, m) {
  this.pos = pos
  this.mass = m || 100
}
Force.prototype.grow = function (another) {
  this.mass += another.mass
  this.burp = true
  another.alive = false
}

function G(data) {
  return 0.00674 * data
}

//******************************************************
var canvas = document.querySelector('#scene')
var ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var canvasWidth = canvas.width
var canvasHeight = canvas.height

var renderToCanvas = function (width, height, renderFunction) {
  var buffer = document.createElement('canvas')
  buffer.width = width
  buffer.height = height
  renderFunction(buffer.getContext('2d'))
  return buffer
}

maxParticles = 500
emissionRate = 1
drawScale = 1.3
minParticleSize = 2
emitters = [
  //br
  new ParticleEmitter(
    new Vector(
      (canvasWidth / 2) * drawScale + 400,
      (canvasHeight / 2) * drawScale
    ),
    Vector.fromAngle(2, 5),
    1
  ),
  //   // bl
  //   new ParticleEmitter(
  //   new Vector(
  //     canvasWidth / 2 * drawScale - 400,
  //     canvasHeight / 2 * drawScale + 400
  //     ),
  //   Vector.fromAngle(1.5, 1),
  //   1
  // ),
  // tl
  new ParticleEmitter(
    new Vector(
      (canvasWidth / 2) * drawScale - 400,
      (canvasHeight / 2) * drawScale
    ),
    Vector.fromAngle(5, 5),
    1
  ),
  //   // tr
  //   new ParticleEmitter(
  //   new Vector(
  //     canvasWidth / 2 * drawScale + 400,
  //     canvasHeight / 2 * drawScale - 400
  //     ),
  //   Vector.fromAngle(4.5, 1),
  //   1
  // )
]
forces = [
  new Force(
    new Vector((canvasWidth / 2) * drawScale, (canvasHeight / 2) * drawScale),
    1800
  ),
]

function loop() {
  clear()
  update()
  draw()
  queue()
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

var ctr = 0
var c = [
  'rgba(255,255,255,',
  'rgba(0,150,255,',
  'rgba(255,255,128,',
  'rgba(255,255,255,',
]
function rndc() {
  return c[~~(Math.random() * c.length - 1)]
}
var c2 = 'rgba(255,64,32,'
function addNewParticles() {
  var _emit = function () {
    var ret = 0
    for (var i = 0; i < emitters.length; i++) {
      for (var j = 0; j < emissionRate; j++) {
        var p = emitters[i].emit()
        p.color =
          ctr % 10 === 0 ? (Math.random() * 5 <= 1 ? c2 : rndc()) : rndc()
        p.mass = ~~(Math.random() * 5)
        particles.push(p)
        ret += p.mass
        ctr++
      }
    }
    return ret
  }
  if (collidedMass !== 0) {
    while (collidedMass !== 0) {
      collidedMass -= _emit()
      collidedMass = collidedMass < 0 ? 0 : collidedMass
    }
  }
  if (particles.length > maxParticles) return
  _emit()
}

var CLIPOFFSCREEN = 1,
  BUFFEROFFSCREEN = 2,
  LOOPSCREEN = 3

function isPositionAliveAndAdjust(particle, check) {
  return true
  var pos = particle.pos
  if (!check) check = BUFFEROFFSCREEN
  if (check === CLIPOFFSCREEN) {
    return !(
      !particle.alive ||
      pos.x < 0 ||
      pos.x / drawScale > boundsX ||
      pos.y < 0 ||
      pos.y / drawScale > boundsY
    )
  } else if (check === BUFFEROFFSCREEN) {
    return !(
      !particle.alive ||
      pos.x < -boundsX * drawScale ||
      pos.x > 2 * boundsX * drawScale ||
      pos.y < -boundsY * drawScale ||
      pos.y > 2 * boundsY * drawScale
    )
  } else if (check === LOOPSCREEN) {
    if (pos.x < 0) pos.x = boundsX * drawScale
    if (pos.x / drawScale > boundsX) pos.x = 0
    if (pos.y < 0) pos.y = boundsY * drawScale
    if (pos.y / drawScale > boundsY) pos.y = 0
    return true
  }
}

function plotParticles(boundsX, boundsY) {
  var currentParticles = []
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i]
    particle.reactToForces(forces)
    if (!isPositionAliveAndAdjust(particle)) continue
    particle.move()
    currentParticles.push(particle)
  }
}

var offscreenCache = {}
function renderParticle(p) {
  var position = p.pos
  if (!p.size) p.size = Math.floor(p.mass / 100)

  if (!p.opacity) p.opacity = 0.05
  if (p.velocity > 0) {
    if (p.opacity <= 0.18) p.opacity += 0.04
  }
  if (p.opacity > 0.08) p.opacity -= 0.02

  var actualSize = p.size / drawScale
  actualSize = actualSize < minParticleSize ? minParticleSize : actualSize
  if (p.mass > 8) actualSize *= 2
  if (p.nova) {
    actualSize *= 4
    p.nova = false
  }
  if (p.doubleSize) {
    p.doubleSize = false
    actualSize *= 2
  }
  // if(p.supernova) {
  //   actualSize *= 6;
  //   opacity = 0.15;
  //   p.supernovaDur = p.supernovaDur - 1;
  //   if(p.supernovaDur === 0)
  //     p.supernova = false;
  // }
  var cacheKey = actualSize + '_' + p.opacity + '_' + p.color
  var cacheValue = offscreenCache[cacheKey]
  if (!cacheValue) {
    cacheValue = renderToCanvas(
      actualSize * 32,
      actualSize * 32,
      function (ofsContext) {
        var opacity = p.opacity
        var fills = [
          { size: actualSize / 2, opacity: 1 },
          { size: actualSize, opacity: opacity },
          { size: actualSize * 2, opacity: opacity / 2 },
          { size: actualSize * 4, opacity: opacity / 3 },
          { size: actualSize * 8, opacity: opacity / 5 },
          { size: actualSize * 16, opacity: opacity / 16 },
        ]
        ofsContext.beginPath()
        for (var f in fills) {
          f = fills[f]
          ofsContext.fillStyle = p.color + f.opacity + ')'
          ofsContext.arc(
            actualSize * 16,
            actualSize * 16,
            f.size,
            0,
            Math.PI * 2,
            true
          )
          ofsContext.fill()
        }
        ofsContext.closePath()
      }
    )
    offscreenCache[cacheKey] = cacheValue
  }
  var posX = p.pos.x / drawScale
  var posY = p.pos.y / drawScale
  ctx.drawImage(cacheValue, posX, posY)
}

var fills = [
  { size: 15, opacity: 1 },
  { size: 25, opacity: 0.3 },
  { size: 50, opacity: 0.1 },
]

function renderScene(ofsContext) {
  for (var i = 0; i < forces.length; i++) {
    var p = forces[i]
    var position = p.pos
    var opacity = 1

    ofsContext.beginPath()
    for (var f in fills) {
      f = fills[f]
      var o = p.burp === true ? 1 : f.opacity
      p.burp = false
      // ofsContext.fillStyle = 'rgba(255,255,255,' + o + ')';
      // ofsContext.arc(position.x / drawScale,
      //   position.y / drawScale,
      //   f.size / drawScale, 0, Math.PI*2, true);
      // ofsContext.fill();
    }
    ofsContext.closePath()
  }

  for (var i = 0; i < particles.length; i++) {
    var p = particles[i]
    renderParticle(p)
  }
}

function draw() {
  renderScene(ctx)
}

function update() {
  addNewParticles()
  plotParticles(canvas.width, canvas.height)
}

function queue() {
  window.requestAnimationFrame(loop)
}

jQuery('canvas').mousedown(function (e) {})

jQuery('canvas').mouseup(function (e) {})

loop()
