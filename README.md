100 Days of React Challenge
===========================

### Project 1 - Button Counter

[Demo](https://t2f9h.codesandbox.io/)

What I've learned:
- create-react-app
- Function Components
- Class Components
- React Constructor
- SetState

Sources
https://www.youtube.com/watch?v=Drp3ufpfD_Y

Challenge: How often do you check you phone Counter

---

### Project 2 - Stopwatch


[Demo](https://6fr6p.codesandbox.io/)

What I've learned:
- Props
- Bind
- prevState
- setInterval
- format duration package

Sources
https://www.youtube.com/watch?v=NAx76xx40jM&t=304s


Challenge: Timer

---

### Project 3 - Calendar


[Demo](https://193rm.codesandbox.io/)

Sources:
https://www.youtube.com/watch?v=jjMmcQ-xV00&list=PL3jWqOE6WBddjqDLa56SeG2OA0qOB_Rco

Challenge: Change months

---

### Project 4 - Calculator


[Demo](https://mzztr.csb.app/)


Sources:
https://www.youtube.com/watch?v=ZtU7Mhf9vN8&t=409s

Challenge: Tax + Tip Calculator

---

### Project 5  - To Do List

[Demo](https://ri74q.csb.app/)

What I've learned:
- prevState

Sources: 
https://www.youtube.com/watch?v=h5crrOsLbpk

Challenge: Daily Schedule List + Calendar Component from Project 3

---

### Project 6 - Quiz

https://www.youtube.com/watch?v=aq-fCtg_gG4


Challenge: Multistep Form

https://www.youtube.com/watch?v=zT62eVxShsY

---

### Project 7 - Tic Tac Toe


Challenge: Memory Game


---

### Project 8 - Weather API app

https://www.youtube.com/watch?v=204C9yNeOYI&list=PL4x-yNEsjQpZJvtrhr6Lwn0W3ztCBDCYc&index=1

OR

https://www.youtube.com/watch?v=IxuqmfO6p28

---

### Prokect 9 - Infinite Scroll


Challenge: Pagination



### Project 10 - Blog



Challenge: Reddit



---

### Project 10a - Instagram Clone Part 1


### Project 10b - Instagram Clone Part 2


### Login / Signup

https://www.youtube.com/watch?v=56E8b9prPTs

### Favorite things in city map


### Project 4 - Modal + Login/Password

### Project 6 - Pomodoro Timer

### Project - Form Input

### Project - Drag and drop

### Project 5 - Analog Clock

### Project 6 - Quote Generator

### Project 7 - To do list


### Project 10 - Recipe App


### Project - Map App

https://www.youtube.com/watch?v=Pf7g32CwX_s

### Project 11 - Snake Game

### Project 12 - Grocery Cart

### Project 13 - Ai Speech

### Project 14 - Number Game

### Project - Infinite Scroller

https://www.youtube.com/watch?v=8RmRhDiVAiA

### Project 15 - Instagram clone

### Project 16 - Reddit Clone

### Project 17 - Netflix Clone

### Project 18 - Airbnb Clone

### Projet 19 - Slack/chat Clone

Redux
======



React Native
============


https://www.youtube.com/watch?v=gdk7Io8BfUA&list=PLoN_ejT35AEi6ynsLwQJN1o116SFjWuEt&index=1



### Notes

Class Components
- Contains state

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
export default Welcome;
```

Function Components
- simple and lightweight components for when you need to render visual elements that depend mainly on props for their data
- Do not implement local state managemnt

```
const Message = ({messageprop}) => (<div>Component</div>);
```

To deploy App

- npm run build
- then upload everything inside buld folder into server