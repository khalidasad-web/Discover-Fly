function updatePrice() {
    const firstClassUnitPrice = 150;
    const economyClassUnitPrice = 100;
    const firstClassQty = parseInt(document.getElementById('first-class-qty').value);
    const economyClassQty = parseInt(document.getElementById('economy-class-qty').value);
    const subTotalPrice = firstClassUnitPrice * firstClassQty + economyClassUnitPrice * economyClassQty;
    const vatPrice = subTotalPrice * 0.1;
    const grandTotalPrice = subTotalPrice + vatPrice;
    document.getElementById('subtotal').innerText = '$' + subTotalPrice;
    document.getElementById('vat').innerText = '$' + vatPrice;
    document.getElementById('grandtotal').innerText = '$' + grandTotalPrice;
}
function modifyQuantity(itemTag, isIncrease) {
    let itemClassQty = parseInt(document.getElementById(itemTag).value);
    if (isIncrease) {
        itemClassQty++;
    } else if (!isIncrease && itemClassQty > 0) {
        itemClassQty--;
    }
    document.getElementById(itemTag).value = itemClassQty;
    updatePrice();
}
function firstClassIncrease() {
    modifyQuantity('first-class-qty', true);
}
function firstClassDecrease() {
    modifyQuantity('first-class-qty', false);
}
function economyClassIncrease() {
    modifyQuantity('economy-class-qty', true);
}
function economyClassDecrease() {
    modifyQuantity('economy-class-qty', false);
}
function confirmBooking() {
    const subTotalPrice = document.getElementById('grandtotal').innerText;
    const vatPrice = document.getElementById('vat').innerText;
    const grandTotalPrice = document.getElementById('grandtotal').innerText;
    console.log(subTotalPrice, vatPrice, grandTotalPrice);
}