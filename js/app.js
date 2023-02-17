document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
  
    const content = document.querySelector('.content')
    const popupEmpty = document.querySelector('.popup__empty')
    const popupAccept = document.querySelector('.popup__accept')
    const offer = document.querySelector('.offer')
    const offerBtn = document.querySelector('.btn__empty')
    const popupAcceptBtn = document.querySelector('.btn__accept')
    const acceptClose = document.querySelector('.accept__close')

    let count = 0
    content?.addEventListener('click',(e)=>{
            console.log('cards',e)
            //первое нажатие
            if(count === 0){
                //проверка на соответсвия элементов, если все верно . то будем выполнять условия
                if(e.target.classList.contains('closedbox') && !e.target.classList.contains('hidden') && e.target.nextElementSibling.classList.contains('hidden')){
                    e.target.classList.add('hidden')
                    e.target.previousElementSibling.classList.remove('hidden')
                    setTimeout(()=>{popupEmpty.classList.remove('hidden')},1000)
                    
                    count++
                }
            }
    
             else if(count === 1){
                if(e.target.classList.contains('closedbox') && popupEmpty?.classList.contains('hidden') && popupAccept?.classList.contains('hidden') ){
                    e.target.classList.add('hidden')
                    e.target.nextElementSibling.classList.remove('hidden')
                    setTimeout(()=>{popupAccept.classList.remove('hidden')}, 1000)
                    setTimeout(()=>{
                    offer.classList.add('show');
                    content.classList.add('hidden');
                    },2000)
                    count++
                }
            }
   

    })

    //проверки на события, если у поапа нет класса hidden, то по нажатию на кнопку добавляем его
    offerBtn?.addEventListener('click',(e)=>{
        if(!popupEmpty?.classList.contains('hidden')){
            popupEmpty.classList.add('hidden')
        }
    })
    popupAcceptBtn?.addEventListener('click',(e)=>{
        if(!popupAccept?.classList.contains('hidden')){
            popupAccept.classList.add('hidden')
        }
    })
    acceptClose?.addEventListener('click',(e)=>{
        if(!popupAccept?.classList.contains('hidden')){
            popupAccept.classList.add('hidden')
        }
    })


     const offerTime= document.querySelector('.offer__timer')

     let time = 600
    
    setInterval(timer, 1000)

    function timer (){
        const minutes = Math.floor(time /60);
        let seconds = time % 60;
        if (seconds<0){
            offerTime.innerHTML = `00 : 00`
        } else{
        seconds = seconds < 10 ? '0' + seconds: seconds;
        offerTime.innerHTML = `${minutes} : ${seconds}`;
        time--
        }
       
       
    }
     
    
})
