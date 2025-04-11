const images = [
    "login-img1.avif",
    "login-img2.jpeg",
    "login-img3.jpeg"
  ];
  
  let index = 0;
  const slideshow = document.getElementById("slideshow");
  
  function changeBackground() {
    slideshow.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }
  
  setInterval(changeBackground, 300);
  
  // LOGIN LOGIC
  const loginForm = document.getElementById("loginForm");
  
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple check (you can replace with real credentials or backend)
    if (username === "admin" && password === "admin123") {
      window.location.href = "../home.html";
    } else {
      alert("Invalid username or password!");
    }
  });
  