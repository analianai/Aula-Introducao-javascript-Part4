form.addEventListener('submit', function(event) {
  // Impede o envio do formulário
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const idade = document.getElementById('idade').value;

  let valid = true;

  // Verificar se o nome não está vazio
  if (nome === '') {
    alert('Por favor, preencha o campo nome.');
    valid = false;
  }

  // Verificar se o email é válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido.');
    valid = false;
  }

  // Verificar idade mínima
  if (idade < 18) {
    alert('A idade deve ser maior ou igual a 18 anos.');
    valid = false;
  }

  // Se todos os campos forem válidos, o formulário pode ser enviado
  if (valid) {
    alert('Formulário enviado com sucesso!');
    form.submit(); // Envia o formulário
  }
});
