let bts = document.querySelectorAll('.btn');
let tmp;
let current;
function qwe(event)
{
    console.log(event);
    let evCode = event.code;
    if(evCode === 'Enter' || 'KeyS' || 'KeyE' || 'KeyO' || 'KeyN' || 'KeyL' || 'KeyZ')
    {
            if(tmp != null)
            {
                tmp.style.backgroundColor = 'black';
            }
        current = evCode;

        bts.forEach(element => {
            if(evCode === element.getAttribute('id'))
            {
                current = element;
                element.style.backgroundColor = 'blue';
                tmp = current;
            }
        });
    }
    
}
document.addEventListener('keydown', qwe);

document.body.style.backgroundColor = localStorage.getItem("myKey");
let btnCT = document.querySelector('.change-theme'); 
// let bodyBC = document.body.style.backgroundColor;
console.log(btnCT);
function btnTheme(){
    if(document.body.style.backgroundColor == 'white')
    document.body.style.backgroundColor = 'gray';
    else
    document.body.style.backgroundColor = 'white';
    localStorage.setItem("myKey", document.body.style.backgroundColor);
    //тут можно передать обьект с данными сайта(цвет других обьектов)
    //но я хотел закончить эту дз чтобы перейти до step project
}

btnCT.addEventListener('click', btnTheme);