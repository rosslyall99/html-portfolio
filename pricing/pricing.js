let totalPrice = 0;

// Dynamically assign collection and return dates
document.querySelector("#pFuncDate").addEventListener("change", function () {
    let fDate = (new Date(this.value));

    let tempCDate = new Date();
    tempCDate.setDate(fDate.getDate() - 2);
    let cDate = tempCDate.toISOString().split('T')[0];
    pColDate.value = cDate;

    let tempRDate = new Date();
    tempRDate.setDate(fDate.getDate() + 2);
    let rDate = tempRDate.toISOString().split('T')[0];
    pRetDate.value = rDate;

    return extraNights = 0;
});

// Calculate Extra Nights
const inputDate = document.querySelectorAll(".inputDate");
for (let i = 0; i < inputDate.length; i++) {
    inputDate[i].addEventListener("change", function () {
        let eNights = 0;
        let mcDate = new Date(pColDate.value);
        let mrDate = new Date(pRetDate.value);
        eNights = ((mrDate - mcDate) / 86400000) - 4;

        if (eNights > 0) {
            eNights = ((mrDate - mcDate) / 86400000) - 4;
        } else {
            eNights = 0;
        };
        return extraNights = eNights;
    });
};

// Outfit Quantities
let stanAdult = 0;
let stanKid = 0;
let premAdult = 0;
let premKid = 0;
let hatAdult = 0;
let studHire = 0;

document.querySelector("#standardOutfitA").addEventListener("change", function () {
    return stanAdult = parseInt(this.value);
});

document.querySelector("#standardOutfitK").addEventListener("change", function () {
    return stanKid = parseInt(this.value);
});

document.querySelector("#premiumOutfitA").addEventListener("change", function () {
    return premAdult = parseInt(this.value);
});

document.querySelector("#premiumOutfitK").addEventListener("change", function () {
    return premKid = parseInt(this.value);
});

document.querySelector("#HATOutfitA").addEventListener("change", function () {
    return hatAdult = parseInt(this.value);
});

document.querySelector("#studentDisc").addEventListener("change", function () {
    return studHire = parseInt(this.value);
});

let brownShoes = 0;
let copperSporran = 0;
let plaidExtra = 0;
let beltExtra = 0;
let shirtExtra = 0;

// Extras Quantities
document.querySelector("#brownShoes").addEventListener("change", function () {
    return brownShoes = parseInt(this.value);
});

document.querySelector("#copperSporran").addEventListener("change", function () {
    return copperSporran = parseInt(this.value);
});

document.querySelector("#plaidExtra").addEventListener("change", function () {
    return plaidExtra = parseInt(this.value);
});

document.querySelector("#beltExtra").addEventListener("change", function () {
    return beltExtra = parseInt(this.value);
});

document.querySelector("#shirtExtra").addEventListener("change", function () {
    return shirtExtra = parseInt(this.value);
});

// Outfit Prices
const inputCalc = document.querySelectorAll(".inputCalc");
for (let i = 0; i < inputCalc.length; i++) {
    inputCalc[i].addEventListener("change", function () {
        let stanAdultPrice = 0;
        let premAdultPrice = 135;
        let hatAdultPrice = 350;
        let stanKidPrice = 0;
        let premKidPrice = 125;
        let brownShoesPrice = 10;
        let copperSporranPrice = 30;
        let plaidExtraPrice = 30;
        let beltExtraPrice = 30;
        let shirtExtraPrice = 20;
        let studentPrice = 62.5 + (extraNights * 5);
        let totalOutfits = stanAdult + stanKid + premAdult + premKid + hatAdult;

        if (servicesDisc.checked === false) {
            if (totalOutfits > 0 && totalOutfits <= 5) {
                stanAdultPrice = 125 + (extraNights * 10);
                stanKidPrice = 115 + (extraNights * 10);
            } else if (totalOutfits >= 6 && totalOutfits <= 10) {
                stanAdultPrice = 110 + (extraNights * 10);
                stanKidPrice = 100 + (extraNights * 10);
            } else if (totalOutfits >= 11 && totalOutfits <= 15) {
                stanAdultPrice = 105 + (extraNights * 10);
                stanKidPrice = 95 + (extraNights * 10);
            } else if (totalOutfits >= 16 && totalOutfits <= 20) {
                stanAdultPrice = 100 + (extraNights * 10);
                stanKidPrice = 90 + (extraNights * 10);
            } else if (totalOutfits >= 21 && totalOutfits <= 25) {
                stanAdultPrice = 95 + (extraNights * 10);
                stanKidPrice = 85 + (extraNights * 10);
            } else {
                stanAdultPrice = 90 + (extraNights * 10);
                stanKidPrice = 80 + (extraNights * 10);
            };
        } else {
            stanAdultPrice = 125 + (extraNights * 10);
            stanKidPrice = 115 + (extraNights * 10);
        }

        let totalPrice =
            ((stanAdult - studHire) * stanAdultPrice) +
            (stanKid * stanKidPrice) +
            (premAdult * premAdultPrice) +
            (premKid * premKidPrice) +
            (hatAdult * hatAdultPrice) +
            (brownShoes * brownShoesPrice) +
            (copperSporran * copperSporranPrice) +
            (plaidExtra * plaidExtraPrice) +
            (beltExtra * beltExtraPrice) +
            (shirtExtra * shirtExtraPrice);

        if (servicesDisc.checked === true) {
            totalPrice = (totalPrice * 0.8) + (studHire * studentPrice);
        } else {
            totalPrice = totalPrice + (studHire * studentPrice);
        }

        runningTotal.innerText = totalPrice.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP"
        });
    });
};

// Calculate Services Discount
document.querySelector("#servicesDisc").addEventListener("change", function () {
    if (servicesDisc.checked === true) {
        servicesDiscLabel.innerText = "Services Discount Applied";
    } else {
        servicesDiscLabel.innerText = "Services Discount Not Applied";
    };
});