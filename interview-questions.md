# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer:
  "Props" is short for properties, and it's the keyword used in React to refer to the properties being passed from one component to another component. In React, the information in props can only be passed from the parent class to child class. They are also "read only" and can't be changed by a function in another component.

  While learning about React in class, I was able to use "props" as a parameter in a constructor (method that initialize's the object's state) which allowed me to pass information about the current state to another component. In the parent component, app.js for example, I would instantiate the component in the render method and type the syntax in the component as an attribute like attribute name={ this.state.key }

  Researched answer:
  "Props" is a keyword in React used to send data from one component to another. Props can't be changed by any other external function and the data is unidirectional, from parent to child component. Props can send any kind of data into a component when that component is being called. Data can be passed around easily to two or more components in this way.


2. What is a DOM event?

  Your answer:
  DOM events are occurrences that are caused by user interaction or browser. Examples of DOM events include: user clicking the mouse button, hitting enter, mousing over an element, when a user presses a key, when a web page has loaded, etc.

   When I was practicing developing the treasure hunt and tic tac toe applications using javascript, I would use the "onClick" DOM event to run a javascript function when an HTML element was clicked which converted a question mark into an emoji.

  Researched answer:
  DOM events are built in triggers in DOM from different kinds of interaction by the user or browser. Examples of these events include: user hovering the mouse over an element, clicking, pressing a key, a page finished loading, using the scroll bar, page being refreshed, etc. Developers can use event listeners to script functions that respond to when DOM events occur, called event handlers.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  Object-oriented programming, OOP for short, is the philosophy of coding around the heavy use of objects, or containers of data. It came as a solution to complex large applications, allowing data to be sectioned off into containers that can be manipulated without affecting the rest of the program which would ideally allow easier debugging and reduce errors. In contrast, functional programming is the philosophy of programming based around pure functions.

  Ruby champions OOP as an object-oriented language since everything in Ruby is an object. Thus when I was practicing coding in Ruby, I had to consider scope a lot and call functions, which are methods (a function in an object), with the method keyword "this".

  Researched answer:
  Object-oriented programming, or OOP, is a programming paradigm based data structures containing data and functions (objects). There are three main concepts: classes and instances (creating types of objects and copies), inheritance (passing properties to multiple objects), and encapsulation (setting a division between an objects internal state with the rest of the program).

  The benefit of OOP is it can be easier to conceptualize and work with due to our interpretation and how we categorize objects being similar to experiences in the real world. For example an object, like a guitar can be specific class, or type in real life, but contain different properties, such as the size, color, shape, etc.

4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
  Floats are numbers with decimal value such as 1.55, but integers are whole numbers with no non-whole value past the decimal point like 5, 10, etc. An interesting aspect of how Ruby handles floats and integers is that if an integer is divided by an integer, it will return an integer (the numbers past the decimal get cut off). If you want to return a non-whole number you would need to pass a float into the equation. For example, instead of 3 / 2 (which outputs 1) you would type 3.0 / 2 which outputs 1.5.


  Researched answer:
  A floating-point number or float represents a real number or rather a number that contains a decimal point in Ruby. An integer however is a whole number that does not contain factional parts and a decimal point. Whenever a float is added to an integer, the return will be a float. However, floats are not suitable for exact comparison since they are inexact, and in this case you would need to use BigDecimal for precision. Ruby also has NaN (not a number) and infinity for floating point numbers


5. Ruby has an implicit return. What does that mean?

  Your answer:
    Implicit return in Ruby means that the value of the last line of a method is returned automatically without using a syntax like keyword "return"

    This seems to be another example of Ruby's simplicity and developer-friendliness.

  Researched answer:
    Implicit return means that in Ruby, every last line in a block will return the value automatically without any syntax or keyword. This was designed with minimal code in mind.


## Looking Ahead: Terms for Next Week

1. Instance Variable:
  An instance variable is a variable defined in a class for which each instantiated object of the class has a instance of that variable. There can be many instances of the same variable. It is declared inside the class but outside of methods.

2. PostgreSQL:
  PostgreSQL is an open-source object relational database management system which is managed by a global community of developers online. Since it is a database management system it is used to store data for web applications.

3. Ruby on Rails:
  Ruby on Rails or RoR is an open source framework for ruby web development. Compared to other frameworks, it is known for its speed and ease of use.
  
4. ORM:
  ORM or Object-relational mapping is a programming technique where data can be accessed from a relational database using an object-oriented programming language (such as Ruby). It's a way for Ruby programs to manage a database. ORM is recommended to minimize repetitious code and implement conventional patterns that make sense for the developer.

5. Active Record:
  Active Record is the Ruby on Rails interface used for developing the database for an application. You can use it to structure data models for users, or rather how database information is displayed in posts, comments, etc. Active Record uses ORM or object-relational mapping mentioned above.
