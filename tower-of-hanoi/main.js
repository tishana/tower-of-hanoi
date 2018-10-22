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
let d1 = document.querySelector("#one");
let d2 = document.querySelector("#two")
let d3 = document.querySelector("#three");
let d4 = document.querySelector("#four");
let d5 = document.querySelector("#five");
let d6 = document.querySelector("#six")

let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")