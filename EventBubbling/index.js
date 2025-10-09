const grandParent = document.getElementById('grand-parent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, false);

parent.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

child.addEventListener("click", () => {
    console.log("Child clicked");
}, true);

/*
    true means the event listener will be executed in the capturing phase,
    false means the event listener will be executed in the bubbling phase.
*/

/*
    Events in JavaScript are actions that happen in the browser, such as clicks, key presses,
    on the keyboard etc and JavaScript can be used to "listen" for these events and execute 
    code in response. 
*/

/*
    An event has three phases:
    1. Capturing Phase: The event starts from the root and goes down to the target element.
    2. Target Phase: The event reaches the target element.
    3. Bubbling Phase: The event bubbles up from the target element back to the root.

    grandParent.addEventListener("click", () => {
    console.log("Grandparent clicked");
    }, false);

    parent.addEventListener("click", () => {
        console.log("Parent clicked");
    }, true);

    child.addEventListener("click", () => {
        console.log("Child clicked");
    }, true);

    for this code, if the parent element is clicked, the output will be:
    Parent clicked
    Grandparent clicked
    Because when parent is clicked, the event starts from the parent element in the capturing
    phase and goes down to the child element, then it bubbles up to the grandparent element.
    As, the grand parent element make as false so it is listing for the bubbling phase not 
    for the capturing phase. So, the grandparent element will not be executed in the capturing
    phase. Now the event reach the target element that is parent element and it will execute
    and the child is not part of the capturing phase so it will not be executed.
    Then the bubbling phase starts and the event bubbles up to the grandparent element
    and it will execute the code in the grandparent element.
    So, the output will be:
    Parent clicked
    Grandparent clicked
*/