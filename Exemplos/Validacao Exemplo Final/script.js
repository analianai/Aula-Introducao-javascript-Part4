const form = document.getElementById('formCadastro');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    function setError(input, message) {
      const parent = input.parentElement;
      input.classList.add('error');
      const errorMessage = parent.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.innerText = message;
        errorMessage.style.display = 'block';
      }
    }

    function clearError(input) {
      const parent = input.parentElement;
      input.classList.remove('error');
      const errorMessage = parent.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
    }

    function validateForm(event) {
      event.preventDefault(); // Impede o envio do formulário

      let isValid = true;

      // Validação do nome
      if (nomeInput.value.trim() === '') {
        setError(nomeInput, 'O nome é obrigatório.');
        isValid = false;
      } else {
        clearError(nomeInput);
      }

      // Validação do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'Digite um email válido.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validação da senha
      if (senhaInput.value.length < 6) {
        setError(senhaInput, 'A senha deve ter no mínimo 6 caracteres.');
        isValid = false;
      } else {
        clearError(senhaInput);
      }

      // Validação da confirmação de senha
      if (confirmarSenhaInput.value !== senhaInput.value) {
        setError(confirmarSenhaInput, 'As senhas não coincidem.');
        isValid = false;
      } else {
        clearError(confirmarSenhaInput);
      }

      // Se o formulário for válido, pode enviar
      if (isValid) {
        alert('Cadastro realizado com sucesso!');
        form.reset(); // Limpa o formulário
      }
    }

    // Adiciona o evento ao formulário
    form.addEventListener('submit', validateForm);
