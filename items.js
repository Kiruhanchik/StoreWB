const items = [
    {
        id: 1,
        name: 'Футболка UZcotton мужская',
        color: 'белый',
        size: 56,
    },
    {
        id: 2,
        name: 'Силиконовый чехол картхолдер<br/> (отверстия) для карт, прозрачный<br/> кейс бампер на Apple iPhone XR,<br/> MobiSafe',
        color: 'прозрачный',
    },
    {
        id: 3,
        name: 'Карандаши цветные Faber-Castell<br/> "Замок", набор 24 цвета,<br/> заточенные, шестигранные,<br/>Faber-Castell ',
    }
]

window.onload = function set(){
    document.getElementById('item-1-name').innerHTML = items[0].name;
    document.getElementById('item-1-color').innerHTML = 'Цвет: ' + items[0].color;
    document.getElementById('item-1-size').innerHTML = 'Размер: ' + items[0].size;
    document.getElementById('item-2-name').innerHTML = items[1].name;
    document.getElementById('item-2-color').innerHTML = 'Цвет: ' + items[1].color;
    document.getElementById('item-3-name').innerHTML = items[2].name;
};

