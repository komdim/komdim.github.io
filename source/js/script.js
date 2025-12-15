// выполняется при обновлении страницы
$(document).ready(function () {
    displayTime();
    addGallery();
    divNone();
    {$('section > .div-main')[0].style.display = 'block'};
})

// скрыть все div-ы в контенте
function divNone() {
    let div = $('section > div');
    for (let i = 0; i < div.length; i++) {
        div[i].style.display = 'none';
    }
};

// обработка меню навигации
function onclickMenu(e) {
    e.preventDefault();
    divNone();

    let menu = '.' + e['target']['dataset'].value;
    $(menu)[0].style.display = 'block';

    // в маленьком экране скрыть выпадающее меню
    let show = $('#navbarSupportedContent');
    show[0].classList.remove('show');
}

// электронные часы
function displayTime() {
    let element = document.getElementById("clock");
    let now = new Date();
    element.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}

// добавить картинки в галерею
function addGallery() {
    let items = [772, 688, 650, 563, 519, 191, 314, 182];
    for (const item of items) {
        // создать клон <div id="gallery-add">
        let div = $('#gallery-add').clone();
        div.removeAttr('id');
        div.children('div').children('a').attr('href', 'https://picsum.photos/id/' + item.toString() + '/1500');
        div.children('div').children('a').children('img').attr('alt', 'Foto ' + item.toString());
        div.children('div').children('a').children('img').attr('src', 'https://picsum.photos/id/' + item.toString() + '/200');
        div.children('div').children('div').children('h5').text('Foto Lorem Picsum #' + item.toString());
        div.children('div').children('div').children('a').attr('href', 'https://picsum.photos/id/' + item.toString() + '/1500');
        $('.div-gallery>div').append(div);
    }
    $('#gallery-add').remove();
}
