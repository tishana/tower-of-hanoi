Tower of Hanoi Game

From Wikipedia (https://en.wikipedia.org/wiki/Tower_of_Hanoi): 
*** "The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower[1] and sometimes pluralized) is a mathematical game or puzzle. It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
No disk may be placed on top of a smaller disk."***

Game Functions:

When a tower (sending tower) is clicked, the topmost disk is selected, and it turns red.

If there is a disk (moving disk) in receiving tower, it is compared to the topmost disk from the sending tower. 

If moving disk is larger than the topmost disk in the receiving tower, a move IS NOT allowed, and an alert is sent.

If moving disk is smaller than the topmost disk, a move IS allowed, the moving disk is moved to the new tower, and it's color returns to white.

When all disks are moved to the rightmost tower, the player wins!

Reset button places all disks in first tower.
*/
