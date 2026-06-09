const botaoEnviar = document.querySelector('.formulario button');
const campos = document.querySelectorAll('.obrigatorio');
const mensagensErro = document.querySelectorAll('.mensagem-erro');

botaoEnviar.addEventListener('click', () => {

    campos.forEach((campo, index) => {

        if (campo.value.trim() === '') {

            campo.classList.add('vazio');
            campo.classList.remove('sucesso');
            mensagensErro[index].classList.add('mostrar-erro');

        } else {

            campo.classList.add('sucesso');
            campo.classList.remove('vazio');
            mensagensErro[index].classList.remove('mostrar-erro');

        }
    });
});