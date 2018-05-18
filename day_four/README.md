# Sync / ASync
## JavaScript: An Asynchronous Programming Language (part 1)

Credit to: 
[https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/](https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/)
[https://www.hongkiat.com/blog/synchronous-asynchronous-javascript-part2/](https://www.hongkiat.com/blog/synchronous-asynchronous-javascript-part2/)

Two or more things are **synchronous** when they happen at the same time (in sync), and **asynchronous** when they don’t (not in sync).

**Scenario 1**

    You've got a hot date for a movie tonight but have homework due tomorrow. Luckily, Professor X knows everything.
    You call Professor X to answer and complete a difficult homework task and Professor X answers you right away, letting you know that it is done.

    Outcome:
    You hang up the phone and go out for a movie.

**Scenario 2**

Since Professor X is so efficient, he starts receiving many more calls. 
What happens then, when you call him **but he's already busy** talking to someone else? (you hear a busy tone)

    Professor X hires Mr. M who possesses an answering machine so callers may leave messages.

    Mr. M's job is to pass on a message from the answering machine to Professor X when he knows Professor X has completed all tasks related to a previous message and is already free to take a new message.

    1. So when you call Professor X and he is busy, you get to leave him a message then WAIT for him to call you back

    2. Only once Professor X has completed all messages in the queue ahead of you, will he then look at your message and call you back with an answer.

    Outcome:
    You hang up the phone and go out for a movie.

Were the actions taken in Scenario 2 synchronous or asynchronous?

The answer is **both**.

1. When you left your message, Professor X was not listening to it, **so the forth communication was asynchronous**.
2. But when Professor X replied you, you were listening, which **makes the return communication synchronous**.

When someone labels JavaScript asynchronous, what they are referring to in general is how you can leave a message for it, and not have your call blocked with a "busy tone".
   
    JavaScript runs one line of code at a time.
## Get ready for some CompSci ...
Function calls in JavaScript are **never direct**. They're done via a **messaging system**.

In the below process, think of messages as a collection of corresponding codes (*function arguments* & *variables*):
1. Incoming messages/events are held in a **message queue** (event-loop) 
2. Each message in the queue is then sequentially sent to a **call stack** 
    1.  corresponding functions from each message are **stacked** as **frames** (*function arguments* & *variables*)ready for execution
    2. The **call stack** holds the **frame** of the initial function being executed at the top of the **call stack**, along with other related **frames** in the message ready for execution (as nested calls)
3. When a new message joins the **message queue**, it waits until the **call stack** is empty of all frames from the **previous message** 
4. The **message queue** then 'dequeues' the previous message, and adds the corresponding frames of the current message to the **call stack**
5. The message waits again until the **call stack** is **empty of its own corresponding frames** (ie. the executions of all the stacked functions are over), then is removed from the **message queue**

JavaScript, with the help of **events (messages)** and the **event-loop**, may practice asynchronous processing of messages, but that **doesn’t mean everything in JavaScript is asynchronous**.

**REMEMBER:** In Step 2 above, the message (event) didn't leave the queue until the **call stack** was **empty of corresponding frames** -- just like how you didn't leave for the movies until you got your answer. This is being ***synchronous***!

However, waiting isn't ideal in all scenarios. You could potentially leave a message and instead of waiting, leave for the movies right away. 

    What if a function can retire (emptying the call stack), and its message can be dequeued even before the task of the function is complete?

    What if you have code executed asynchronously?

## JavaScript: An Asynchronous Programming Language (part 2)
Let's imagine now that you leave a task for Professor X in the **message queue** but request that he may only began work on the task after **five hours**. 

Of course, Professor X isn't simply going to hold on to your message and wait five hours while his **message queue** piles up with more tasks, so he hires another helper, Mr. H in addition to Mr. M, who runs the **message queue**.

**Scenario 3**
    Professor X asks Mr H to leave a new message for your task in the **message queue** only after the five hours have passed, then moves on to the next message in the queue.

    After five hours have passed, Mr H then adds your message to the end of the queue. Only after all the messages in front of yours have been cleared, will Mr M then pass your message to Professor X, who carries out your requested task.

In this way, you are able to leave a message in the **message queue** for the request to be carried out, without waiting for it to be fulfilled (receive a response).

## The setTimeout() method
```js
setTimeout(function, delay-time, arg...)
```
The **function** runs after **delay-time**(in ms) with argument **arg**.

This asynchronous method runs in a similar way to how Mr H handles your message with a delay in **Scenario 3**.

When the timer expires, the function (**event**) **joins the queue**, and the **event loop** then picks it up when the **call stack** is free after processing all the messages before it.

## AJAX - Asynchronous JavaScript and XML
Uses the XHR API to **make server requests** and **handle the responses**.
```js
XMLHttpRequest
```

When browsers make server requests without using XHR, the **page refreshes** and **reloads its UI**. With XHR, the processing of **requests** and **responses** are handled by the XHR API, and the **UI remains unaffected**.

The XHR API can **work in both synchronous and asynchronous ways**. XHR is set to **work asynchronously** by default.
When a function makes a request using XHR, it returns **without waiting for the response**.

If the XHR is set to **be synchronous**, the function then **waits until the response is received and processed before returning**.

**XHR object creation:**
```js
// Asynchronous XHR
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
```

**Example of asynchronous response:**
```js
// Asynchronous XHR

// The hello.txt file in this example is a simple text file containing the text ‘hello’. The response property of XHR is invalid, since it didn’t output the text ‘hello’.
var xhr = new XMLHttpRequest();
xhr.open("GET", "hello.txt");
xhr.send();
document.write(xhr.response); // empty string
```
XHR implements a micro-routine that keeps checking for response in every millisecond, and triggers complimentary events for the different states a request goes through. When the response is loaded, a load event is triggered by XHR, which can deliver a valid response.

```js
// Asynchronous XHR
var xhr = new XMLHttpRequest();
xhr.open("GET", "hello.txt");
xhr.send();
xhr.onload = function(){ document.write(this.response) } // writes 'hello' to the document
```

Going the asynchronous way is preferred, as it **doesn’t block other scripts until the request is completed**.

If the response has to be processed synchronously, we pass false as the last argument of open, which flags the XHR API saying it has to be synchronous (by default the last argument of open is true, which you needn’t explicitly specify).
```js
// Synchronous XHR
var xhr = new XMLHttpRequest();
xhr.open("GET", "hello.txt", false);
xhr.send();
document.write(xhr.response); // writes 'hello' to document
```

# Take Home Points
Almost all beginners make some mistakes with asynchronous concepts such as setTimeout() and AJAX, for example by assuming setTimeout() executes code after the delay time, or by processing response directly inside a function making an AJAX request.

If you know how the puzzle fits, you can avoid such confusion. You know that the delay time in setTimeout() **does not indicate the time when the code execution starts, but the time when the timer expires and a new message is queued, which will only be processed when the call stack is free to do so**.