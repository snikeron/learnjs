# Sync / ASync
## JavaScript: An Asynchronous Programming Language
Credit to: [https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/](https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/)

Two or more things are **synchronous** when they happen at the same time (in sync), and **asynchronous** when they don’t (not in sync).

**Scenario 1**

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

### Computer Sciencey Stuff (optional)
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