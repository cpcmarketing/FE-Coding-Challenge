# CPC Marketing Front-End MonoRepo

## Machine Setup
1. Install that latest [Node.js](https://nodejs.org/en) long-term support (LTS) version.
2. Install [Node Version Manager](https://github.com/nvm-sh/nvm) (aka NVM)

## Getting Started

1. Run `nvm use` to set the proper NPM version (**Note:** you might need to install the version first)
2. Run `npm install` to add the root project dependencies
3. `cd` into the project you want to work on (e.g. `cd bill-doctor`)
4. Run `npm install` to add the local project dependencies
5. Create a `.env.local` file next to the existing `.env` file and copy every var that's empty ("") from `.env` to `.env.local`.
6. Run `npm run dev` to start the development server (**Note:** Next.js will tell you what URL and port it's using in the console on start-up. This is usually http://localhost:3001)

## Troubleshooting

**You are using Node.js x.x.x. For Next.js, Node.js version >= vx.x.x is required**
This could happen if `nvm` doesn't persist to the project directory. Simply run `nvm use` to set the correct version of Node.js in the project directory.

## VSCode Debugging

This repository includes a `.vscode/launch.json` file which allows you to use the "Run and Debug" feature on the server-side, client-side, or full-stack code. 

Review the [Visual Studio Code docs](https://code.visualstudio.com/docs/editor/debugging) for more information.

***Note:*** Since we're in a monorepo you need to start the debugger from a file within the domain you're trying to debug or temporarily change the `cwd` property of the configuration you're trying to launch.