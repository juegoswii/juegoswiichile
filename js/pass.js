document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el env���o del formulario por defecto
  validateLogin();
});

document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evitar el comportamiento predeterminado del Enter
    document.getElementById("loginForm").submit(); // Enviar el formulario
  }
});

document.getElementById("loginButton").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del bot���n de env���o
  validateLogin();
});

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "juegoswii" && password === "wii") {
      alert("Ingreso correcto");
      formulario=document.getElementById('loginForm');
          formulario.setAttribute("ACTION","wii.html");
          document.loginForm.submit();
        
  } else {
    alert("Habla con la persona que te proporciono el acceso");
    formulario=document.getElementById('loginForm');
      formulario.setAttribute("ACTION","construccion.html");
          document.loginForm.submit();
  }
}