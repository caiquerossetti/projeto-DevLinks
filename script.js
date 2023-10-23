function toggleMode(){
  const html = document.documentElement

  // if (html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  //Para esse caso, o toggle serve muito bem. Se tiver ligado, ele desliga. Se tiver desligado, ele liga. (igual a um interruptor)
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains('light')){
    //se tiver light mode, add a img light
    img.setAttribute('src', 'assets/avatar-light.png')
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo de óculos escuro, jaqueta preta e fundo degrade roxo e azul"
    )
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute('src', 'assets/avatar.png')
  }

}