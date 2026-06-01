# Paradise Park Website — Owner's Guide

This guide is written for someone who isn't a developer.
You don't need to understand code to make most common changes.

---

## The Three Files That Run Your Site

| File | What it does |
|------|-------------|
| `index.html` | Controls what's **on** the page (text, structure, sections) |
| `css/style.css` | Controls how everything **looks** (colors, fonts, sizes) |
| `js/main.js` | Controls how things **behave** (tab switching, the menu) |

Each file has detailed notes throughout explaining what each section does.

---

## Most Common Changes

### Change the header background photo
1. Put your photo in the `images/` folder
2. Open `css/style.css`
3. Find the line that starts with `--header-bg:`
4. Change it to: `--header-bg: url('../images/your-filename.jpg');`

### Change the site colors
Open `css/style.css` and find the `EASY CUSTOMIZATION` section near the top.
Every color has a label explaining what it affects.

### Add content to the Home page
Open `index.html` and find the comment that says:
`↓ ADD HOME PAGE CONTENT HERE ↓`
Add your text, images, or other content between the two markers.

### Add items to the hamburger menu
Open `index.html` and find the comment that says:
`↓ ADD MENU ITEMS HERE ↓`
Add links like: `<a href="#">Hours & Pricing</a>`

### Add a new tab/page
1. In `index.html`, find the nav section and add:
   `<button class="nav-tab" data-page="gallery">Gallery</button>`
2. Further down, copy an existing page block and change the id to match:
   `<main id="page-gallery" class="page">`
3. Done — the tab switching works automatically.

---

## Folder Structure

```
paradise-park/
├── index.html       ← Main page file
├── css/
│   └── style.css    ← All visual styling
├── js/
│   └── main.js      ← Interactive behavior
├── images/          ← Put your photos here
└── README.md        ← This guide
```
# paradise-park-test
