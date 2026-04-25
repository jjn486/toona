# Lotto Number Generator

## Overview

This is a simple web application that generates lottery numbers and allows for partnership inquiries. Users can generate 5 sets of lottery numbers (6 main + 1 bonus) and contact the developer via a simple form.

## Design and Features

*   **Theme Toggle:** Supports both Dark and Light modes, with user preference persistence.
*   **Modern Mobile UI:** Responsive design optimized for mobile, featuring a clean centered layout.
*   **Visual Enhancements:** 
    *   Lottery numbers are displayed as stylish balls with colors corresponding to their value range.
    *   **Bonus Number:** Includes a bonus number for each set, visually separated by a "+" sign.
*   **Number Generation:**
    *   Generates 5 sets of lottery numbers per click.
    *   Each set contains 6 unique main numbers and 1 unique bonus number from 1 to 45.
*   **Partnership Inquiry Form:** 
    *   A simple form powered by Formspree to receive inquiries.
    *   Fields: Name, Email, and Message.
*   **Copy to Clipboard:** Each set of generated numbers has a button to copy the numbers to the clipboard.

## Current Plan

1.  **Add Partnership Form:**
    *   Insert a form section in `index.html` with the Formspree endpoint: `https://formspree.io/f/mkokebok`.
    *   Include input fields for Name, Email, and a Textarea for the Message.
2.  **Style the Form:**
    *   Add CSS to style the form inputs and submit button to match the existing theme (Dark/Light).
    *   Ensure the form is responsive and looks good on mobile devices.
3.  **Deployment:**
    *   Commit and push changes to GitHub.
