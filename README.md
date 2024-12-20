# Project name: Blog Project
## Live server link:  https://blog-project-seven-ruddy.vercel.app/

## Admin login credentials : "email": "admin@example.com",     "password": "admin123",

## Technology used:
* Node.js
* Express.js
* Mongoose
* TypeScript - installed as dev dependency

In addition to those I installed -
* eslint - to check and fix code errors.
* prettier - to format code to have better look.
* ts-node-dev - to run the server every time the code is updated


## The project has a database named blog-project and has two collections - blogs and users.

Modules have the basic file structure as below

1. interface: Where all the types are declared.
2. model: schema is declared with all the validation rules.
3. route: routes (createProduct, getAll, getSingle, updateSingle, deleteSingle) are declared.
4. controller: All controllers are declared with conditions and queries.
5. services: All service logics are created here.

## How it works:

1. All users can register into the project.
2. All users can view all the blogs.
3. Registered users need to login to create blog post.
3. Registered and logged in users can update and delete their own blogs only.
4. Admin can delete any blog and can block any user



