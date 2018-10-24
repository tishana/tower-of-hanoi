/*
see readme.md file for game function
*/
inPlay = false // this determines is a disk has already been selected
oldChild = undefined // this will be the disk being moved to another tower
let p1 = document.querySelector("#poleOne") // first pole
let p2 = document.querySelector("#poleTwo") // second pole
let p3 = document.querySelector("#poleThree") //third pole
let reset = document.querySelector(".reset") // reset button

checkGame = () => {// see if user has completed game
    if (p3.childElementCount === document.querySelectorAll('.disk').length) {
        alert("You Win!")
    }
}
addDisks = (tower) => {//adding disk to receiving tower when receiving tower is empty
    tower.appendChild(oldChild)
    oldChild.style.backgroundColor = "#e0f2e9"
    oldChild = undefined
    inPlay = false

}

selectDisk = (tower) => {// user selects top disk from sending tower
    oldChild = tower.querySelectorAll(".disk")[0]
    oldChild.style.backgroundColor = "red"
    inPlay = true
}
deselectDisk = () => {// user deselects top disk from sending tower
    oldChild.style.backgroundColor = "#e0f2e9"
    oldChild = undefined
    inPlay = false

}
moveDisk = (tower) => {// when user can mak a legal move
    tower.insertBefore(oldChild, tower.children[0])
    oldChild.style.backgroundColor = "#e0f2e9"
    oldChild = undefined
    inPlay = false
}

resetGame = function () {
    location.reload(true)//refreshes screen
}

reset.addEventListener('click', resetGame)


p1.addEventListener('click', function () {// remove top disk from sending tower
    if (p1.querySelectorAll(".disk").length > 0 && inPlay === false) {
        // user wants to select disk
        selectDisk(p1)

    } else if (inPlay === true && oldChild.parentElement.id === "poleOne") {
        // user wants to deselect disk
        deselectDisk()
    } else if (inPlay === true && p1.childElementCount == 0) {
        // user wants to move a disk to an empty tower
        addDisks(p1)
    } else if ((inPlay === true) && (oldChild.clientWidth < p1.children[0].clientWidth)) {
        // user wants to move selected disk to another tower
        moveDisk(p1)
        checkGame()
    } else {
        alert("Nah, son...")
    }
})

p2.addEventListener('click', function () {

    if (p2.querySelectorAll(".disk").length > 0 && inPlay === false) {
        // user wants to select a disk
        selectDisk(p2)

    } else if (inPlay === true && oldChild.parentElement.id === "poleTwo") {
        // user wants to deselect disk
        deselectDisk()
    } else if (inPlay === true && p2.childElementCount == 0) {
        // user wants to move a disk to an empty tower
        addDisks(p2)
    } else if ((inPlay === true) && (oldChild.clientWidth < p2.children[0].clientWidth)) {
        // user wants to move selected disk to another tower
        moveDisk(p2)
        checkGame()
    } else {
        alert("Nah, son...")
    }
})

p3.addEventListener('click', function () {
    if (p3.querySelectorAll(".disk").length > 0 && inPlay === false) {
        // user wants to select a disk
        selectDisk(p3)
    } else if (inPlay === true && oldChild.parentElement.id === "poleThree") {
        // user wants to deselect disk
        deselectDisk()
    } else if (inPlay === true && p3.childElementCount == 0) {
        // user wants to move a disk to an empty tower
        addDisks(p3)
    } else if ((inPlay === true) && (oldChild.clientWidth < p3.children[0].clientWidth)) {
        // user wants to move selected disk to another tower
        moveDisk(p3)
        checkGame()
    } else {
        alert("Nah, son...")
    }
})
/* // *** OLD LOGIC- 
when set to each tower, simply moves disks to the next tower, no rules. 
p2.addEventListener('click', function () {
    if (p2.querySelectorAll(".disk").length > 0) {
        let oldChild = p2.removeChild(p2.querySelectorAll(".disk")[0])
        // let p2Div = p2.children[0].attributes.class.ownerElement.clientWidth
        // let p3Div = p3.children[0].attributes.class.ownerElement.clientWidth
        // if (p2Div < p3Div) {
        p3.insertBefore(oldChild, p3.children[0])//console.log(p2Div + " , " + p3Div)
        // } else {
        //     alert("Nope, illegal move, son...")
        //     p2.appendChild(oldChild, p2.children)
        // }
    } else {
        alert("No more disks on this pole...")
    }
})

*/