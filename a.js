const img = document.querySelector('img');
const images = ['./pic/1.jpg', './pic/2.jpg', './pic/3.jpg', './pic/4.jpg', './pic/5.jpg']
let i = 0;
document.querySelector('.left').addEventListener('click', function (){
    if(i==0) 
    {
        img.src = images[images.length - 1];
        i = images.length - 1;
    }
    i--;
    img.src = images[i]
})

document.querySelector('.right').addEventListener('click', function (){
    if(i==images.length - 1) 
    {
        img.src = images[0];
        i = 0;
    }
    i++;
    img.src = images[i]
})