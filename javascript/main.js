// Simulate page load delay and hide the loading screen after 3 seconds
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 500); // Change delay time (1000ms = 1 seconds)
});

$(function(){
    $("body").scrollspy({
        target : "#navbarNav",
        offset : 50
    })
})