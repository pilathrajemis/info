# React
**Components**
- Core building blocks for making reusable pieces of Html entities.
 
**JSX**
- JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
 
**Why React**
- Open Source
- Virtual DOM  (React is fast)
- Reusable Web Components
- Maintained by Facebook

 
## Adding style to JSX elemement
- use className for class 
- use js object for style.
```js
function App(){
const timeOfDay = "Morning"
return (
    <h1 style={{color:"#ff0000", backgroundColor:"#aa0000"}} className="title1">Good {timeOfDay}!</h1>
  )
}
```
