// let user = prompt("Please enter your PIN")

// switch (user) {
//     case "1874":
//         console.log("Ross");
//         break;
//     case "1888":
//         console.log("Phil")
//         break;
//     case "1872":
//         console.log("Craig")
//         break;
//     default:
//         console.log("Empty action received.");
// }

function lastElement(nums) {
    if (nums.length === 0) {
        return null;
    }
    else {
        let temp = nums.length + 1;
        return nums[temp];
    }
}