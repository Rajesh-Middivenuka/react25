React is a library because it can be applied to a small portion of a webpage rather than controlling the entire application.

React can be used only in specific parts, such as the header or footer, depending on how the root is rendered.

It can work independently on a small portion of the code without affecting the rest of the application.

At its core, React is JavaScript that provides additional helper methods for building user interfaces.

A framework comes with built-in tools and structures, whereas React only provides UI-building capabilities.

Not only React makes an application fast—other libraries and packages also contribute to performance optimization.

NPM (Node Package Manager)

NPM is not a programming language; it is a package manager for JavaScript.

NPM is a repository that hosts thousands of JavaScript packages and is the largest package manager available.

When creating a new React app, NPM is automatically included, so no manual configuration is needed.

To initialize an NPM project:

npm init
After installation, the package.json file is created, which stores project dependencies and configuration details.

Why is package.json important?
It keeps track of installed packages and their versions.

Dependencies are managed automatically by NPM through this file.

Installing Dependencies

Dependencies must be installed to run a project.

One of the most important dependencies is a bundler.

What is a Bundler?

Normal HTML, CSS, and JavaScript files need to be optimized, cleaned, and minified for better performance.

A bundler helps to manage these tasks.

Popular bundlers include Webpack, Parcel, and Vite.

The main job of a bundler is to bundle and optimize the app’s code before it is deployed to production.

Using Parcel as a Bundler

Parcel is commonly used because all bundlers work similarly, and Parcel is easy to configure.

To install Parcel:

npm install -D parcel
There are two types of dependencies in an app:

Dev Dependencies (-D): Required only during development.

Normal Dependencies: Used for both development and production.

Parcel - A Powerful Bundler

Parcel is a bundler that minifies and optimizes code during development. It is installed as a dev dependency (-D).

Parcel is a powerful tool that performs multiple tasks to enhance performance.

After installing Parcel, it will be listed in package.json.

Understanding Versioning in package.json

Caret (^) and Tilde (~) Symbols:

Example: "parcel": "^2.8.4"

If Parcel updates to 2.8.9, it will automatically upgrade because of ^.

If we use ~, only minor updates are installed, but major versions won’t be upgraded.

Using ^ is generally preferred to get non-breaking updates.

Package Configuration Files

package.json:

This file keeps track of installed package versions in the project.

package-lock.json:

It ensures that all dependencies use the exact same versions across different environments.
Node Modules & Dependencies

When installing packages, NPM downloads the required dependencies inside the node_modules folder.

Parcel itself has dependencies, which also have their own dependencies—this is called transitive dependencies.

Should We Push node_modules to GitHub?

No, node_modules should not be committed to GitHub.

Instead, we add /node_modules to .gitignore to avoid unnecessary files in version control.

However, we must include package.json and package-lock.json in Git, as they allow others to recreate node_modules using:

npm install

Running a Parcel Project

To start the app using Parcel, use:

npx parcel index.html

npx executes a package without installing it globally.

NPM is used for installing packages, while npx is used for running them.
React Installation with NPM

Install React:

npm install react react-dom

After removing CDN links, you might see an error "React is not defined".

To fix this, import React manually in your project:
import React from 'react';
Browsers do not support module imports directly, so add type="module" in the script tag:

<script type="module" src="index.js"></script>

Why Use Parcel?

Creates a development build automatically.

Runs a local development server.

Auto-refreshes the page whenever changes are made.

Supports Hot Module Replacement (HMR), meaning it updates components without a full reload.
Uses a highly efficient file-watching algorithm written in C++ for better performance.

Provides faster builds using caching, reducing compilation time.

npx parcel bulid index.html before executing this we should remove the "main": "app.js",

in the server also has commands no need to push what is regenerate files

React.js Key Concepts

🚀 Project Setup & Execution

Go to package.json → Locate the "scripts" section.

Start the project:

npm run start
"start": "parcel index.html" → Uses Parcel as a development server.
Build the project:

npm run build
⚛️ React.createElement()

React.createElement() creates a React element (an object).

When rendered into the DOM, it converts objects into HTML elements.
It replaces the existing DOM with the newly created elements.

✨ JSX (JavaScript XML)

JSX is NOT HTML, but an HTML-like syntax inside JavaScript.
Why JSX?

Writing React.createElement() manually is complex.

Facebook developers introduced JSX to make React more user-friendly.
🔧 How JSX Works in the Browser?

JS Engine Limitation:
JavaScript engines cannot understand JSX because they only support ECMAScript (ES6, ES7, etc.).
Who Transforms JSX?

Parcel transpiles JSX before sending it to the browser.

But Parcel itself does NOT do the transformation; instead, it assigns the task to Babel.

Babel converts JSX into React.createElement(), making it browser-compatible.

Older JavaScript versions (ES6, etc.) don’t understand modern JSX → Babel converts it to an older version.

📌 JSX Syntax Rules

A single-line JSX statement is fine:

const heading = <h1>Hello, React!</h1>;

For multi-line JSX, wrap it in parentheses (()):

const content = (

  <div>
    <h1>Welcome</h1>
    <p>This is a React app.</p>
  </div>
);
🏗️ React Components

Two types of React components:

Class-based components

Functional components

What is a Functional Component?

A JavaScript function that returns JSX.
Example:

function Welcome() {
return <h1>Hello, React!</h1>;
}
JSX & Security (Preventing XSS)
JSX automatically escapes any injected values to prevent malicious code execution.

If a user tries to inject a script inside JSX, React treats it as a string, not executable code.

keys are used to unikey udenfied the elements

never use index as keys it is bad practices

two types of export and import

export default component
import component from path

export const component
import{componet} form the path

hooks:::::
hooks are normal js functions
-useState() -it generates superpowerful state variable it maintans the state of the varible
-useEffect()
when ever state variable updated react rerender the components
react will make dom operation very fast

react use reconiliation algorithium is also know is react fiber
for example we have 7 items in the div
it react crate a virtul dom of 7 items virual dom is not actual dom virtual dom is represention of actual dom
virtual dom is bascially those react elements it a normal javascript object

diff algrothaim= it finds out the diffrence update and previour doms now actually updated the dom
find out the two differnce in the objects is fast so it update very fast find out the html it taks time
react does efficent dom manipulation becuase of virtal dom

monolith arcticture:

microservice archticture:::::::
we have backend serverce
we have UI
WE have Auth
we have sm
useEffect() inside call back function will be called after the components will be rendered
for example if the useEffect is there in body componed after complety render the body then call back function will be caled.

why we use useState we have local varible
let logIn="Login"
login="Logout" it is updated but UI wont update
when ever state varible chages react will render and we can see all update the values
it will rerender the all component if chages happen

if it a const varialbe then how const is modified
when we invode the function that time const become new varible so we wont get any error

when ever the state varible update react trigger a reconsilation cycle it renders the component
every thin if key click finding the differece older and new version and if finds update the newer version
react of fast because of reconsilaiton and reactfiber finds the differece and update very quickly

useEffect() what it called
is called after every render use effect called [] dependncy is not manditrary

if no depenedecy array useEffect called on every component render

if dependecy is array is empty then[] then use effect called only intial render just once
what if the [] dependency is flled with some thing then it will called dependency changes

never create outside the compoonent
try to call hooks top
never create useState in if or for or functions

for routing we are usei react router dom

react router dom gives us access to an important hook is useRouterError

react class life cycle

loading and munting is same

mounting
=> calss instance reacated
=> first constructer then render is called

==> single responsiblity principle
if we have function that should have a single responsiblity

if we mantain the single responsibiltiy principle our code becomes more reusible and mantaninble and testable

==> hooks are utility function

===> app chunking and code spliting,dynamic bundling is making multiple bunldle javascripts

==>lazyloading for example we load app intally some part of the code will load like only home page like that it will not load another component like seperate app.

==> we should not load every component when require lolad is a lazyloading
==> const grocery=lazy(()=>{
import(path of the grocery)
})
we will get an error
suspence use state must use
