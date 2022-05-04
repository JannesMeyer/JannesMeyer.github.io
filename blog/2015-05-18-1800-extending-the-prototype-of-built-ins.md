# The JavaScript Taboo: Extending Built-In Objects

It is common knowledge that modifying the prototype of built-in JavaScript objects (`Array`, `String`, `HTMLElement`, etc.) is a bad idea.

[Prototype.js](https://en.wikipedia.org/wiki/Prototype_JavaScript_Framework), one of the first popular JavaScript frameworks of the AJAX era, made heavy use of extending the DOM, but then came jQuery and pretty much killed it, because it wrapped everything in `$()` instead of extending prototypes, which is safer in terms of compatibility with other libraries and browser updates.

- - -

> DOM extension is one of the biggest mistakes Prototype.js has ever done.
> <footer>Kangax (of Prototype Core), <cite><a href="http://perfectionkills.com/whats-wrong-with-extending-the-dom/">What's wrong with extending the DOM</a></cite></footer>

Since then it has been a taboo to extend the prototype of built-in objects and the language feature has been largely forgotten and replaced by the much slower process of adding new methods through standardization, which takes much longer and only covers the most generic use-cases.

Look at these two made-up examples and tell me which one is easier to read:

~~~js
var numbers = [4, 9, 8];

// Using a function
includes(numbers, 8);

// Using Array.prototype.includes
numbers.includes(8);
~~~

Are we eternally condemned to a future where our JavaScript code looks like the first example? Sure, ES6 defines [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), but what about cases where we want to provide our own functions?

The problem is, of course, that prototype extensions are **global**. But JavaScript has come a long way since its inception and a lot of its “bad parts” are being fixed. So why don't we fix this one as well and standardize **local** prototype extensions? It could look like this, for example:

~~~js
import Array.{ first } from 'array-extensions';

// Importing every named export (use with care)
import Array.* from 'array-extensions';

// Polyfills would continue to work through imports with side-effects
// to not overshadow existing implementations:
import 'array-polyfills';

// Let's use our fancy new Array method
var numbers = [4, 9, 8];
numbers.first(); // 4
~~~

Of course this is not backwards compatible. But maybe it can be transpiled. How could we translate the above snippet to ES5, for example?

If we know for sure that the variable will always be an Array and never change its type (which is not guaranteed by JavaScript as a dynamically-typed languages, unfortunately) we could rewrite it like in the following snippet.

Tools like TypeScript and Flow could help to ensure type-safety. (It's funny that JavaScript is starting to move towards static typing. ActionScript introduced optional static typing 12 years ago.)

~~~js
var first = require('array-extensions').first;

var numbers = [4, 9, 8];
first.call(numbers); // 4
~~~

That this concept works is proven by things like [categories in Objective-C](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html). Such a category makes it possible to add methods to an existing class, even if it is a class from a framework and you don't have the code for it. The category's methods are only available **locally** – like it should be – in source files that have included it.

One of my favourite examples of this is how AFNetworking adds [`setImageWithURL:placeholderImage:`](https://github.com/AFNetworking/AFNetworking/blob/583742a539f596f98c10953d8aa8ae260cf18d2a/UIKit%2BAFNetworking/UIImageView%2BAFNetworking.m#L113) to the Apple-provided `UIImageView` class for asynchronous image loading and caching from the web. No subclassing required.

~~~objectivec
NSURL* url = [NSURL URLWithString:@"http://example.com/image.png"]

[imageView setImageWithURL:url
          placeholderImage:[UIImage imageNamed:@"placeholder.png"]];
~~~

Apple even uses categories extensively in their own libraries. For example, UIKit adds a lot of convenience methods to the more basic Foundation classes (`NSArray`, `NSString`, …).

Let's hope we can fix JavaScript prototype extension of built-ins and convert it into another “Good Part”.

### See also

- [getElementsByClassName pre Prototype 1.6](https://johnresig.com/blog/getelementsbyclassname-pre-prototype-16/), 2008, John Resig
- [Maintainable JavaScript: Don’t modify objects you don’t own](https://humanwhocodes.com/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/), 2010, Nicholas C. Zakas
- [Extending native DOM prototypes without collisions](http://lea.verou.me/2015/04/idea-extending-native-dom-prototypes-without-collisions/), 2015, Lea Verou

[HN comments](https://news.ycombinator.com/item?id=9565105)
