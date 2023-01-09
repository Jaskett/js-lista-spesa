const list = [
    'Pane',
    'Formaggio',
    'Insalata',
    'Farina',
    'Pomodoro',
    'Pasta',
    'Acqua'
];

let i = 0;
let listaDom = document.getElementById('lista');

while(i < list.length) {
    // listaDom.innerHTML += `<li>${list[i]}</li>`;
    // i++;

    let liDom = document.createElement('li');
    listaDom.append(liDom);
    liDom.append(list[i]);
    i++;
}