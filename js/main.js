/* ================================================================
   PARADISE PARK — JAVASCRIPT
   js/main.js

   This file controls the INTERACTIVE BEHAVIOR of the website:
     • Switching between pages when a nav tab is clicked
     • Opening and closing the hamburger (☰) menu

   You should NOT need to edit this file for most changes.
   The only reason to edit it would be if you rename a page
   or add custom interactive features.

   HOW THE TAB SYSTEM WORKS (no editing needed):
   ──────────────────────────────────────────────
   Each nav tab button in index.html has a data-page="name" attribute.
   When a tab is clicked, this script looks for a <main> element
   with a matching id="page-name" and shows it, hiding all others.

   This means adding a new tab + page in index.html is all you
   need to do — this script handles the switching automatically.
================================================================ */


/* Wait until the full page has loaded before running any code.
   This prevents errors from trying to find elements that don't exist yet. */
document.addEventListener('DOMContentLoaded', () => {


  /* ==============================================================
     TAB SWITCHING
     ──────────────
     Finds all nav tab buttons and all page sections.
     When a tab is clicked:
       1. All tabs lose the "active" highlight
       2. The clicked tab gets the "active" highlight
       3. All pages are hidden
       4. The page matching the tab's data-page value is shown
  ============================================================== */

  /* Collect all elements with class="nav-tab" (the tab buttons) */
  const tabs = document.querySelectorAll('.nav-tab');

  /* Collect all elements with class="page" (the page sections) */
  const pages = document.querySelectorAll('.page');

  /* Loop through every tab button and attach a click listener */
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      /* Read which page this tab should show
         (comes from data-page="..." in index.html) */
      const target = tab.dataset.page;

      /* Step 1: Remove "active" from all tabs (clears any highlight) */
      tabs.forEach(t => t.classList.remove('active'));

      /* Step 2: Add "active" to the tab that was just clicked */
      tab.classList.add('active');

      /* Step 3 & 4: Hide all pages, then show the matching one */
      pages.forEach(page => {
        if (page.id === `page-${target}`) {
          /* This page's id matches the clicked tab — show it */
          page.classList.add('active');
        } else {
          /* This page doesn't match — hide it */
          page.classList.remove('active');
        }
      });

    }); /* end click listener */
  }); /* end tab loop */

  /* END: TAB SWITCHING */


  /* ==============================================================
     HAMBURGER MENU
     ───────────────
     Controls the ☰ button and its dropdown panel.

     Three behaviors are handled:
       A. Clicking the ☰ button opens or closes the menu
       B. Clicking anywhere OUTSIDE the menu closes it
       C. Pressing the Escape key closes the menu
  ============================================================== */

  /* Find the ☰ button and the dropdown panel by their IDs */
  const hamburgerBtn  = document.getElementById('hamburgerBtn');
  const hamburgerMenu = document.getElementById('hamburgerMenu');

  /* Only run the menu code if both elements exist on the page */
  if (hamburgerBtn && hamburgerMenu) {

    /* ── A. Toggle open/close when ☰ is clicked ── */
    hamburgerBtn.addEventListener('click', (e) => {

      /* Stop the click from also triggering the "outside click" handler */
      e.stopPropagation();

      /* Toggle the "open" class on the menu panel
         classList.toggle returns true if class was added, false if removed */
      const isOpen = hamburgerMenu.classList.toggle('open');

      /* Mirror the "open" class on the button (triggers the ✕ animation) */
      hamburgerBtn.classList.toggle('open', isOpen);

      /* Update the accessibility label (used by screen readers) */
      hamburgerBtn.setAttribute('aria-expanded', isOpen);

    }); /* end hamburger button click */


    /* ── B. Close the menu when clicking anywhere outside it ── */
    document.addEventListener('click', (e) => {

      /* Check if the click was outside both the button and the panel */
      const clickedOutside =
        !hamburgerBtn.contains(e.target) &&
        !hamburgerMenu.contains(e.target);

      if (clickedOutside) {
        /* Remove "open" from both the panel and the button */
        hamburgerMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }

    }); /* end outside-click listener */


    /* ── C. Close the menu when the Escape key is pressed ── */
    document.addEventListener('keydown', (e) => {

      if (e.key === 'Escape') {
        hamburgerMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }

    }); /* end keydown listener */

  } /* end "if elements exist" check */

  /* END: HAMBURGER MENU */


  /* ==============================================================
     HAMBURGER MENU — TAB SWITCHING LINKS
     ──────────────────────────────────────
     This block makes the buttons inside the hamburger menu
     switch tabs, exactly like the nav bar buttons do.

     It also closes the hamburger menu automatically after
     the visitor picks a link — so they land on the new page
     with the menu already closed.

     You do NOT need to edit this section when adding new links.
     Just add the button in index.html and this handles the rest.
  ============================================================== */

  /* Find every button inside the hamburger menu that has a
     data-page attribute (class="menu-link") */
  const menuLinks = document.querySelectorAll('.menu-link[data-page]');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {

      /* Read which page this link should switch to */
      const target = link.dataset.page;

      /* Switch the nav tabs — remove active from all, add to the matching one */
      tabs.forEach(t => {
        if (t.dataset.page === target) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });

      /* Switch the pages — hide all, show the matching one */
      pages.forEach(page => {
        if (page.id === `page-${target}`) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });

      /* Close the hamburger menu after the link is clicked */
      hamburgerMenu.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');

    }); /* end menu link click */
  }); /* end menu links loop */

  /* END: HAMBURGER MENU TAB SWITCHING LINKS */


}); /* end DOMContentLoaded */
