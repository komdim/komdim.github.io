// выполняется при обновлении страницы
$(document).ready(function () {
    // window.onload = displayTime; // электронные часы
    // window.onload = addGallery; // заполнить галерею

    // электронные часы
    displayTime();
    // добавить картинки в галерею
    addGallery();
    divNone();
    { $('section > .div-main')[0].style.display = 'block' };
    // добавить картинки в карусель
    addCarousel();
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
    // console.log(menu);
    // console.log($(menu)[0]);
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
// function addGallery() {
const addGallery = () => {  // создание функции через const, это имя уже нельзя переприсвоить, а выше - можно
    const items = [772, 688, 650, 563, 519, 191, 314, 182];
    // let items = [772,];
    for (const item of items) {
        // создать клон <div id="gallery-add">
        let div = $('#gallery-add').clone();
        div.removeAttr('id');
        div.children('div').children('a').attr('href', 'https://picsum.photos/id/' + item.toString() + '/1500');
        div.children('div').children('a').children('img').attr('alt', 'Foto ' + item.toString());
        div.children('div').children('a').children('img').attr('src', 'https://picsum.photos/id/' + item.toString() + '/200');
        div.children('div').children('div').children('h5').text('Foto Lorem Picsum #' + item.toString());
        div.children('div').children('div').children('a').attr('href', 'https://picsum.photos/id/' + item.toString() + '/1500');
        // console.log(div);
        // console.log(div.children('div').children('img'));
        $('.div-gallery>div').append(div);
    }
    $('#gallery-add').remove();
}

// добавить картинки в карусель
const addCarousel = () => {
    const button = $('#fotoCarousel .carousel-indicators button').clone();
    button.removeAttr('class');
    button.removeAttr('aria-current')
    const img = $('#fotoCarousel .carousel-item').clone();
    img.attr('class','carousel-item');
    console.log(button);
    console.log(img)
    for (let i = 1; i < 10; i++) {
        // добавить button
        element = button.clone();
        element.attr('data-bs-slide-to', i.toString());
        element.attr('aria-label', 'Slade ' + (i + 1).toString());
        $('#fotoCarousel .carousel-indicators').append(element);
        // добавить div с img
        element = img.clone();
        element.children('img').attr('src','https://picsum.photos/1280/1024?random=1'+(i+1).toString());
        $('#fotoCarousel .carousel-inner').append(element);
    }
}

// const prefix = "source/image/Изображение ";
// const i_start = 180;
// const i_end = 195;

// const prefix = "source/image/img_";
// const i_start = 1538;
// const i_end = 1552;

// let i_tag = 1; // счетчик тегов
// for (let i = i_start; i <= i_end; i++) {
//     // создать клон кнопки
//     let tag = $('#foto .btn-add').clone();
//     tag.attr('data-bs-slide-to', i_tag.toString());
//     i_tag++;
//     tag.attr('aria-label', 'Фото ' + i_tag.toString());
//     tag.removeAttr('class');
//     tag.removeAttr('aria-current');
//     $('#foto .carousel-indicators').append(tag);
//     // создать клон div с img
//     tag = $('#foto .img-add').clone();
//     tag.attr('class', 'carousel-item');
//     tag.children('img').attr('src', prefix + i.toString() + '.jpg');
//     tag.children('div').children('h5').text('Фотография ' + i.toString());
//     $('#foto .carousel-inner').append(tag);
