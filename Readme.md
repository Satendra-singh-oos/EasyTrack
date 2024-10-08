# 📊 EasyTrack

- Welcome to EasyTrack, Designed to enhance project visibility and streamline task management within teams, ensuring everyone stays on track.


# ⚡ Technologies


**👨🏻‍💻Frontend:**
- **Next.js**: A powerful React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI design.
- **Recharts** : A composable charting library for React, used to visualize project progress and task data.
- **Redux Toolkit**: A standard for efficient Redux development.
- **Redux Toolkit Query**: A powerful data fetching and caching tool integrated with Redux.
- **Material UI Data Grid**: A feature-rich data grid for displaying and manipulating tabular data.

**💎 Backend:**
- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express**: A web application framework for Node.js, facilitating easy API creation.
- **Prisma**: A next-generation ORM for PostgreSQL, streamlining database interactions.

**🗃️ Database:**
- **PostgreSQL**: A powerful, open-source relational database system.

**☁️ Cloud:**
- **AWS EC2**: The virtual servers in the cloud for hosting applications.
- **AWS RDS**: Managed relational database service for easier database setup and maintenance.
- **AWS API Gateway**: A fully managed service for creating and managing APIs.
- **AWS Amplify**: A platform for building and deploying full-stack applications.
- **AWS S3**: For object storage service for storing and retrieving data.
- **AWS Lambda**: Serverless compute service that runs code in response to events.
- **AWS Cognito**: User authentication and management service for secure sign-in.




# 👾 Features


- **Seamless Project Creation**: The Team leads to initiate and oversee projects effortlessly, ensuring a streamlined workflow.

- **Efficient Bug Tracking**: Users can quickly view and manage assigned bugs, improving issue resolution times.

- **Dynamic Timeline Visualization**: An interactive timeline showcases task assignments and project milestones, enhancing clarity on project progress.

- **Intuitive Search Capabilities**: Easily search for tasks or users, making navigation simple and efficient.

- **Comprehensive User Directory**: Access a complete list of all users in the organization, facilitating easy collaboration.

- **Team Insights**: Display details about team members, fostering collaboration and communication.

- **Organizational Project Overview**: A dedicated tab that summarizes all projects within the organization, providing a clear picture of overall progress.

- **Task Prioritization Filters**: Users can filter tasks by priority (high, medium, low) and backlog status, helping them focus on what matters most.

- **Data Visualization Tools**: Leverage charts and graphs to represent project data, providing insights into team performance.

- **Mobile-Responsive Design**: A responsive interface ensures a consistent experience across various devices.


# ✍️ What I Learned

Throughout this project, my main focus to get to know as many service as provided by AWS for production usage like AWS EC2,RDS,S3,API gateway etc .

# 🚗 Running the Project

1. Clone the repository to your local machine.
2. Run ```npm install``` or ```yarn``` in the project directory to install the required dependencies.
3. Set up environment variables: 
  - Create a .env file in both the client and server folders.
  - Add the required environment variables with your credentials, referencing the .env.sample file.
4. Start server
  - ``` cd server ``` -> ``` npm run build ``` -> ``` npm run dev ```

5. Start the client server:
   - ``` cd client ``` ->  ``` npm run dev ```
6. Check your backend is running on the port   http://localhost:${PORT} the PORT you provided on the .env file 
7. Open http://localhost:3000 (or the address shown in your console) in your web browser 