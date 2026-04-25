# Lotto Number Generator

## Overview

This is a simple web application that generates lottery numbers. Users can click a button to get 5 sets of 6 unique random numbers between 1 and 45. The generated numbers can be copied to the clipboard.

## Design and Features

*   **Dark Theme:** The application uses a dark background for a modern look.
*   **Responsive Design:** The layout is mobile-first and adapts to different screen sizes.
*   **Number Generation:**
    *   Generates 5 sets of lottery numbers per click.
    *   Each set contains 6 unique numbers from 1 to 45.
*   **Copy to Clipboard:** Each set of generated numbers has a button to copy the numbers to the clipboard.
*   **Initial State:** Before any numbers are generated, a message prompts the user to click the button.

## Current Plan

1.  **Update `index.html`:**
    *   Set the page title and main heading.
    *   Add a button to generate numbers.
    *   Create a container for the number display area.
    *   Include the initial placeholder text.
2.  **Update `style.css`:**
    *   Implement a dark, mobile-friendly theme.
    *   Style the header, button, and number display area.
    *   Use modern CSS for layout and visual effects.
3.  **Update `main.js`:**
    *   Implement the logic for generating unique lottery numbers.
    *   Create a function to display the generated numbers and copy buttons.
    *   Add event listeners for the generate and copy buttons.