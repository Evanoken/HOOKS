import './home.css'
function Home() {
  return (
    <div className="page-container">
      <header className="header">
      </header>
      <main className="content">
        <div className="bio">
          <h2>Evans Ngugi</h2>
          <p>
            Hi there! My name is Evans Ngugi, and I am a computer scientist currently pursuing my studies at Kirinyaga University. With a passion for technology, I specialize in various areas including web design, Android development, artificial intelligence (AI), and cyber security.
          </p>
          <p>
            My journey in the tech world has allowed me to explore the endless possibilities of leveraging technology to solve real-world problems. I am constantly seeking ways to expand my knowledge and skills in these fields, ensuring that I stay up-to-date with the latest trends and advancements.
          </p>
          <p>
            Beyond my professional pursuits, I have a keen interest in swimming, which serves as both a recreational activity and a way to stay physically fit. Swimming allows me to find serenity, clear my mind, and recharge my energy. It is a fantastic way to balance the demands of a tech-driven world.
          </p>
          <p>
            Additionally, I am an enthusiastic blog writer, particularly in the realm of technology. Through my blog, I enjoy sharing my insights, tips, and experiences with fellow technology enthusiasts. It is an avenue where I can engage with the community, spark discussions, and contribute to the knowledge sharing ecosystem.
          </p>
          <p>
            Feel free to explore my portfolio and blog posts to gain a deeper understanding of my work and my thoughts on various technology topics. Should you have any questions or wish to collaborate, dont hesitate to get in touch. I am always excited to connect with like-minded individuals who share a passion for technology and its potential to drive positive change.
          </p>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Evans Ngugi | All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home