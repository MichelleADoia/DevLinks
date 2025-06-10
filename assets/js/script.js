function toggleMode() {
    const html = document.documentElement
    // if (html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //    html.classList.add('light')
    //}
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")){
        img.setAttribute("src","/assets/img/avatar-light.png")
        img.setAttribute ("alt","Foto de Maik Brito,sorrindo, usando óculos, jaqueta preta e fundo degrade rosa, roxo e azul")
    }
    else {
        img.setAttribute("src","/assets/img/avatar.png")
        img.setAttribute("alt","Maik usando oculos escuro")

    }

}