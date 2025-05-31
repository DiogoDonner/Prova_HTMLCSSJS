let livros = [];

function buscarLivro() {
    const botaoBuscar = document.getElementById("botao_buscar");
    const inputISBN = document.getElementById("input_isbn");
    const valorISBN = inputISBN.value;
    console.log("foi buscado "+ valorISBN);

    fetch("https://brasilapi.com.br/api/isbn/v1/" + valorISBN)
        .then((resposta) => {
            // Converte a resposta da API em JSON
            return resposta.json();
        })
        .then((json) => {
            // Mostra no console o JSON recebido da API
            console.log(json);

            // Preenche os campos do formulário com os dados recebidos
           const titulo = document.getElementById("info_tittle").innerText ="Titulo: "+ json.title;
           const subtitulo = document.getElementById("info_subtittle").inertText ="Subtitulo: "+ json.subtitle;
           const isbn = document.getElementById("info_isbn").inertText = json.isbn;
           const autor = document.getElementById("info_author").innerText ="Autores: "+ json.authors
           const editora = document.getElementById("info_editora").innerText = "Editora: "+json.publisher;
           const sinopse = document.getElementById("info_sinopse").innerText ="Sinopse: "+ json.synopsis;
           const ano = document.getElementById("info_year").innerText ="Ano de publicação: " + json.year;
           const pag = document.getElementById("info_quant").innerText ="Páginas: "+ json.page_count;
           const categorias = document.getElementById("info_category").innerText ="Categorias: "+ json.subjects;
           const imagem = document.getElementById("info_img").innerText = json.cover_url;
        });
}

function salvarLivro(){
    console.log("salvou");
    const livro = {
    
        Titulo: document.getElementById("info_tittle").innerText,
        Subtitulo: document.getElementById("info_subtittle").innerText,
        ISBN: document.getElementById("info_isbn").innerText,
        Autor: document.getElementById("info_author").innerText,
        Editora: document.getElementById("info_editora".innerText),
        Sinopse: document.getElementById("info_sinopse").innerText,
        Ano: document.getElementById("info_year").innerText,
        Paginas: document.getElementById("info_quant").innerText,
        Categorias: document.getElementById("info_category").innerText,
        Imagem: document.getElementById("info_img").innerText,
    }
    console.log(livro);
    
 const tabela = document.getElementById("tabela_livros");
 const linha = document.createElement("tr");

 const colunaTitle = document.createElement("td");
 colunaTitle.innerText = document.getElementById("info_tittle").innerText;
}

function carregarEventos() {
    const botaoBuscar = document.getElementById(botao_buscar);
    botao_buscar.addEventListener("click", buscarLivro);
    

    const botaoSalvar = document.getElementById(botao_salvar);
    botao_salvar.addEventListener("click", salvarLivro);
}

window.addEventListener("load", carregarEventos)