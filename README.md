# Binome

Binome standing for binomial nomenclature is a search application built with the MERN stack.

Which can be utilised to find the scientific names of organisms based on their common name within the limits of the database created.


To view this project I recommend either:
- Contacting me via email so I can send the PORT and MONGODB_URI variables for the .env file or so I can invite you to the project via MongoDB through through using an email address.
- Then creating a .env file in the server folder AND adding said variables as follows PORT=_YOUR_LOCALHOST_OF_CHOICE_HERE & MONGODB_URI=_YOUR_MONGODB_URI_HERE
- Type npm install using your terminal of choice in the client and server folders separately.
- Navigate to the binome folder using your terminal and type npm run deploy then press enter.
- Open your selected browser and navigate to the localhost server you selected in your .env file.
- Where hopefully the project is displayed.
- OR
- Forking the repository
- Type npm install in the client and server folders separately
- Creating or logging into your MongoDB account.
- Creating a free shared tier cluster on MongoDB after logging into your account.
- Creating a search index through the shared tier cluster created.
- Creating a .env file in the server folder.
- Uncommenting the code in the server/src/services/mongo.js, server/src/organisms/organisms.router.js, client/src/hooks/requests.js and client/src/hooks/useOrganisms.js to setup the mongoDB database - this may take some time speaking from experience.
- Naivgating to the Database Deployments tab and clicking the connect button.
- Clicking on Compass then downloading compass if it is not installed on your operating system.
- After downloading compass create a new connection in compass.
- Then access and copy your connection string by clicking on the ellipsis and selecting copy connection string
- Next add PORT=_YOUR_LOCALHOST_OF_CHOICE_HERE e.g. PORT=5000, and paste your copied connection string MONGODB_URI=_YOUR_MONGODB_URI to the .env file.
- Navigate to the binome folder using your terminal of choice and type npm run deploy then press enter.
- Open your selected browser and navigate to the localhost server you selected in your .env file.
- Where hopefully the project is displayed.
