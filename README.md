# # My-Note

My-Note is a convenient and lightweight notepad for storing and managing your notes. Say goodbye to sticky notes that always disappear or get lost. With My-Note, you can create an unlimited number of notes and easily customize them for better organization of your ideas, tasks, and more.
## Key Features

-   **Effortless Storage:** Keep your notes in one place for easy retrieval in the future.
-   **Customization:** Add categories, tags, and other metadata to your notes for organization and quick searching.
-   **Search and Filtering:** Find the information you need quickly with an advanced search and filtering system.
-   **Convenient Editing:** Edit your notes easily and conveniently using the built-in editor.
-   **Export Capability:** Output your notes in various formats for further use.
-   **Security and Privacy:** Your data remains secure thanks to the level of security and protection in My-Note.
## Technologies
*This project is developed using the following technologies:*
- **Frontend** : HTML, Tailwind, TypeScript, Next.js, Shadcn-ui,
- ***Backend*** : Convex
- ***Database*** : Convex
- ***Authentication*** : Clerk
- ***Store*** : Edge Store

## Installation and Running
1. Clone this repository to your computer.
2. Enter the command to install the packages.
`npm install`
3. Registration in [convex](convex.dev), [edge store](edgestore.dev), [clerk](https://clerk.com/)
4. Open and review the`.env-example` file create an `.env.local` file according to the `.env-example`
5. Add your config in ``./convex/auth.config.js``
6. Start the convex server : `npx convex dev`
7. Start the dev server: `npm run dev`