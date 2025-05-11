# Website Updates Guide

## Custom Cursor

The website features a custom cursor with interactive states. The cursor consists of:
- A small dot (8px) that follows the mouse precisely
- A larger follower circle (24px) that follows with a slight delay
- Interactive states that make the cursor grow on hoverable elements

To modify the cursor:
1. Edit cursor styles in `style.css` under the "Custom Cursor" section
2. Adjust cursor behavior in `main.js` in the cursor-related event listeners

## Tech Stack and Icons

The website uses Font Awesome icons consistently across:
- Tech stack section
- Project tags
- Career timeline skills

### Updating Tech Stack

1. Open `index.html`
2. Find the tech stack section
3. Update the tech cards with appropriate icons:
```html
<span class="tech-tag"><i class="fab fa-[icon-name]"></i> Technology Name</span>
```

### Updating Project Tags

1. Open `main.js`
2. Find the `projects` array
3. Update the tags array for each project:
```javascript
tags: [
  { name: "Technology", icon: "fab fa-[icon-name]" }
]
```

### Updating Career Path

The career path timeline is designed to be easy to update and maintain. To add or modify career items:

1. Open `main.js`
2. Find the `careerPath` array near the top of the file
3. Edit, add, or remove career objects as needed
4. Each career object requires the following properties:
   - `date`: The timeframe (e.g., "2019 - 2022")
   - `title`: Your job title
   - `organization`: Company or organization name
   - `logo`: URL to company logo
   - `description`: Brief description of your role
   - `achievements`: Array of key achievements (bullet points)
   - `skills`: Array of skills with icons:
     ```javascript
     skills: [
       { name: "Skill Name", icon: "fab fa-[icon-name]" }
     ]
     ```

## Available Icons

The website uses Font Awesome icons. Common icons used:
- `fa-html5`: HTML5
- `fa-css3-alt`: CSS3
- `fa-js`: JavaScript
- `fa-java`: Java
- `fa-php`: PHP
- `fa-database`: SQL/MySQL
- `fa-git-alt`: Git
- `fa-windows`: Windows
- `fa-microsoft`: Azure
- `fa-network-wired`: Networking

For more icons, visit [Font Awesome Icons](https://fontawesome.com/icons)
