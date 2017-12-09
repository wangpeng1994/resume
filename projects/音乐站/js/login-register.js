;(function(){

function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}

var errormsgL = $('.modal-login .errormsg')
var errormsgR = $('.modal-register .errormsg')

//点击右上角图标，弹出登陆/注册框
$('header .login').addEventListener('click', function(e){
  e.stopPropagation() //这里的停止冒泡，为了后面document的事件绑定，否则永远点不开，一点开，冒泡到document，又关闭了
  $('.flip-modal').style.display = 'block'
})

//事件代理，监听整个模态框父级
$('.flip-modal').addEventListener('click', function(e){
  e.stopPropagation()
  console.log(e.target)
  if(e.target.classList.contains('login')){ //如果tabs那里点到了login标签
    this.classList.remove('register') //移除外层模态框的 register class
    this.classList.add('login') //并添加 login class
  }
  if(e.target.classList.contains('register')){
    this.classList.remove('login')
    this.classList.add('register')
  }
  console.log(e.target)
  console.log(this)
  //window.target = e.target //针对老ie
  if(e.target.classList.contains('close')){
    this.style.display = 'none'
  }
})

document.addEventListener('click', function(){
  $('.flip-modal').style.display = 'none'
})

//对login 表单的提交行为进行事件监听
$('.modal-login form').addEventListener('submit', function(e){
  e.preventDefault() //先阻止默认提交
  if(!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)){
    errormsgL.innerText = '用户名需输入3-8个字符，包括字母数字下划线'
    return false //达不到条件，直接终止submit提交
  }
  if(!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)){
    errormsgL.innerText = '密码需输入6-10个字符，包括字母数字下划线'
    return false
  }
  this.submit()
})

//对register 表单的提交行为进行事件监听
$('.modal-register form').addEventListener('submit', function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)){
    errormsgR.innerText = '用户名需输入3-8个字符，包括字母数字下划线'
    return false
  }
  if(/^wangpeng$|^admin$/.test($('.modal-register input[name=username]').value)){
    errormsgR.innerText = '用户名已存在'
    return false
  }
  if(!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)){
    errormsgR.innerText = '密码需输入6-10个字符，包括字母数字下划线'
    return false
  }
  if($('.modal-register input[name=password]').value !== $('.modal-register input[name=password2]').value){
    errormsgR.innerText = '两次输入的密码不一致'
    return false
  }
  this.submit()
})

})()