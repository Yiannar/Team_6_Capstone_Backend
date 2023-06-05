# Kyrun Backend

Welcome to Kyrun backend Capstone project, a site that allows you to connect your fitness goals with others that share the same lifestyle with you with an emphasis on being safe.

## User Stories

The user can access this page by either clicking on the deployed applications or the user can Fork and clone this repository.

Navigate to the cloned repository's directory on your command line. Then, run the following command:

npm install

Once everything is installed run the following commands:

psql -U postgres -f db/schema.sql

psql -U postgres -f db/seed.sql

- User will be able to create an account using the sign up button
- User will be able to see more information about the app
- User will be able to sign into their account once the account was created
- User will be able to see a landing page where they will see a list of groups with a picture of the groups along with their group name on the bottom of the page they will be able to see buttons that will allow you to browse groups, create a group and view their profile
- User will be able to view the individual group once they press the name of the group, on the individual group page they will see the picture of the group, the name, any user post and replies
- User will be able to view the browse groups page once they select the browser groups button, that would allow the user to see the picture of the group, the name of the group, a drop down for the group description and a join group button
- User will be able to view the create a group page once they select the create a group button, on the create a group page they would see a form where they put the title of the group, the description, an image and a submit button to create the group.
