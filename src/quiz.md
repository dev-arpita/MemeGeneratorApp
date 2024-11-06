1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

a. New value of state (setCount(42))
b. Callback function - whatever the callback function
returns === new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?

Whenever you don't need the previous value of state to determine
what the new value of state should be.

3. When would you want to pass the second option (from answer
   above) to the state setter function?

Whenever you DO need the previous value to determine the new value
--------------------
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on a condition of some sort


2. When would you use &&?
When you want to either display something or NOT display it


3. When would you use a ternary?
When you need to decide which thing among 2 options to display


4. What if you need to decide between > 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement


function App() {
    let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        ...
    } else {
        ...
    }
    return (
        <div>{someVar}</div>
    )
}