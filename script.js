<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="About the Expense Tracker project by Abdiqafar Mohamed.">
  <title>About – Expense Tracker</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="top-bar"></div>

  <!-- navbar -->
  <header>
    <nav>
      <p class="nav-logo">💰 <span>Expense</span> Tracker</p>
      <ul class="nav-links">
        <li><a href="index.html">Add Expense</a></li>
        <li><a href="expenses.html">Expenses</a></li>
        <li><a href="about.html" class="active">About</a></li>
      </ul>
    </nav>
  </header>

  <!-- page intro -->
  <div class="intro-section">
    <strong>About This <span>Project</span></strong>
    <p>A personal finance tracker built with pure HTML, CSS and JavaScript.</p>
  </div>

  <!-- main content -->
  <main style="display:block; padding: 36px 24px 60px; max-width: 780px; margin: 0 auto; width: 100%;">

    <!-- overview -->
    <div class="about-card">
      <h3>Project Overview</h3>
      <p>
        The Expense Tracker is a browser-based web application I built to help users record and manage
        their daily expenses. I designed it so anyone can log spending details — name, amount, category,
        date, and notes — without needing a server or database.
      </p>
      <p>
        All data is stored using the browser's <strong style="color:var(--text);">LocalStorage API</strong>,
        meaning your expense history persists even after you close or refresh the tab.
        I built this project to demonstrate my understanding of DOM manipulation,
        form validation, and data persistence using vanilla JavaScript.
      </p>
    </div>

    <!-- 3 info cards -->
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 2px; margin-top: 2px;">

      <div class="about-card">
        <h3>Features</h3>
        <ul>
          <li>Add expense records</li>
          <li>View all saved expenses</li>
          <li>Delete individual expenses</li>
          <li>Clear all expenses</li>
          <li>Live stats — total, count, average</li>
          <li>Category filtering display</li>
        </ul>
      </div>

      <div class="about-card">
        <h3>Technologies</h3>
        <ul>
          <li>HTML5 — structure</li>
          <li>CSS3 — dark green theme</li>
          <li>Vanilla JavaScript — logic</li>
          <li>LocalStorage API — data</li>
          <li>DOM Manipulation</li>
          <li>Form Validation</li>
        </ul>
      </div>

      <div class="about-card">
        <h3>How It Works</h3>
        <ul>
          <li>User fills in the expense form</li>
          <li>JavaScript validates all fields</li>
          <li>Data is saved as a JS object</li>
          <li>Stored as JSON in LocalStorage</li>
          <li>Expenses page reads and renders it</li>
          <li>Stats update automatically</li>
        </ul>
      </div>

    </div>

    <!-- BDD table -->
    <div class="about-card" style="margin-top: 2px; padding: 0; overflow-x: auto;">
      <div style="padding: 24px 28px 0;">
        <h3>BDD Scenarios</h3>
      </div>
      <table class="bdd-table" style="margin-top: 0;">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Input</th>
            <th>Expected Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add Expense</td>
            <td>Valid expense details submitted</td>
            <td>Expense saved &amp; success message shown</td>
          </tr>
          <tr>
            <td>Missing Fields</td>
            <td>Empty or incomplete input</td>
            <td>Validation error message displayed</td>
          </tr>
          <tr>
            <td>View Expenses</td>
            <td>Expenses exist in LocalStorage</td>
            <td>All expenses rendered in the list</td>
          </tr>
          <tr>
            <td>Delete Expense</td>
            <td>User clicks Delete button</td>
            <td>Expense removed from view &amp; storage</td>
          </tr>
          <tr>
            <td>Clear All</td>
            <td>User clicks "Clear All"</td>
            <td>LocalStorage wiped, list is empty</td>
          </tr>
          <tr>
            <td>No Expenses</td>
            <td>Empty LocalStorage on load</td>
            <td>"No expenses yet" message shown</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- author -->
    <div class="about-card" style="margin-top: 2px;">
      <h3>Author</h3>
      <p style="font-family:'Bebas Neue',sans-serif; font-size: clamp(26px,4vw,42px); letter-spacing:2px; color:var(--text); line-height:1; margin-bottom: 12px;">
        Abdiqafar Mohamed
      </p>
      <p>
        I'm a student developer with a passion for web development and UI design.
        I built this project to deepen my understanding of JavaScript — specifically
        DOM manipulation, event handling, form validation, and browser storage.
      </p>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:16px;">
        <a href="mailto:abdiqafarmohamed912@gmail.com"
           style="display:flex; align-items:center; gap:12px; font-family:'DM Mono',monospace; font-size:11px; letter-spacing:1.5px; color:var(--muted); text-decoration:none; text-transform:uppercase; transition:color 0.2s;"
           onmouseover="this.style.color='var(--green)'" onmouseout="this.style.color='var(--muted)'">
          <span style="width:32px; height:32px; background:var(--border-mid); border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:15px; flex-shrink:0;">✉️</span>
          abdiqafarmohamed912@gmail.com
        </a>
        <a href="https://github.com/abdiqafarmohamed912-tech" target="_blank"
           style="display:flex; align-items:center; gap:12px; font-family:'DM Mono',monospace; font-size:11px; letter-spacing:1.5px; color:var(--muted); text-decoration:none; text-transform:uppercase; transition:color 0.2s;"
           onmouseover="this.style.color='var(--green)'" onmouseout="this.style.color='var(--muted)'">
          <span style="width:32px; height:32px; background:var(--border-mid); border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:15px; flex-shrink:0;">🐙</span>
          github.com/abdiqafarmohamed912-tech
        </a>
      </div>
      <a href="index.html" class="back-link" style="margin-top: 20px; display:inline-block;">← Back to Add Expense</a>
    </div>

  </main>

  <!-- footer -->
  <footer>
    <p>&copy; <span id="footer-year"></span> Expense Tracker — Abdiqafar Mohamed</p>
    <p><a href="index.html">Add Expense</a> · <a href="expenses.html">Expenses</a></p>
  </footer>

  <div class="bottom-bar"></div>
  <script src="about.js"></script>
</body>
</html>