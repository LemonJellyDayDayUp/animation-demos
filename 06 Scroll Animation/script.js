const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {

    const boxTop = box.getBoundingClientRect().top

    // 当 box 到顶部的距离小于屏幕高度的 4/5 时出现
    // 反之消失
    if (boxTop < triggerBottom) box.classList.add('show')
    else box.classList.remove('show')

  })
}