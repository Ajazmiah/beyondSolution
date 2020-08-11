document.querySelector('.burger__menu').addEventListener('click',  toggleNavigation);

document.querySelectorAll('.link').forEach(i =>{
  i.addEventListener('click', toggleNavigation);
})

function toggleNavigation(){

      document.querySelector('.navigation').classList.toggle('toggle');
}
