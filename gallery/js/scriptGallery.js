window.addEventListener('mouseover', function(e){
    if(e.target.closest('.gallery__content')){
        let content = e.target.closest('.gallery__content')
        let contentImg = content.querySelector('.gallery__content__img');
        contentImg.style.opacity = 0.4;

        let contentFocus = content.querySelector('.gallery__content__focus');
        contentFocus.classList.add('active');
    }
});

window.addEventListener('mouseout', function(e){
    if(e.target.closest('.gallery__content')){
        let content = e.target.closest('.gallery__content')
        let contentImg = content.querySelector('.gallery__content__img');
        contentImg.style.opacity = 1;

        let contentFocus = content.querySelector('.gallery__content__focus');
        contentFocus.classList.remove('active');
    }
});