document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const closedBox = document.querySelector('.closedbox')
    const content = document.querySelector('.content')
    const popup__empty = document.querySelector('.popup__empty')
    const popup__accept = document.querySelector('.popup__accept')
    const offer = document.querySelector('.offer')
    const offer_btn = document.querySelector('.btn__empty')
    const popup__accept_btn = document.querySelector('.btn__accept')
    const accept__close = document.querySelector('.accept__close')
    // const cards = document.querySelectorAll('.contentbox');
    const openedBox = document.querySelector('.openedbox');
    const salePrice = document.querySelector('.contentbox__sale')

    let count = 0
    content?.addEventListener('click',(e)=>{
            console.log('cards',e)
            //первое нажатие
            if(count === 0){
                //проверка на соответсвия элементов, если все верно . то будем выполнять условия
                if(e.target.classList.contains('closedbox') && !e.target.classList.contains('hidden') && e.target.nextElementSibling.classList.contains('hidden')){
                    e.target.classList.add('hidden')
                    e.target.previousElementSibling.classList.remove('hidden')
                    setTimeout(()=>{popup__empty.classList.remove('hidden')},1000)
                    
                    count++
                }
            }
    
             else if(count === 1){
                if(e.target.classList.contains('closedbox') && popup__accept?.classList.contains('hidden') && salePrice.classList.contains('hidden')){
                    e.target.classList.add('hidden')
                    e.target.nextElementSibling.classList.remove('hidden')
                    setTimeout(()=>{popup__accept.classList.remove('hidden')}, 1000)
                    setTimeout(()=>{
                    offer.classList.add('hidden');
                    content.classList.add('hidden');
                    },2000)
                    count++
                }
            }
   

    })

    //проверки на события, если 
    offer_btn?.addEventListener('click',(e)=>{
        if(!popup__empty?.classList.contains('hidden')){
            popup__empty.classList.add('hidden')
        }
    })
    popup__accept_btn?.addEventListener('click',(e)=>{
        if(!popup__accept?.classList.contains('hidden')){
            popup__accept.classList.add('hidden')
        }
    })
    accept__close?.addEventListener('click',(e)=>{
        if(!popup__accept?.classList.contains('hidden')){
            popup__accept.classList.add('hidden')
        }
    })
})
