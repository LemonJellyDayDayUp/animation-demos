const search = document.querySelector('.search')
const input = document.querySelector('.input')
const button = document.querySelector('.button')

// let isActive = false

button.addEventListener('click', () => {

  search.classList.toggle('active')
  input.focus()

  // if (isActive) search.classList.remove('active')
  // else search.classList.add('active')
  // isActive = !isActive

})



// classList.toggle

// 在元素中切换类名。

// 第一个参数为要在元素中移除的类名，并返回 false。
// 如果该类名不存在则会在元素中添加类名，并返回 true。

// 第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。例如：

// 移除一个 class: element.classList.toggle("classToRemove", false);
// 添加一个 class: element.classList.toggle("classToAdd", true);