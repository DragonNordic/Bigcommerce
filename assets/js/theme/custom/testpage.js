import PageManager from '../page-manager';

export default class TestPage extends PageManager {
    onReady() {
        this.logNumber();
    }

    logNumber () {
        const popUp = document.getElementById('pop-up');
        const button = document.getElementById('button');

        button.addEventListener('click', () => {
            popUp.style.display = 'block';
        });

        const gotit = document.getElementById('gotit');

        gotit.addEventListener('click', () => {
            popUp.style.display = 'none';
        });
    }
}