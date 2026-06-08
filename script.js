let btn = document.querySelector('.buy');
let modal = document.getElementById('modal');
let close = document.getElementById('closeBtn');

btn.onclick = function() {
    modal.style.display = 'block';
}

btn.onclick = function() {
    modal.style.display = 'block';

   timer = setTimeout(function() {
        modal.style.display = 'none';
    }, 1000);
}

close.onclick = function() {
    modal.style.display = 'none';
}