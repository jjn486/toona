# Lotto Number Generator

## Overview

This is a simple web application that generates lottery numbers. Users can click a button to get 5 sets of 6 unique random numbers between 1 and 45. The generated numbers can be copied to the clipboard.

## Design and Features

*   **Theme Toggle:** Supports both Dark and Light modes, with user preference persistence.
*   **Modern Mobile UI:** Responsive design optimized for mobile, featuring a clean layout and interactive elements.
*   **Visual Enhancements:** Lottery numbers are displayed as stylish balls/circles with distinct colors.
*   **Number Generation:**
    *   Generates 5 sets of lottery numbers per click.
    *   Each set contains 6 unique numbers from 1 to 45.
*   **Copy to Clipboard:** Each set of generated numbers has a button to copy the numbers to the clipboard.
*   **Initial State:** Before any numbers are generated, a message prompts the user to click the button.

## Current Plan

1.  **Implement Theme Support:**
    *   Define CSS variables for color schemes in both light and dark modes.
    *   Add a theme toggle switch (Sun/Moon icon) to the UI.
    *   Use JavaScript to toggle themes and store the preference in `localStorage`.
2.  **Enhance Mobile UI:**
    *   Use a more compact and mobile-friendly layout for the number sets.
    *   Style lottery numbers as circular "balls" for a more authentic look.
    *   Improve spacing and typography for better readability on small screens.
3.  **Code Updates:**
    *   Update `style.css` with modern CSS features (variables, transitions, responsive layouts).
    *   Update `index.html` to include the theme toggle and structural improvements.
    *   Update `main.js` to handle theme logic and the new ball-based number display.
