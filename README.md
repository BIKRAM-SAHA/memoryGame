#Memory Game

A code along project from the following video (https://www.youtube.com/watch?v=lhNdUVh3qCc&t)[https://www.youtube.com/watch?v=lhNdUVh3qCc&t]

##Improvements by me
1. isuue: in original code choosing the same card twice was captured as a win.
   solution: implemented logic to trigger flipCard() function only if the card id was not added earlier
2. issue: in original code fliping already won card was allowed.
   solution: implemented new array to keep track of card id of already won cards and trigering flipCard() only if the card id was not in the won cards
3. issue: in original code to restart the game you had to reload the entire page.
   solution: implemented a new button with .eventListener of Restart function.