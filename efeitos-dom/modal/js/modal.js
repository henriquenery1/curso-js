export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaofechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');


    if (botaoAbrir && botaofechar && containerModal) {
        function abrirModal(event) {
            event.preventDefault();
            containerModal.classList.add('ativo');
        }

        function fecharModal(event) {
            event.preventDefault();
            containerModal.classList.remove('ativo');
        }

        function clickForaModal(event) {
            if (event.target === this) {
                fecharModal(event);
            }
        }
        
        botaoAbrir.addEventListener('click', abrirModal);
        botaofechar.addEventListener('click', fecharModal);
        containerModal.addEventListener('click', clickForaModal);
    }
}


