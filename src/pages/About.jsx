import { FaUser, FaCalendarAlt, FaComment } from 'react-icons/fa';
import './About.css';
function About() {
  const blogs = [
    {
      id: 1,
      title: 'The Importance of Web Design in the Modern Age',
      author: 'Evans Ngugi',
      date: 'May 1, 2023',
      comments: 10,
      content:
        'A modern website enables the addition of powerful new optional features that makes your site more engaging and relevant; personalisation of pages to align with the needs of specific groups of users, microsites, presenting only content that users are entitled to view and progressive profiling of visitors to build data ',
    },
    {
      id: 2,
      title: 'Android Development Best Practices for Beginners',
      author: 'Evans Ngugi',
      date: 'April 15, 2023',
      comments: 5,
      content:
        'Best Practices for Android Development in 2022 - Mobisoft Code Formatting, Code clean-up, and use of SonarLint for application maintainability are also crucial in Android app development. So focus on these key concepts related to coding. You can use code analysis tools from Android Studio to remove unwanted resources and code files',
    },
    {
      id: 3,
      title: 'The Role of Artificial Intelligence in the Digital Age',
      author: 'Evans Ngugi',
      date: 'March 28, 2023',
      comments: 8,
      content:
        'Digital Transformation & Artificial Intelligence: Is Your AI is now playing a crucial role in the digital transformation that allows machines to detect, understand, act and learn either on their own or to augment human activities. Customer experience is the root of digital transformation and AI is changing the entire scenario of customer experience.',
    },
    {
      id: 4,
      title: 'Exploring the World of Cyber Security: Best Practices and Challenges',
      author: 'Evans Ngugi',
      date: 'February 10, 2023',
      comments: 12,
      content:
        'Cybersecurity is critical because it helps to protect organizations and individuals from cyber attacks. Cybersecurity can help to prevent data breaches, identity theft, and other types of cybercrime. Organizations must have strong cybersecurity measures to protect their data and customers.',
    },
    {
      id: 5,
      title: 'The Evolution of Web Development: From HTML to Modern Frameworks',
      author: 'Evans Ngugi',
      date: 'January 5, 2023',
      comments: 6,
      content:
        'The Evolution of Web Development & Its Modern Trends Web Development was previously only known for the development of web pages and websites for both intranet and internet. However, nowadays it is more like creating web applications that surpass the complexity as well as the size of typical mobile and desktop applications.',
    },
  ];

  return (
    <div className="blog-page-container">
      <header className="header">
        <h1>My Blog</h1>
      </header>
      <main className="content">
        {blogs.map((blog) => (
          <article className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <div className="blog-meta">
              <span>
                <FaUser /> {blog.author}
              </span>
              <span>
                <FaCalendarAlt /> {blog.date}
              </span>
              <span>
                <FaComment /> {blog.comments} Comments
              </span>
            </div>
            <p>{blog.content}</p>
          </article>
        ))}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Evans Ngugi | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
