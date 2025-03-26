# Springload Coding assesment

This assessment is made specifically for Springload to have a starting point for a technical interview and conversation about this project. The time frame given was 2-3 hours and excluding lunch and the time it took to write this ReadMe, the project was completed within that timeframe. Some context outside of the given assignment for the form was made up by me to provide more meaning to the requested fields and provide a little personality to it.

## Techstack: React + Vite (from their setup Readme)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## To start this project

Run `npm i` and then run `npm run dev`

## Assumptions

This assessment was made with the assumption that there was no design, prioritizing the accessibility of this form and it's functionality. This lead to the decision to make the multi select not a dropdown with multi select but a number of checkboxes.

## Further improvement possibilities

A few quick suggestions from a designer would probably improve this form greatly, a different font, better text-whitespace ratio through font-weight and line-height etc.
The form could be made more user friendly through providing a bit more context to users what they're signing up for.

## Known limitations

1. The email validity check is very basic and standard at this point. With complex regex comes complex problems such as foreign characters (like Asian or Russian alphabets). If the current validation proofs to be problematic, upgrades here could be beneficial.
2. The project scope is very small, hence the small setup with React and Vite, for expanding this project it would be recommend to integrate Typescript, and consider a framework such as NextJs to work with React as recommended by React too.

## Todo

Make this repo private after Springload team has had the opportunity to review and the interview is passed to prevent other people from copying this.
