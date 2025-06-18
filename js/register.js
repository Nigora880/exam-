let elForm = document.querySelector(".register-form")

elForm.addEventListener("submit", function(e){
    e.preventDefault()
     let data = {
        username:e.target.username.value,
        password:e.target.password.value,
    }
    passwords.push(data)
    localStorage.setItem("passwords", JSON.stringify(passwords))
    elForm.lastElementChild.innerHTML = `
        <img class="w-[30px] h-[30px]  mx-auto" src="./img/loading-white.png" alt="loading" width="30" height="30" />
    `
    setTimeout(() => {
        elForm.lastElementChild.innerHTML = `Sign up`
        setTimeout(() => {
            location.pathname = "/index.html"
        },600)
    },1000)
})