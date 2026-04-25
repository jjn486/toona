# Lotto Number Generator

## Overview

This is a simple web application that generates lottery numbers. Users can click a button to get 5 sets of lottery numbers (6 main numbers + 1 bonus number) between 1 and 45. The generated numbers can be copied to the clipboard.

## Design and Features

*   **Theme Toggle:** Supports both Dark and Light modes, with user preference persistence.
*   **Modern Mobile UI:** Responsive design optimized for mobile, featuring a clean centered layout.
*   **Visual Enhancements:** 
    *   Lottery numbers are displayed as stylish balls with colors corresponding to their value range.
    *   **Bonus Number:** Includes a bonus number for each set, visually separated by a "+" sign.
*   **Number Generation:**
    *   Generates 5 sets of lottery numbers per click.
    *   Each set contains 6 unique main numbers and 1 unique bonus number from 1 to 45.
*   **Copy to Clipboard:** Each set of generated numbers has a button to copy the numbers to the clipboard.
*   **Initial State:** A placeholder message prompts the user to click the button with a finger emoji.

## Current Plan

1.  **UI Adjustments:**
    *   Center the main heading "로또 번호 추첨기" in the header.
    *   Update the placeholder text to: "아직 추천된 번호가 없어요. 👆 버튼을 눌러 번호를 받아보세요!".
2.  **Logic Update (Bonus Number):**
    *   Modify the generation logic to pick 7 unique numbers (6 main + 1 bonus).
    *   Update the display logic to separate the bonus number visually and including it in the copy function.
3.  **Style Refinement:**
    *   Adjust CSS for the centered header and bonus number separator.
4.  **Deployment:**
    *   Commit and push changes to GitHub.
