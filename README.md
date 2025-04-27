<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Minimal Project</title>
  <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;500&display=swap" rel="stylesheet" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      header h1 {
        font-size: 2rem;
      }

      .contacts {
        flex-direction: column;
        align-items: center;
      }
    }

    body {
      font-family: 'Prompt', sans-serif;
      background-color: #ffffff;
      color: #1f2937;
      line-height: 1.6;
    }

    header {
      background: url('https://media.gettyimages.com/id/1448291104/video/dark-grunge-background-aged-paper-texture.jpg?s=640x640&k=20&c=GDx5T3eBY3jERXGoSM7AJHG0YO3KfQytkFaoqeLF7o0=') no-repeat center/cover;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }

    header h1 {
      font-size: 3rem;
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    }

    header p {
      margin-top: 1rem;
      font-size: 1.2rem;
    }

    header a button {
      margin-top: 2rem;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      background-color: white;
      color: #333;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    header a button:hover {
      background-color: #1f2937;
      color: white;
    }

    section {
      max-width: 800px;
      margin: 4rem auto;
      padding: 0 1rem;
      text-align: center;
    }

    section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    section hr {
      margin: 1rem auto 2rem;
      width: 60px;
      border: 1px solid #ddd;
    }

    .contacts {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .contact-card {
      width: 200px;
      text-align: center;
    }

    .contact-card img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }

    .contact-card img:hover {
      transform: scale(1.1);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 600px;
      margin: 2rem auto;
    }

    form input,
    form textarea {
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-family: 'Prompt', sans-serif;
    }

    form button {
      padding: 0.75rem;
      border: none;
      background-color: #1f2937;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    }

    form button:hover {
      background-color: #374151;
    }

    footer {
      background-color: #f3f4f6;
      text-align: center;
      padding: 1.5rem;
      font-size: 0.875rem;
      color: #6b7280;
    }

    /* Animation */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease, transform 1s ease;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
  <header class="fade-in">
    <h1>Project</h1>
    <p>ตัวอย่างการสร้างเว็บไซต์ด้วยภาษา HTML5/CSS ฉบับทำเล่นๆ</p>
    <a href="Nas Shop/login.html"><button>เข้าเยี่ยมชม</button></a>
  </header>

  <section class="fade-in">
    <h2>เหตุผลที่ทำเว็บไซต์นี้</h2>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere odit itaque quae rem harum doloremque qui dolorem! Tenetur doloribus non ea vero soluta labore aliquid facere perspiciatis quaerat.
    </p>
  </section>

  <section class="fade-in">
    <h2>ติดต่อฉัน</h2>
    <hr />
    <form id="contact-form">
      <input type="text" name="name" placeholder="ชื่อของคุณ" required />
      <input type="email" name="email" placeholder="อีเมลของคุณ" required />
      <textarea name="message" rows="5" placeholder="เขียนข้อความ..." required></textarea>
      <button type="submit">ส่งข้อความ</button>
    </form>
  </section>

  <section class="fade-in">
    <h2>ข้อมูลการติดต่อ</h2>
    <hr />
    <div class="contacts">
      <div class="contact-card">
        <a href="https://www.facebook.com/profile.php?id=100021469115364" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="Facebook" />
        </a>
        <h3>Facebook</h3>
        <p>A'Anasri Etae</p>
      </div>
      <div class="contact-card">
        <a href="https://www.instagram.com/a.anxsri_/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" />
        </a>
        <h3>Instagram</h3>
        <p>anasrietae</p>
      </div>
      <div class="contact-card">
        <a href="mailto:anxsri08@gmail.com">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/465/small_2x/gmail-icon-free-png.png" alt="Email" />
        </a>
        <h3>Email</h3>
        <p>anxsri08@gmail.com</p>
      </div>
    </div>
  </section>

  <footer class="fade-in">
    <p>Copyright © 2023 Developed by Anasri Etae @ Naratiwat School.</p>
  </footer>

  <script>
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  </script>
<script>
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mkgjdgjl', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'ส่งสำเร็จ!',
          text: 'ขอบคุณที่ติดต่อมา เราจะตอบกลับโดยเร็วที่สุด 😊'
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง'
        });
      }
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดในการเชื่อมต่อ',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ กรุณาตรวจสอบอินเทอร์เน็ตของคุณ'
      });
    });
  });
</script>
</body>

</html>
