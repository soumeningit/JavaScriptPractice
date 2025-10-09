let delay = 4000;
let timeout;
let lastExecutionTime = 0;

const handleInputChange = (event) => {
    let currentTime = Date.now();
    if (currentTime - lastExecutionTime >= delay) {
        lastExecutionTime = currentTime;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log("Need to call API : " + event.target.value);
        }, delay);
    } else {
        console.log("Wait : " + event.target.value);
    }
}

/*
    Within a time window if any api call or any kind of function is called,
    just avoid that after completion of the time window, call the function,
    or API.
*/