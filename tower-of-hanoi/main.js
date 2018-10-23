/*
create variables for all elements:
all 3 poles
all disks

all poles can have a maximum of 6 disks, minimum of 0.

all disks on poles must stack in size order, smallest on top, largest on bottom

move selected disk to selected pole:
<select disk>
user clicks disk
<select new pole>
user clicks pole where disk will go
<move disk to pole>
if there is no disk on selected pole, disk appears on pole
if selected disk is larger than disk on seleced pole(check the width attribute of both), alert "Nope, can't do that!"

when all disks are present on third pole, player wins, (alert "You win!")

*/

/*
Game Functions:

When a tower (sending div) is clicked, browser waits for a second click on a new tower(receiving div).

If there is a disk (moving disk) in receiving div, it is compared to the topmost disk from the sending div. 

If moving disk is larger than the topmost disk in the receiving div, a move IS NOT allowed.

If moving disk is smaller than the topmost disk, a move IS allowed.

Reset button places all disks in first div.
*/

let d1 = document.querySelector("#one");
let d2 = document.querySelector("#two")
let d3 = document.querySelector("#three");
let d4 = document.querySelector("#four");
let d5 = document.querySelector("#five");
let d6 = document.querySelector("#six")

let p1 = document.querySelector("#poleOne")
let p2 = document.querySelector("#poleTwo")
let p3 = document.querySelector("#poleThree")
let reset = document.querySelector(".reset")



addDisks = function (tower) {//adding disk to receiving tower

}
compareDisks = function () {//compare sizes of disks being stacked
    // if (tower1.)
}
clearDisk = function (sTower, rTower) {// remove top disk from sending tower
    // evt.preventDefault();

    let oldChild = sTower.removeChild(sTower.querySelectorAll(".disk")[0])
    rTower.appendChild(oldChild)
    // tower.removeChild(oldChild);
    console.log("help")
}

let disks = document.querySelectorAll(".disk")
resetGame = function (evt) {
    //refreshes screen
    // remove disks from all other towers (poleTwo, poleThree)
    //get all disk divs (one, two, three, four, five, six)
    // disks.forEach((ele) => {
    //     ele.setAttribute("parentNode", "div#p1")
    // }//move to first tower (poleOne)
    alert("OMG, I'm clicked already!")//to test 
}

reset.addEventListener('click', resetGame)


p1.addEventListener('click', function () {// remove top disk from sending tower
    if (p1.querySelectorAll(".disk").length > 0) {
        // if (p1.querySelectorAll[0].attributes.class.ownerElement.clientWidth > p2.querySelectorAll[0].attributes.class.ownerElement.clientWidth) {
        let oldChild = p1.removeChild(p1.querySelectorAll(".disk")[0])
        p2.appendChild(oldChild)
        // } else ("Nope, can't put a larger disk on a smaller disk...")
    } else {
        alert("No more disks on this pole...")
    }
})

p2.addEventListener('click', function () {
    if (p2.querySelectorAll(".disk").length > 0) {
        let oldChild = p2.removeChild(p2.querySelectorAll(".disk")[0])
        p3.appendChild(oldChild)
    } else {
        alert("No more disks on this pole...")
    }
})

p3.addEventListener('click', function () {
    if (p3.querySelectorAll(".disk").length > 0) {
        let oldChild = p3.removeChild(p3.querySelectorAll(".disk")[0])
        p1.appendChild(oldChild)
    } else {
        alert("No more disks on this pole...")
    }
})
