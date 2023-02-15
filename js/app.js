document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const closedBox = document.querySelectorAll('.closedbox')
    const content = document.querySelector('.content')
    const cards = document.querySelectorAll('.contentbox');
    const openedBox = document.querySelectorAll('.openedbox');
    const salePrice = document.querySelectorAll('.contentbox__sale')
    let boxLocked = false;
    let isSale = false;
    let firstCard, secondCard 

    const firstPick = closedBox.length % 2
    const secondPick = (closedBox.length-1) % 2

    const closbox = () => {
        closedBox.forEach(box => {
            box.addEventListener('click', () => {
                closedBox.forEach(s => {
                    s.addEventListener('click', () => {
                        //интервал на первое модальное окно
                        // setTimeout(()=>{popupEmpty.classList.remove('hidden')},1500)

                        //интервал на второе модальное окно
                        // setTimeout(()=>{ popupAccept.classList.remove('hidden')},1500)

                       //интервал на  форму
                        // setTimeout(()=>{
                        //     offer.classList.remove('hidden')
                        //     content.classList.add('hidden')
                        // },4000)
                       
                        s.nextElementSibling.classList.remove('hidden');
                    
                    })
                });

                box.classList.add('hidden');
                
               
            })
        })
    }

   
 
    cards.forEach((card, index) => {
        
        card.addEventListener('click', function () {
           
            
       
            
           
            if (firstPick == 1) {
              
                // salePrice.forEach(el=>el.classList.remove('hidden'))
                // openedBox.forEach(el=>el.classList.add('hidden'))
              
            } 
            if( secondPick == 0){
                // openedBox.forEach(el => {
                //     el.addEventListener('click', (e) => {
                //         console.log(e.target)
                //         openedBox.forEach(s => s.classList.remove('hidden'));
                //       el.classList.add('hidden');
                //     })
                //   })
                closbox()
                // salePrice.forEach(el=>el.classList.add('hidden'))
            }
          
        })
    })
     
    //modal window
const popupEmpty = document.querySelector('.popup__empty');
const popupAccept = document.querySelector('.popup__accept')
const offer = document.querySelector('.offer')

const close = document.querySelector('.accept__close')
const btnEmpty = document.querySelector('.btn__empty');
const btnAccept = document.querySelector('.btn__accept');


btnEmpty.addEventListener('click', ()=>{
    
    popupEmpty.classList.add('hidden')
})

btnAccept.addEventListener('click', ()=>{
    
    popupAccept.classList.add('hidden')
})
close.addEventListener('click', ()=>{
    
    popupAccept.classList.add('hidden')
})



})

// Все что ниже это я разное пробоватл, пока сохранил , чтобы если что
// const closbox = () => {

//     closedBox.forEach(box => {
//         box.addEventListener('click', () => {

//             closedBox.forEach(s => {
//                 s.addEventListener('click', () => {
//                     //интервал на первое модальное окно
//                     // setTimeout(()=>{popupEmpty.classList.remove('hidden')},1500)

//                     //интервал на второе модальное окно
//                     // setTimeout(()=>{ popupAccept.classList.remove('hidden')},1500)

//                    //интервал на  форму
//                     // setTimeout(()=>{
//                     //     offer.classList.remove('hidden')
//                     //     content.classList.add('hidden')
//                     // },4000)
           
//                     s.nextElementSibling.classList.remove('hidden')
//                     boxLocked = true
                    
//                 })
//             });

//             box.classList.add('hidden');
            
//             boxLocked = false
//         })
//     })
// }

  
    // const flipCard = (e)=>{
    //     const target = e.target.parentElement;

    //     target.classList.add('flip');
    //     //first click
    //     if(!hasFlippedCard){
    //         hasFlippedCard =true;
    //         firstcard = target;
    //     } else {
    //         hasFlippedCard =false
    //         secondCard = target;
    //     }

    //     //check card
    // }





    // const flipBox = (e)=>{
    //     const target = e.target;
    //     if(!hasFlippedCard){
    //         hasFlippedCard =true;
    //         firstcard =target
    //     } else {
    //         hasFlippedCard = false;
    //         secondCard = target;
    //     }

    //     closbox()

    // }
    // cards.forEach(el=>{
    //     el.addEventListener('click', flipBox)
    // })

    //  const funcBox = ()=>{
    //     closedBox.forEach(el => {
    //         el.addEventListener('click', () => {
    //                 openedBox.forEach(box => {
    //                     box.addEventListener('click', ()=>{
    //                         openedBox.classList.add('hidden')
    //                     })
    //                     box.classList.remove('hidden')
    //                 });

    //           el.classList.add('hidden');
    //         })
    //       })
    //  }

 
    // cards.forEach((card,index)=>{
    //     card.addEventListener('click', (e)=>{
    //         const target= e.target
    //       if(target.classList.contains('closedbox')){
    //         card.classList.remove('hidden')
    //         openedBox.forEach(el=>{
    //             el.addEventListener('click', function(e){
    //                 e.classList.remove('hidden')
    //             })
    //         })
    //       }
    //       if(firstCard == null){
    //         firstCard = index
    //       }else {
    //         if(index != firstCard){
    //             secondCard = index
    //         }
    //       }
    //       if (firstCard != null && secondCard != null && firstCard != secondCard){
    //         if(
    //             cards[firstCard].firstElementChild.className === cards[secondCard].firstElementChild.className
    //         ){
    //             cards[firstCard].classList.add('hidden')
    //         }
    //       }
    //     })
    // })