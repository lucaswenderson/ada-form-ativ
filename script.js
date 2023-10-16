document.getElementById("meuFormulario").addEventListener("submit", function(event){
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const idade = document.getElementById("idade").value;
    const descricao = document.getElementById("descricao").value;

    const dataObj = {
        nome: nome,
        email: email,
        senha: senha,
        idade: idade,
        descricao: descricao
    };
  
    fetch('https://crudcrud.com/api/90f8c85c6fed430893330490c8808c79/dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(dataObj),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      atualizarTabela();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  });
  
  function atualizarTabela() {
    fetch('https://crudcrud.com/api/90f8c85c6fed430893330490c8808c79/dados')
    .then(response => response.json())
    .then(data => {
      var tabela = document.querySelector('#tabelaDados tbody');
      tabela.innerHTML = ""; // Limpar tabela existente
  
      data.forEach(item => {
        var linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.senha}</td>
        <td>${item.idade}</td>
        <td>${item.descricao}</td>
        `
        tabela.appendChild(linha)
      });
    });
  }
  
  atualizarTabela();