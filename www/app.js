import init, { Counter } from './wasm_counter.js';

async function run() {
    await init();

    // Create a new Counter instance
    const counter = Counter.new();

    // Function to update the counter value in the HTML
    function updateCounterValue() {
        document.getElementById('counter-value').textContent = counter.get_value();
    }

    // Initial update
    updateCounterValue();

    // Functions to handle button clicks
    window.incrementCounter = function () {
        counter.increment();
        updateCounterValue();
    };

    window.decrementCounter = function () {
        counter.decrement();
        updateCounterValue();
    };
}

run();
