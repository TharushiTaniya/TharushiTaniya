<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Taniya Pathirana - GitHub Profile</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #1f4037, #99f2c8);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      text-align: center;
      padding: 20px 40px;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    .job-role {
      font-size: 1.8rem;
      font-weight: bold;
      color: #00d1b2;
      margin: 15px 0;
    }
    p {
      font-size: 1rem;
      margin: 10px 0;
    }
    .github-link {
      display: inline-block;
      margin-top: 20px;
      text-decoration: none;
      background: #00d1b2;
      color: #fff;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
    .github-link:hover {
      background: #00b99f;
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello, I'm Taniya 👋</h1>
    <p class="job-role">Web Developer</p>
    <p>A passionate Software Engineer dedicated to solving real-world challenges with innovative solutions.</p>
    <a class="github-link" href="https://github.com/TharushiTaniya" target="_blank">
      Visit My GitHub Profile
    </a>
  </div>

  <script>
    const roles = ["Software Engineer", "Fullstack Engineer", "Web Developer", "Machine Learning Enthusiast"];
    const jobRoleElement = document.querySelector(".job-role");

    let currentIndex = 0;

    function changeRole() {
      currentIndex = (currentIndex + 1) % roles.length;
      jobRoleElement.textContent = roles[currentIndex];
    }

    setInterval(changeRole, 3000); // Change job role every 3 seconds
  </script>
</body>
</html>
