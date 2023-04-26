
### Database Driven Menu
This is a Next.js project that uses Tailwind CSS and MySQL.

### Project Description
The project uses Next.js, a React framework for building server-side rendered (SSR) web applications, Tailwind CSS, a utility-first CSS framework, and MySQL, an open-source relational database management system.

The project folder format is as follows:
```bash
src/
├── components/
├── pages/
├── styles/
│   ├── globals.css
│   └── ...
├── utils/
│   ├── db.js
│   └── ...
└── ...
```
The components/ directory contains reusable React components, the pages/ directory contains the Next.js pages, and the styles/ directory contains global styles. The utils/ directory contains utility functions, including a ```db.js``` file for connecting to the MySQL database.

### Installation
To install the project, follow these steps:

Clone the repository: ```git clone https://github.com/tausif-fardin/DynamicMenu.git```.
Navigate to the project directory: ```cd project-name```.
Install the dependencies:```npm install```.
Set up the MySQL database by running the SQL file located in ```utils/db.sql```.
Create a ```.env.local``` file in the root directory of the project and add the following variables:
#### makefile
```bash
DB_HOST=localhost
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
DB_PORT=your-database-server-port
```

Start the development server: npm run dev.
### Usage
To use the project, navigate to http://localhost:3000 in your web browser. You can make changes to the code in the src/ directory and the changes will be automatically reloaded in your browser.

