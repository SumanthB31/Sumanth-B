const container = document.querySelector('.container');
const seat = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');

function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount)
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * 150;
}
container.addEventListener('click',(e) => {
if(e.target.classList.contains('seat'));
e.target.classList.toggle('selected')
updateSelectedCount();
});