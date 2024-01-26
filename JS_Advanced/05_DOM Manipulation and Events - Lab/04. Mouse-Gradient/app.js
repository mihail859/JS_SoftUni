function attachGradientEvents() {
    let hoverPlace = document.getElementById('gradient');

    hoverPlace.addEventListener('mousemove', mouseHover);
    hoverPlace.addEventListener('mouseout', mouseOutTheGradient);
    
    function mouseHover(event){
        let hoverPlaceWidth = event.target.clientWidth;
        let mousePosition = event.offsetX / (hoverPlaceWidth - 1);
        let percentage = Math.trunc(mousePosition * 100);
        document.getElementById('result').textContent = percentage + '%';
    };

    function mouseOutTheGradient (event){
        document.getElementById('result').textContent = '';
    };
}