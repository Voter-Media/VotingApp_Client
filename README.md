
# Election Management system

## Table of contents

- [Overview](#Overview)
- [Features](#features)
- [Project Structure](#project-structure)
	- [Frontend](#front-end)
	- [Backend](#back-end)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
	
## Overview

This online voting system (Election management system as defined in title) is a web-based application designed to facilitate voting processes digitally. This project includes both front-end and back-end components, providing a seamless experience for users to cast their votes, view results, and access related information.

The web-app provides a client side app for the users to cast their vote directly from the internet. This causes the process to be convenient, efficient, accessible, secure and flexible and has a larger impact on not only the voters but as well as the overall of community.

The major purpose of the project is to provide the community with an easier assist to people with voting that is transparent and accurate than the traditional voting system. 

The **Online Voting System** is designed to manage and streamline the process of voting in any election. It allows users to register as voters, log in to cast their votes to the representing candidates of their choice, and view real-time results. The system comprises several entities, each represented by tables in the database, which interact with each other to ensure a smooth voting experience.

1. User Registration and Authentication
      - User Entity:
		  - This entity stores information about each users credentials.
		  - This also defines that the users can have multiple roles such as vote and admin, which are stored in 'role' field.
		  - The 'verified' field ensures that only authenticated users can vote.
	  - Login Entity:
		  - The 'login' entity keeps track of user login activities. It records the username, login time, and the associated user ID.
2. Candidate management
	 - Candidate Entity:
		 - This entity manages the candidates running for election. It stores details such as candidate ID, position they are running for, their party affiliation, and a link to the user's information.
		 - Each candidate is linked to a user via `user_id`, ensuring that candidate profiles are associated with valid users in the system.
3. Voting Process
	  - Voter Entity:
		  - The `voter` entity tracks the voters in the system. It includes fields like `voter_id`, whether they have voted (`voted`), and a link to the user's information (`user_id`).
		  - The `voted` field ensures that each voter can only vote once.
	  - Vote Entity:
		  - The vote entity records each vote cast in the election. It includes a vote_id, the candidate_id of the candidate who received the vote, the voter_id of the voter, and the date and time when the vote was cast.
		  - This entity ensures that votes are securely recorded and can be used to generate real-time results.
## Features
- User Authentication and Authorization:
	- Secure user login and registration system
	- Role-based access control, ensuring only authorized users can access certain features. 
- Voting Mechanism:
	- Voters can view a list of candidates and cast their vote for a specific position.
	- Once a vote is cast, it is securely stored in the database, and the voter is marked as having voted.
	- After a vote is cast and stored, a voter cannot revoke or change their vote to ensure a fair election process.
- Candidate Management:
	- Admins can add and manage candidates, including their position, party affiliation, and profile image.
	- Candidates can view their profiles and update their information.
- Real-Time Vote Tracking:
	- Votes are tracked in real-time, allowing administrators to monitor the election process.
	- Voters can see a confirmation of their vote after it has been cast.
- Data Security:
	- All sensitive user information, including passwords, is encrypted.
	- A user(both candidates and voters) can view their data and are able to update to ensure a proper profile but cannot access information about other users to maintain security and breaches.
	- Secure communication between the front-end and back-end ensures that data integrity is maintained.
- User Interface:
	- Responsive design ensures compatibility across devices.
	- Intuitive navigation and user-friendly design enhance the overall user experience.
- Database Management:
	- Efficient handling of data with structured relationships between users, voters, candidates, and votes.
	- Use of SQL for reliable and secure data storage.

## Project Structure:

The project is composed of a proper front-end for client side providing a seamless user experience and an appropriate back-end for server side providing with the database storing and management and redirection.
- Front-end:
	- The front-end of the project is composed off of javascript, typescript and css building an easy to understand and easy to use user interface.
	
- Back-end:
	- The back-end of the project relies on javascript to provide it with proper handling of functionalities of the web-interface, database management and redirection.
	- The database relies on SQL for all data-related operations, including CRUD(Create, Read, Update, Delete) activities, schema management and transaction control.

## Installation
- #### Prerequisites
	-  Node.js and npm installed on your machine.
	- MySQL or MariaDB sql instance running.
- ##### Front-end setup.
1. Navigate to the `front-end` directory:
		`cd frontend`
2. Install the dependencies:
		`npm install`
3. Start the development server:
		`npm run dev`
- ##### Back-end setup.
1. Navigate to the `back-end` directory:
		`cd backend`
2. Install the dependencies:
		`npm install`
3. Configure database.
4. Start the back-end server:
		`nmp run dev`

## Usage
1. Start the both backend and frontend servers.
2. Access the frontend via the development server i.e `http://localhost:3000`.
3. Use the admin dashboard to manage voters, candidates and monitor results.

## Contributors:
[Pawan Awasthi](https://github.com/pawandai) - Team lead  
[Roshan Dahal](https://github.com/RoshanDharal123)  
[Kendra Pokhrel](https://github.com/StellarSync/)  
[Anish Neupane](https://github.com/2222anish22)  
	
	
