
# Election Management system

## Table of contents

- [Overview](#Overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
	- [Frontend](#frontend)
	- [Backend](#backend)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Acknowledgement](#acknowledgement)

## Overview

This online voting system (Election management system as defined in title) is a web-based application designed to facilitate voting processes digitally. This project includes both front-end and back-end components, providing a seamless experience for users to cast their votes, view results, and access related information.

The web-app provides a client side app for the users to cast their vote directly from the internet. This causes the process to be convenient, efficient, accessible, secure and flexible and has a larger impact on not only the voters but as well as the overall of community.

The major purpose of the project is to provide the community with an easier assist to people with voting that is transparent and accurate than the traditional voting system. 

The **Online Voting System** is designed to manage and streamline the process of coting in any election. It allows users to register as voters, log in to cast their votes to the representing candidates of their choice, and view real-time results. The system comprises several entities, each represented by tables in the database, which interact with each other to ensure a smooth voting experience.

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
