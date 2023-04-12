const fort1 = document.querySelector('.fort1');
const card = document.querySelector('.fort1-info');
const img1 = document.querySelector('.card');
console.log(fort1);
console.log(card);
img1.addEventListener('mouseover', function(){
    console.log('hi');
    card.classList.toggle('hidden');
})
img1.addEventListener('mouseout', function(){
    console.log('hi');
    card.classList.toggle('hidden');
})