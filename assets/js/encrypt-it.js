/*
 * Starter file 
 */

console.log("Window loaded!");

(function() {
    "use strict";
  
    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    window.addEventListener("load", init);
  
    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.
      document.getElementById("encrypt-it").addEventListener("click", encrypt);
      document.getElementById("reset").addEventListener("click", reset);
    }
  
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
    function reset() {
        document.getElementById("result").innerText = "";
        document.getElementById("input-text").value = "";
    }

    function encrypt() {
        console.log("Button clicked!");
        var text = document.getElementById("input-text").value;
        result = document.getElementById("result");
        document.getElementsByName("text-size").forEach(element => {
            if(element.checked) {
                result.style.fontSize = element.value;
            }
        });
        if(document.getElementById("all-caps").checked)
            text=text.toUpperCase();
        if(document.getElementById("cipher-type").value == "random")
            result.innerText = randomCipher(text);
        else
            result.innerText = shiftCipher(text, 1);
    }

    function shiftCipher(text, key) {
        result = "";
        for(let i = 0; i < text.length; i++) {
            let c = text.charCodeAt(i);
            if(c >= 65 && c <= 90)
                c = (c - 65 + key) % 26 + 65;
            if(c >= 97 && c <= 122)
                c = (c - 97 + key) % 26 + 97;
            result += String.fromCharCode(c);
        }
        return result;
    }

    function randomCipher(text) {
        result = "";
        for(let i = 0; i < text.length; i++) {
            let c = text.charCodeAt(i);
            if(c >= 65 && c <= 90)
                c = Math.random() * (91 - 65) + 65;
            if(c >= 97 && c <= 122)
                c = Math.random() * (123 - 97) + 97;
            result += String.fromCharCode(c);
        }
        return result;
    }
  })();

  