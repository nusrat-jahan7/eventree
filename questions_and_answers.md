<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>The greetign is shows an empty object, but the variable name spelling is incorrect. JavaScript interprets this as creating a new variable greetign instead of assigning a value to greeting. So, greeting remains undefined, and greetign is an empty object. So the output is an empty object {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>The sum function has two parameters a and b and return the result. In the the code, sum(1, "2") is called with the first element as a number (1) and the second argument as a string ("2"). JavaScript converted the number 1 into a string and concatenate it with the string "2". So, the function concatenates and the output is the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A.

<i>The food has an array with food emojis. Then, an object info is created with a property favoriteFood set to the first element of the food array. Then, info.favoriteFood is reassigned. So, modifying the info object does not change the original food array, so console.log(food) output still will be the original array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B.

<i>The sayHi function takes a  parameter which is name. When calling sayHi() without providing a name, it lacks the necessary argument, as a result it show undefined value. In the console.log(sayHi()) output will be "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>The  initial value of count is 0 and when loops through an array of numbers (0 to 3). For each non-zero number go to the loop (1, 2, 3), it increase the count. After the loop, count represents the number of non-zero which is 3. So, the output will be 3.</i>

</p>
</details>
