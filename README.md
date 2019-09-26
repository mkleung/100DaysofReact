
100 Days of React Challenge (Build 30+ Practical Apps)
==============
### Project 1 - Button Counter   [Demo](https://t2f9h.codesandbox.io/)

What I've learned:
- create-react-app
- Function Components
- Class Components
- React Constructor
- SetState

[Source Tutorial](https://www.youtube.com/watch?v=Drp3ufpfD_Y)


### Project 2 - Stopwatch  [Demo](https://6fr6p.codesandbox.io/)

What I've learned:
- Props
- Bind
- prevState
- setInterval
- format duration package

[Source Tutorial](https://www.youtube.com/watch?v=NAx76xx40jM&t=304s)


### Project 3 - Monthly Calendar [Demo](https://193rm.codesandbox.io/)

[Source Tutorial](https://www.youtube.com/watch?v=jjMmcQ-xV00&list=PL3jWqOE6WBddjqDLa56SeG2OA0qOB_Rco)


### Project 4 - Calculator [Demo](https://mzztr.csb.app/)

[Source Tutorial](https://www.youtube.com/watch?v=ZtU7Mhf9vN8&t=409s)
  

### Project 5 - To Do List [Demo](https://ri74q.csb.app/)

What I've learned:
- prevState

[Source Tutorial](https://www.youtube.com/watch?v=h5crrOsLbpk)


### Project 6 - Quiz [Demo](https://bhm6v.csb.app/)

[Source Tutorial](https://www.youtube.com/watch?v=aq-fCtg_gG4)


### Project 7 - Tic Tac Toe [Demo](https://jyy84.csb.app/)

[Source Tutorial](https://www.youtube.com/watch?v=wjTAhHSKuPg)

### Project 8 - Map App [Demo](https://7s9cd.csb.app)


What I've learned:
- React-map-gl package (npm install --save react-map-gl)
- Setting environmental variables (npm install --save-dev dotenv)
- {process.env.API_URL}
- React Hooks (useState, useEffect, keydown)

[Tutorial Source](https://www.youtube.com/watch?v=JJatzkPcmoI&t=29s)


### Project 9 - Snake Game [Demo](https://qch74.csb.app/)

[Tutorial Source](https://www.youtube.com/watch?v=-oOgsGP3t5o&t=4s)


### Project 10 - React Router Signup [Demo](https://45g3m.csb.app/)

What I've learned:
- Private Routes

[Source Tutorial](https://www.youtube.com/watch?v=ojYbcon588A)


### Project 11 - React Hooks Starwars API [Demo](https://u4xqw.csb.app/)

[Source Tutorial](https://www.youtube.com/watch?v=-MlNBTSg_Ww)


### Project 12 - Context API Movie Database

[Source Tutorial](https://www.youtube.com/watch?v=35lXWvCuM8o)


### Project 13 - React Animations + Transitions Real Estate App

Animations
[Source Tutorial](https://www.youtube.com/watch?v=BZRyIOrWfHU)

Transitions
[Source Tutorial](https://www.youtube.com/watch?v=NUQkajBdnmQ)


### Project 14 - React Refs

[Source Tutorial](https://www.youtube.com/watch?v=tiytyGEodl0&t=235s)

### Project 15 - React - FlappyBird

[Source Tutorial](https://www.youtube.com/watch?v=pufKO5EG8nc)


REDUX
======

### Project 16 - Redux for beginners

https://www.youtube.com/watch?v=CVpUuw9XSjY&t=1928s


### Project 17 - Shopping Cart Redux

https://www.youtube.com/watch?v=T_HtlP80UYc


### Project 18  - Redux Contact List (Thunk)

https://www.youtube.com/watch?v=EfzVf4eoJ-c


### Project 19 - Redux more Theory

https://www.youtube.com/watch?v=OSSpVLpuVWA


### Project 20 - Reduxagram

https://www.youtube.com/watch?v=hmwBow1PUuo&list=PLu8EoSxDXHP5uyzEWxdlr9WQTJJIzr6jy


ADVANCED REACT
========

### Project 21 - Graph QL Blog

https://www.youtube.com/watch?v=L8XXzOR59Bs


### Project 22 - RXJS

https://www.youtube.com/watch?v=PhggNGsSQyg

### Project 23 - MobX

https://www.youtube.com/watch?v=Dp75-DnGFrU

### PRoject 24 - React Flux


### Project 25 - React Firebase


### Project 26 - Redux RPG Game Zelda

https://www.youtube.com/watch?v=QZcNGfcn-oo


REACT NATIVE
============

### Project 31 - Counter Redux Native/To Do

https://www.youtube.com/watch?v=KcC8KZ_Ga2M


### Project 32 Weather App

https://www.youtube.com/watch?v=gdk7Io8BfUA&list=PLoN_ejT35AEi6ynsLwQJN1o116SFjWuEt&index=1


### Project 33 - React Native Calculator

https://www.youtube.com/watch?v=kye4zEwDxgU


### Project 34 - Flappy Bird React Native

[Source Tutorial](https://www.youtube.com/watch?v=qBGnfULn8W4)


### Project 35 - React Native Stopwatch

https://www.youtube.com/watch?v=gWegskGYCtA


### Project 36 -Mood & Habit Tracker React Native

https://www.youtube.com/watch?v=YQj84z7VWk0&list=PLQocKVqyqZDQrUU7zUfFogbAO0ynvQK2j

  
### Project 37 - Uber clone

https://www.youtube.com/watch?v=CB_nXOOz_AY&list=PL6hffAJvRwYJTf6kuxrK4PJzjoxTqau9V

  
### NOTES

***Class Components***

- Contains state

```
class Welcome extends React.Component {
render() {
return <h1>Hello</h1>;
}
}

export default Welcome;
```

***Function Components (hooks) ***

```
import React, { useState, useEffect } from "react";
const People = props => {
    const [name, setName] = useState("");

    // ComponentWillMount
    useEffect(() => {
        setName("mike)  // setState
        console.log("component will mount");
    }, []);

    // Render
    return (div>{name}</div>)
}
```

***Component Lifecycle***

1. Constructor

- First thing that runs
- A good place where you set state

2. ComponentWillMount

- Runs after constructor
- Render has not happened yet
- Ony runs once and before render

3. Render

- Every component should have a render method
- Takes the state and prop and display on screen
- Do not use set state in render


4. ComponentDidMount

- run AFTER the render method and all child components
- make an ajax call
- Setup any subscriptions

5. ComponentWillReceiveProps

- have a glimpse of upcoming state and props
- Setstate

5. shouldComponentUpdate

- return true or false
- should render component or not.

6. ComponentWillUpdate 

- do not set state here
- called before component renders


6. ComponentDidUpdate

- Has previous props amd state
- set Third party ui elements

7. ComponentWillUnmount

- cleanup
