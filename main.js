const careerPath = [
  {
    date: "05/05/2025 - 30/06/2025",
    title: "IT Helpdesk Intern",
    organization: "GE Aerospace Poland Sp. z o.o.",
    logo: "https://tinyurl.com/ge-logo",
    description: "Helped and maintained multiple appliences for users across the GE Aerospace Site.",
    achievements: [
      "Re-enrolled 200+ company laptops to new requiered standard",
      "Improved efficiency in accessing key intranet components for new hires",
    ],
    skills: [
      { name: "Windows", icon: "fab fa-windows" },
      { name: "Azure", icon: "fab fa-microsoft" },
      { name: "Networking", icon: "fas fa-network-wired" },
      { name: "HTML/CSS", icon: "fab fa-html5" }
    ],
  }
]

document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    
    // Add a slight delay to the follower for a smooth effect
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 50);
  });

  // Hide cursor when leaving the window
  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
    cursorFollower.style.display = "none";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
    cursorFollower.style.display = "block";
  });

  // Handle interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .nav-link, .social-link, .project-card, .tech-card, input, textarea');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });

  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init("8Oac1gclz1MihcVxE")
  } else {
    console.error("EmailJS is not loaded. Ensure it is properly included in your HTML.")
  }

  // Reset loading state on page load
  const submitSpinner = document.getElementById("submit-spinner")
  const submitText = document.getElementById("submit-text")
  const submitBtn = document.getElementById("submit-btn")
  
  // Ensure spinner is hidden on page load
  submitSpinner.style.display = "none"
  submitText.textContent = "Send Message"
  submitBtn.disabled = false

  // Project data
  const projects = [
    {
      title: "SEP Revision Test",
      description: "Created a simple web page to revise for the SEP Certification as well as implemented a dark mode due to not finding simmilar resources online.",
      image: "./images/SEP.jpeg",
      link: "https://github.com/not-mikolaj/SEP",
      tags: [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" }
      ],
    },
    {
      title: "Project 2",
      description: "Description.",
      image: "https://placehold.co/600x400/111827/ffffff",
      link: "https://github.com",
      tags: [
        { name: "Java", icon: "fab fa-java" },
        { name: "SQL", icon: "fas fa-database" }
      ],
    },
    {
      title: "Project 3",
      description: "Description.",
      image: "https://placehold.co/600x400/111827/ffffff",
      link: "https://github.com",
      tags: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "MySQL", icon: "fas fa-database" }
      ],
    },
  ]

  // Render projects
  const projectsGrid = document.querySelector(".projects-grid")

  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"

    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" width="600" height="400" style="object-fit: cover; padding: 2px;">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag"><i class="${tag.icon}"></i> ${tag.name}</span>`).join("")}
        </div>
      </div>
      <div class="project-footer" style="padding: 0 1rem 1rem;">
        <a href="${project.link}" target="_blank" class="project-link">
          <i class="fab fa-github"></i> View on GitHub
        </a>
      </div>
    `

    projectsGrid.appendChild(projectCard)
  })

  // Render career timeline
  renderCareerTimeline()

  // Handle navigation highlighting
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section")

  function highlightNavLink() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)
  highlightNavLink() // Initial call

  // Glow effect for menu
  const glowMenu = document.getElementById("glow-menu")
  const menuItems = glowMenu.querySelectorAll(".nav-link")

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.4)"
      this.style.background = "rgba(255, 255, 255, 0.1)"
      this.style.transition = "all 0.3s ease"
    })

    item.addEventListener("mouseleave", function () {
      this.style.boxShadow = ""
      this.style.background = ""
    })
  })

  // Contact form handling
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Validate form data
    if (!name || !email || !message) {
      showFormMessage("Please fill in all fields.", "error")
      setSubmitLoading(false)
      return
    }

    // Show loading state
    setSubmitLoading(true)
    showFormMessage("Sending...", "")

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }

    // Send email using EmailJS
    if (typeof emailjs !== "undefined") {
      emailjs
        .send("service_2xizqfm", "template_674tgej", templateParams)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text)
            showFormMessage("Thanks for your message! I'll get back to you soon.", "success")
            contactForm.reset()
          },
          (error) => {
            console.log("FAILED...", error)
            showFormMessage("Failed to send message. Please try again later.", "error")
          },
        )
        .finally(() => {
          // Ensure the loading state is reset
          setSubmitLoading(false)
        })
    } else {
      console.error("EmailJS is not loaded. Ensure it is properly included in your HTML.")
      showFormMessage("EmailJS is not loaded. Please check console.", "error")
      setSubmitLoading(false)
    }
  })

  function showFormMessage(message, type) {
    formMessage.textContent = message
    formMessage.className = "form-message"

    if (type) {
      formMessage.classList.add(type)
    }
  }

  function setSubmitLoading(isLoading) {
    submitBtn.disabled = isLoading

    if (isLoading) {
      submitText.textContent = "Sending..."
      submitSpinner.style.display = "inline-block"
    } else {
      submitText.textContent = "Send Message"
      submitSpinner.style.display = "none"
    }
  }
})

// Render career timeline
function renderCareerTimeline() {
  const timelineContainer = document.getElementById("career-timeline")

  careerPath.forEach((item, index) => {
    const timelineItem = document.createElement("div")
    const isEven = index % 2 === 0

    timelineItem.className = isEven ? "timeline-item timeline-item-left" : "timeline-item timeline-item-right"

    const skillsHTML = item.skills.map((skill) => 
      `<span class="timeline-skill"><i class="${skill.icon}"></i> ${skill.name}</span>`
    ).join("")

    const achievementsHTML = item.achievements.map((achievement) => `<li>${achievement}</li>`).join("")

    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-organization">
          <img src="${item.logo}" alt="${item.organization} logo" style="height: 24px; margin-right: 4px; padding-bottom: 3px; padding-left: 5px; vertical-align: middle;">
          ${item.organization}
        </div>
        <p>${item.description}</p>
        <div class="timeline-details">
          <h4 style="margin-bottom: 8px; font-size: 0.9rem;">Key Achievements:</h4>
          <ul style="padding-left: 20px; margin-bottom: 12px;">
            ${achievementsHTML}
          </ul>
          <div class="timeline-skills">
            ${skillsHTML}
          </div>
        </div>
      </div>
    `

    timelineContainer.appendChild(timelineItem)
  })
}

// Debug helper for contact form
function debugFormSubmission() {
  const submitBtn = document.getElementById("submit-btn")
  const submitSpinner = document.getElementById("submit-spinner")

  console.log("Submit button state:", {
    disabled: submitBtn.disabled,
    spinnerHidden: submitSpinner.classList.contains("hidden"),
    spinnerDisplay: window.getComputedStyle(submitSpinner).display,
  })

  // Force spinner to hide if it's still visible after submission
  if (!submitSpinner.classList.contains("hidden")) {
    console.log("Forcing spinner to hide")
    submitSpinner.classList.add("hidden")
  }
}

window.debugFormSubmission = debugFormSubmission
