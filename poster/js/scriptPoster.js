console.log(window);
window.addEventListener('mouseover' , function(e){
    if(e.target.closest('.events_content')){
        let content = e.target.closest('.events_content');
        let contentImg = content.querySelector('.events__img');
        contentImg.style.opacity = 0.1;

        let contentInfo = content.querySelector('.events_content__focus');
        contentInfo.classList.add('active');
    }
});

window.addEventListener('mouseout' , function(e){
    if(e.target.closest('.events_content')){
        let content = e.target.closest('.events_content');
        let contentImg = content.querySelector('.events__img');
        contentImg.style.opacity = 1;

        let contentInfo = content.querySelector('.events_content__focus');
        contentInfo.classList.remove('active');
    }
});