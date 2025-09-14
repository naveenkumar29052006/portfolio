import React from 'react';
import { 
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  FolderIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            An aspiring B.Tech CS/DS student and a passionate Front-end Developer who loves turning ideas into reality through code.
          </p>
          <p className="section-subtitle">
            I specialize in building responsive and user-friendly web applications using JavaScript, HTML/CSS, and Python. I'm always curious about how technology can solve real-world problems and make everyday life better.
          </p>
          <p className="section-subtitle">
            I'm actively improving my problem-solving skills with a LeetCode rating of 1400+ and a Codeforces rating of 900+. Competitive programming has helped me think logically and write optimized code.
          </p>
          <p className="section-subtitle">
            Apart from web development, I'm exploring new-age technologies in the crypto space like Metaverse, DeFi, NFTs, and DePIN — because I believe the future belongs to builders who innovate fearlessly.
          </p>
          <p className="section-subtitle">
            Currently, I'm on a journey of continuous learning, building projects, and contributing to the tech community.
          </p>
          <p className="section-subtitle">
            Let's build something awesome together!
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="stats-grid">
          {/* Projects Completed */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper pink-glow">
                <FolderIcon className="tech-icon" />
              </div>
              <div>
                <h3 className="stat-text">2+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Problems Solved */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper blue-glow">
                <TrophyIcon className="tech-icon" />
              </div>
              <div>
                <h3 className="stat-text">200+</h3>
                <p className="stat-label">Problems Solved</p>
              </div>
            </div>
          </div>

          {/* LeetCode Rating */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper yellow-glow">
                <img 
                  src="/images/leetcode-icon.png" 
                  alt="LeetCode"
                  className="tech-icon"
                />
              </div>
              <div>
                <h3 className="stat-text">1400+</h3>
                <p className="stat-label">LeetCode Rating</p>
              </div>
            </div>
          </div>

          {/* Codeforces Rating */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper red-glow">
                <img 
                  src="/images/codeforces-icon.png" 
                  alt="Codeforces"
                  className="tech-icon"
                />
              </div>
              <div>
                <h3 className="stat-text">900+</h3>
                <p className="stat-label">Codeforces Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack">
          <h2 className="section-title text-center">Tech Stack</h2>
          <div className="tech-grid">
            {/* Frontend Box */}
            <div className="glass-card tech-card">
              <div className="tech-icon">
                <CodeBracketIcon className="w-12 h-12" style={{ color: '#ec4899' }} />
              </div>
              <h3 className="tech-category">Frontend</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <img 
                    src="/images/html-icon.png" 
                    alt="HTML" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">HTML</span>
                </div>
                <div className="tech-item">
                  <img 
                    src="/images/css-icon.png" 
                    alt="CSS" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">CSS</span>
                </div>
                <div className="tech-item">
                  <img 
                    src="/images/javascript-icon.png" 
                    alt="JavaScript" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">JavaScript</span>
                </div>
                <div className="tech-item">
                  <img 
                    src="/images/React.png" 
                    alt="React" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">React</span>
                </div>
              </div>
            </div>

            {/* Backend Box */}
            <div className="glass-card tech-card">
              <div className="tech-icon">
                <ServerIcon className="w-12 h-12" style={{ color: '#3b82f6' }} />
              </div>
              <h3 className="tech-category">Backend</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <img 
                    src="/images/python-icon.png" 
                    alt="Python" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">Python</span>
                  <div>
                    <div className="tech-item">
                      <img 
                        src="/images/nodejs.png" 
                        alt="Node.js" 
                        className="tech-item-icon"
                      />
                      <span className="tech-item-label">Node.js</span>
                    </div>
                    <div className="tech-item">
                      <img 
                        src="/images/express.png" 
                        alt="Express.js" 
                        className="tech-item-icon"
                      />
                      <span className="tech-item-label">Express.js</span>
                    </div>
                  </div>
                  <div className="tech-item">
                    <img 
                      src="/images/mysql.png" 
                      alt="MySQL" 
                      className="tech-item-icon"
                    />
                    <span className="tech-item-label">MySQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Box */}
            <div className="glass-card tech-card">
              <div className="tech-icon">
                <WrenchScrewdriverIcon className="w-12 h-12" style={{ color: '#eab308' }} />
              </div>
              <h3 className="tech-category">Tools</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <img 
                    src="/images/git-icon.png" 
                    alt="Git" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">Git</span>
                </div>
                <div className="tech-item">
                  <img 
                    src="/images/cli-icon.png" 
                    alt="CLI" 
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">CLI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;