// Zoek de bubble en popup-elementen op
const bubble = document.querySelector('.bubble');
const popup = document.getElementById('popup');

// Voeg een event listener toe aan de bubble om de popup weer te geven
bubble.addEventListener('click', () => {
    popup.style.display = 'block'; // Toon de popup
});



// Zoek het knopelement om de popup te sluiten
const closePopupButton = document.getElementById('close-popup');

// Voeg een event listener toe aan het knopelement om de popup te verbergen
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'; // Verberg de popup
});
