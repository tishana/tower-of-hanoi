# tower-of-hanoi
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
if selected disk is larger than disk on selected pole(check the width attribute of both), alert "Nope, can't do that!"

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
