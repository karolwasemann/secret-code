# Przeprogramowani.pl - Master JavaScript

Module II. - Browser without secrets

## Exercise 6 - The secret code

### How to get started

Click the "Fork" button at the top of the editor to copy the exercise.

### Exercise goal

Your goal is to code the logic of a secret code logging device.

Your device should support three types of buttons:

* Numeric buttons, with which you will build a secret code.
* A `Save` button, which when pressed should display the recorded code
* A `Reset` button, when pressed you should be able to register a new code and hide the one previously stored

Example of operation:

1. the user presses the sequence 1-2-2-4
2nd The user presses the `Save` button
3. the display shows the saved code "1224"
4 The user presses the "Reset" button
5 The user presses sequences 5-2-7-1
6. the display shows the stored code "5271"

Tips:

* You will refer to the display via the `display` class.
* Buttons are referenced by the `keyboard__button` class.
* Get the value of the button from the `data-value` attribute - based on the value you should decide if you are working with a numeric button or a function button

Translated with www.DeepL.com/Translator (free version)
