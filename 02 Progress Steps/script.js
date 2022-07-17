const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let cur = 1

prev.addEventListener('click', () => {
  cur = cur - 1
  if (cur < 1) cur = 1
  update()
})

next.addEventListener('click', () => {
  cur = cur + 1
  if (cur > circles.length) cur = circles.length
  update()
})

function update() {

  if (cur === 1) prev.disabled = true
  else if (cur === circles.length) next.disabled = true
  else {
    prev.disabled = false
    next.disabled = false
  }

  circles.forEach((c, i) => {
    if (i < cur) c.classList.add('active')
    else c.classList.remove('active')
  })


  // const actives = document.querySelectorAll('.active')
  progress.style.width = (cur - 1) / (circles.length - 1) * 100 + '%'


}