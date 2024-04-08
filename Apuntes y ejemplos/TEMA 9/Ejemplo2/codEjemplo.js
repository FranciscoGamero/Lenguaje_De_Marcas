let elDiv = document.querySelector('div');
elDiv.addEventListener('mouseOver',ratonSobre);

function ratonSobre(elEvento){
    //let elH1 = this.querySelector('h1');

    let elH1 = this.firstElementChild;

    //let elH1 = this.children[0];

    //let elH1 = elEvento.currentTarget.firstElementChild;

    elH1.hidden = false;
}