let banner = document.querySelector('.banner')
let wrap = document.querySelector('.wrap')
let circle = document.querySelectorAll('.circle span')

// offsetWidth 包括边框
let imgWidth = banner.offsetWidth

// 初始化 无缝滚动
wrap.innerHTML += wrap.innerHTML
let len = wrap.children.length
wrap.style.width = len * 100 + 'vw'
// 默认的移动值要放在行间样式上
wrap.style.transform = 'translateX(0px)'

// 手指按下的坐标(相对于屏幕)
let startPointX = 0
// 手指按下时(wrap)已经走的距离
let startLeft = 0
// 手指移动的距离
let movePointX = 0
// cn 索引值  ln 上一个的索引值
let cn = 0, ln = 0
// 定时器
let timer = null


banner.addEventListener('touchstart', function (event) {

  clearInterval(timer)

  if (cn === 0) cn = len / 2
  else if (cn === len - 1) cn = len / 2 - 1
  wrap.style.transition = null
  wrap.style.transform = `translateX(${-cn * imgWidth}px)`

  // event.changedTouches 触发当前事件的手指列表
  startPointX = event.changedTouches[0].pageX
  // 'translate(-2250px)'
  // ['translate(', '-2250px)']
  startLeft = parseFloat(wrap.style.transform.split('(')[1])
})

banner.addEventListener('touchmove', function (event) {
  movePointX = event.changedTouches[0].pageX - startPointX
  wrap.style.transform = `translateX(${startLeft + movePointX}px)`
})

banner.addEventListener('touchend', function (event) {
  // 往左正值 往右负值
  movePointX = event.changedTouches[0].pageX - startPointX
  // 回弹的范围
  const backWidth = imgWidth / 8
  if (Math.abs(movePointX) > backWidth) cn -= movePointX / Math.abs(movePointX)
  wrap.style.transition = '300ms'
  wrap.style.transform = `translateX(${-cn * imgWidth}px)`

  let hn = cn % (len / 2)
  circle[ln].className = ''
  circle[hn].className = 'active'
  ln = hn

  timer = setInterval(move, 2000)
})

function move() {
  cn++;
  wrap.style.transition = '300ms'
  wrap.style.transform = `translateX(${-cn * imgWidth}px)`

  wrap.addEventListener('transitionend', function () {
    if (cn >= len - 1) cn = len / 2 - 1
    wrap.style.transition = null
    wrap.style.transform = `translateX(${-cn * imgWidth}px)`
  })

  let hn = cn % (len / 2)
  circle[ln].className = ''
  circle[hn].className = 'active'
  ln = hn
}

timer = setInterval(move, 2000)

