let myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
myModal.show()

function lastElement(nums) {
    if (nums.length === 0) {
        return null;
    }
    else {
        let temp = nums.length + 1;
        return nums[temp];
    }
}

const age = document.querySelector("#ageRange");
age.addEventListener('change', (evt) => {
    const hiddenItems = document.querySelectorAll(".adultOnly");
    const adultTable = document.querySelectorAll(".adultTable");
    const childTable = document.querySelectorAll(".childTable");
    const adultSizes = document.querySelectorAll(".adultSizes");
    const childSizes = document.querySelectorAll(".childSizes");
    const custHeight = document.querySelectorAll("#height");
    const custAge = age.value;

    if (custAge === "adult") {
        hiddenItems.forEach((evt) => {
            evt.classList.remove("disabled")
        });
        adultTable.forEach((evt) => {
            evt.classList.remove("hideTable")
        });
        childTable.forEach((evt) => {
            evt.classList.add("hideTable")
        });
        childSizes.forEach((evt) => {
            evt.classList.add("hideSizes")
        });
        adultSizes.forEach((evt) => {
            evt.classList.remove("hideSizes")
        });
        custHeight.forEach((evt) => {
            evt.classList.remove("hideHeight")
        });
    } else {
        hiddenItems.forEach((evt) => {
            evt.classList.add("disabled")
        })
        adultTable.forEach((evt) => {
            evt.classList.add("hideTable")
        });
        childTable.forEach((evt) => {
            evt.classList.remove("hideTable")
        });
        childSizes.forEach((evt) => {
            evt.classList.remove("hideSizes")
        });
        adultSizes.forEach((evt) => {
            evt.classList.add("hideSizes")
        });
        custHeight.forEach((evt) => {
            evt.classList.add("hideHeight")
        });
    }


    const kiltOption = document.querySelector('input[name="kiltOption"]:checked');
    if (kiltOption) {
        document.querySelector('input[name="kiltOption"]:checked').checked = false;
    }
    const jacketOption = document.querySelector('input[name="jacketOption"]:checked');
    if (jacketOption) {
        document.querySelector('input[name="jacketOption"]:checked').checked = false;
    }
    const sporranOption = document.querySelector('input[name="sporranOption"]:checked');
    if (sporranOption) {
        document.querySelector('input[name="sporranOption"]:checked').checked = false;
    }
    const shoesOption = document.querySelector('input[name="shoesOption"]:checked');
    if (shoesOption) {
        document.querySelector('input[name="shoesOption"]:checked').checked = false;
    }
    const socksOption = document.querySelector('input[name="socksOption"]:checked');
    if (socksOption) {
        document.querySelector('input[name="socksOption"]:checked').checked = false;
    }
    const flashesOption = document.querySelector('input[name="flashesOption"]:checked');
    if (flashesOption) {
        document.querySelector('input[name="flashesOption"]:checked').checked = false;
    }
    const tieOption = document.querySelector('input[name="tieOption"]:checked');
    if (tieOption) {
        document.querySelector('input[name="tieOption"]:checked').checked = false;
    }
    const tieColor = document.querySelector('input[name="tieColor"]:checked');
    if (tieColor) {
        document.querySelector('input[name="tieColor"]:checked').checked = false;
    }
    const plaidOption = document.querySelector('input[name="plaidOption"]:checked');
    if (plaidOption) {
        document.querySelector('input[name="plaidOption"]:checked').checked = false;
    }
    const beltOption = document.querySelector('input[name="beltOption"]:checked');
    if (beltOption) {
        document.querySelector('input[name="beltOption"]:checked').checked = false;
    }
    const shirtOption = document.querySelector('input[name="shirtOption"]:checked');
    if (shirtOption) {
        document.querySelector('input[name="shirtOption"]:checked').checked = false;
    }
});

const tieStyle = document.getElementsByName("tieOption");
for (let i = 0; i < tieStyle.length; i++) {
    tieStyle[i].addEventListener("change", function () {
        let val = tieStyle[i].value;
        const hideTieColor = document.querySelectorAll("#outfitTieColors");
        const blackTie = document.querySelector("#outfitTieColorsBlack");
        const hideTartan = document.querySelector("#tartanTie");

        if (age.value === "adult") {
            if (val === "straight") {
                hideTieColor.forEach((elem) => {
                    elem.classList.remove("disabled");
                })
                hideTartan.classList.remove("disabled");
                blackTie.classList.remove("disabled");
            } else if (val === "ruche") {
                hideTieColor.forEach((elem) => {
                    elem.classList.remove("disabled");
                })
                hideTartan.classList.add("disabled");
                blackTie.classList.remove("disabled");
            } else {
                hideTieColor.forEach((elem) => {
                    elem.classList.add("disabled");
                })
                hideTartan.classList.remove("disabled");
                blackTie.classList.remove("disabled");
            }

        } else {
            if (val === "straight") {
                hideTieColor.forEach((elem) => {
                    elem.classList.add("disabled");
                })
                hideTartan.classList.remove("disabled");
                blackTie.classList.add("disabled");
            } else if (val === "ruche") {
                hideTieColor.forEach((elem) => {
                    elem.classList.remove("disabled");
                })
                hideTartan.classList.add("disabled");
                blackTie.classList.remove("disabled");
            } else {
                hideTieColor.forEach((elem) => {
                    elem.classList.add("disabled");
                })
                hideTartan.classList.remove("disabled");
                blackTie.classList.add("disabled");
            }
        }
    })
};
