let item = document.querySelectorAll('.item');
let tabs = document.querySelectorAll('.tabs');

let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let tab4 = document.getElementById('tab4');

const items = (e) => {
    switch (e.target.id) {
        case "home":
            tab1.classList.add('active');
            break;
        case "work":
            tab2.classList.add('active');
            break;
        case "service":
            tab3.classList.add('active');
            break;
        case "contact":
            tab4.classList.add('active');
            break;
    }
}

item.forEach((collbak) => {
    collbak.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach((collbak) => collbak.classList.remove('active'))
        item.forEach((collbak) => collbak.classList.remove('active'))
        collbak.classList.add('active')
    });
    collbak.addEventListener('click', items)
})