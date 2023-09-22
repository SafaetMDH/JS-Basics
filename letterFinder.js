/*
-The length of the word parameter cannot be less than 2.

-The length of the match parameter must be 1.

-The type of both the word and the match parameters must be string.
*/

function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

/**
 * Here are the tasks to complete:

1.Just above the for loop in the letterFinder function definition, 
declare a variable named condition1 and assign to it the following code: 
    typeof(word) == 'string' && word.length >= 2.

2.Declare a variable named condition2 on the next line and assign to it 
and assign to it a check that makes sure that the type of match is a string 
AND that the length of the match variable is equal to 1.

3.Write an if statement on the next line that 
checks that condition1 is true, and condition2 is true

4.Move the rest of the function's body into the if statement you 
wrote in the previous step.

5.Code an "else" block after the "if" condition and 
console.log the following: "Please pass correct arguments to the function.".

6.As a failing test, run the letterFinder function and pass it with 
any two numbers as arguments.

7.As a passing test, run the letterFinder funciton 
and pass it with correct arguments, such as: letterFinder("cat", "c").

 */

function letterFinder(word, match) {
    // Task 1: Declare condition1
    let condition1 = typeof(word) == 'string' && word.length >= 2;
    // Task 2: Declare condition2
    let condition2 = typeof(match) == 'string' && match.length == 1;

    // Task 3: Check conditions in an if statement
    if (condition1 && condition2) {
        // Task 4: Move the rest of the function body into this if block
        for (i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        // Task 5: Add an else block
        console.log("Please pass correct arguments to the function.");
    }
}

// Task 6: Failing test
letterFinder(1, 2);

// Task 7: Passing test
letterFinder("cat", "c");