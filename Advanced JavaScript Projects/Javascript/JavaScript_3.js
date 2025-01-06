

function displayEnergySource(energy) {
    var energySource = energy.getAttribute("data-fuel-type");
    alert(energySource + " is an energy source in the " + energy.innerHTML + " energy category.");
}