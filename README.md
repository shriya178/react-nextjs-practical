# React and Next.js Practical Assignment

**Student Name:** Shriya Patel
**Course:** Full Stack Web Development
**Institute:** Red And White Skill Education

---

## Video Explanation

Watch the full video explanation of all 7 tasks here:

**[Click here to watch the video][(PASTE_YOUR_VIDEO_LINK_HERE](https://drive.google.com/file/d/1CXU1VTXLmSx27FkgKHKbVhKdN7QC0f5M/view?usp=sharing))**

---

## Project Overview

This repository contains two projects:

| Project | Folder | Tech | Port |
|---|---|---|---|
| React app | `react-practical` | React + Vite | 5173 |
| Next.js app | `my-app` | Next.js (App Router) | 3000 |

---

## Tasks Covered

### Task 1: Environment Setup
- Installed Node.js and VS Code
- Created a React project using Vite
- Created a Next.js project using create-next-app
- Both projects run successfully
- Topics: Node.js, npm, npx, React installation, Next.js installation

### Task 2: JSX and Components
- Components: `Header`, `Welcome Section`, `Footer`
- Displays student name, course, institute name, current date and an image
- Topics: JSX, rendering elements, nested elements, attributes, comments, functional components

### Task 3: Rest and Spread Operator
- Merge two arrays
- Merge two objects
- Copy an object using spread
- Function using the rest operator (`sum(...numbers)`)
- All outputs are shown on the page

### Task 4: Props
- One reusable `StudentCard` component
- Props: name, city, state, country, course
- Six student cards rendered from the same component

### Task 5: State (useState)
- Examples with string, number, boolean, array and object
- Each example has an Add/Update button and a Reset button

### Task 6: useEffect and Local Storage (Student Information Manager)
- Add a student name
- Display the student list
- Data is saved in Local Storage
- Data is restored automatically after page refresh
- Delete a student

### Task 7: Next.js Basics
- Home page and About page
- Student list
- Reusable `StudentCard` component using props
- Folder-based routing and a shared navbar in `layout.jsx`



## Folder Structure

### React project (Vite)
```
react-practical/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── assets/
    │   └── girl-img.jpeg
    └── Components/
        ├── Header.jsx
        ├── Welcome-section.jsx
        ├── Footer.jsx
        ├── RestSpread.jsx
        ├── StudentCard.jsx
        ├── StateExamples.jsx
        └── StudentManager.jsx
```

### Next.js project
```
my-app/
├── app/
│   ├── layout.jsx
│   ├── page.jsx          (Home page)
│   ├── globals.css
│   └── about/
│       └── page.jsx      (About page)
├── components/
│   └── StudentCard.jsx
└── data/
    └── students.js
```

---

## How to Run

Make sure Node.js is installed. Check with:
```bash
node -v
npm -v
```

### Run the React project
```bash
cd react-practical
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173/)

### Run the Next.js project
```bash
cd my-app
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000/) (Home) and[ http://localhost:3000/about](http://localhost:3000/about) (About)





## What I Learned
- Setting up React and Next.js projects
- Understanding the React and Next.js folder structure
- Creating reusable components and using JSX
- Using the rest and spread operators
- Passing data with props
- Managing state with `useState`
- Using `useEffect` for side effects
- Storing and retrieving data with Local Storage
- Building simple React and Next.js applications

---

## Author
**Shriya Patel**
Red And White Skill Education, Full Stack Web Development
