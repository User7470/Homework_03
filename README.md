# Homework_03: Password Generator
# Functionality
In this project I coded an interactive password generator that would prompt the user for input and then generate a password based on their input.

The user is to push the button in order to begin password generation

The password can only be within 8-128 characters or the user will be prompted again for their input on the length of the desired password.

The user is prompted on whether they would like to include numbers, uppercase letters, lowercase letters, and/or symbols within their generated password. If all possible options are denied the user will be alerted that they must choose at least one option and they will be set back briefly to length selection.

Depending on what is selected, the password will then be generated according to the provided guidelines.

If the user should wish to create a new password, the button may be pressed again to repeat the process and replace the displayed password
------------------------------------------------------------------------
# Known Unresolved Issues
I had yet to implement a way to check for if a given password contains at least one of each specified character after generation. While often unlikely, this is still a potential issue with the password generation.

Code is functional yet likely lacks many forms of optimization to lower the amount of code needed, I was unaware of better methods that could be used for this but pretty certain it would have been possible, some parts seemed quite excessive.