const senha = document.getElementById("password")
const olho = document.getElementById("togglePassword")

olho.addEventListener("click", function(){

    if(senha.type === "password"){

        senha.type = "text"

        olho.classList.remove("fa-eye")
        olho.classList.add("fa-eye-slash")

    } else {

        senha.type = "password"

        olho.classList.remove("fa-eye-slash")
        olho.classList.add("fa-eye")

    }

})