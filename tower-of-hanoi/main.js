/*
see readme.md file for game function
*/
inPlay = false // this determines is a disk has already been selected
oldChild = undefined // this will be the disk being moved to another tower
let p1 = document.querySelector("#poleOne") // first pole
let p2 = document.querySelector("#poleTwo") // second pole
let p3 = document.querySelector("#poleThree") //third pole
let reset = document.querySelector(".reset") // reset button

addDisks = (tower) => {//adding disk to receiving tower

}
compareDisks = () => {//compare sizes of disks being stacked
    // if (tower1.)
}
clearDisk = function (sTower, rTower) {// remove top disk from sending tower
    // evt.preventDefault();

    let oldChild = sTower.removeChild(sTower.querySelectorAll(".disk")[0])
    rTower.appendChild(oldChild)
    // tower.removeChild(oldChild);
    console.log("help")
}
moveDisks = function () {
    let these = p3.querySelectorAll(".disk")
    let those = p2.querySelectorAll(".disk")
    if (these[0].attributes.class.ownerElement.clientWidth < those[0].attributes.class.ownerElement.clientWidth) {
        alert("Too big... ")
    }
}

let disks = document.querySelectorAll(".disk")
resetGame = function (evt) {
    //refreshes screen
    // remove disks from all other towers (poleTwo, poleThree)
    //get all disk divs (one, two, three, four, five, six)
    // disks.forEach((ele) => {
    //     ele.setAttribute("parentNode", "div#p1")
    // }//move to first tower (poleOne)
    // alert("OMG, I'm clicked already!")//to test 
}

reset.addEventListener('click', resetGame)


p1.addEventListener('click', function () {// remove top disk from sending tower
    if (p1.querySelectorAll(".disk").length > 0 && inPlay === false) {
        oldChild = p1.querySelectorAll(".disk")[0]
        oldChild.style.backgroundColor = "red"
        inPlay = true
    } else if (inPlay === true && p1.childElementCount == 0) {
        p1.appendChild(oldChild)
        oldChild.style.backgroundColor = "#e0f2e9"
        oldChild = undefined
        inPlay = false
    } else if ((inPlay === true) && (oldChild.clientWidth < p1.children[0].clientWidth)) {
        p1.insertBefore(oldChild, p1.children[0])
        oldChild.style.backgroundColor = "#e0f2e9"
        oldChild = undefined
        inPlay = false
    } else {
        alert("Nah, son...")
    }
})

p2.addEventListener('click', function () {

    if (p2.querySelectorAll(".disk").length > 0 && inPlay === false) {
        oldChild = p2.querySelectorAll(".disk")[0]
        oldChild.style.backgroundColor = "red"
        inPlay = true

        // p3.insertBefore(oldChild, p3.children[0])//console.log(p2Div + " , " + 
    } else if (inPlay === true && p2.childElementCount == 0) {
        p2.appendChild(oldChild)
        oldChild.style.backgroundColor = "#e0f2e9"
        oldChild = undefined
        inPlay = false
    } else if ((inPlay === true) && (oldChild.clientWidth < p2.children[0].clientWidth)) {
        p2.insertBefore(oldChild, p2.children[0])
        oldChild.style.backgroundColor = "#e0f2e9"
        oldChild = undefined
        inPlay = false
    } else {
        alert("Nah, son...")
    }
})

p3.addEventListener('click', function () {
    if (p3.querySelectorAll(".disk").length > 0 && inPlay === false) {
        oldChild = p3.querySelectorAll(".disk")[0]
        oldChild.style.backgroundColor = "red"
        inPlay = true
    } else if (inPlay === true && p3.childElementCount == 0) {
        p3.appendChild(oldChild)
        oldChild.style.backgroundColor = "#e0f2e9"
        oldChild = undefined
        inPlay = false
    } else if ((inPlay === true) && (oldChild.clientWidth < p3.children[0].clientWidth)) {
        p3.insertBefore(oldChild, p3.children[0])
        oldChild.style.backgroundColor = "#e0f2e9"
        oldChild = undefined
        inPlay = false
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