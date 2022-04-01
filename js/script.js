const list = document.querySelectorAll(selectors: '.list');

function activeLink(){
    list.forEach(callbackfn (item Element) =>
    item.classList.remove(tokens 'active'));
    this.classList.add('active');
}

list.forEach(callbackfn (item Element) =>
item.addEventListener(type 'click', activeLink));