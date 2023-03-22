let parent = document.querySelector('.first-screen__announcements');
let links  = parent.querySelectorAll('.announcements__menu a');
let tabs   = parent.querySelectorAll('.announcements__tab');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    let activeLink = parent.querySelector('.announcements__menu a.active');
    activeLink.classList.remove('active');
    
    let activeTab = parent.querySelector('.announcements__tab.active');
    activeTab.classList.remove('active');
    
    tabs[i].classList.add('active');
    this.classList.add('active');
    
    event.preventDefault();
  });
}