document.addEventListener("DOMContentLoaded", () => {
    // Redirect to Login Page
    const loginLink = document.querySelector("a[href='login_demo.html']");
    if (loginLink) {
        loginLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior
            window.location.href = "login_demo.html"; // Replace with actual login page file name
        });
    }

    // Redirect from Login to Home Page (Simulating a Login Flow)
    if (window.location.pathname.includes("login_demo.html")) {
        const loginButton = document.getElementById("btn");
        if (loginButton) {
            loginButton.addEventListener("click", () => {
                const emailInput = document.querySelector("input[type='email']").value;
                const passwordInput = document.querySelector("input[type='password']").value;

                // Dummy validation - replace with real server-side validation
                if (emailInput === "user@example.com" && passwordInput === "password") {
                    alert("Login Successful! Redirecting to Home Page...");
                    window.location.href = "demo.html"; // Replace with the actual home page file name
                } else {
                    alert("Invalid email or password. Please try again.");
                }
            });
        }
    }

    function validateSignUpForm() {
        const fullName = document.querySelector("#signInForm input[type='text']").value;
        const email = document.querySelector("#signInForm input[type='email']").value;
        const password = document.querySelector("#signInForm input[type='password']").value;
        const confirmPassword = document.querySelectorAll("#signInForm input[type='password']")[1].value;

        if (fullName.trim() === "") {
            alert("Full Name is required.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        alert("Sign-Up Successful! ");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "demo.html"; // Replace with actual home page
    }

    // Attach event listeners for login and sign-up buttons
    document.querySelector("#loginForm #btn").addEventListener("click", (event) => {
        event.preventDefault();
        validateLoginForm();
    });

    document.querySelector("#signInForm #btn").addEventListener("click", (event) => {
        event.preventDefault();
        validateSignUpForm();
    });

    // Handle "Learn More" Button Redirection (Services Section)
    const learnMoreButtons = document.querySelectorAll(".btn-primary");
    learnMoreButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior
            window.location.href = "services.html"; // Replace with actual services page file name
        });
    });

    // Scroll to Specific Sections (Navbar Links)
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior
            const targetId = link.getAttribute("href").substring(1); // Get the section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Social Media Links (Footer)
    const socialLinks = document.querySelectorAll("footer a");
    socialLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior
            alert("Redirecting to social media...");
            // Replace the following with actual social media links
            window.open("https://www.example.com", "_blank");
        });
    });
});
