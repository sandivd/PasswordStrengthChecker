# React Password Strength Checker

A modern, responsive password strength checker built with React, TypeScript, and Tailwind CSS. This application provides real-time feedback on password strength based on multiple criteria, helping users create more secure passwords. It also features a sleek dark mode, with the theme persisting across browser sessions.


## ✨ Features

-   **Real-time Strength Analysis**: Instantly evaluates the password as the user types.
-   **Visual Feedback**: A color-coded strength bar (Weak, Fair, Good, Strong) and percentage indicator.
-   **Dynamic Criteria Checklist**: Shows which requirements (e.g., length, uppercase, number) have been met.
-   **Light & Dark Mode**: A theme toggle allows users to switch between light and dark modes, with the preference saved in `localStorage`.
-   **Show/Hide Password**: A toggle to view or mask the password for better usability.
-   **Responsive Design**: Looks great on all screen sizes, from mobile to desktop.
-   **Security Tips**: Provides helpful tips for creating stronger passwords.

## 🤖 A Note on "Vibe Coding"

This project was developed using a modern approach called **Vibe Coding**.

> Vibe coding is a modern approach to software development where you use natural language—either spoken or typed—to describe what you want a program to do, and then an AI (usually a large language model, or LLM) generates the actual code for you. Instead of manually writing every line of code, you give the AI high-level instructions or prompts, and it handles the technical implementation.

This method allowed for rapid prototyping and iteration, translating high-level feature requests (like "add a dark mode toggle in the top-right corner") directly into functional, production-ready code.

## 🛠️ Tech Stack

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: Adds static typing to JavaScript to improve code quality and maintainability.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Create React App**: The project's foundation.
-   **Craco**: (Create React App Configuration Override) Used to configure Tailwind CSS with Create React App without ejecting.

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.
-   [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```

3.  **Install project dependencies:**
    ```sh
    npm install
    ```

4.  **Install Craco (Required for Tailwind CSS):**
    This project uses Craco to enable Tailwind CSS without ejecting from Create React App. If it's not already in `package.json`, you must install it.
    ```sh
    npm install @craco/craco --save-dev
    ```

5.  **Start the development server:**
    ```sh
    npm start
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## 🧑‍💻 My Contributions

I designed the password evaluation logic, iteratively prompted the AI assistant for feature implementation, and manually refined the UI for usability and accessibility. I customized the strength criteria, added real-time feedback, and ensured the component works seamlessly in both light and dark modes.

## 🧩 Challenges Faced

Balancing strict password security with user experience was a key challenge. I refined the criteria to avoid false negatives and implemented additional checks for common patterns and repeated characters. Ensuring the dynamic checklist and color-coded feedback updated smoothly as users typed required careful state management in React.

## 📚 What I Learned

Working with AI-generated code taught me how to rapidly prototype UI features and iterate efficiently using vibe coding techniques.

## 🚧 Future Improvements

If further developed, I would:
- Integrate backend validation for enhanced security.
- Add password strength analytics for user education.
- Support additional languages and localization.
- Improve accessibility for screen readers.
