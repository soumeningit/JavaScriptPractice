let timeout;

function handleInputChange(event) {

    console.log("Input changed:", event.target.value);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
        console.log("Processing input:", event.target.value);
    }, 300);

}

function handleSubmit(event) {
    event.preventDefault();
    clearTimeout(timeout);
    console.log("Form submitted!");
}

/* 
    Debouncing is a technique used to limit the rate at which a function is executed.
    It ensures that a function is not called too frequently, especially in response to 
    events like input changes or window resizing. In this example, we debounce the input 
    change event to avoid processing the input too often, which can be useful for
    performance optimization, especially when dealing with API calls or heavy computations.
*/