// JACKETS
const btnMB = document.getElementById("btnMB");
btnMB.addEventListener("click", () => {
    const imgMB = document.getElementById("imgMB");
    imgMB.classList.remove("hideImage");
    const imgMG = document.getElementById("imgMG");
    imgMG.classList.add("hideImage");
    const imgCC = document.getElementById("imgCC");
    imgCC.classList.add("hideImage");

    if (btnMB.disabled === false) {
        btnMB.disabled = true;
        btnMG.disabled = false;
        btnCC.disabled = false;
    } else {
        btnMB.disabled = false;
        btnMG.disabled = true;
        btnCC.disabled = true;
    }
});

const btnMG = document.getElementById("btnMG");
btnMG.addEventListener("click", () => {
    const imgMG = document.getElementById("imgMG");
    imgMG.classList.remove("hideImage");
    const imgMB = document.getElementById("imgMB");
    imgMB.classList.add("hideImage");
    const imgCC = document.getElementById("imgCC");
    imgCC.classList.add("hideImage");

    if (btnMG.disabled === false) {
        btnMG.disabled = true;
        btnMB.disabled = false;
        btnCC.disabled = false;
    } else {
        btnMG.disabled = false;
        btnMB.disabled = true;
        btnCC.disabled = true;
    }
});

const btnCC = document.getElementById("btnCC");
btnCC.addEventListener("click", () => {
    const imgCC = document.getElementById("imgCC");
    imgCC.classList.remove("hideImage");
    const imgMG = document.getElementById("imgMG");
    imgMG.classList.add("hideImage");
    const imgMB = document.getElementById("imgMB");
    imgMB.classList.add("hideImage");

    if (btnCC.disabled === false) {
        btnCC.disabled = true;
        btnMG.disabled = false;
        btnMB.disabled = false;
    } else {
        btnCC.disabled = false;
        btnMG.disabled = false;
        btnMB.disabled = true;

    }
});

// KILTS
const btnAP = document.getElementById("btnAP");
btnAP.addEventListener("click", () => {
    const imgAP = document.getElementById("imgAP");
    imgAP.classList.remove("hideImage");
    const imgIOS = document.getElementById("imgIOS");
    imgIOS.classList.add("hideImage");
    const imgGS = document.getElementById("imgGS");
    imgGS.classList.add("hideImage");

    if (btnAP.disabled === false) {
        btnAP.disabled = true;
        btnIOS.disabled = false;
        btnGS.disabled = false;
    } else {
        btnAP.disabled = false;
        btnIOS.disabled = true;
        btnGS.disabled = true;
    }
});

const btnIOS = document.getElementById("btnIOS");
btnIOS.addEventListener("click", () => {
    const imgIOS = document.getElementById("imgIOS");
    imgIOS.classList.remove("hideImage");
    const imgAP = document.getElementById("imgAP");
    imgAP.classList.add("hideImage");
    const imgGS = document.getElementById("imgGS");
    imgGS.classList.add("hideImage");

    if (btnIOS.disabled === false) {
        btnIOS.disabled = true;
        btnAP.disabled = false;
        btnGS.disabled = false;
    } else {
        btnIOS.disabled = false;
        btnAP.disabled = true;
        btnGS.disabled = true;
    }
});

const btnGS = document.getElementById("btnGS");
btnGS.addEventListener("click", () => {
    const imgGS = document.getElementById("imgGS");
    imgGS.classList.remove("hideImage");
    const imgIOS = document.getElementById("imgIOS");
    imgIOS.classList.add("hideImage");
    const imgAP = document.getElementById("imgAP");
    imgAP.classList.add("hideImage");

    if (btnGS.disabled === false) {
        btnGS.disabled = true;
        btnIOS.disabled = false;
        btnAP.disabled = false;
    } else {
        btnGS.disabled = false;
        btnIOS.disabled = false;
        btnAP.disabled = true;

    }
});