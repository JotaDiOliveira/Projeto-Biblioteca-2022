function validaDados(){

    validacaoLivro = document.querySelector('.msg-Titulo');
    validacaoLivro.style.display = 'none';

    validacaoAutor = document.querySelector('.msg-Autor');
    validacaoAutor.style.display = 'none';

    validacaoAno = document.querySelector('.msg-Ano');
    validacaoAno.style.display = 'none';

    if (document.getElementById("txtLivro").value == "") {
        validacaoLivro.innerHTML = "Informe o título do livro";
        validacaoLivro.style.display = 'block';
        document.getElementById("txtLivro").focus();
        return false;
    }

    if (document.getElementById("txtAutor").value == "") {
        validacaoLivro.innerHTML = "Informe o nome do autor";
        validacaoLivro.style.display = 'block';
        document.getElementById("txtAutor").focus();
        return false;
    }

    if (document.getElementById("txtAno").value == "") {
        validacaoLivro.innerHTML = "Informe o ano do livro";
        validacaoLivro.style.display = 'block';
        document.getElementById("txtAno").focus();
        return false;
    }
}