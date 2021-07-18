function register() {
  let form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = document.getElementById('email').value;
    localStorage.setItem('email', JSON.stringify(email));
  
    let setLoading = document.getElementById('loading');
    let loadingMsg = `<h1>Enviando...</h1>`;
    let sendedMsg = `<h1>E-mail cadastrado!</h1>`;
  
    setLoading.innerHTML = loadingMsg;
  
    setTimeout(() => {
      setLoading.innerHTML = sendedMsg
      form.reset();
    }, 3000)
  })
}