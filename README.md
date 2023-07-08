# How to create Clock using HTML, CSS and Javascript?

## Table of Contents

- [Introduction](#introduction)
- [Final Result](#final-result)
- [Let's start building Clock](#lets-start-building-clock)
  - [Creating HTML document](#creating-html-document)
  - [Using Date object for getting time](#using-date-object-for-getting-time)
  - [We have date now but we have show it to normal user using DOM](#we-have-date-now-but-we-have-show-it-to-normal-user-using-dom)
  - [Final Javascript Code](#final-javascript-code)
  - [Styling clock](#styling-clock)
- [Conclusion](#conclusion)

## Introduction

In this article we will learn about building Clock using HTML, CSS and Javascript. By building clock we learn about javascript Date object. We will build 12 hours Clock and we will be working with time in Date object.

## Final Result

![final result screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pet38vpn4670psbieplu.png)

## Let's start building Clock

### Creating HTML document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="./assets/images/favicon.ico"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="./styles/style.css" />
    <title>digital clock stopwatch & timer</title>
  </head>
  <body>
    <main>
      <div class="clock">
        <p class="value" id="hours"></p>
        <p class="value" id="minutes"></p>
        <div class="value seconds">
          <p id="suffix"></p>
          <p id="seconds"></p>
        </div>
      </div>
    </main>
    <script src="./scripts/index.js"></script>
  </body>
</html>
```

- I have add style and script in html.

### Using Date object for getting time

- **Creating date object**

```js
const date = new Date();
console.log(date);
```

- **How date object looks**

![console log date object](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xvqv8rtxu0luvwj21xp6.png)

- **Getting hours, minutes, seconds**

```js
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(`${hours}:${minutes}:${seconds}`);
```

![console log time](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ffyqi6mxq89prdqhwe0.png)

- **But this time is staying constant and it is not updating. To update this we use `setInterval`**

```js
setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
```

![console log updating time](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j2kuy4jao8uy1x5aybzj.png)

### We have date now but we have show it to normal user using DOM

- **We to get elements from this html document**

```html
<main>
  <div class="clock">
    <p class="value" id="hours"></p>
    <p class="value" id="minutes"></p>
    <div class="value seconds">
      <p id="suffix"></p>
      <p id="seconds"></p>
    </div>
  </div>
</main>
```

- javascript code for getting each elements

```js
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const suffix = document.getElementById('suffix');
```

- **Now, we can make changes to each element. Then let's add hours, minutes, seconds**
  - we should keep than in mind it should be within `setInterval` so that it keep on updating

```js
hoursDisplay.innerText = hours;
minutesDisplay.innerText = minutes;
secondsDisplay.innerText = seconds;
```

![clock on web page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e4bv0qskqbpnih5dmyre.png)

- **We will make sure that always two digital are visible. We will add leading zeros to single digits**
  - we create a function for that

```js
function leadingZeros(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}
```

- use that function to modify our varialbles

```js
hours = leadingZeros(hours);
minutes = leadingZeros(minutes);
seconds = leadingZeros(seconds);
```

![modified clock](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i49hpxrth1eovmcd8awh.png)

- **We will make it a twelve it a twelve hours clock using two function. One for converting 24 hours format to 12 hours format . One for setting suffix like 'AM' or 'PM'.**
  - for deciding suffix

```js
function timeSuffix(hours) {
  if (hours < 12) {
    return 'AM';
  }
  return 'PM';
}
```

- for converting format

```js
function twelveHour(hours) {
  if (hours % 12 === 0) {
    return 12;
  }
  return hours % 12;
}
```

### Final Javascript Code

```js
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const suffix = document.getElementById('suffix');

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  suffix.innerText = timeSuffix(hours);

  hours = twelveHour(hours);

  hours = leadingZeros(hours);
  minutes = leadingZeros(minutes);
  seconds = leadingZeros(seconds);

  hoursDisplay.innerText = hours;
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;
}, 1000);

function leadingZeros(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

function timeSuffix(hours) {
  if (hours < 12) {
    return 'AM';
  }
  return 'PM';
}

function twelveHour(hours) {
  if (hours % 12 === 0) {
    return 12;
  }
  return hours % 12;
}
```

![Clock after completing javascript code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/thubi8mx9pb4m3omesfe.png)

- **NOTE:** order of using `timeSuffix` and `twelveHour` should be correct.

### Styling clock

- I have kept syling simple and easy.
- Yet there are some things that should be kept in mind that we should fix elemet size because it will change the shape constantly while updating time.

```css
/* GLOBALS */
* {
  padding: 0;
  margin: 0;
}

/* FONTS */
@font-face {
  font-family: 'Orbitron';
  src: url('./../assets/fonts/Orbitron-Regular.ttf');
  font-weight: 400;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Orbitron', sans-serif;
  color: black;
  background-color: rgb(235, 235, 235);
}

main {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.clock {
  width: 450px;
  display: flex;
  justify-content: space-between;
  font-size: 5rem;
}

.value {
  padding: 10px;
  width: 140px;
  text-align: end;
  border-radius: 5px;
  box-shadow: 0px 2px 4px black;
  background-color: rgb(252, 251, 251);
}

.seconds {
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.seconds p {
  font-size: 2rem;
}
```

![final clock](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m4imqrg8cxdyz9ks0086.png)

## Conclusion

It's a great project to learn how to hanlde it time from Date object in javascript. You can still refactor the code to make it look nice in javascript code. That I will do in next blog where I make stopwatch.

**If you enjoyed it reading. If any changes you want comment. Please comment on this blog.**
