import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

const scrollToSection = (selector) => {
  const section = document.querySelector(selector);
  if (section) {
    const targetPosition = section.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(targetPosition, 800); // 800ms duration
  }
};

const smoothScrollTo = (target, duration) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo(0, start + (target - start) * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

function Home() {
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      smoothScrollTo(100, 800);
    }

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(
        ".hero-title, .hero-subtitle, .hero-banner, .hero-cta, .sc-intro, .sc-why-vote, .sc-why-us, .home-list li, .home-timeline li, .home-cta, .why-us-grid .why-us-card"
    ).forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);


  return (
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-logo"
          >
            <img src="./logo.png" alt="Ascend Logo" className="ascend-logo" />
            <p className="kiss-tagline">Kinetic, Integrity, Service, Solidarity</p>
          </motion.div>

          <h1 className="hero-title">Welcome to our KISS team campaign page</h1>
          <p className="hero-subtitle">Helping students, improving the future.</p>

          <img src="./banner.jpg" alt="Campaign Banner" className="hero-banner" />

          {/* Learn More */}
          <button className="hero-cta" onClick={() => scrollToSection(".sc-intro")}>
            Learn More
          </button>
        </div>

        {/* Intro */}
        <div className="home-section sc-intro">
          <h2>What is the Student Council?</h2>
          <p>
            The Student Council is a group of elected students who represent their fellow students,
            allow their peers to voice their concerns, and work with the school to improve
            the school environment. They help organize school events, propose policies,
            and act as a bridge between students and faculty.
          </p>
          <p>
            Members of the council work on initiatives such as school improvements,
            extracurricular activities, and fundraising efforts. Their leadership skills, teamwork, and connections make a significant impact on the student community.
          </p>
        </div>

        {/* Why Vote */}
        <div className="home-section sc-why-vote">
          <h2>Why Should You Vote?</h2>
          <p>
            Your vote matters! By taking part in the election, you are choosing
            the leaders who will advocate for your needs, propose new ideas,
            and bring about positive or negative change for you. Every vote influences
            the future of your student life and rules.
          </p>
          <p>
            Voting is not just about selecting a candidate; it's about selecting a future
            for your school experience. The right leaders can introduce programs, plan
            exciting events, and ensure student voices are heard.
          </p>
        </div>

        {/* Why Us - NEW SECTION */}
        <div className="home-section sc-why-us">
          <h2>Why Choose KISS?</h2>
          <p className="why-us-intro">
            Our team slogan is <span className="highlight">Kinetic, Integrity, Service, Solidarity.</span>
            Moving Forward, With Honesty, In Service and Solidarity.
          </p>

          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>
                Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>

            <div className="why-us-card">
              <div className="card-icon">🪡</div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div>
          </div>

          <div className="learn-more-container">
            <Link to="/home/candidates" className="learn-more-button">Learn more about us!</Link>
          </div>
        </div>

        {/* Stuco job? */}
        <div className="home-section">
          <h2>What Does the Student Council Do?</h2>
          <ul className="home-list">
            <li>Organize school events and activities</li>
            <li>Advocate for student concerns and needs</li>
            <li>Work with teachers and staffs</li>
            <li>Improve school facilities and policies</li>
            <li>Encourage teamwork and leadership</li>
            <li>Try and veto back Sayar Thawzin's vetos...!</li>
          </ul>
        </div>

        {/* Election Timeline */}
        <div className="home-section">
          <h2>Election Timeline</h2>
          <ul className="home-timeline">
            <li><span>📢 Nominations Close:‎ ‎ ‎ </span> Feb 27th</li>
            <li><span>🗳️ Campaign Period:‎ ‎ ‎ ‎ ‎ ‎ ‎ </span> Feb 28th - March 6th</li>
            <li><span>🎤 Speech Day:‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎  ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎  ‎ </span> March 6th</li>
            <li><span>✅ Election Day:‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </span> March 7th</li>
            <li><span>🏆 Results Announced:‎ ‎ ‎ </span> March 7th</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="home-section home-cta">
          <h2>Get Involved!</h2>
          <p>Whether you're running for office or voting, your participation changes the future at Ascend!</p>
          <button className="cta-button">Vote for KISS</button>
        </div>
      </div>
  );
}

export default Home;