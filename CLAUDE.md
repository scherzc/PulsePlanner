# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npx expo start` — start Expo dev server
- `npx expo start --android` / `--ios` / `--web` — start on specific platform

No test runner or linter is currently configured.

## Architecture

React Native fitness app built with Expo SDK 51. No TypeScript — all JavaScript.

**Entry point:** `App.js` wraps the app in `FitnessContext` provider and renders `StackNavigator`.

**Navigation flow** (native-stack, all headers hidden):
`Login → Home → Workout → Fit ↔ Rest`

**State management:** Single React Context (`src/context/Context.js`) provides global state:
- `completed` — array of completed exercise IDs
- `workout`, `calories`, `minutes` — numeric stats incremented during exercises
- `darkMode` — boolean theme toggle

The context is exported as `FitnessItems` (the context object consumed via `useContext`) and `FitnessContext` (the provider component). Import the provider from `./src/context/Context`, not `./src/context/FitnessContext`.

**Screen styles** are in separate files under `src/screens/Styles/` (e.g., `HomeScreenStyles.js`), not colocated in the screen files.
