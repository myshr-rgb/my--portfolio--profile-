import { useState, useRef } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import project1Img from './assets/hero.png';
import project2Img from './assets/hero.png';

// 1. Import your 3 downloaded songs from the assets folder
import song1 from './assets/song1.mp3';
import song2 from './assets/song2.mp3';
import song3 from './assets/song3.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Playlist array containing your imported music files and titles
  const playlist = [
    { title: 'Track 01: Vibe', src: song1 },
    { title: 'Track 02: Chill', src: song2 },
    { title: 'Track 03: Flow', src: song3 },
  ];

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }
    setIsPlaying(!isPlaying);
  };

  // Switch to the next track in the playlist
  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) / playlist.length === 1 ? 0 : currentTrackIndex + 1;
    // Simple modulo cycling
    const newIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }, 100);
  };

  // Handle contact form submission via mailto fallback
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const mailtoLink = `mailto:myshrusti222007@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="app-container">
      
      {/* BACKGROUND AUDIO PLAYER */}
      <audio 
        ref={audioRef} 
        src={playlist[currentTrackIndex].src} 
        onEnded={nextTrack}
      />

      {/* FLOATING PILL NAVIGATION */}
      <nav className="floating-nav">
        <div className="nav-links glass-panel">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          
          {/* MUSIC CONTROLS */}
          <div className="music-player-widget">
            <button onClick={togglePlay} className="music-toggle-btn">
              {isPlaying ? '🎵 Pause' : '▶ Play'}
            </button>
            <button onClick={nextTrack} className="music-next-btn" title="Next Song">
              ⏭
            </button>
            <span className="track-title-ticker">{playlist[currentTrackIndex].title}</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION WITH BANNER BACKGROUND */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <div className="verified-badge">
            <span className="verified-icon">✔</span> Verified Student
          </div>
          <h1>Shrusti M Y</h1>
          <p className="subtitle">CSE Student at MSRUAS &bull; Web Dev & AI/ML Enthusiast</p>
          
          <div className="action-buttons">
            <a href="#contact" className="play-btn">Let's Connect</a>
            <a href="#projects" className="follow-btn">View Work</a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">
            <a href="https://github.com/myshr-rgb" target="_blank" rel="noreferrer" className="social-pill glass-panel">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/shrusti-m-y" target="_blank" rel="noreferrer" className="social-pill glass-panel">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        
        {/* ABOUT SECTION */}
        <section id="about" className="content-section about-layout">
          <div className="profile-pic-container">
            <img src={profileImg} alt="Shrusti M Y" className="spotify-profile-img" />
          </div>
          <div className="about-text-container glass-panel">
            <h2>About Me</h2>
            <p>
              I'm an 18-year-old CSE undergrad at MSRUAS, Bengaluru, obsessed with building things that live on the web and interact with the physical world.
            </p>
            <p>
              Whether I'm diving into Python, C, or JavaScript, I love turning ideas into functional code. When I'm offline, you'll probably find me fast asleep—because debugging takes energy!
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="content-section">
          <h2>My Skills (Tech Stack)</h2>
          <div className="skills-container glass-panel">
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">HTML & CSS</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Python</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">JavaScript & React.js</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Arduino Uno (Hardware)</span>
                <span className="skill-percentage">45%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">C Programming</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Tailwind CSS</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="content-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            
            <div className="spotify-project-card glass-panel">
              <div className="project-artwork">
                <img src={project1Img} alt="GPS & GSM Location Tracker" className="project-img" />
              </div>
              
              <div className="project-details">
                <h3>GPS & GSM Location Tracker</h3>
                <p>Hardware-software tracking system prototype built using an Arduino Uno board.</p>
              </div>

              <div className="project-links-footer">
                <a href="https://github.com/myshr-rgb" target="_blank" rel="noreferrer" className="card-link">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/shrusti-m-y" target="_blank" rel="noreferrer" className="card-link info-link">LinkedIn ↗</a>
              </div>
            </div>
            
            <div className="spotify-project-card glass-panel">
              <div className="project-artwork">
                <img src={project2Img} alt="Next Big Project" className="project-img" />
              </div>
              
              <div className="project-details">
                <h3>Next Big Project</h3>
                <p>Currently in development. Stay tuned for updates and repository links.</p>
              </div>

              <div className="project-links-footer">
                <a href="https://github.com/myshr-rgb" target="_blank" rel="noreferrer" className="card-link">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/shrusti-m-y" target="_blank" rel="noreferrer" className="card-link info-link">LinkedIn ↗</a>
              </div>
            </div>

            <div className="spotify-project-card glass-panel">
              <div className="project-artwork">
                <img src={project2Img} alt="Next Big Project" className="project-img" />
              </div>
              
              <div className="project-details">
                <h3>Next Big Project</h3>
                <p>Currently in development. Stay tuned for updates and repository links.</p>
              </div>

              <div className="project-links-footer">
                <a href="https://github.com/myshr-rgb" target="_blank" rel="noreferrer" className="card-link">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/shrusti-m-y" target="_blank" rel="noreferrer" className="card-link info-link">LinkedIn ↗</a>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="content-section">
          <h2>Let's Collaborate</h2>
          <p className="contact-subtext">Have a project in mind? Drop a message directly to myshrusti222007@gmail.com!</p>
          
          <form className="spotify-form glass-panel" onSubmit={handleContactSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="4" placeholder="Tell me about your idea..." required></textarea>
            <button type="submit" className="submit-btn">Send Message 🚀</button>
          </form>
        </section>

      </main>
      
      {/* FOOTER */}
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Shrusti M Y. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;