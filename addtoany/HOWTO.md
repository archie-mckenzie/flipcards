# Open-Source Flipcards

Follow these steps to add this code to your web page:

1. Reference the stylesheet (flipcards.css) by copying line 3 from addme.html into your page's HTML. 

2. Reference the JavaScript (flipcards.js) by copying line 7 from addme.html into your page's HTML.

3. Add the HTML elements by copying lines 12 to 26 from addme.html into your page's HTML in the \< Body \> tag. These should conform to your page's existing design rules.

4. Add the icon graphics by copying the icons folder to your website.

5. Add the images by creating a new folder called 'images' and copying your images to it.

6. Add the stylesheet (flipcards.css) by copying the file called 'flipcards.css' to your webpage folder. If you need to change something about the design of the visible elements (such as the color of the buttons), edit that here.

7. Add the JavaScript (flipcards.js) by copying the file called 'flipcards.js' to your webpage folder.

8. Add your card images to the JavaScript deck. Do this by writing your images into to the deck structure. 

    const deck = [...] 

9. Reference the card images you want to appear when the page first loads.

    \<img class="flip-card-image" id="front" src="images/front.png" alt="front">

    \<img class="flip-card-image" id="back" src="images/back.png" alt="back"> 

10. Make sure all the paths are correct. For example, if your HTML references "flipcards.css", then make sure flipcards.css is in the same folder. If your HTML references "css/flipcards.css" make sure flipcards.css is in a folder called "css". Do the same for JavaScript and images.

