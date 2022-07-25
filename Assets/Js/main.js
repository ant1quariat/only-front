function changeVisibility(button_id, elem_id, class_name = "visibility") {
    let elem = document.querySelector(elem_id);
    let btn = document.querySelector(button_id);

    btn.addEventListener('click', function (){
        elem.classList.toggle(class_name);
        btn.classList.toggle('active');
    });
}