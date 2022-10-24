window.onload = () => {
    let busca = document.getElementById('busca');
    busca.onfocus = () => console.log('o campo recebeu o foco');
    busca.onblur = () => {
        if(busca.value.length == 0) {
            instrucoes.innerHTML = '*Digite algo';
            instrucoes.style.color = '#F00';
            busca.style.border = 'thin red solid';
    } else instrucoes.innerHTML = '';
};
};
function login() {
    alert('Faça login!')
}