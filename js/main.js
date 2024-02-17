const btns = document.querySelectorAll('.info-dot')
const hints = document.querySelectorAll('.info-hint')


for (let btn of btns){
    
    btn.addEventListener('click', function(e){
        e.stopPropagation()
        for(let hint of hints){
            hint.classList.add('none')
        }
        this.parentNode.querySelector('.info-hint').classList.toggle('none')
    })
}


document.addEventListener('click', function(){
    for(let hint of hints){
        hint.classList.add('none')
    }
})

for(let hint of hints){
    hint.addEventListener('click', e=> e.stopPropagation())
}

// Swiper slider

const swiper = new Swiper('.swiper', {
    // Navigation arrows
    loop: true,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        878: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },


    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

  });


document.addEventListener('click', (e) => {
    if(e.target !== document.querySelector('.search-form__input')){
        document.querySelector('.search-form__input').value = ''
       
    }
})


// Tabs 

const tabsBtns = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')


for (let btn of tabsBtns) {
    
    btn.addEventListener('click', function(){

        for (let btn of tabsBtns){
            btn.classList.remove('tab-controls__btn--active')
        }
        this.classList.add('tab-controls__btn--active')


      for( let product of tabsProducts){
        if(this.dataset.tab == 'all'){
            product.classList.remove('none')
          }else{

            if(this.dataset.tab == product.dataset.tabValue ){
                product.classList.remove('none')
                  
              }else{
                product.classList.add('none')
              }

          }

      }
      
    //   Update Swiper
      swiper.update()
        
    })
    
}

const btnOpen = document.querySelector('.mobile-nav-btn-open')
const btnClose = document.querySelector('.mobile-nav-btn-close')
const navWrapper = document.querySelector('.mobile-nav-wrapper')


btnOpen.addEventListener('click', (e)=>{
    e.preventDefault()
    navWrapper.classList.remove('none')
    
})

btnClose.addEventListener('click', (e)=>{
    e.preventDefault()
    navWrapper.classList.add('none')
})

const input = document.querySelectorAll('.info-hint__radio')
const btnsOrange = document.querySelectorAll('.info-hint__radio-fake--orange')
const btnsBiruza = document.querySelectorAll('.info-hint__radio-fake--biruza')
const btnsGray = document.querySelectorAll('.info-hint__radio-fake--gray')

for(let i = 0; i < input.length;i++){
    input[i].addEventListener('input', function(){

            let circle = this.parentNode.parentNode.previousElementSibling.firstElementChild
            let nextEL = this.nextElementSibling
    
            for (let btn of btnsOrange){
                if(nextEL == btn){
                    circle.style.background ='#E58411' 
                }
            }

            for (let btn of btnsBiruza){
                if(nextEL == btn){
                    circle.style.background ='#00D6C9' 
                }
            }

            for (let btn of btnsGray){
                if(nextEL == btn){
                    circle.style.background ='#7C7C7C' 
                }
            }

    })
}



  
   

   




