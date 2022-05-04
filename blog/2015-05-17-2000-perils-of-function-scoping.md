# The Perils of Function Scoping

As you probably know, block-scoping using `let` is being introduced in the ECMAScript 6 standard. But why is this even neccesary? A lot of people seem confused about this.

Should we go ahead and replace every occurence of `var` with `let` now?

Let's analyze the situation.

- - -

## The Problem

One of the problems with function scoping is that you don't automatically fall into the [pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/) when you are dealing with asynchronous function calls. 

Let's say we have an array of filenames and we want to do some asynchronous operation in a node.js environment with them.

~~~js
var files = [
  'Photo 1.jpg',
  'Photo 2.jpg',
  'Photo 3.jpg'
];
~~~

In this example we are interested in the result of `fs.stat` for each of those files. So we iterate through the array using a `for` loop and call the function with a callback:

~~~js
for (var i = 0; i < files.length; ++i) {
  var file = files[i];

  fs.stat(file, function callback(err, stats) {
    console.log(file);
  });
}
~~~

And here comes the output of this fabulous script:

~~~
Photo 3.jpg
Photo 3.jpg
Photo 3.jpg
~~~

Oops, how did that happen? The callback function keeps a closure of the `file` variable and then the value of that *one* variable is reassigned on every iteration of the loop. So the problem is, that we have *three* closures of the same variable instead of *three* closures to separate variables.

## A Possible Solution: `let`

Luckily we heard about this crazy new thing in JavaScript called `let` which gives us block-scoping:

~~~js
for (var i = 0; i < files.length; ++i) {
  let file = files[i];
// ^--- the only change
  fs.stat(file, function callback(err, stats) {
    console.log(file);
  });
}
~~~

Now the iteration works as expected:

~~~
Photo 1.jpg
Photo 2.jpg
Photo 3.jpg
~~~

## Another Solution: `Array.prototype.forEach`

On first sight, using a `for` loop and and a `Array.prototype.forEach` construct for array iteration might seem identical in behavior, but they actually differ slightly: The `forEach` approach gives you a new scope on every iteration. Whereas an ordinary `for` loop takes place inside of the same scope during the complete iteration.

~~~js
files.forEach(function(file) {
  fs.stat(file, function callback(err, stats) {
    console.log(file);
  });
});
~~~

And we get the correct output as well.

## So, should I use `let` for everything now?

First of all, not all JavaScript runtimes support `let`  yet (node.js, IE<11 and Safari are the biggest blockers currently), so you have to use transpilation which comes with a small cost.

With the Babel transpiler (v5.4.3) the first solution from above is translated to a function that is invoked on every iteration:

~~~js
var _loop = function () {
  var file = files[i];
  fs.stat(file, function callback(err, stats) {
    console.log(file);
  });
};

for (var i = 0; i < files.length; ++i) {
  _loop();
}
~~~

This is a great solution performance-wise and, as a consequence, there is no reason to not replace every instance of `var` with `let` even in large codebases if you are willing to use Babel or you are only targeting environments like io.js or Firefox/Chrome/IE11 which support the `let` statement natively.

[HN comments](https://news.ycombinator.com/item?id=9562506)
