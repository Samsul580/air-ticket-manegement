const firstPlusBtn = document.getElementById("first-plus-btn");
firstPlusBtn.addEventListener("click", function () {
    inputCounter(true, "first-input");
    totalPriceAdd();
    ticketPriceAdd(true);
})
const firstMinusBtn = document.getElementById("first-minus-btn");
firstMinusBtn.addEventListener("click", function () {
    inputCounter(false, "first-input");
    totalPriceAdd();
    ticketPriceAdd(true);
})
const economyPlusBtn = document.getElementById("economy-plus-btn");
economyPlusBtn.addEventListener("click", function () {
    inputCounter(true, "economy-input");
    totalPriceAdd();
    ticketPriceAdd(false);
})
const economyMinusBtn = document.getElementById("economy-minus-btn");
economyMinusBtn.addEventListener("click", function () {
    inputCounter(false, "economy-input");
    totalPriceAdd();
    ticketPriceAdd(false);
})

// ticket count handler
function inputCounter(isIncrease, id) {
    const Input = document.getElementById(id);
    const InputNumber = parseInt(Input.value);
    let totalInputNumber = InputNumber;
    if (isIncrease == true) {
        totalInputNumber = InputNumber + 1;
    }
    if (isIncrease == false && InputNumber > 0) {
        totalInputNumber = InputNumber - 1;
    }
    Input.value = totalInputNumber;
}
function ticketPriceAdd(isFirst) {
    if (isFirst == true) {
        const Input = document.getElementById("first-input");
        const InputNumber = parseInt(Input.value);
        document.getElementById("first-price").innerText = InputNumber * 150;
    }
    if (isFirst == false) {
        const Input = document.getElementById("economy-input");
        const InputNumber = parseInt(Input.value);
        document.getElementById("economy-price").innerText = InputNumber * 100;
    }
}

// price add handler
function totalPriceAdd() {
    const firstInput = document.getElementById("first-input");
    const firstInputNumber = parseInt(firstInput.value);
    const economyInput = document.getElementById("economy-input");
    const economyInputNumber = parseInt(economyInput.value);
    const subtotal = firstInputNumber * 150 + economyInputNumber * 100;
    document.getElementById("subtotal").innerText = subtotal;
    const tax = subtotal / 100 * 10;
    document.getElementById("tax").innerText = tax;
    const total = subtotal + tax;
    document.getElementById("total").innerText = total;
}

// booking button handler
const bookNowBtn = document.getElementById("book-now-btn");
bookNowBtn.addEventListener("click", function () {
    const bookingInfo = document.getElementById("booking-info");
    bookingInfo.style.display = "none";
    const bookingResult = document.getElementById("booking-result");
    bookingResult.style.display = "block";
    const total = document.getElementById("total").innerText;
    document.getElementById("pay-amount").innerText = total;
})