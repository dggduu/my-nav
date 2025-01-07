document.querySelectorAll('.nav-folder-header').forEach(folderHeader => {
    folderHeader.addEventListener('click', function() {
        const folderContent = this.nextElementSibling;
        folderContent.classList.toggle('open');

        const switchBtn = this.querySelector('.nav-folder-open-switch i');
        if (folderContent.classList.contains('open')) {
            switchBtn.classList.remove('ri-arrow-down-s-line');
            switchBtn.classList.add('ri-arrow-up-s-line');
        } else {
            switchBtn.classList.remove('ri-arrow-up-s-line');
            switchBtn.classList.add('ri-arrow-down-s-line');
        }
    });
});

function startTimer() {
    const startDate = new Date('2025-01-07T00:00:00');
    function updateTimer() {
        const now = new Date().getTime();
        const elapsedMilliseconds = now - startDate.getTime();
        const days = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedMilliseconds % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = 
            days + " 天 " + hours + " 小时 " +
            minutes + " 分钟 " + seconds + " 秒 ";
        setTimeout(updateTimer, 1000);
    }
    updateTimer();
}
window.onload = startTimer;