CSS General Rules Assignment

This project demonstrates the fundamental CSS rules and how they interact when applied to an HTML document. It covers selectors, pseudo-classes, pseudo-elements, the box model, and CSS specificity by combining inline, internal, and external styles.

📂 Project Structure
.
├── index.html   # HTML file with inline & internal CSS
├── styles.css   # External CSS file
└── README.md    # Documentation

🎨 CSS Features Demonstrated
1. Selectors

Universal Selector (*) → Applies global font, spacing, and box-sizing.

Element Selector (h1, p, body) → Targets all elements of a type.

ID Selector (#heading-one) → Targets a unique element.

Class Selector (.text-highlight) → Targets multiple reusable elements.

Attribute Selector (a[target="_blank"]) → Targets links opening in new tabs.

2. Pseudo-classes

a:hover → Changes link color when hovered.

3. Pseudo-elements

h1::after → Adds a decorative ✨ after every <h1>.

4. Box Model

Demonstrated with padding, border, and margin on paragraphs.

5. CSS Specificity & Overrides

Inline CSS (highest priority) → e.g., style="..." on elements.

Internal CSS (inside <style>...</style>).

External CSS (linked stylesheet styles.css).

Demonstrates how different layers override each other.

🖼️ Example Features

body → Lavender background (internal override of external).

h1 → Dark blue (internal override) + decorative ✨ (pseudo-element).

.text-highlight → Different background & padding to emphasize text.

Links (a[target="_blank"]) → Styled differently and change color on hover.

🚀 How to Run

Clone or download the repository.

Open index.html in any modern web browser.

Inspect the elements (Right-click → Inspect) to see applied CSS rules.

📘 Learning Outcomes

By studying this project, you will:

Understand CSS selectors and specificity hierarchy.

See how inline, internal, and external styles interact.

Learn how to use pseudo-classes & pseudo-elements.

Visualize the CSS box model in practice.