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
sh
Copy
Edit
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
sh
Copy
Edit
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
sh
Copy
Edit
npm install
Running a Parcel Project
To start the app using Parcel, use:
sh
Copy
Edit
npx parcel index.html
npx executes a package without installing it globally.
NPM is used for installing packages, while npx is used for running them.
React Installation with NPM
Install React:
sh
Copy
Edit
npm install react react-dom
After removing CDN links, you might see an error "React is not defined".
To fix this, import React manually in your project:
js
Copy
Edit
import React from 'react';
Browsers do not support module imports directly, so add type="module" in the script tag:
html
Copy
Edit

<script type="module" src="index.js"></script>

Why Use Parcel?
Creates a development build automatically.
Runs a local development server.
Auto-refreshes the page whenever changes are made.
Supports Hot Module Replacement (HMR), meaning it updates components without a full reload.
Uses a highly efficient file-watching algorithm written in C++ for better performance.
Provides faster builds using caching, reducing compilation time.
