#MERN Cracker-Store

4.Create Git-repository
6.Add routing
6.1.npm i react-router-dom
6.2.create route for home screen
6.3.create router for product screen
7.Created route for homescreen and productscreen,
Create Node.js Server
7.1.run npm init in root folder
7.2.Update package.json set type: module
7.3.Add .js to imports
7.4.npm install express
7.5.create server.js
7.6.add start command as node backend/server.js
7.7.require express
7.8.create route for / return backend is ready
7.9.move product.js from frontend to backend
7.10.create route for /api/products
7.11.return products
7.12.run npm start
8.Fetch products from Backend
8.1. set proxy in package.json
8.2 npm install axios
8.3 use state hook
8.4 use effect hook
8.5 use reducer hook
9.Manage state by reducer hook(replacing useState hook with reducer)
9.1.define reducer
9.2.update fetch data
9.3.get state from useReducer
10.Add bootstrap UI framework
10.1.npm insttall react-bootstrap bootstrap
10.2.update App.js
11.Creating Product component
12.Create Product Details Screen
12.1.Fetch Product from Backend
12.2.Create 3 columns for image,info and action
13.Creating custom loading style//to be done
14.Implementing Add to Cart
14.1.Create React Context
14.2.define Reducer
14.3.create Store Provider
14.4.Implement add to cart button click handler
15.Complete Add to Cart
15.1.check exist item in the cart
15.2.check count in stock in backend
16.Create cart screen
16.1.create 2 columns
16.2.displat items list
16.3.create action column
17.Complete cart screen
17.1.click handler for inc/dec item
17.2.click handler for remove item
17.3.click handler for checkout
18.Create Signin Screen
18.1.create signin form
18.2.add email and password
18.3.add signin button
19.Connect to Mongodb database
19.1.create atlas mongodb database
19.2.install local mongodb databse
19.3.npm install mongoose
19.4.connect to mongodb database
20.Seed sample data to mongodb database
20.1.create product model
20.2.create user model
20.3.create seed route
20.4.use route in server.js
20.5.seed sample product
21.seed Sample Users
21.1.create user model
21.2.seed sample users
21.3.create user routes
22.crete signin backend api
22.1.create signin api
22.2.npm install json webtoken
22.3.define generate token
23.complete Sigin screen
23.1.handel submit action
23.2.save token in store and local storage
23.3.show user name in header
24.create shipping screen
24.1.create form inputs
24.2.handle save shipping address
24.3.add checkout wizard bar
25.Create Signup screen
25.1.create input forms
25.2.handle submit
25.3.create backend api
26.Implement Select Payment method screen
26.1.create input forms
26.2.handle submit
27.Create Place Order Screen
27.1.show cart items,payment method and address
27.2.create order create api
27.3.calculate order summary
28.Implement Place order action
28.1.handle place order action
28.2.create order create api
29.create order screen
29.1.create backend api for order/:id
29.2.fetch order api in frontend
29.3.shoe order information in 2 columns
30.Pay order by paypal
30.1.generate paypal client id
30.2.create api to return client id
30.3.install react-paypal-js
30.4.use PayPalScriptProvider in index.js
30.5.use PayPalSccriptReducer in order screen
30.6.implement loadPaypalScript function
30.7.render paypal button
30.8.implement onApprove payment function
30.9.create pay order api in backend
31.Display order history
31.1.create orderhistory screen
31.2.create order history api
31.3.use api in the front end
32.Create Profile Screen
32.1.get user info from context
32.2.show user information
32.3.create user update api
32.4.update user info
33.Publish To Heroku
33.1. create and config node project
33.2. serve build folder in frontend folder
33.3. Create heroku account
33.4. connect it to github
33.5. Create mongodb atlas database
33.6. Set database connection in heroku env variables
33.7. Commit and push
34.Add Sidebar and Search Box
34.1. add sidebar
34.2. add search box
35.Create Search Screen
35.1.show filters
35.2.create api for searching products
35.3.display results
