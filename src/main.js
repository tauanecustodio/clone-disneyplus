document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    buttons.forEach(el => {
        el.addEventListener('click', () => {
            const abaAlvo = el.getAttribute('data-tab-button');
            const aba = document.querySelector(`[data-tab-id='${abaAlvo}']`);

            escondeTodasAbas();
            removeButtonAtivo();
            
            aba.classList.add('shows__list--is-active');
            el.classList.add('shows__tabs__button--is-active')
        })
    })
})

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(el => {
        el.classList.remove('shows__list--is-active');
    })
}

function removeButtonAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(el => {
        el.classList.remove('shows__tabs__button--is-active')
    })
}