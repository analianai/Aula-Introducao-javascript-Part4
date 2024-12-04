# Validação de Formulário com HTML, CSS e JavaScript
A validação de formulários com JavaScript é uma prática essencial no desenvolvimento web para garantir que os dados enviados por usuários estejam no formato correto antes de serem processados no servidor. Isso melhora a experiência do usuário, reduz erros e protege o sistema contra entradas maliciosas.

Existem dois tipos principais de validação de formulários:

1. Validação no lado do cliente (JavaScript): Realizada no navegador antes de enviar os dados ao servidor.
2. Validação no lado do servidor: Realizada no backend após o envio dos dados.

A seguir, segue como implementar a validação de formulários no lado do cliente implementado com HTML, CSS e JavaScript. Ele assegura que os dados inseridos pelos usuários estejam corretos antes do envio, garantindo uma melhor experiência e reduzindo erros.

## Funcionalidades
* Validação de Nome Completo: O campo é obrigatório e não pode estar vazio.
* Validação de Email: Verifica se o email está em um formato válido.
* Validação de Senha: A senha deve conter pelo menos 6 caracteres.
* Validação de Confirmação de Senha: Garante que a confirmação seja igual à senha.

## Estrutura do Código
1. HTML
O formulário é estruturado com campos de entrada para Nome, Email, Senha e Confirmação de Senha. Também inclui mensagens de erro que são exibidas dinamicamente em caso de falha de validação.

````html
<form id="formCadastro" novalidate> 
      <!--O atributo novalidate desativa a validação padrão do navegador.-->
  <h2>Cadastro</h2>
  <div class="form-group">
    <label for="nome">Nome Completo</label>
    <input type="text" id="nome" placeholder="Digite seu nome completo" required>
    <span class="error-message">O nome é obrigatório.</span>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Digite seu email" required>
    <span class="error-message">Digite um email válido.</span>
  </div>
  <div class="form-group">
    <label for="senha">Senha</label>
    <input type="password" id="senha" placeholder="Digite uma senha (min. 6 caracteres)" required>
    <span class="error-message">A senha deve ter no mínimo 6 caracteres.</span>
  </div>
  <div class="form-group">
    <label for="confirmarSenha">Confirmar Senha</label>
    <input type="password" id="confirmarSenha" placeholder="Confirme sua senha" required>
    <span class="error-message">As senhas não coincidem.</span>
  </div>
  <button type="submit">Cadastrar</button>
</form>
````

2. CSS
O estilo aplicado destaca erros com bordas vermelhas e exibe mensagens de erro de maneira visualmente clara.

````css
Copiar código
.form-group input.error {
  border-color: red;
}

.form-group .error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
  display: none;
}

.form-group input.error + .error-message {
  display: block;
}
````

3. JavaScript
A validação é feita dinamicamente no evento de envio do formulário, com feedback para o usuário sobre erros específicos.

### Funções JavaScript

* setError(input, message): Adiciona um estilo de erro ao campo e exibe a mensagem de erro correspondente.
* clearError(input): Remove o estilo de erro e oculta a mensagem de erro.
* validateForm(event):
    * Impede o envio do formulário se houver erros.
    * Valida cada campo individualmente:
        * Nome: Não pode estar vazio.
        * Email: Valida com um regex (expressão regular).
        * Senha: Deve ter no mínimo 6 caracteres.
        * Confirmação de Senha: Deve ser igual à senha.
    * Exibe um alerta de sucesso e limpa o formulário se todos os campos forem válidos.


````JS
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
````

### Como Executar
Clone o repositório:

````bash
Copiar código
git clone https://github.com/seu-usuario/formulario-validacao.git
````

Abra o arquivo index.html no navegador.

Preencha os campos do formulário. Se houver algum erro, o sistema exibirá mensagens apropriadas. Caso contrário, o formulário será enviado com sucesso.