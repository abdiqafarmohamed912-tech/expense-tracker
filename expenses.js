// ============================================================
// EXPENSE TRACKER — expenses.js
// Reads saved expenses from localStorage and displays them
// ============================================================

// ── Footer year ──
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ── Auto-highlight active nav link ──
document.querySelectorAll(".nav-links a").forEach((link) => {
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (link.href.includes(page)) {
    link.classList.add("active");
  }
});

// ── Load and save expenses from localStorage ──
function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses") || "[]");
}

function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// ── Escape HTML to prevent XSS when displaying user-entered data ──
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Main render function — called on load and after every change ──
function render() {
  const expenses = getExpenses();
  const statsBar = document.getElementById("stats-bar");
  const expList = document.getElementById("expense-list");

  // ── Stats bar ──
  if (expenses.length === 0) {
    statsBar.innerHTML = "";
  } else {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const avg = (total / expenses.length).toFixed(0);

    statsBar.innerHTML = `
      <p><strong>${expenses.length}</strong>Total Expenses</p>
      <p><strong>KES ${Number(total).toLocaleString()}</strong>Total Spent</p>
      <p><strong>KES ${Number(avg).toLocaleString()}</strong>Avg per Expense</p>
    `;
  }

  // ── Empty state ──
  if (expenses.length === 0) {
    expList.innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:var(--muted);">
        <div style="font-size:52px; margin-bottom:16px; opacity:0.25;">💸</div>
        <p style="font-family:'Bebas Neue',sans-serif; font-size:26px; letter-spacing:2px; color:var(--muted); margin-bottom:8px;">No Expenses Yet</p>
        <p style="font-size:13px; font-family:'DM Mono',monospace;">Head to <a href="index.html" style="color:var(--green); text-decoration:none; font-weight:700;">Add Expense</a> to log your first entry.</p>
      </div>
    `;
    return;
  }

  // ── Render each expense as a card ──
  expList.innerHTML = expenses
    .map(
      (expense, index) => `
    <div class="expense-item">
      <div style="flex:1; min-width:0;">
        <div class="expense-name">${escapeHTML(expense.name)}</div>
        <div class="expense-meta">
          ${escapeHTML(expense.date)}
          <span class="category-badge">${escapeHTML(expense.category)}</span>
          ${
            expense.notes
              ? `<span style="color:var(--muted);">· ${escapeHTML(
                  expense.notes
                )}</span>`
              : ""
          }
        </div>
      </div>
      <div class="expense-amount">KES ${expense.amount.toLocaleString()}</div>
      <button
        class="btn-delete"
        type="button"
        onclick="deleteExpense(${index})"
        onmouseover="this.style.borderColor='var(--red)'; this.style.color='var(--red)'; this.style.background='rgba(255,77,77,0.08)';"
        onmouseout="this.style.borderColor='var(--border-mid)'; this.style.color='var(--muted)'; this.style.background='transparent';"
      >
        Delete
      </button>
    </div>
  `
    )
    .join("");
}

// ── Delete a single expense by index ──
function deleteExpense(index) {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  saveExpenses(expenses);
  render();
}

// ── Clear all expenses ──
document.getElementById("btn-clear").addEventListener("click", () => {
  if (getExpenses().length === 0) return;
  if (confirm("Are you sure you want to delete all saved expenses?")) {
    localStorage.removeItem("expenses");
    render();
  }
});

// ── Run on page load ──
render();
