Todo App using React & Redux
A simple Todo application built with React and Redux. Users can add, remove, and toggle the completion status of todo items.

Features
Add Todo
Remove Todo
Toggle Completion

Project Structure

my-todo-app/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── redux/
│   │   ├── Todoapp/
│   │   │   ├── actions/
│   │   │   │   └── action.js
│   │   │   ├── reducers/
│   │   │   │   └── reducers.js
│   │   │   └── rootReducer.js
│   ├── store.js
│   ├── Component/
│   │   ├── Form.jsx
│   │   └── Todos.jsx
│   ├── logo.svg
│   └── ...

Installation
1. Clone the repository:
Copy code
git clone https://github.com/yourusername/todo-app.git

2.Navigate to the project directory:
Copy code
cd todo-app

3. Install dependencies:
Copy code
npm install

4. Start the development server:
Copy code
npm start


Usage
1. Open your browser and go to http://localhost:3000.
2. Add todo items using the input field.
3. Toggle completion status with the checkbox.
4. Remove todos by clicking the trash icon.
