***********************React js Interview Questions**********************************
<h2>1.What is Virtual DOM</h2>
<p>The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. (or) DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.</p>

<h2>2.What is SPA</h2>
<p>Single page application : Any web application , in which when you are clicking on any button or selecting option from navigation bar then if your page which means browser page is reloading then that means that application is your multi - page application . If it does not reload the browser page and just only updates the page without reloading then that application is known as Single Page application. When you create React application using CRA, (create-react-app boilerplate , developed by Facebook) it always create the application which will be Single page application.</p>

<h2>3.What is the differece between class and functional component</h2>
<table>
<tr>
<th>Functional Component</th>
<th>Class Component</th>
</tr>
<tr>
<td>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</td>
<td>A class component requires you to extend from React. Component and create a render function which returns a React element.</td>
</tr>
<tr>
<td>There is no render method used in functional components.</td>
<td>It must have the render() method returning JSX (which is syntactically similar to HTML)</td>
</tr>
<tr>
<td>Functional component run from top to bottom and once the function is returned it cant be kept alive.</td>
<td>Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.</td>
</tr>
<tr>
<td>Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.</td>
<td>Also known as Stateful components because they implement logic and state.</td>
</tr>
<tr>
<td>React lifecycle methods (for example, componentDidMount) cannot be used in functional components.</td>
<td>React lifecycle methods can be used inside class components (for example, componentDidMount).</td>
</tr>
<tr>
<td>Hooks can be easily used in functional components to make them Stateful.</td>
<td>It requires different syntax inside a class component to implement hooks.</td>
</tr>
<tr>
<td>Constructors are not used.</td>
<td>Constructor are used as it needs to store state</td>
</tr>
</table>
<h2>4.What is mean by state and its use in react?</h2>
<p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>

<h2>5.What is JSX and why do we use it instead of js?</h2>
<p>Writing HTML  into Javascript.It is also known as extension to javascript.</p>
<p><b>JSX introduced to replace React.createElement()</b></p>
<p>JSX makes it easier to write and add HTML in React.</p>


<h2>6.What is Package.json?</h2>
<p>This is a JSON(JavaScript Object Notation) file that includes key information concerning your project. 
<p>This is a required file that is needed to run any React project.</p>
<p> This file includes metadata such as name , author and version as well as starter scripts and dependencies used in the project.</p>


<h2>7.What is the difference between react and react native?Which one is library or framework?</h2>
<p>React is a open-source front-end javascript library that is used for buliding user interfaces especially for single page application .</p>
<p>React Native is a mobile framework that compiles to the native app components allowing to build native mobile applications like ios,android and windows.</p>

<h2>8.What is the package name you are using for routing?</h2>
<p><b>react-router-dom</b></p>

<h2>9.Routing Implementation</h2>
<p>refer the Routing folder</p>

<h2>10.How do you pass data from parent to child</h2>
<p>Embed the child component to the parent component</p>
<p>Pass the props to the child component as an argument while embedding it to the parent component</p>
<p>In the child component,access the data variable value by writing the name or variable only.</p>
<p>Implementation-Refer Props folder.</p>

<h2>11.What is lazy loading in React?</h2>
<p>In essence, lazy loading means that a component or a part of code must get loaded when it is required.</p>
<p>It is also referred to as code splitting and data fetching .</p>
<p>Talking about React specifically, it bundles the complete code and deploys all of it at the same time.</p>


<h2>12.Difference between Stateful and Stateless Component</h2>
<p><b>Stateful Component:</b>Stateful components are those components which have a state. The state gets initialized in the constructor. It stores information about the component’s state change in memory. It may get changed depending upon the action of the component or child components.</p>
<p><b>Stateless Component:</b>Stateless components are those components which don’t have any state at all, which means you can’t use this.setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks. When react renders our stateless component, all that it needs to do is just call the stateless component and pass down the props.</p>


<h2>13.How do you switch one component to another,conditional rendering?</h2>
<ol>
<li>switch-case</li>
<li>Logical Operator</li>
<li>Else if</li>
<li>Ternary Operator</li>
</ol>
<p>there may arise situation when we want to render something based on the some condition
-for example, consider the situation of the handling a login/logout button
-both the buttons have different functions so they will be separate componets
-now the task is if a user is logged in then we will have to render the logout component to display the logout button and if user is not logged in then we will have to render the login component to display the login button
-this is what we called the conditional rendering in react.js</p>

<h2>14.Difference between Axios and Fetch</h2>
<table>
<tr>
<th>Axios</th>
<th>Fetch</th>
</tr>
<tr>
<td>Axios has url in request object.
Axios is a stand-alone third party package that can be easily installed.</td>
<td>Fetch has no url in request object.
Fetch is built into most modern browsers;no installation is required as such</td>
</tr>
<tr>
<td>Axios enjoys built-in XSRF protection.</td>
<td>Fetch does not.</td>
</tr>
<tr>
<td>Axios uses the data property.</td>
<td>Fetch uses the body property</td>
</tr>
<tr>
<td>Axios’ data contains the object.</td>
<td>Fetch’s body has to be stringified.</td>
</tr>
<tr>
<td>Axios request is ok when status is 200 and statusText is ‘OK’.</td>
<td>Fetch request is ok when response object contains the ok property.</td>
</tr>
<tr>
<td>Axios performs automatic transforms of JSON data.</td>
<td>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</td>
</tr>
<tr>
<td>Axios allows cancelling request and request timeout.</td>
<td>Fetch does not</td>
</tr>
<tr>
<td>Axios has the ability to intercept HTTP requests.</td>
<td>Fetch, by default, doesn’t provide a way to intercept requests.</td>
</tr>
<tr>
<td>Axios has built-in support for download progress.</td>
<td>Fetch does not support upload progress.</td>
</tr>
<tr>
<td>Axios has wide browser support.</td>
<td>Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).</td>
</tr>
<tr>
<td>Axios “GET” call can have body Content</td>
<td>Fetch “GET” call cannot have body Content</td>
</tr>
</table>


<h2>15.What is UseState Hook?</h2>
<p>Refer useState folder</p>

<h2>16.What is usEffect Hook?</h2>
<p>Refer useEffect folder</p>


<h2>17.What is useReducer Hook?</h2>
<p>Refer useReducer folder</p>

<h2>18.What is useMemo Hook?</h2>
<p>Refer useMemo folder</p>


<h2>19.What is useRef Hook?</h2>
<p>Refer useRef folder</p>


<h2>20.What is Context API</h2>
<p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>


<h2>21.Difference between callback and useCallback Hook?</h2>
<h3>useCallback</h3>
<p>The React useCallback Hook returns a memoized callback function.</p>
<p>Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.</p>
<p>The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. </p>
<p>One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.</p>
<h3>callback</h3>
<p>A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished</p>

<h2>22.What is Props Drilling Concept?What is State Uplifting</h2>
<h3>Props Drilling Concept</h3>
<p>Prop drilling refers to the process of sending props from a higher-level component to a lower-level component. To pass the props down from the topmost component, we must do something like this: However, prop drilling can become an issue in itself because of its repetitive code.</p>
<h3>State Uplifting</h3>
<p>In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.</p>


<h2>23.Difference between useEffect and useContext?</h2>
<h3>useEffect</h3>
<p>The useEffect Hook allows you to perform side effects in your components.</p>
<p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
<p>useEffect accepts two arguments. The second argument is optional.</p>
<p>They are function and dependency</p>
<p>There are 3 dependancies for useeffect</p>
<p>1.No dependency is passed.</p>
<p>2.An empty array</p>
<p>props or state values</p>




<h3>useContext</h3>
<p>React Context is a way to manage state globally</p>
<p>It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
<p>The main idea of using the context is to allow your components to access the some globa data and re-render when the global data is changed</p>
<p>useContext solve the props drilling problem when you have to pass down the data from parent to the child.</p>


<h2>24.What are React Life Cycles?Explain each one with example?</h2>
<h3>Lifecycle of Components</h3>
<p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases</p>
<p>The three phases are:Mounting,Updating,Unmounting</p>
<h4>Mounting</h4>
<p>Mounting means putting elemnts into the DOM.</P>
<P>React has four built-in methods that gets called,in this order,when mounting a component.</P>
<p>React has five built-in methods that gets called, in this order, when a component is updated:</p>
<ol>
<li>constructor()</li>
<li>getDerivedStateFromLProps()</li>
<li>render()</li>
<li>componentDidMount()<li>
</ol>
<h4>Updating</h4>
<p>A component is updated whenever there is a change in the component's state or props.</p>
<ol>
<li>getDerivedStateFromProps()</li>
<li>shouldComponentUpdate()</li>
<li>render()</li>
<li>getSnapshotBeforeUpdate()</li>
<li>componentDidUpdate</li>
</ol>
<h4>Unmounting</h4>
<p>When a component is removed from the DOM,or unmounting as React likes to call it</p>
<p>React has only one built-in-method that gets called when a component is unmounted</p>
<ol>
<li>componentWillUnmount</li>
</ol>
<h2>25.What are Higher Order Components in react js?</h2>
<p>A higher-order component(HOC) is an advance technique in React for reusing component logic.</p>
<p>HOC's are not part of the React API.They are a pattern that emerges from React's compositional nature.</p>
<p>A higher-order component is a function that takes a component as an argument and returns a new component.</p>
<p>Syntax:const EnchancedComponent=higherOrderComponent(WrappedComponent)</p>
<p>The reason behind the higher-order component is to share the common functionality between components</p>
<p>They are similar to Javascript functions used for adding additional functionalities to the existing component.</p>

<h2>26.Do you know about SEO?Is it true that react js supports SEO support</h2>
<p>Search engine optimisation(SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.</p>
<p>SEO targets unpaid traffic(known as "natural" or "organic" results)rather than direct traffic or paid traffic.</p>
<p>React helps build a very user-friendly UI that is also valuable by SEO,so you definitely shouldn't avoid it while creating a user interface for your app/website.</p>
<p>However,you should use some tricks to ensure that your React-site is understandable for Google  crawlers and ,therefore,good for SEO.</p>


<h2>27.what is clean-up in useEffect?</h2>
<p>Just like the name implies,the 'useEffect' cleanup is a funtion in the 'useEffect' Hook that allows us to tidy up our code before our component unmounts.</p>
<p>When our code runs and reruns for every render,'useEffect' also cleans up after itself using the cleanup function.</p>
<p>The 'useEffect' Hook is built in a way that we can return a function inside it and this return function is where the cleanup
 happens.</p>
<p>The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviour</p>
<pre>useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    </pre>

<h2>28.What is the use of useCallback and useMemo</h2>
<p>Fundamentally,useMemo and useCallback are tools built to help us optimize re-renders.</p>
<p>They do this in two ways:Reducing the amount of work that needs to be done in a given render.</p>
<p>Reducing the number the times that a component needs to re-render.</p>



<h2>29.Why do we need keys in react list?</h2>
<p>Keys help React identify which items have changed(added/removed/re-ordered).</p>
<p>To give a unique identity to every element inside the array,a key is required</p>


<h2>30.Do you know about Redux?</h2>
<p>Redux is a pattern and library for managing and updating application state,using events called "actions".</p>
<p>It serves as a centralized store for state that needs to be across your entire application,with rules ensuring that the state can only be updated in a predictable fashion.</p>
<p>Actions are plain Javascript objects that have a type field.Actions only tells us what to do,but they don't tell how to to.</p>
<p>Reducers are functions that take the current state and an action as an arguments,and return a new state result.</p>
<p>Store:The Redux store brings together the state,action,and reducers that make up your app.</p>
<p>It is important to note that you will only have a single store in a Redux application.</p>

