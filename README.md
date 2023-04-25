# Notes to the team:

1. There's a Gear FAB that can be used for live debugging
2. I covered some Accessibility, Responsiveness, Theming, Localization, and Minimizing Layout Shift.
3. Added animations to show how I would approach one
4. Rounded every odd pixel to the nearest even. Centered misaligned elements from the Figma doc.
5. Used a different font, explained on the [fonts file](src/assets/fonts/fonts.scss)
6. First time with this version of Angular (only played with the old Angular.js, 8+ years ago):
   - so, not all decisions might be up to standard with the Angular community
7. I have a backlog of pending improvements for this code, but I had to stop somewhere

Going Beyond task list: (improvements part of this PR)

- ~~[ ] use SVG for hero img // no color change~~
- [x] Improve UI: use SVGs for search and settings icon
- [x] replace body for HTML handling (document.documentElement) // HTML is :root
- [x] Use a more intuitive font-size approach: https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/
- [x] add close-on-click-outside for ui-controls
- [x] fix light mode colors, specially for hero
- [x] remove text wrapping from table, create wrapped + smaller tables on small screens (no empty space, smaller gaps)
- [x] add namespace to global classes and helpers(.rm-)
- [x] Dynamically create hero title {{title}}
- [x] apply Bem CSS, and :host.base-class-name
- ~~[ ] Format scss file structure, modularize~~
- [x] Rerender Pagination on base font-size change, and textDirection
- [x] Fix checkboxes
- [x] fix character active tab
- [x] modularize all components
- [x] fix ltr hero title
- [x] Improve Vertical layout
- [x] Handle reduced motion (and controls)
- [x] Fix cross-browser tabular-list UI
- [x] Fix cross-browser ui-settings UI
- [x] Fix cross-browser characters header UI (input, button)

Backlog:

- [ ] add loading screen (window.onload?) test when trying to host page online
- [ ] Add empty search result page
- [ ] Fix: add ability to clear the search word (back to show all) // error exists in base project
- [ ] handle 404 pages?
- [ ] Test TabularList layout on large font + small screen
- [ ] Improve Pagination voice over
- [ ] improve form voice over
- [ ] improve TabularList voice over with column info: https://webaim.org/techniques/forms/advanced
- [ ] add custom scrollbar (make it thick)
- [ ] Run all possible accessibility checks
- [ ] Run lighthouse checks
- [ ] create reduce header on scroll variant
- [ ] Perfect pagination with "scroll-to-active" animation (while keeping accessibility)
- [ ] Lazy Load?
- [ ] add unit tests // had issues running karma. Debug later
- [ ] add e2e tests // package.json and config files tied to karma bug. WIP: git stashed

\*\* If you run into an issue running `$ yarn install` try `$ npm install`. (node version v18.10.0)
\*\* For testing use node version 14 lts.

# ClickUp UI/UX Engineer Mini Project

## Introduction

Hello! If you're reading this, we probably already talked, and you're about to begin work on your mini project. In this exercise you will show your component styling skills.

After downloading and installing the code, you will see a barebones application that displays information about Rick and Morty characters. Your goal is to apply the design from the Figma file you were provided with.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

After installing npm packages, you can run `ng serve` to start a development server. Navigate to `http://localhost:4200/` and you will see the application. The app will reload automatically when you change any of the source files.

## Delivering final project

Please fork this repository and provide a link to your own public repository with completed project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

If you have any questions regarding this exercise, please contact your recruiter directly!

---

Thanks again for your time and we're looking forward to seeing your final project!

ClickUp Crew
