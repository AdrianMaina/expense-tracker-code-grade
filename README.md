# Expense Tracker App

This React application (built with Vite) allows users to track their expenses by entering details into a form and displaying them in a table. It also includes a search filter to easily find specific expenses.

## Features

* **Add Expenses:** Users can input the description, amount, and date of an expense through a simple form.
* **Expense Table:** All entered expenses are displayed in a clear and organized table.
* **Search Filter:** Users can type keywords to filter the expense table and quickly find specific entries based on their description.
* **Built with Vite:** Utilizes Vite for a faster and leaner development experience.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **JSX:** A syntax extension to JavaScript recommended for use with React to describe what the UI should look like.
* **State Management (useState):** React hooks are used to manage the state of the application, including the list of expenses and the search query.
* **Components:** The application is built using reusable React components for the form, table, and filter.
* **Vite:** A build tool that provides a fast and optimized development environment for modern web projects.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
    *(Replace `<repository_url>` with the actual URL of your repository)*

2.  **Navigate to the project directory:**
    ```bash
    cd <project_directory>
    ```
    *(Replace `<project_directory>` with the name of your project directory)*

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view it in the browser. The page will automatically reload upon code changes.

5.  **Build for production (optional):**
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```

    This command will build an optimized production-ready bundle in the `dist` directory.

## Usage

1.  **Adding an Expense:**
    * Fill in the "Description", "Amount", and "Date" fields in the form.
    * Click the "Add Expense" button.
    * The new expense will be added to the expense table below.

2.  **Filtering Expenses:**
    * Type keywords into the "Search Expenses" input field.
    * The expense table will automatically update to display only the expenses whose descriptions contain the entered keywords.

## Lisence
[Lisence](./lisence)
