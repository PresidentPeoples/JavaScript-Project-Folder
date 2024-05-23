document.addEventListener("DOMContentLoaded", function () {
    const progressText = document.getElementById('progress-text');
    const maskFull = document.getElementById('mask-full');
    const maskHalf = document.getElementById('mask-half');
    const fillFull = document.getElementById('fill-full');
    const fillHalf = document.getElementById('fill-half');
    const fillFix = document.getElementById('fill-fix');

    let percentage = 0;
    const targetPercentage = 85;
    const intervalTime = 30; // milliseconds

    function updateProgress() {
        percentage++;
        const degree = (percentage / 100) * 360;

        if (degree <= 180) {
            fillHalf.style.transform = `rotate(${degree}deg)`;
            fillFull.style.transform = `rotate(0deg)`;
            fillFix.style.display = 'none';
        } else {
            fillHalf.style.transform = `rotate(180deg)`;
            fillFull.style.transform = `rotate(${degree - 180}deg)`;
            fillFix.style.display = 'block';
        }

        progressText.textContent = `${percentage}%`;

        if (percentage < targetPercentage) {
            setTimeout(updateProgress, intervalTime);
        }
    }

    updateProgress();
});
