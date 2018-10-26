# Tower of Hanoi Game/ Project 1


This game is my first project in the Web Development Immersive Program at General Assembly.
It is my version of the Tower of Hanoi game.

More information about the origins of the game: https://en.wikipedia.org/wiki/Tower_of_Hanoi 

![Three towers, one with 4 disks on it](https://i.imgur.com/wT9iBWn.png)

--------------------------------------------
## Game Functions:

When a tower (**sending tower**) is clicked, the topmost disk is selected, and it turns red.

![A red disk in play on a tower](https://i.imgur.com/h9PrJKm.png)

If there is a disk (**moving disk**) in receiving tower, it is compared to the topmost disk from the sending tower. 

If moving disk is larger than the topmost disk in the receiving tower, a move **IS NOT** allowed, and an alert is sent.

If moving disk is smaller than the topmost disk, a move **IS** allowed, the moving disk is moved to the new tower, and it's color returns to white.

When all disks are moved to the rightmost tower, the player wins! **YAY!**

Reset button places all disks in first tower.

--------------------------------------------
## User Stories:

- I can select a disk to move by clicking on its tower.

- I can deselect a disk my clicking on its tower after I have selected the disk.

- I can move a disk to a new tower (within game rules) by clicking on the new tower.

- I can be alerted when I am making an illegal move.

- I can be alerted when I have won the game.

- I can reset the game by clicking the reset button.


--------------------------------------------

## Built With:

1. HTML for the basic structure of the webpage

2. CSS to style the towers and disks

3. Javascript for the game structure and logic

4. Coolors  https://coolors.co/app  for the basic color scheme

![Soft shades of green and brown](https://i.imgur.com/Vc5Rc2D.png)


--------------------------------------------

## How I built this game:

First, I sketched onto paper how I wanted the game to appear in the browser. I also created user stories for the game, and made note of the rules. Once I began to code this project, I built out divs for each component of my game: disks, towers, the gameboard. I used Coolors to get a color scheme for my project (All colors are noted in the css file), opting to use softer colors for all components, and keeping the brighter color to highlight the chosen disk.

I was _frustrated_ by how the disks wouldn't stack over the towers visually. The disk divs offset the tower, making the make the game look weird. So I decided to take a screen shot of the three tower images I built in HTML/CSS (without the disks) and use that screen shot as a background image for the game. 

![Three towers for the game](https://i.imgur.com/SbbHud2.png)

I used Flexbox to make the three tower divs align with the three towers in the image. I also used flex to keep the disks centered and sticky to the bottom of the tower divs.

Next came functionality. I knew I needed **the most basic function**, to make the disks move from one tower to another. So I assigned a variable to each tower div and to each disk. My original thought was to add a disk based on the id, but I was having difficulty targeting the disk in the DOM. When that failed, I opted to make a disk move to the next tower when the tower was clicked using addEventListener. I set a variable for the chosen disk, then added it to the next tower. This worked, but I was using the appendChild method and the disks were being added to the bottom, not the top. I used the insertBefore method to get the disk to the top. However, if a tower was empty, there was nothing to use the insertBefore method for, and I used the appendChild method for those cases. I was then able to move any disk to any tower by clicking the tower. **Success**

The game was coming together, but I needed the logic to follow the game rules. I used if/else if/else statements with boolean logic to follow rule patterns, added a variable to note when a disk is in play (making moving any other disk illegal), and my game was working according to the rules.

Lastly, I tried to make the code as dry as I possibly could, making reusable functions and calling them within the event listeners for each button. 

All in all, this project was the most challening thing I've done! Also, looking back on the homework and labs, everything makes so much more sense... Go figure...

--------------------------------------------

## Acknowledgements:

I'd like to thank our instructors, Hector Guevara and Don McLamb for challenging me to find the solutions on my own, and helping me "keep my problems small".

I'd also like to thank Jimmy Byess for helping me target the disks. That really propelled my project!

Last, but certainly not least, I'd like to thank my cohort-mates because we all struggled through this together!