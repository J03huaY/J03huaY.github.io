## What went into the package and what stayed in the app? Describe one thing you were unsure about, and how you decided

The game logic and rules went into the pacakge while the components stayed in the app. I was not sure about the possibility of generating a 2 or 4 while Claude Code told me it was 9:1 but I finally decided to do a 1:1. Also, the logic of doing different directions was also challenging.

## Since you needed to migrate project 1 over, discuss the pros/cons of moving it over to Svelte vs keeping it as pure HTML/CSS
I think the best thing is about accessibility and how convinient it is to reuse. You can just use the components in any class file you want.

## Now that you are juggling a library and an app, what can you do to make sure that both are in sync (ie, you don’t push a breaking change into your library)
One thing is to make sure you only add to your package without modifying anything existed.

## What issues did you have learning Svelte?  Do you feel like you mastered it or you are still struggling with the concepts?  Do you think it made this work any easier?
Given more time, what would you add?
One thing is that I did not quite understand how to use $props() even though it was the very basic. I don't feel like I mastered it but I think it is easier to understand it as something similar to java. For now, I don't think it makes project 2 easier, but it will make the future work easier when there are more components in this website. Given more time, I would work on fancy animations when moving the tiles. I think that would make my project unique.


## How many hours did you spend? 
15 Hours.

## (Optional) What assumptions did you make about this assignment?
I assumed this one should be easier since it is just one game page but publishing packages and other stuff made it more time consuming.

## List any code, design, or packages you took from elsewhere, including use of AI

VS Code’s autocomplete suggested some code even after I turned off Copilot at first. I asked Claude Code to do the Svelte migration of project 1 for me and I asked Claude Code to write the first version of the 2048 page, the Tile component, and some CSS components for mobile usage. Also, all the tests, READEME, and CHANGELOG. 
I wrote the core game logic in the package and most of the game state, and the Board, ScoreBoard, GameStatus and ArrowPad components, with Claude guiding me and debugging for me.
The game itself is based on the original 2048 by Gabriele Cirulli. The site is built with SvelteKit, Svelte and Vite, and deployed with @sveltejs/adapter-static.
