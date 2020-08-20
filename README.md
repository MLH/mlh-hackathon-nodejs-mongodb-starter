# Introduction

This is a hackathon boilerplate for new Node.js applications created by [Major League Hacking](https://github.com/mlh). It is for hackers looking to get started quickly on a new hackathon project using the Node.js environment.

- [Installation Guide](#installation-guide) - How to get started with a new Node.js app
- [User Guide](https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/USER_GUIDE.md) - How to develop apps created with this starter project
- [Contributing Guide](https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/CONTRIBUTING.md) - How to contribute to the project

# <a name='installation-guide'>Installation Guide</a>

This project requires the following tools:

- [Node.js](https://nodejs.org/en/) - The JavaScript environment for server-side code.
- [NPM](https://www.npmjs.com/) - A Node.js package manager used to install dependencies.
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) - A NoSQL database system.

To get started, install NPM and MongoDB Community Server on your local computer if you don't have them already. 
[Here](https://docs.mongodb.com/manual/administration/install-community/) is a guide to install MongdoDB on any major platform (Windows, Mac, Linux)

If you're on **Windows**: 
1.  Follow this [tutorial](http://sysadmindata.com/set-mongodb-path-windows/) that would be relevant for Step 4. 

2. **Note:** The tutorial's example uses version 3.4 of MongoDB, make sure you type the version that is installed on your computer. If you're not sure what version you have, you can check here:

```
C:\Program Files\MongoDB\Server
```

## Getting Started

**Step 1. Clone the code into a fresh folder**

```
$ git clone https://github.com/MLH/mlh-hackathon-nodejs-mongodb-starter.git
$ cd mlh-hackathon-nodejs-mongodb-starter
```

**Step 2. Install Dependencies.**

Next, we need to install the project dependencies, which are listed in `package.json`.

```
$ npm install
```

**Step 3: Create an app on GitHub**

Head over to [GitHub OAuth apps](https://github.com/settings/developers) and create a new OAuth app. 

Under **Application name**, name it what you like

You'll need to specify a **Homepage URL**, which should be something like:
```
https://localhost:5000
```

You'll need to specify a **Authorization callback URL**, which should be something like:

```
https://localhost:5000/auth/callback/github
```

The default port for our app is `5000`, but you may need to update this if your setup uses a different port or if you're hosting your app somewhere besides your local machine.

**Step 4: Update environment variables and run the Server.**

Create a new file named `.env` by duplicating `.env.sample`. Update the new file with the GitHub OAuth credentials. It should look similar to this:

```
# .env file
MONGODB_URI="[INSERT_MONGODB_URI]"
GITHUB_CLIENT_ID="[INSERT_CLIENT_ID]"
GITHUB_CLIENT_SECRET="[INSERT_CLIENT_SECRET]"
```

You'll place your GitHub OAuth credentials here and your database URL. Make sure to remove the quotation marks (" "). Learn more about the required [Environment Variables here](#environment-variables).

To find your ```MONGODB_URI```:
- Open up the terminal and type in ```mongo``` and hit Enter. You should see a few lines print out. 
	- If you're using **Windows**, it is recommended to use PowerShell
- On the second line that says ```connecting to:```, you should see a URL that starts with ```mongodb://```
- That is your ```MONGODB_URI```, copy and paste the link into ```"[INSERT_MONGODB_URI]"```
	- Note: Make sure to only copy and paste up till the first alpha character.
	- Ex: ```mongodb://111.1.1.1/words```, copy only ```mongodb://111.1.1.1/```

To find your ```GITHUB_CLIENT_ID``` and ```GITHUB_CLIENT_SECRET```:
- Go to you OAuth app and you should see an alphanumeric string for both "Client ID" and "Client Secret"
- Your Client ID goes with the ```GITHUB_CLIENT_ID``` field
- Your Client Secret goes with the ```GITHUB_CLIENT_SECRET``` field

---
To get the project up and running, we need to do 2 simple things:

Launch the server:
```
$ mongo
```

Lanuch the application:
```
$ npm start
```

Open http://localhost:5000 to view it in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.

# What's Included?

- [Express](https://expressjs.com/) - A minimal web framework for Node.js web applications.
- [Mongoose](https://mongoosejs.com/) - A elegant mongodb object modeling for node.js.
- [Bootstrap 4](https://getbootstrap.com/) - An open source design system for HTML, CSS, and JS.
- [Handlebars](https://handlebarsjs.com/) - A popular templating language for building layouts.

# Code of Conduct

We enforce a Code of Conduct for all maintainers and contributors of this Guide. Read more in [CONDUCT.md][mlh-conduct].

# License

The Hackathon Starter Kit is open source software [licensed as MIT][mlh-license].

[mlh-conduct]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/docs/CONDUCT.md
[mlh-license]: https://github.com/MLH/mlh-hackathon-nodejs-starter/blob/master/LICENSE.md
