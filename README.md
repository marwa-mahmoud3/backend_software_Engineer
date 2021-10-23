# backend_software_Engineer
This is the project structure to help you to start building your own RESTful web APIs using Express framework and MongoDB  based on clean MVC Architecture


<h1>Features</h1>

<ul>
  <li>Authentication by use sesion : login, register and logout </li>
  <li>Authorization (User roles and permissions) </li>
  <li>Security such as encyption</li>
  <li>Validation on all the input fields</li>
</ul>


<h1>Project Structure</h1>

<ul>
  <li>app.js : Configure everything that has to do with Express application. </li>
  <li>routes : The goal of the route is to guide the request to the correct handler function which will be in one of the controllers </li>
  <li>controllers : Handle the application request, interact with models and send back the response to the client</li>
  <li>models (auth.model.js) : (Business logic) related to business rules, how the business works and business needs ( Creating new user in the database, checking if the user password is correct, validating user input data)</li>
</ul>


<h1>Packages</h1>

<ul>
  <li>express</li>
  <li>mongoose</li>
  <li>express-session</li>
  <li>connect-mongodb-session</li>
  <li>express-validator</li>
  <li>connect-flash</li>
  <li>bcrypt</li>
  <li>ejs</li>
</ul>

