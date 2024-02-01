function escrevendoletra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=> {
            setTimeout(()=> {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.type');
    ativaLetra(titulo);
}
escrevendoletra();

function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .nav-first');


    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}
menuMobol();

function aboutMe () {
    const divExp = document.querySelectorAll('.exp_content div');
    const liExp = document.querySelectorAll('.exp_content ul li');
    const divEdu = document.querySelectorAll('.education_cont div');
    const liEdu = document.querySelectorAll('.education_cont ul li');

    divExp[0].classList.add('active');
    liExp[0].classList.add('active');
    divEdu[0].classList.add('active');
    liEdu[0].classList.add('active');

    function slideShow(index) {
        divExp.forEach((div)=> {
            div.classList.remove('active');
        });
        liExp.forEach((button)=> {
            button.classList.remove('active');
        });
        divExp[index].classList.add('active')
        liExp[index].classList.add('active')
    }

    function slideShow2(index) {
        divEdu.forEach((div)=> {
            div.classList.remove('active');
        });
        liEdu.forEach((button)=> {
            button.classList.remove('active');
        });
        divEdu[index].classList.add('active')
        liEdu[index].classList.add('active')
    }

    liExp.forEach((event, index)=> {
        event.addEventListener('click', () => {
            slideShow(index);
        })
    });

    liEdu.forEach((event, index)=> {
        event.addEventListener('click', () => {
            slideShow2(index);
        })
    });

    window.addEventListener("load", start)

}
aboutMe()

