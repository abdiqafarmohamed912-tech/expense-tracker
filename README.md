# 💰 Expense Tracker

---

## 📌 Project Description
This project was created as part of my Foundations of Software Engineering final project to demonstrate practical front-end development skills.
The Expense Tracker is a web application I built to help people record and manage their daily expenses. I created this project because I noticed that it can be hard to keep track of where your money goes on a day to day basis. This app makes it easy to log every expense and see your spending history in one place.

Users can enter details such as:
- Expense name
- Amount in KES
- Date of the expense
- Category (Food, Transport, Bills, etc.)
- Optional notes

The app saves all data using the browser's **LocalStorage**, so your expense history stays saved even after you close or refresh the page.

---

## 🎯 Project Objectives

- Demonstrate my understanding of **HTML, CSS, and JavaScript**
- Practice **DOM manipulation** to dynamically update the page
- Implement **data storage using LocalStorage**
- Apply **form validation** to handle user input correctly
- Build a clean and easy to use interface

---

## 🧠 Features

- ✅ Add expense records
- ✅ View all saved expenses
- ✅ Delete individual expenses
- ✅ Clear all expenses at once
- ✅ Display live spending statistics:
  - Total number of expenses
  - Total amount spent
  - Average amount per expense
- ✅ Form validation with error messages
- ✅ Data persists using LocalStorage
- ✅ Category badges on each expense

---

## 🛠️ Technologies Used
- **Git & GitHub** – Version control and project hosting
  - **HTML5** – Structure of the application
- **CSS3** – Styling and layout (Dark & Green theme)
- **JavaScript (Vanilla JS)** – Logic and interactivity
- **LocalStorage API** – Saving and retrieving data

---

## 🧩 Project Structure
expense-tracker/
├── index.html       # Add expense page (main form)
├── expenses.html    # View all saved expenses
├── about.html       # About the project
├── style.css        # All styling
├── script.js        # Form logic and saving expenses
├── expenses.js      # Renders expense list and stats
└── about.js         # About page interactivity

---

## ⚙️ Setup Instructions

1. Clone or download the repository
2. Open the project folder in VS Code
3. Open `index.html` in your browser
4. Start logging your expenses

No installation or setup required.

---

## 💡 How It Works

- When I submit an expense:
  - JavaScript validates all the fields first
  - The data is packaged into a JavaScript object
  - It gets saved into an array inside LocalStorage using JSON.stringify
- When the expenses page loads:
  - It reads the data from LocalStorage using JSON.parse
  - It dynamically renders each expense as a card on the page
  - It calculates and displays the total spent and average per expense

---

## 🧪 BDD (Behavior Driven Development)

| Behavior | Input | Output |
|--------|------|--------|
| Add expense | Valid expense details | Expense saved and success message shown |
| Missing fields | Empty input | Error message displayed |
| View expenses | Saved expenses exist | Expenses displayed on page |
| Delete expense | Click delete | Expense removed from list and storage |
| Clear all | Click clear all | All expenses removed |
| No expenses | Empty storage | "No expenses yet" message shown |

---

## 👤 Author

- **Abdiqafar Mohamed**
  Student Developer passionate about web development and building things that solve real problems.
  ## 🚀 Future Improvements
## 📬 Contact

- Email: abdiqafarmohamed912@gmail.com
- GitHub: https://github.com/abdiqafarmohamed912-tech

---

## 📄 License

This project is for educational purposes only.
