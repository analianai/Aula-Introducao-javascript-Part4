form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert('Por favor, corrija os campos inválidos.');
  }
});

function setError(input, message) {
  const parent = input.parentElement;
  input.classList.add('error');
  const errorMessage = parent.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.innerText = message;
  }
}

function clearError(input) {
  input.classList.remove('error');
  const parent = input.parentElement;
  const errorMessage = parent.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.innerText = '';
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const idade = document.getElementById('idade');

  let valid = true;

  if (nome.value.trim() === '') {
    setError(nome, 'Nome é obrigatório.');
    valid = false;
  } else {
    clearError(nome);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    setError(email, 'Email inválido.');
    valid = false;
  } else {
    clearError(email);
  }

  if (idade.value < 18) {
    setError(idade, 'Idade mínima é 18 anos.');
    valid = false;
  } else {
    clearError(idade);
  }

  if (valid) {
    form.submit();
  }
});
