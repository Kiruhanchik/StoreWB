document.addEventListener('DOMContentLoaded', async function () {
    const fetchData = async () => {
        let data = await fetch('./items.json')
            .then(res => res.json());
        return data;
    }
    
    let data = await fetchData()

    const recalcItems = () => {
        for (let i = 1; i <= 3; i++) {
            let dataInfo = data["item" + i];
            let elem = document.querySelectorAll('.good.item-' + i)[0];
            let elemMob = document.querySelectorAll('.good.item' + i + '-mobile')[0];
            if (dataInfo == undefined){
                if (elem != undefined){
                    elem.remove();
                }
                if (elemMob != undefined){
                    elemMob.remove();
                }
                continue;
            }
            if (elem != undefined){
                document.querySelector('#item-' + i + '-count').textContent = dataInfo.count;
                document.querySelector('#item-' + i + '-cost').textContent = dataInfo.count*dataInfo.costDiscount;
                document.querySelector('#item-' + i + '-cost-final').textContent = dataInfo.count*dataInfo.cost + ' сом';
            }
            if (elemMob != undefined){
                document.querySelector('#item' + i + '-mobile-count').textContent = dataInfo.count;
                document.querySelector('#mobileCost' + i).textContent = dataInfo.count*dataInfo.costDiscount + ' сом';
                document.querySelector('#item-' + i + '-cost-final-mobile').textContent = ' ' + dataInfo.count*dataInfo.cost + ' сом';
            }
        }
    }

    const recalc = () => {
        let keys = Object.keys(data);
        let totalCount = 0;
        let totalCost = 0;
        let totalCostDiscount = 0;
        keys.forEach(key => {
            let dataInfo = data[key];
            totalCount += dataInfo.count;
            totalCost += dataInfo.count * dataInfo.cost;
            totalCostDiscount += dataInfo.count * dataInfo.costDiscount;
        });
        document.querySelector('#basket-items-count').textContent = keys.length;
        document.querySelector(`#sale`).textContent = totalCost - totalCostDiscount;
        document.querySelector(`#sale2`).textContent = totalCost - totalCostDiscount;
        document.querySelector('#cost-all-items').textContent = totalCostDiscount;
        document.querySelector('#cost-all-items-mobile').textContent = totalCostDiscount;
        document.querySelector('#allItemsCount').textContent = totalCount;
        document.querySelector('#allItemsCountMobile').textContent = totalCount;
        document.querySelector('#costWithoutSale').textContent = totalCost;
        document.querySelector('#costWithoutSaleMobile').textContent = totalCost;
        document.getElementById('all-items-count').textContent = totalCount;
        document.getElementById('all-items-cost').textContent = totalCostDiscount;
        if (keys.length === 0) {
            document.querySelector('.basket').innerHTML = "<h1 style='width: 100%'>Товаров нет</h1>";
            document.querySelector('.basket').style.height = '100vh';
            document.querySelector('.final-info-mobile').remove();
            document.querySelector('.final-info').remove();
            document.querySelector('#basket-items-count').remove();
        }
        if (document.querySelector('#oplata-srazu').checked) {
            document.querySelector('#zakazat').textContent = 'Оплатить ' + totalCostDiscount + ' сом';
            document.querySelector('#srazu').style.display = 'none';
        }
    }

    recalcItems();
    recalc();
    
    const deleteItem = (el) => {
        let goodIndex = el.srcElement.closest('.good').className.replace('good item-', '').replace('good item', '').replace('-mobile', '');
        delete data['item' + goodIndex];
        recalcItems();
        recalc();
    }

    const deleteEmptyItem = (el) => {
        el.srcElement.closest('.good').remove();
        let cntEl = document.querySelector(`#empty-items-count`);
        let resCnt = cntEl.textContent - 1;
        if (resCnt == 0){
            document.querySelector(`.empty-items-header`).remove();
        }else{
            cntEl.textContent = resCnt;
        }
    }
    
    const likeItem = (el) => {
        if (el.target.querySelector('path').style.fill == 'rgb(203, 17, 171)') {
            console.log(el.target.querySelector('path').style.fill);
            el.target.querySelector('path').style.fill = 'black';
            alert('Товар удален из избранного');
        } else {
            el.target.querySelector('path').style.fill = 'rgb(203, 17, 171)';
            alert('Товар добавлен в избранное');
            console.log(el.target.querySelector('path').style.fill);
        }
    }
    
    const minusItem = (el) => {
        let goodIndex = el.srcElement.closest('.good').className.replace('good item-', '').replace('good item', '').replace('-mobile', '');
        data['item' + goodIndex].count--;
        if (data['item' + goodIndex].count == 0){
            delete data['item' + goodIndex];
        }
        recalcItems();
        recalc();
    }

    const plusItem = (el) => {
        let goodIndex = el.srcElement.closest('.good').className.replace('good item-', '').replace('good item', '').replace('-mobile', '');
        let dataInfo = data['item' + goodIndex];
        if (dataInfo.stock != undefined){
            if (dataInfo.stock == dataInfo.count){
                alert('Товара больше нет на складе');
                return;
            }
        }
        data['item' + goodIndex].count++;
        recalcItems();
        recalc();
    }
    
    const selectAll = () => {
        document.querySelector('#select-all').checked = !document.querySelector('#select-all').checked;
        document.querySelector(`#item-1`).checked = !document.querySelector(`#item-1`).checked
        document.querySelector(`#item-2`).checked = !document.querySelector(`#item-2`).checked
        document.querySelector(`#item-3`).checked = !document.querySelector(`#item-3`).checked

        document.querySelector(`#item1-mobile`).checked = !document.querySelector(`#item1-mobile`).checked
        document.querySelector(`#item2-mobile`).checked = !document.querySelector(`#item2-mobile`).checked
        document.querySelector(`#item3-mobile`).checked = !document.querySelector(`#item3-mobile`).checked
    }

    document.querySelectorAll('.delete').forEach((el, index) => {
        el.parentNode.addEventListener('click', (el) => deleteItem(el));
    });

    document.querySelectorAll('.deleteEmpty').forEach((el, index) => {
        el.parentNode.addEventListener('click', (el) => deleteEmptyItem(el));
    });

    document.querySelectorAll('.heart').forEach((el) => {
        el.parentNode.addEventListener('click', (el) => likeItem(el));
    });

    document.querySelectorAll('.minus').forEach((el, index) => {
        el.addEventListener('click', (el) => minusItem(el));
    });

    document.querySelectorAll('.plus').forEach((el, index) => {
        el.addEventListener('click', (el) => plusItem(el));
    });

    document.querySelector('#visible1').addEventListener('click', selectAll);

    document.querySelectorAll('.change-card').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.popup-bg2').classList.add('active');
        })
    });

    document.querySelector('.close-popup2').addEventListener('click', () => {
        document.querySelector('.popup-bg2').classList.remove('active');
    })

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

    document.querySelector('.mycards').querySelectorAll('li').forEach((el, index) => {
        index++;
        el.addEventListener('click', () => {
            document.querySelector(`#card${index}`).checked = !document.querySelector(`#card${index}`).checked
        });
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

    document.querySelector('.payment-check').addEventListener('click', () => {
        if (document.querySelector('#oplata-srazu').checked) {
            let keys = Object.keys(data);
            let totalCostDiscount = 0;
            keys.forEach(key => {
                let dataInfo = data[key];
                totalCostDiscount += dataInfo.count * dataInfo.costDiscount;
            });
            document.querySelector('#zakazat').textContent = 'Оплатить ' + totalCostDiscount + ' сом';
            document.querySelector('#srazu').style.display = 'none';
            document.querySelector('#spishem-srazu').textContent = 'Спишем оплату с карты сразу';
            document.querySelector('.payment-check').style.height = '42px';
        } else {
            document.querySelector('#zakazat').textContent = 'Заказать';
            document.querySelector('#srazu').style.display = 'block';
            document.querySelector('#spishem-srazu').textContent = 'Спишем оплату с карты при получении';
            document.querySelector('.payment-check').style.height = '66px';
        }
    })

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
                if (document.querySelector('.custom2').checked) {
                    alert('Спасибо за заказ!');
                } else {
                    alert('Подтвердите соглашение');
                }
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
            if (document.getElementsByClassName('custom2')[1].checked) {
                alert('Спасибо за заказ!');
            } else {
                alert('Подтвердите соглашение');
            }
        }
    }
    
    document.querySelector('#zakazat').addEventListener('click', oplata);
    document.querySelector('#zakazat-mobile').addEventListener('click', oplataMobile);

    document.querySelector('#punkt').addEventListener('click', () => {
        document.querySelector('#adresses1').style.display = 'none';
        document.querySelector('#adresses2').style.display = 'block';
        document.querySelector('#punkt').style.borderColor = 'rgb(203, 17, 171)';
        document.querySelector('#delivery').style.borderColor = 'rgba(203, 17, 171, 0.15)';
    })

    document.querySelector('#delivery').addEventListener('click', () => {
        document.querySelector('#adresses2').style.display = 'none';
        document.querySelector('#adresses1').style.display = 'block';
        document.querySelector('#punkt').style.borderColor = 'rgba(203, 17, 171, 0.15)';
        document.querySelector('#delivery').style.borderColor = 'rgb(203, 17, 171)';
    })
   
    document.querySelectorAll('.delete-adress').forEach((el) => {
        el.addEventListener('click', () => {
            el.parentElement.remove();
            if (document.querySelector('#adresses1').querySelectorAll('li').length === 0) {
                document.querySelector('#adresses1').textContent = 'Адресов нет'
            };
            if (document.querySelector('#adresses2').querySelectorAll('li').length === 0) {
                document.querySelector('#adresses2').textContent = 'Адресов нет'
            };
        });
    })

    document.querySelector('#adresses1').querySelectorAll('li').forEach((el) => {
        el.querySelector('label').addEventListener('click', () => {
            el.querySelector('input').checked = !el.querySelector('input').checked;
        })
    })

    document.querySelector('#adresses2').querySelectorAll('li').forEach((el) => {
        el.querySelector('label').addEventListener('click', () => {
            el.querySelector('input').checked = !el.querySelector('input').checked;
        })
    })

    document.querySelector('#select-adress').addEventListener('click', () => {
        if (document.querySelector('#punkt').style.borderColor === 'rgb(203, 17, 171)') {
            document.querySelector('#type-delivery').textContent = 'Пункт выдачи';
            document.querySelector('#type-delivery3').textContent = 'Доставка в пункт выдачи';
        } else {
            document.querySelector('#type-delivery').textContent = 'Курьером';
            document.querySelector('#type-delivery3').textContent = 'Доставка курьером';
        }
        document.querySelector('.popup').querySelectorAll('li').forEach((el) => {
            if (el.querySelector('input').checked) {
                document.querySelector('#delivery-name').innerHTML = el.querySelector('label').innerHTML;
                document.querySelector('#delivery-name3').innerHTML = el.querySelector('label').innerHTML;
            }
        })
        popupBg.classList.remove('active');
    })

    const showItemsHeader = () => {
        if (window.innerWidth > 320) {
            if (document.querySelector('.items').style.display == 'none') {
                document.querySelector('.items').style.display = 'block';
                document.getElementById('visible1').style.display = 'flex';
                document.getElementById('visible2').style.display = 'none';
                document.getElementById('arrow').style.transform = 'rotate(360deg)';
            } else {
                document.querySelector('.items').style.display = 'none';
                document.querySelector('.items-mobile').style.display = 'none';
                document.getElementById('visible1').style.display = 'none';
                document.getElementById('visible2').style.display = 'flex';
                document.getElementById('arrow').style.transform = 'rotate(180deg)';
            } 
        } else {
            document.querySelector('.items').style.display = 'none';
            if (document.querySelector('.items-mobile').style.display == 'none') {
                document.querySelector('.items-mobile').style.display = 'flex';
                document.getElementById('visible1').style.display = 'flex';
                document.getElementById('visible2').style.display = 'none';
                document.getElementById('arrow').style.transform = 'rotate(360deg)';
            } else {
                document.querySelector('.items-mobile').style.display = 'none';
                document.querySelector('.items').style.display = 'none';
                document.getElementById('visible1').style.display = 'none';
                document.getElementById('visible2').style.display = 'flex';
                document.getElementById('arrow').style.transform = 'rotate(180deg)';
            }
        }
    }

    const showEmptyHeader = () => {
        if (window.innerWidth > 320) {
            if (document.querySelector('.empty-items').style.display == 'none') {
                document.querySelector('.empty-items').style.display = 'flex';
                document.getElementById('arrow2').style.transform = 'rotate(360deg)';
            } else {
                document.querySelector('.empty-items').style.display = 'none';
                document.getElementById('arrow2').style.transform = 'rotate(180deg)';
            }
        } 
        if (window.innerWidth <= 320) {
            if (document.querySelector('.empty-items-mobile').style.display == 'none') {
                document.querySelector('.empty-items-mobile').style.display = 'flex';
                document.getElementById('arrow2').style.transform = 'rotate(360deg)';
            } else {
                document.querySelector('.empty-items-mobile').style.display = 'none';
                document.getElementById('arrow2').style.transform = 'rotate(180deg)';
            }
        }
    }

    const showSaleBlock = () => {
        if (document.querySelector('#item2-sale').style.display === 'flex') {
            document.querySelector('#item2-sale').style.display = 'none';
        } else {
            document.querySelector('#item2-sale').style.display = 'flex';
        }
    }

    const showKoledino = () => {
        if (document.querySelector('.important2').style.display === 'flex') {
            document.querySelector('.important2').style.display = 'none';
        } else {
            document.querySelector('.important2').style.display = 'flex';
        }
    }

    const showFreeInfo = () => {
        if (document.querySelector('.free-info2').style.display === 'flex') {
            document.querySelector('.free-info2').style.display = 'none';
        } else {
            document.querySelector('.free-info2').style.display = 'flex';
        }
    }

    const showFreeInfo2 = () => {
        if (document.querySelector('.free-info1').style.display === 'flex') {
            document.querySelector('.free-info1').style.display = 'none';
        } else {
            document.querySelector('.free-info1').style.display = 'flex';
        }
    }

    document.querySelector('#arrow').addEventListener('click', showItemsHeader);
    document.querySelector('#arrow2').addEventListener('click', showEmptyHeader);
    document.querySelector('#item-2-cost-final').addEventListener('click', showSaleBlock);
    document.querySelector('#koledino').addEventListener('click', showKoledino);
    document.querySelector('#free').addEventListener('click', showFreeInfo);
    document.querySelector('#free2').addEventListener('click', showFreeInfo2);

    for (let index = 1; index < 4; index++) {
        document.querySelector(`.item${index}-mobile-info`).addEventListener('click', () => {
            document.querySelector(`#item${index}-mobile`).checked = !document.querySelector(`#item${index}-mobile`).checked;
        })
        document.querySelector(`.item${index}-logo`).addEventListener('click', () => {
            document.querySelector(`#item${index}-mobile`).checked = !document.querySelector(`#item${index}-mobile`).checked;
        })
    }   

}); 