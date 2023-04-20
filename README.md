# Notes to the team:

1. There's a Gear FAB that can be used for live debugging
2. I covered some Accessibility, Responsiveness, Theming, Localization, and Minimizing Layout Shift.
3. Added animations to show how I would approach one
4. Rounded every odd pixel to the nearest even. Centered misaligned elements from the Figma doc.
5. Used a different font, explained on the [fonts file](src/assets/fonts/fonts.scss)
6. First time with this version of Angular (only played with the old Angular.js, 8+ years ago):
   - so, not all decisions might be up to standard with the Angular community
   - I might have introduced a few bugs. Happy to tackle them later
7. I have a backlog of pending improvements for this code, but I had to stop somewhere

TODO:

- [ ] Improve Pagination voice over
- [ ] Fix checkboxes
- [ ] fix form voice over
- [ ] fix TabularList voice over with column info: https://webaim.org/techniques/forms/advanced
- [x] fix character active tab
- [ ] add unit tests
- [ ] add e2e tests
- [ ] fix light mode colors, specially for hero
- [x] modularize all components
- [ ] apply Bem CSS, and :host.base-class-name
- [ ] fix ltr hero title
- [ ] use SVG for hero img
- [ ] add custom scrollbar
- [ ] create reduce header on scroll variant
- [ ] create comprehensive PDF, mention it on the README.md (ask for the PDF)
- [ ] Use a more intuitive font-size approach: https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/
- [ ] Add valid search autocomplete. Can it be styled?
- [ ] Test TabularList layout on large font + small screen
- [x] Improve Vertical layout
- [x] Handle reduced motion (and controls)

\*\* If you run into an issue running `$ yarn install` try `$ npm install`. (node version v18.10.0)

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
