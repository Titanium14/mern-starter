# MERN Starter - A template for utilising the web stack

A live demo of this repository is available on [Heroku](https://mern2.herokuapp.com/).

## Description

MERN Starter is a template for creating full-stack web applications. Specifically, it utilises four main technologies: MongoDB, Express, React and Node, otherwise known as the MERN stack. This template also uses Redux and is optimised for Heroku deployment and for an online MongoDB service (MongoDB Atlas).

Within this template, you will see that:

- All required dependencies exists in the three package.json files.
- There is a user login/register system implemented with Redux and validation. (Front-end and Backend)
- A basic layout for the website, developed with Material-UI. (Front-end)
- MongoDB integration is already completed, only requiring you to create a <b>default.json</b> file (see <i>Quick Start</i> to see what is included in the JSON file.) for development. You are required to create a MongoDB database yourself and this template is optimised for MongoDB Atlas. See the MongoDB Atlas section for database setup. (Backend)
- Heroku deployment has been set up. See Heroku section for details.
- Application production has been set up and will work, provided that MongoDB and Heroku is set up properly.

## Quick Start

```sh
# Clone this repo.
git clone https://github.com/Titanium14/mern-starter.git

#-----------------------------------------------------------
# Execute the following commands in the root directory only:
#-----------------------------------------------------------

# Installs all dependencies in root, backend and client.
npm run full-install

# Run the client & server with concurrently.
npm run dev

# Run the server only.
npm run backend

# Run the client only.
npm run client
```

For development, you will need to create a <b>default.json</b> file in the backend config folder:

```javascript
{
  mongoURI: 'YOUR_OWN_MONGO_URI',
  jwtSecret: 'YOUR_OWN_SECRET'
}
```

## MongoDB Atlas

When setting up MongoDB Atlas for the first time, follow through with the instructions given and you will have set up the online service.

However, if the instructions do not appear, i.e. you have set up the DB before with the account you logged in with, then take the following steps:

1. If you have not already, create an account. Otherwise, login to your account.
2. Once on the dashboard, click on the Build a Cluster button.
3. On the Create New Cluster page, the only sections requiring your attention are the "Cloud Provider & Region" and "Cluster Name" sections.
   1. The Cloud Provider should not matter too much (<i>defaults to Amazon Web Service</i>) but always opt to choose the closest Region to you.
   2. Choose a cluster name. Carefully consider this as <b>there is no way to change the name once created</b>.
4. Create the cluster and wait for it to be created. This process may take a few minutes (<i>7-10 minutes according to MongoDB Atlas</i>).
5. Once created, go to the security tab and create your first DB user and give them the appropriate user privileges of your choosing.
6. In the same tab, look for the sub-tab and click on IP Whitelist and create a whitelist entry.
   1. It is worth noting that you should only whitelist one location at any one time (<i>i.e. your IP address</i>) for security purposes. However, the decision to do so is up to you.
7. Go back to the main dashboard and in the sandbox, connect to your cluster via the connect button.
   1. You will be given three connection choices. This template utilises the second option (<i>"Connect Your Application"</i>) but feel free to explore the other options if you choose to do so.
   2. In the second screen, select the appropriate driver and its version (this template uses Node.js 3.0+) and add the connection string only to your code in <b>default.json</b>.
      1. When adding the connection string, make sure to substitute parts of the string, as shown below.
8. Finally, go to the Collections tab and create your first database. Altenatively, you can simply insert some data and MongoDB Atlas will auto-generate the database and the corresponding collection and document for you.

```sh
# Take this sample connection string
mongodb+srv://<username>:<password>@cluster0-rx3wf.mongodb.net/<dbname>?retryWrites=true&w=majority

#-----------------------------------------------------------
# Substitute the following parts:
#-----------------------------------------------------------

# These two parts refer to your created DB user.
> <username> (Automatically inputted into the string)
> <password>

# This refers to the cluster name.
> cluster0-rx3wf (Automatically inputted into the string)

# This part refers to the name of the database you made.
> <dbname>
```

## Heroku deployment

When deploying to Heroku, there are a few steps needed to be taken:

1. Set up an account on Heroku.
2. Create the app on Heroku.
3. Set up your config vars in the settings panel. Use <i>MONGO_URI</i> and <i>JWT_SECRET</i> as your keys. These keys have the same values set in your <b>default.json</b> file.
   - It is important to note that for production, <b>default.json is not used at all</b>. In fact, this file is entirely ignored for production. These two keys are saved as environment variables for your application to access, e.g. accessed through <b>process.env.MONGO_URI</b> or <b>process.env.JWT_SECRET</b>.
4. When deploying, there are two options: use Heroku CLI or connect app to Github repo. The instructions are shown in the deploy panel on Heroku.
5. After setting up using one of the options, your app can be built and deployed.

## Technologies used

_Database_

- [MongoDB](https://www.mongodb.com/) - A NoSQL collection-oriented database, formatted in JSON. MongoDB is available locally or as an online service, e.g. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

_Security & Communication_

- [Express](https://expressjs.com/) - A Node.js web app framework utilised as a server, handles web APIs requests, serves files to clients and provides access to the DB.
- [Node](https://nodejs.org/en/) - A JS runtime environment installed on the server for server-side execution of JS code.

_Client_

- [React](https://reactjs.org/) - A reactive, component-oriented, front-end JS library.
- [Material-UI](https://material-ui.com/) - React UI framework implementing [Google's Material Design](https://material.io/).
- [Redux](https://redux.js.org/) - Application State Management Library

## Authors

- **Wai Jyuen Phang** - [Titanium14](https://github.com/Titanium14)

## Acknowledgments

- **Brad Traversy** - [GitHub](https://github.com/bradtraversy/devconnector_2.0) | [Udemy](https://www.udemy.com/mern-stack-front-to-back/) | [Youtube](https://www.youtube.com/user/TechGuyWeb)