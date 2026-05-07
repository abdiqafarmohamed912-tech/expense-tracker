// ============================================================
// EXPENSE TRACKER — about.js
// Handles footer year and nav highlighting on the about page
// ============================================================

// ── 1. FOOTER YEAR ──
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ── 2. AUTO-HIGHLIGHT ACTIVE NAV LINK ──
document.querySelectorAll(".nav-links a").forEach((link) => {
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (link.href.includes(page)) {
    link.classList.add("active");
  }
});

// ── 3. LOG PAGE LOAD ──
console.log("Expense Tracker — About Page Loaded");
