const sliders = document.querySelectorAll("input[type='range']")
sliders.forEach(function (slider) {
    slider.addEventListener('input', calculateTip)
})

const billInput = document.getElementById('bill')
billInput.addEventListener('change', calculateTip)

function calculateTip() {
    console.log('calculate tip')
}