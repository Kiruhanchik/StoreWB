const item3MobileSelect = () => {
    let chbox3 = document.getElementById('item3-mobile');
    let select_all = document.getElementById('select-all');
    if (chbox3.checked == true) {
        chbox3.checked = false; 
        select_all.checked = false;
    } else {
        chbox3.checked = !false; 
        select_all.checked = false;
    }
}

const item1MobileSelect = () => {
    let chbox1 = document.getElementById('item1-mobile');
    let select_all = document.getElementById('select-all');
    if (chbox1.checked == true) {
        chbox1.checked = false; 
        select_all.checked = false;
    } else {
        chbox1.checked = !false; 
        select_all.checked = false;
    }
}

const item2MobileSelect = () => {
    let chbox2 = document.getElementById('item2-mobile');
    let select_all = document.getElementById('select-all');
    if (chbox2.checked == true) {
        chbox2.checked = false;
        select_all.checked = false;
    } else {
        chbox2.checked = !false; 
        select_all.checked = false;
    }
}

const item1Select = () => {
    let chbox1 = document.getElementById('item-1');
    let select_all = document.getElementById('select-all');
    if (chbox1.checked == true) {
        chbox1.checked = false;
        select_all.checked = false;
    } else {
        chbox1.checked = !false; 
        select_all.checked = false;
    }
}

const item2Select = () => {
    let chbox2 = document.getElementById('item-2');
    let select_all = document.getElementById('select-all');
    if (chbox2.checked == true) {
        chbox2.checked = false;
        select_all.checked = false;
    } else {
        chbox2.checked = !false; 
        select_all.checked = false;
    }
}

const item3Select = () => {
    let chbox3 = document.getElementById('item-3');
    let select_all = document.getElementById('select-all');
    if (chbox3.checked == true) {
        chbox3.checked = false;
        select_all.checked = false;
    } else {
        chbox3.checked = !false; 
        select_all.checked = false;
    }
}

const selectAllItems = () => {
    let checkbx1 = document.getElementById('item-1');
    let checkbx2 = document.getElementById('item-2');
    let checkbx3 = document.getElementById('item-3');
    if (checkbx1.checked == false || checkbx2.checked == false || checkbx3.checked == false) {
        checkbx1.checked = true;
        checkbx2.checked = true;
        checkbx3.checked = true;
    } else {
        checkbx1.checked = false;
        checkbx2.checked = false;
        checkbx3.checked = false;
    }

    let checkbx1_mobile = document.getElementById('item1-mobile');
    let checkbx2_mobile = document.getElementById('item2-mobile');
    let checkbx3_mobile = document.getElementById('item3-mobile');

    if (checkbx1_mobile.checked == false || checkbx2_mobile.checked == false || checkbx3_mobile.checked == false) {
        checkbx1_mobile.checked = true;
        checkbx2_mobile.checked = true;
        checkbx3_mobile.checked = true;
    } else {
        checkbx1_mobile.checked = false;
        checkbx2_mobile.checked = false;
        checkbx3_mobile.checked = false;
    }
}

const addToFavotite = (event) => {
    if (event.target.style.stroke == 'red') {
        event.target.style.stroke = 'black';
    } else {
        event.target.style.stroke = 'red';
    }
}

const deleteItem = (id) => {
    document.getElementById(`cost-all-items`).textContent = +document.getElementById(`cost-all-items`).textContent - +document.getElementById(`item-${id}-cost`).innerHTML;
    document.getElementById(`cost-all-items2`).textContent = parseInt(document.getElementById(`cost-all-items2`).textContent) - parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) + ' сом';
    document.getElementById(`without-sale`).textContent = parseInt(document.getElementById('without-sale').textContent) - parseInt(document.getElementById(`item-${id}-cost-final`).textContent) + ' сом';
    document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById('without-sale2').textContent) - parseInt(document.getElementById(`item-${id}-cost-final-mobile`).textContent) + ' сом'
    document.getElementById(`count-all-items`).innerHTML = parseInt(document.getElementById(`count-all-items`).innerHTML) - +document.getElementById(`item-${id}-count`).innerHTML + ' товара';
    document.getElementById(`count-all-items2`).innerHTML = parseInt(document.getElementById(`count-all-items2`).innerHTML) - +document.getElementById(`item${id}-mobile-count`).innerHTML + ' товара';
    document.getElementsByClassName(`item-${id}`)[0].remove();
    document.getElementsByClassName(`empty-item-${id}`)[0].remove();
    document.getElementsByClassName(`item${id}-mobile`)[0].remove();
    document.getElementsByClassName(`item${id}-empty-mobile`)[0].remove();
    document.getElementById('empty-items-count').innerHTML = +document.getElementById('empty-items-count').innerHTML - 1;
    document.getElementById('basket-items-count').innerHTML = +document.getElementById('basket-items-count').innerHTML - 1;
    if (+document.getElementById('empty-items-count').innerHTML == 0) {
        document.getElementById('basket-items-count').remove();
        document.getElementsByClassName('select-all')[0].remove();
        document.getElementsByClassName('empty-items-header')[0].remove();
        document.getElementsByClassName('delivery')[0].remove();
        document.getElementsByClassName('delivery-mobile')[0].remove();
        document.getElementsByClassName('payment')[0].remove();
        document.getElementsByClassName('client')[0].remove();
        document.getElementsByClassName('final-info')[0].remove();
        document.getElementsByClassName('final-info-mobile')[0].remove();
        let p = document.createElement('p');
        p.innerHTML = 'В корзине пусто';
        document.getElementsByClassName('basket')[0].getElementsByTagName('h1')[0].append(p);
        document.getElementsByTagName('main')[0].style.height = '1200px';
    }
}

const plusItem = (id) => {
    document.getElementById(`item-${id}-count`).innerHTML = +document.getElementById(`item-${id}-count`).innerHTML + 1;
    document.getElementById(`item${id}-mobile-count`).innerHTML = +document.getElementById(`item${id}-mobile-count`).innerHTML + 1;
    document.getElementById(`count-all-items`).innerHTML = (parseInt(document.getElementById(`count-all-items`).innerHTML) + 1) + ' товара';
    document.getElementById(`count-all-items2`).innerHTML = (parseInt(document.getElementById(`count-all-items2`).innerHTML) + 1) + ' товара';
    if (id == 1) {
        document.getElementById(`item-${id}-cost`).innerHTML = +document.getElementById(`item-${id}-cost`).innerHTML + 522;
        document.getElementById(`item${id}-mobile-cost`).firstChild.textContent = parseInt(document.getElementById(`item${id}-mobile-cost`).firstChild.textContent) + 522;
        document.getElementById(`cost-all-items`).innerHTML = parseInt(document.getElementById(`cost-all-items`).innerHTML) + 522;
        document.getElementById(`cost-all-items2`).innerHTML = parseInt(document.getElementById(`cost-all-items2`).innerHTML) + 522 + ' сом';
        document.getElementById(`item-${id}-cost-final`).textContent = (parseInt(document.getElementById(`item-${id}-cost`).textContent) * 100) / (522 * 100 / 1051) + ' ' + 'сом';
        document.getElementById(`without-sale`).textContent = parseInt(document.getElementById(`without-sale`).textContent) + 1051 + ' сом';
        document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById(`without-sale2`).textContent) + 1051 + ' сом';
        document.getElementById(`item-${id}-cost-final-mobile`).textContent = (parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) * 100) / (522 * 100 / 1051) + ' ' + 'сом';
    }
    if (id == 2) {
        document.getElementById(`item-${id}-cost`).innerHTML = +document.getElementById(`item-${id}-cost`).innerHTML + 10500;
        document.getElementById(`cost-all-items`).innerHTML = parseInt(document.getElementById(`cost-all-items`).innerHTML) + 10500;
        document.getElementById(`cost-all-items2`).innerHTML = parseInt(document.getElementById(`cost-all-items2`).innerHTML) + 10500 + ' сом';
        document.getElementById(`item${id}-mobile-cost`).firstChild.textContent = parseInt(document.getElementById(`item${id}-mobile-cost`).firstChild.textContent) + 10500;
        document.getElementById(`item-${id}-cost-final`).textContent = (parseInt(document.getElementById(`item-${id}-cost`).textContent) * 100) / (2100047 * 100 / 2300047) + ' ' + 'сом';
        document.getElementById(`item-${id}-cost-final-mobile`).textContent = (parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) * 100) / (2100047 * 100 / 2300047) + ' ' + 'сом';
        document.getElementById(`without-sale`).textContent = parseInt(document.getElementById(`without-sale`).textContent) + 16275 + ' сом';
        document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById(`without-sale2`).textContent) + 16275 + ' сом';
    }
    if (id == 3) {
        document.getElementById(`item-${id}-cost`).innerHTML = +document.getElementById(`item-${id}-cost`).innerHTML + 247;
        document.getElementById(`cost-all-items`).innerHTML = parseInt(document.getElementById(`cost-all-items`).innerHTML) + 247;
        document.getElementById(`cost-all-items2`).innerHTML = parseInt(document.getElementById(`cost-all-items2`).innerHTML) + 10500 + ' сом';
        document.getElementById(`item${id}-mobile-cost`).firstChild.textContent = parseInt(document.getElementById(`item${id}-mobile-cost`).firstChild.textContent) + 247;
        document.getElementById(`item-${id}-cost-final`).textContent = (parseInt(document.getElementById(`item-${id}-cost`).textContent) * 100) / (247 * 100 / 475) + ' ' + 'сом';
        document.getElementById(`item-${id}-cost-final-mobile`).textContent = (parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) * 100) / (247 * 100 / 475) + ' ' + 'сом';
        document.getElementById(`without-sale`).textContent = parseInt(document.getElementById(`without-sale`).textContent) + 475 + ' сом';
        document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById(`without-sale2`).textContent) + 475 + ' сом';
    }
    document.getElementById('with-sale').textContent = '-' + (parseInt(document.getElementById('without-sale').textContent) - parseInt(document.getElementById('cost-all-items').textContent)) + ' сом';
    document.getElementById('with-sale2').innerHTML = '-' + (parseInt(document.getElementById('without-sale').innerHTML) - parseInt(document.getElementById('cost-all-items2').innerHTML)) + ' сом';
}

const minusItem = (id) => {
    document.getElementById(`item-${id}-count`).innerHTML = +document.getElementById(`item-${id}-count`).innerHTML - 1;
    document.getElementById(`item${id}-mobile-count`).innerHTML = +document.getElementById(`item${id}-mobile-count`).innerHTML - 1;
    document.getElementById(`count-all-items`).innerHTML = (parseInt(document.getElementById(`count-all-items`).innerHTML) - 1) + ' товара';
    document.getElementById(`count-all-items2`).innerHTML = (parseInt(document.getElementById(`count-all-items2`).innerHTML) - 1) + ' товара';
    if (+document.getElementById(`item-${id}-count`).textContent == 0) {
        document.getElementsByClassName(`item-${id}`)[0].remove();
        document.getElementsByClassName(`item${id}-mobile`)[0].remove();
        document.getElementsByClassName(`empty-item-${id}`)[0].remove();
        document.getElementsByClassName(`item${id}-empty-mobile`)[0].remove();
        document.getElementById('empty-items-count').innerHTML = +document.getElementById('empty-items-count').innerHTML - 1;
        document.getElementById('basket-items-count').innerHTML = +document.getElementById('basket-items-count').innerHTML - 1;
        document.getElementById('all-items-cost').innerHTML = +document.getElementById(`item-1-cost`).innerHTML + +document.getElementById(`item-2-cost`).innerHTML + +document.getElementById(`item-3-cost`).innerHTML;
    };
    if (id == 1) {
        document.getElementById(`item-${id}-cost`).innerHTML = +document.getElementById(`item-${id}-cost`).innerHTML - 522;
        document.getElementById(`cost-all-items`).innerHTML = parseInt(document.getElementById(`cost-all-items`).innerHTML) - 522;
        document.getElementById(`cost-all-items2`).innerHTML = parseInt(document.getElementById(`cost-all-items2`).innerHTML) - 522 + ' сом';
        document.getElementById(`without-sale`).textContent = parseInt(document.getElementById(`without-sale`).textContent) - 1051 + ' сом';
        document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById(`without-sale2`).textContent) - 1051 + ' сом';
        document.getElementById(`item${id}-mobile-cost`).firstChild.textContent = parseInt(document.getElementById(`item${id}-mobile-cost`).firstChild.textContent) - 522;
        document.getElementById(`item-${id}-cost-final`).textContent = (parseInt(document.getElementById(`item-${id}-cost`).textContent) * 100) / (522 * 100 / 1051) + ' ' + 'сом';
        document.getElementById(`item-${id}-cost-final-mobile`).textContent = (parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) * 100) / (522 * 100 / 1051) + ' ' + 'сом';
        document.getElementById('all-items-cost').innerHTML = +document.getElementById(`item-1-cost`).innerHTML + +document.getElementById(`item-2-cost`).innerHTML + +document.getElementById(`item-3-cost`).innerHTML;
    }
    if (id == 2) {
        document.getElementById(`item-${id}-cost`).innerText = +document.getElementById(`item-${id}-cost`).innerHTML - 10500;
        document.getElementById(`cost-all-items`).innerHTML = parseInt(document.getElementById(`cost-all-items`).innerHTML) - 10500;
        document.getElementById(`cost-all-items2`).innerHTML = parseInt(document.getElementById(`cost-all-items2`).innerHTML) - 10500 + ' сом';
        document.getElementById(`without-sale`).textContent = parseInt(document.getElementById(`without-sale`).textContent) - 16275 + ' сом';
        document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById(`without-sale2`).textContent) - 16275 + ' сом';
        document.getElementById(`item${id}-mobile-cost`).firstChild.textContent = parseInt(document.getElementById(`item${id}-mobile-cost`).firstChild.textContent) - 10500;
        document.getElementById(`item-${id}-cost-final`).textContent = (parseInt(document.getElementById(`item-${id}-cost`).textContent) * 100) / (2100047 * 100 / 2300047) + ' ' + 'сом';
        document.getElementById(`item-${id}-cost-final-mobile`).textContent = (parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) * 100) / (2100047 * 100 / 2300047) + ' ' + 'сом';
        document.getElementById('all-items-cost').innerHTML = +document.getElementById(`item-1-cost`).innerHTML + +document.getElementById(`item-2-cost`).innerHTML + +document.getElementById(`item-3-cost`).innerHTML;
    }
    if (id == 3) {
        document.getElementById(`item-${id}-cost`).innerHTML = +document.getElementById(`item-${id}-cost`).innerHTML - 247;
        document.getElementById(`cost-all-items`).innerHTML = parseInt(document.getElementById(`cost-all-items`).innerHTML) - 247;
        document.getElementById(`cost-all-items2`).innerHTML = parseInt(document.getElementById(`cost-all-items2`).innerHTML) - 247 + ' сом';
        document.getElementById(`without-sale`).textContent = parseInt(document.getElementById(`without-sale`).textContent) - 475 + ' сом';
        document.getElementById(`without-sale2`).textContent = parseInt(document.getElementById(`without-sale2`).textContent) - 475 + ' сом';
        document.getElementById(`item${id}-mobile-cost`).firstChild.textContent = parseInt(document.getElementById(`item${id}-mobile-cost`).firstChild.textContent) - 247;
        document.getElementById(`item-${id}-cost-final`).textContent = (parseInt(document.getElementById(`item-${id}-cost`).textContent) * 100) / (247 * 100 / 475) + ' ' + 'сом';
        document.getElementById(`item-${id}-cost-final-mobile`).textContent = (parseInt(document.getElementById(`item${id}-mobile-cost`).textContent) * 100) / (247 * 100 / 475) + ' ' + 'сом';
        document.getElementById('all-items-cost').innerHTML = +document.getElementById(`item-1-cost`).textContent + +document.getElementById(`item-2-cost`).textContent + +document.getElementById(`item-3-cost`).textContent;
    }
    if (+document.getElementById('empty-items-count').innerHTML == 0) {
        document.getElementById('with-sale').textContent = '-' + (parseInt(document.getElementById('without-sale').innerHTML) - parseInt(document.getElementById('cost-all-items').textContent)) + ' сом';
        document.getElementById('basket-items-count').remove();
        document.getElementsByClassName('select-all')[0].remove();
        document.getElementsByClassName('empty-items-header')[0].remove();
        document.getElementsByClassName('delivery')[0].remove();
        document.getElementsByClassName('delivery-mobile')[0].remove();
        document.getElementsByClassName('payment')[0].remove();
        document.getElementsByClassName('client')[0].remove();
        document.getElementsByClassName('final-info')[0].remove();
        document.getElementsByClassName('final-info-mobile')[0].remove();
        let p = document.createElement('p');
        p.innerHTML = 'В корзине пусто';
        document.getElementsByClassName('basket')[0].getElementsByTagName('h1')[0].append(p);
        document.getElementsByTagName('main')[0].style.height = '1200px';
        document.getElementById('all-items-cost').innerHTML = +document.getElementById(`item-1-cost`).innerHTML + +document.getElementById(`item-2-cost`).innerHTML + +document.getElementById(`item-3-cost`).innerHTML;
    }
}

const showEmptyHeader = () => {
    if (document.getElementsByClassName('empty-items')[0].style.display == 'none') {
        document.getElementsByClassName('empty-items')[0].style.display = 'flex';
        document.getElementById('arrow2').style.transform = 'rotate(360deg)';
    } else {
        document.getElementsByClassName('empty-items')[0].style.display = 'none';
        document.getElementById('arrow2').style.transform = 'rotate(180deg)';
    }
}

const showItemsHeader = () => {
    if (document.getElementsByClassName('items')[0].style.display == 'none') {
        document.getElementsByClassName('items')[0].style.display = 'block';
        document.getElementById('visible1').style.display = 'flex';
        document.getElementById('visible2').style.display = 'none';
        document.getElementById('arrow').style.transform = 'rotate(360deg)';
    } else {
        document.getElementsByClassName('items')[0].style.display = 'none';
        document.getElementById('visible1').style.display = 'none';
        document.getElementById('visible2').style.display = 'flex';
        document.getElementById('arrow').style.transform = 'rotate(180deg)';
        document.getElementById('all-items-count').innerHTML = +document.getElementById(`item-1-count`).innerHTML + +document.getElementById(`item-2-count`).innerHTML + +document.getElementById(`item-3-count`).innerHTML;
        document.getElementById('all-items-cost').innerHTML = +document.getElementById(`item-1-cost`).innerHTML + +document.getElementById(`item-2-cost`).innerHTML + +document.getElementById(`item-3-cost`).innerHTML;
    }
}

const showEmptyHeaderMobile = () => {
    if (document.getElementsByClassName('empty-items-mobile')[0].style.display == 'none') {
        document.getElementsByClassName('empty-items-mobile')[0].style.display = 'flex';
        document.getElementById('arrow2').style.transform = 'rotate(360deg)';
    } else {
        document.getElementsByClassName('empty-items-mobile')[0].style.display = 'none';
        document.getElementById('arrow2').style.transform = 'rotate(180deg)';
    }
}

const showItemsHeaderMobile = () => {
    if (document.getElementsByClassName('items-mobile')[0].style.display == 'none') {
        document.getElementsByClassName('items-mobile')[0].style.display = 'block';
        document.getElementById('visible1').style.display = 'flex';
        document.getElementById('visible2').style.display = 'none';
        document.getElementById('arrow').style.transform = 'rotate(360deg)';
    } else {
        document.getElementsByClassName('items-mobile')[0].style.display = 'none';
        document.getElementById('visible1').style.display = 'none';
        document.getElementById('visible2').style.display = 'flex';
        document.getElementById('arrow').style.transform = 'rotate(180deg)';
        document.getElementById('all-items-count').innerHTML = +document.getElementById(`item1-mobile-count`).innerHTML + +document.getElementById(`item2-mobile-count`).innerHTML + +document.getElementById(`item3-mobile-count`).innerHTML;
        document.getElementById('all-items-cost').innerHTML = parseInt(document.getElementById(`item1-mobile-cost`).firstChild.textContent) + parseInt(document.getElementById(`item2-mobile-cost`).firstChild.textContent) + parseInt(document.getElementById(`item3-mobile-cost`).firstChild.textContent);
    }
}

const show = () => {
    if (document.getElementsByClassName('important2')[0].style.display == 'none') {
        document.getElementsByClassName('important2')[0].style.display = 'flex';
    } else {
        document.getElementsByClassName('important2')[0].style.display = 'none'
    }
}

const showFreeInfo = (id) => {
    if (document.getElementsByClassName(`free-info${id}`)[0].style.display == 'none') {
        document.getElementsByClassName(`free-info${id}`)[0].style.display = 'flex';
    } else {
        document.getElementsByClassName(`free-info${id}`)[0].style.display = 'none';
    }
}

const payNow = () => { 
        if (document.getElementById('oplata-srazu').checked == true) {
            document.getElementById('zakazat').textContent = 'Оплатить' + " " + document.getElementsByClassName('last')[0].textContent;
        } else {
            document.getElementById('zakazat').textContent = 'Заказать'
        };
    
        if (document.getElementById('buy-now').checked == true) {
            document.getElementById('zakazat-mobile').textContent = 'Оплатить' + " " + document.getElementsByClassName('last2')[0].textContent;
        } else {
            document.getElementById('zakazat-mobile').textContent = 'Заказать'
        }
}




const oplata = () => {
    if (document.getElementById('name').value === '' || document.getElementById('surname').value === '' || document.getElementById('email').value === '' || document.getElementById('number').value === '' || document.getElementById('inn').value === '') {
        alert('Заполните все поля');
        if (document.getElementById('name').value === '') {
            document.getElementById('name').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-name').style.display = 'block';
        }
        if (document.getElementById('surname').value === '') {
            document.getElementById('surname').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-surname').style.display = 'block';
        }
        if (document.getElementById('email').value === '') {
            document.getElementById('email').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-email').style.display = 'block';
        }
        if (document.getElementById('number').value === '') {
            document.getElementById('number').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-number').style.display = 'block';
        }
        if (document.getElementById('inn').value === '') {
            document.getElementById('inn').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-inn').style.display = 'block';
            document.getElementById('tamoshna').style.display = 'none';
        }
    } 
    else if (document.getElementById('name').style.color == 'black' && document.getElementById('surname').style.color == 'black' && document.getElementById('email').style.color == 'black' && document.getElementById('number').style.color == 'black' && document.getElementById('inn').style.color == 'black') {
        alert('Спасибо за заказ!');
    }
}

const oplataMobile = () => {
    if (document.getElementById('name').value === '' || document.getElementById('surname').value === '' || document.getElementById('email-mobile').value === '' || document.getElementById('number').value === '' || document.getElementById('inn').value === '') {
        alert('Заполните все поля');
        if (document.getElementById('name').value === '') {
            document.getElementById('name').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-name').style.display = 'block';
        }
        if (document.getElementById('surname').value === '') {
            document.getElementById('surname').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-surname').style.display = 'block';
        }
        if (document.getElementById('email-mobile').value === '') {
            document.getElementById('email-mobile').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-email-mobile').style.display = 'block';
        }
        if (document.getElementById('number').value === '') {
            document.getElementById('number').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-number').style.display = 'block';
        }
        if (document.getElementById('inn').value === '') {
            document.getElementById('inn').style.borderColor = 'rgba(245, 81, 35, 1)';
            document.getElementById('write-inn').style.display = 'block';
            document.getElementById('tamoshna').style.display = 'none';
        }
    } 
    else if (document.getElementById('name').style.color == 'black' && document.getElementById('surname').style.color == 'black' && document.getElementById('email-mobile').style.color == 'black' && document.getElementById('number').style.color == 'black' && document.getElementById('inn').style.color == 'black') {
        alert('Спасибо за заказ!');
    }
}

const showSaleBlock = () => {
    if (document.getElementById('item2-sale').style.display == 'none') {
        document.getElementById('item2-sale').style.display = 'flex';
    } else {
        document.getElementById('item2-sale').style.display = 'none';
    }
    
}









document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#name').addEventListener('blur', () => {
        if (document.querySelector('#name').value !== '') {
            if ( /^[А-ЯЁ][а-яё]+$/.test(document.querySelector('#name').value) ) {
                document.getElementById('write-name').textContent = 'Укажите имя';
                document.getElementById('write-name').style.display = 'none';
                document.getElementById('name').style.borderColor = 'rgba(151, 151, 175, 1)';
                document.getElementById('name').style.color = 'black';
            } else {
                document.getElementById('write-name').style.display = 'block';
                document.getElementById('write-name').textContent = 'Укажите корректное имя';
                document.getElementById('name').style.borderColor = 'rgba(245, 81, 35, 1)';
                document.getElementById('name').style.color = 'rgba(245, 81, 35, 1)';
            }
        }
    });

    document.querySelector('#surname').addEventListener('blur', () => {
        if (document.querySelector('#surname').value !== '') {
            if ( /^[А-ЯЁ][а-яё]+$/.test(document.querySelector('#surname').value) ) {
                document.getElementById('write-surname').textContent = 'Укажите фамилию';
                document.getElementById('write-surname').style.display = 'none';
                document.getElementById('surname').style.borderColor = 'rgba(151, 151, 175, 1)';
                document.getElementById('surname').style.color = 'black';
            } else {
                document.getElementById('write-surname').style.display = 'block';
                document.getElementById('write-surname').textContent = 'Укажите корректную фамилию';
                document.getElementById('surname').style.borderColor = 'rgba(245, 81, 35, 1)';
                document.getElementById('surname').style.color = 'rgba(245, 81, 35, 1)';
            }
        }
    })

    document.querySelector('#email').addEventListener('blur', () => {
        if (document.querySelector('#email').value !== '') {
            if ( document.querySelector('#email').value.includes('@') && document.querySelector('#email').value.includes('.') ) {
                document.getElementById('write-email').textContent = 'Укажите электронную почту';
                document.getElementById('write-email').style.display = 'none';
                document.getElementById('email').style.borderColor = 'rgba(151, 151, 175, 1)';
                document.getElementById('email').style.color = 'black';
            } else {
                document.getElementById('write-email').style.display = 'block';
                document.getElementById('write-email').textContent = 'Проверьте адрес электронной почты';
                document.getElementById('email').style.borderColor = 'rgba(245, 81, 35, 1)';
                document.getElementById('email').style.color = 'rgba(245, 81, 35, 1)';
            }
        }
    })

    document.querySelector('#email-mobile').addEventListener('blur', () => {
        if (document.querySelector('#email-mobile').value !== '') {
            if ( document.querySelector('#email-mobile').value.includes('@') && document.querySelector('#email-mobile').value.includes('.') ) {
                document.getElementById('write-email-mobile').textContent = 'Укажите электронную почту';
                document.getElementById('write-email-mobile').style.display = 'none';
                document.getElementById('email-mobile').style.borderColor = 'rgba(151, 151, 175, 1)';
                document.getElementById('email-mobile').style.color = 'black';
            } else {
                document.getElementById('write-email-mobile').style.display = 'block';
                document.getElementById('write-email-mobile').textContent = 'Проверьте адрес электронной почты';
                document.getElementById('email-mobile').style.borderColor = 'rgba(245, 81, 35, 1)';
                document.getElementById('email-mobile').style.color = 'rgba(245, 81, 35, 1)';
            }
        }
    })

    document.querySelector('#number').addEventListener('blur', () => {
        if (document.querySelector('#number').value !== '') {
            if (/^\+\d \d{3} \d{3}[-]\d{2}[-]\d{2}$/.test(document.querySelector('#number').value)) {
                document.querySelector('#number').value.replace(/\s/g, '');
                    document.querySelector('#number').value = document.querySelector('#number').value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
                    document.getElementById('write-number').textContent = 'Укажите номер телефона';
                    document.getElementById('write-number').style.display = 'none';
                    document.getElementById('number').style.borderColor = 'rgba(151, 151, 175, 1)';
                    document.getElementById('number').style.color = 'black';
                    document.getElementById('number').value = document.getElementById('number').value
            } else {
                document.getElementById('write-number').style.display = 'block';
                document.getElementById('write-number').textContent = 'Формат: +9 999 999 99 99';
                document.getElementById('number').style.borderColor = 'rgba(245, 81, 35, 1)';
                document.getElementById('number').style.color = 'rgba(245, 81, 35, 1)';
            }
        }
    });

    document.querySelector('#inn').addEventListener('blur', () => {
        if (document.querySelector('#inn').value !== '') {
            if ( document.querySelector('#inn').value.length == 14) {
                document.getElementById('write-inn').textContent = 'Укажите ИНН';
                document.getElementById('write-inn').style.display = 'none';
                document.getElementById('inn').style.borderColor = 'rgba(151, 151, 175, 1)';
                document.getElementById('inn').style.color = 'black';
                document.getElementById('tamoshna').style.display = 'block';
            } else {
                document.getElementById('write-inn').style.display = 'block';
                document.getElementById('write-inn').textContent = 'Проверьте ИНН';
                document.getElementById('inn').style.borderColor = 'rgba(245, 81, 35, 1)';
                document.getElementById('inn').style.color = 'rgba(245, 81, 35, 1)';
                document.getElementById('tamoshna').style.display = 'none'
            }
        }
    })


    document.querySelectorAll('.delete-adress').forEach(element => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
        })
    }); 

    document.querySelectorAll('.types').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.types')[0].style.borderColor = 'rgba(203, 17, 171, 0.15)';
            document.querySelectorAll('.types')[1].style.borderColor = 'rgba(203, 17, 171, 0.15)';
            element.style.borderColor = 'rgba(203, 17, 171, 1)';
            if (element == document.querySelectorAll('.types')[0]) {
                document.getElementById('adress-1-name').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1<nav><img src="img/Stars.svg" alt="">Пункт выдачи</nav>';
                document.getElementById('adress-2-name').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1<nav><img src="img/Stars.svg" alt="">Пункт выдачи</nav>';
                document.getElementById('adress-3-name').innerHTML = 'г. Бишкек, улица Табышалиева, д. 57<nav><img src="img/Stars.svg" alt="">Пункт выдачи</nav>';
            };
            if (element == document.querySelectorAll('.types')[1]) {
                document.getElementById('adress-1-name').textContent = 'Бишкек, улица Табышалиева, 57';
                document.getElementById('adress-2-name').textContent = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
                document.getElementById('adress-3-name').innerHTML = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы,<br/>67/1';
            };
        })
    });

    let popupBg = document.querySelector('.popup-bg');

    document.querySelectorAll('.change-adress').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            popupBg.classList.add('active');
        })
    });

    document.querySelector('.close-popup').addEventListener('click', () => {
        popupBg.classList.remove('active');
        document.querySelector('.popup-bg2').classList.remove('active');
    })

    document.querySelector('#select-adress').addEventListener('click', () => {
        if (document.querySelectorAll('.types')[0].style.borderColor == 'rgb(203, 17, 171)') {
            document.getElementById('type-delivery').textContent = 'Пункт выдачи';
            document.getElementById('type-delivery2').textContent = 'Пункт выдачи';
            document.getElementById('type-delivery3').textContent = 'Курьером';
        }
        if (document.querySelectorAll('.types')[1].style.borderColor == 'rgb(203, 17, 171)') {
            document.getElementById('type-delivery').textContent = 'Курьером';
            document.getElementById('type-delivery2').textContent = 'Курьером';
            document.getElementById('type-delivery3').textContent = 'Курьером';
        };

        if ( document.getElementById('type-delivery').textContent == 'Курьером') {
            if (document.getElementById('adress1').checked == true) {
                document.getElementById('delivery-name').innerHTML = 'Бишкек, улица Табышалиева, 57';
                document.getElementById('delivery-name2').innerHTML = 'Бишкек, улица Табышалиева, 57';
                document.getElementById('delivery-name3').innerHTML = 'Бишкек, улица Табышалиева, 57';
                document.querySelector('.time').style.display = 'none';
            };
            if (document.getElementById('adress2').checked == true) {
                document.getElementById('delivery-name').innerHTML = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
                document.getElementById('delivery-name2').innerHTML = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
                document.getElementById('delivery-name3').innerHTML = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
                document.querySelector('.time').style.display = 'none';
            };
            if (document.getElementById('adress3').checked == true) {
                document.getElementById('delivery-name').innerHTML = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1';
                document.getElementById('delivery-name2').innerHTML = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1';
                document.getElementById('delivery-name3').innerHTML = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1';
                document.querySelector('.time').style.display = 'none';
            }
        }

        if ( document.getElementById('type-delivery').textContent == 'Пункт выдачи') {
            if (document.getElementById('adress1').checked == true) {
                document.getElementById('delivery-name').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1<nav><img src="img/Stars.svg" alt="">Пункт выдачи</nav>';
                document.getElementById('delivery-name2').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
                document.getElementById('delivery-name3').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
                document.querySelector('.time').style.display = 'flex';
            };
            if (document.getElementById('adress2').checked == true) {
                document.getElementById('delivery-name').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1<nav><img src="img/Stars.svg" alt=""> 4.99 Ежедневно с 10 до 21 </nav>';
                document.getElementById('delivery-name2').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
                document.getElementById('delivery-name3').innerHTML = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
                document.querySelector('.time').style.display = 'flex';
            };
            if (document.getElementById('adress3').checked == true) {
                document.getElementById('delivery-name').innerHTML = 'г. Бишкек, улица Табышалиева, д. 57<nav><img src="img/Stars.svg" alt="">Пункт выдачи</nav>';
                document.getElementById('delivery-name2').innerHTML = 'г. Бишкек, улица Табышалиева, д. 57';
                document.getElementById('delivery-name3').innerHTML = 'г. Бишкек, улица Табышалиева, д. 57';
                document.querySelector('.time').style.display = 'flex';
            }
        }
        popupBg.classList.remove('active');
    })

    document.querySelectorAll('.change-card').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.popup-bg2').classList.add('active');
        })
    });

    document.querySelector('.close-popup2').addEventListener('click', () => {
        document.querySelector('.popup-bg2').classList.remove('active');
    })

    document.querySelector('#select-card').addEventListener('click', () => {
        document.querySelector('.popup-bg2').classList.remove('active');
        if (document.getElementById('card1').checked == true) {
            document.querySelectorAll('#my-card')[0].src = 'img/mir.svg';
            document.querySelectorAll('#my-card')[1].src = 'img/mir.svg';
        };
        if (document.getElementById('card2').checked == true) {
            document.querySelectorAll('#my-card')[0].src = 'img/visa.svg';
            document.querySelectorAll('#my-card')[1].src = 'img/visa.svg';
        };
        if (document.getElementById('card3').checked == true) {
            document.querySelectorAll('#my-card')[0].src = 'img/mastercard1.svg';
            document.querySelectorAll('#my-card')[1].src = 'img/mastercard1.svg';
        };
        if (document.getElementById('card4').checked == true) {
            document.querySelectorAll('#my-card')[0].src = 'img/mastercard2.svg';
            document.querySelectorAll('#my-card')[1].src = 'img/mastercard2.svg';
        };
    })
    
 }, false);











