const clicker = document.querySelector('.btnGallo');

clicker.addEventListener('click', function() 
{
    document.body.classList.toggle('gallo');

    console.log('current class name: ' + className);
});