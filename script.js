function toggleMode() {
  /* document é a informação do nosso documento em formato de obj JS  ducmentElement = tag HTML*/
  const html = document.documentElement
  html.classList.toggle('light')
  /* body = constante classlist classlist é um obejto que possui algumas propriedades dentro contains = contem */
  /* o if funciona porem existe uma maneira mais pratica e rapida */
  /*   if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  // pegar a tag da img
  const img = document.querySelector('#profile img')
  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  
}
