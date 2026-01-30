# TaskFlow – Mini Task Management Web Application

## Project Overview
TaskFlow is a simple task management web application built using **HTML, CSS, and Vanilla JavaScript**.
The project demonstrates a clear understanding of **basic web infrastructure concepts** and **static web hosting**, without using any backend technologies.

This project was developed for the **Mini Web Infrastructure Summative Assessment**.



## Live Demo
**Live Application URL:**  [https://chijoan.github.io/taskflow-mini-web-infrastructure/](https://chijoan.github.io/taskflow-mini-web-infrastructure/)

The application is publicly accessible and deployed using **GitHub Pages**.



## Problem Statement
Many users need a lightweight way to manage daily tasks without installing heavy applications or creating user accounts.
Most existing solutions require authentication, databases, and backend servers.

TaskFlow solves this problem by providing a **browser-based task manager** that runs entirely on the client side and can be accessed instantly through a web browser.



## Project Idea
TaskFlow is designed as a **Minimum Viable Product (MVP)** to demonstrate how traditional web infrastructure works using **static files**.

The focus of the project is understanding:
- How browsers request web pages
- How web servers deliver static files
- How HTML, CSS, and JavaScript work together to create an interactive web application



## Application Features
- Add new tasks
- View a list of tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- Task counter (Total tasks and Completed tasks)
- Persistent task storage using browser `localStorage`
- Responsive and user-friendly interface
- Background image with blended glass UI design



## Technology Stack
- **HTML** – Defines the structure of the application
- **CSS** – Handles styling, layout, and visual appearance
- **JavaScript (Vanilla)** – Manages application logic and user interaction
- **GitHub Pages** – Used for static web hosting and deployment



## Project Structure

```
taskflow-mini-web-infrastructure/
├── index.html # Main HTML file
├── style.css # Application styling
├── script.js # Application logic
├── image/
│ └── image1.jpg # Background image
└── README.md # Project documentation
```



## How to Run the Application Locally
The application runs entirely on the client side and does not require any backend server.

Steps:
1. Clone or download the repository.
2. Open the project folder.
3. Double-click `index.html` **OR**
4. Open `index.html` using a Live Server extension in VS Code.

Any modern web browser (Chrome, Edge, Firefox) can run the application.



## How the Application Is Deployed
The application is deployed as a **static website** using **GitHub Pages**.

The project files were pushed to a GitHub repository, and GitHub Pages was enabled from the repository settings.  
The deployment source was set to the **main branch** and **root directory**, allowing GitHub to automatically serve the static files over the internet.

Once deployed, the application becomes accessible through a public URL.



## Hosting Platform Used and Why
**GitHub Pages** was used as the hosting platform.

GitHub Pages is suitable for this project because:
- It supports static websites
- It does not require backend configuration
- It provides free hosting
- It automatically serves HTML, CSS, and JavaScript files

This makes it ideal for a frontend-only web application like TaskFlow.



## Basic Web Infrastructure Explanation
- **Browser:** Sends requests to the web server, renders HTML content, applies CSS styles, and executes JavaScript.
- **DNS:** Converts the website URL into an IP address so the browser can locate the server.
- **Web Server:** GitHub Pages acts as the web server, responding to requests by serving static files.
- **Static Files:** HTML provides structure, CSS provides styling, and JavaScript provides interactivity.

No backend server or database is involved.



## Assumptions and Design Choices
- The application does not use a backend server.
- No database is required.
- All data is stored using browser `localStorage`.
- The application follows a lightweight MVP design.
- The focus is on understanding web infrastructure rather than advanced frameworks.



## Conclusion
TaskFlow demonstrates how a complete web application can be built, deployed, and accessed using **only frontend technologies** and **classic web infrastructure concepts**.
It clearly shows how browsers, web servers, and static files interact to deliver a functional web application.

---