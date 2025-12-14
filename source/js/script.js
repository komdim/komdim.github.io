$(document).ready(function () {
    window.onload = displayTime; // электронные часы
})


// $(document).ready(
//     function () {
//         $('.dropdown-item').on('click', on_click_dropdown_item);
//     }
// );

// function on_click_dropdown_item(e) {
//     // alert('Выбран элемент:' + $(this).text());

//     // используется для отмены действия по умолчанию,
//     // которое обычно выполняется в ответ на определенное событие
//     e.preventDefault();

//     let option = $(this).attr('data-value');
//     $('.div-main')[0].style.display = 'none';
//     $('.div-links')[0].style.display = 'none';
//     $('.div-1')[0].style.display = 'none';
//     $('.div-2')[0].style.display = 'none';
//     $('.div-3')[0].style.display = 'none';
//     $('.' + option)[0].style.display = 'block';
// }

function onclickMenu(e) {
    e.preventDefault();
    $('.div-main')[0].style.display = 'none';
    $('.div-gallery')[0].style.display = 'none';
    $('.div-1')[0].style.display = 'none';
    $('.div-2')[0].style.display = 'none';
    $('.div-3')[0].style.display = 'none';
    $('.div-4')[0].style.display = 'none';
    let menu = '.' + e['target']['dataset'].value;
    $(menu)[0].style.display = 'block';
    // в маленьком экране скрыть выпадающее меню
    let show = $('#navbarSupportedContent');
    show[0].classList.remove('show');
}

function displayTime() {
    let element = document.getElementById("clock");
    let now = new Date();
    element.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}
