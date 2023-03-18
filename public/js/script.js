const botoesAba = document.querySelectorAll(".botoes button");
const conteudosAba = document.querySelectorAll(".conteudo > div");

alert("opa");
botoesAba.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Remover a classe 'ativo' de todos os botões de aba
    botoesAba.forEach((botao) => botao.classList.remove("active"));
    // Adicionar a classe 'ativo' apenas ao botão de aba clicado
    botao.classList.add("active");
    // Remover a classe 'ativo' de todos os conteúdos da aba
    conteudosAba.forEach((conteudo) => conteudo.classList.remove("active"));
    // Adicionar a classe 'ativo' apenas ao conteúdo da aba correspondente
    conteudosAba[index].classList.add("ativo");
  });
});
