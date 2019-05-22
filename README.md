# FIZZ BUZZ

#### _A Programm that replaces numbers with words like 'fizz' and 'buzz'_.

#### By _**Josh Hortt**_
_version: 17/05/2019_

## Description

_This program uses jQuery to gather numerical user input from a form and display_</br>
_every integer up to that number to the user, replacing numbers divisible by 3, 5 and 15_</br>
_with the words: 'fizz', 'buzz' and 'fizz-buzz' respectively. The 'setTimeout' method_</br>
_is used to delay the display of numbers, while randomly selecting a new background colors_.

## Coding Problem Specifications

  - Displays and counts up to a provided number.
    - **Example Input:** 2
    - **Example Output:** [1,2]
  - Recognizes numbers divisible by 3 and replaces them with the word 'fizz'
    - **Example Input:** 4
    - **Example Output:** [1,2,"ping",4]
  - Recognizes numbers divisible by 5 and replaces them with the word 'buzz'
    - **Example Input:** 6
    - **Example Output:** [1,2,"fizz",4,"buzz",6]
  - Recognizes numbers divisible by 15 and replaces them with the word 'fizz-buzz'
    - **Example Input:** 15
    - **Example Output:** [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizz-buzz"]
  - Alerts user when input is invalid. Valid input should be non-zero integers.
    - **Example Input:** "fizz"
    - **Example Output:** Invalid Input
  - Clears screen and provides new output if user resubmits form.
    - **Example 1st Input:** 5
    - **Example 1st Output:** [1,2,"fizz",4,"buzz"]
    - **Example 2nd Input:** 2
    - **Example 2nd Output:** [1,2]
  - Displays all integers from user's input back to one if 'reverse' button is selected
  - Displays delayed output, and alternates background colors if user selects 'advance' button
  - Clears any remaining delay from previous output if user clicks 'validate' before display is complete
  - Clears displayed output to start view if user clicks 'reset' button

## Setup/Installation Requirements

_Clone repository in a shell using the command_:</br>
`git clone https://github.com/joshhortt/fizz-buzz`

## Known Bugs

_There are no known bugs at this current time._

## Support and contact details

_If you have any questions or find any issues with the site, get in touch. My email is: joshhortt@yahoo.com_

## Technologies Used

* JavaScript-Vanilla
* JQuery-3.4.0.
* Bootstrap-4
* CSS-3
* HTML-5

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Josh Hortt_**
