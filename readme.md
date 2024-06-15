# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [borgonove.tech](https://www.borgonove.tech/index.html).

## Funcionalidades Testadas

1. **Navegação entre páginas:**
   - Verifica a navegação através dos menus do site.
   - Assert: Garante que as páginas são carregadas corretamente.

2. **Cálculo de IMC:**
   - Simula o preenchimento de campos e o cálculo do Índice de Massa Corporal.
   - Assert: Verifica se o resultado do cálculo está correto.

3. **Busca por CEP:**
   - Insere um CEP e verifica se a busca retorna informações corretas.
   - Assert: Confirma se os dados retornados são os esperados.

4. **Preenchimento de Formulário de Contato:**
   - Preenche um formulário de contato com informações simuladas.
   - Assert: Verifica se o envio do formulário é bem-sucedido.

5. **Acesso a Página Não Existente:**
   - Tenta acessar uma página não existente e retorna à página inicial.
   - Assert: Confirma que o botão de retorno funciona corretamente.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/seu-usuario/web-testing-with-selenium.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
