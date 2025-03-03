import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Candidates.css";

function Candidates() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleCardHover = (id) => {
    setExpandedCard(id);
  };

  const handleCardLeave = () => {
    setExpandedCard(null);
  };

  return (
    <div className="candidates-container">
      <motion.div 
        className="candidates-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="candidates-title">Meet Our KISS Team</h1>
        <p className="candidates-subtitle">Kinetic, Integrity, Service, Solidarity</p>
      </motion.div>

      <motion.div 
        className="candidates-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Vice Presidential Candidate */}
        <motion.div
          className="candidate-card"
          variants={cardVariants}
          onMouseEnter={() => handleCardHover("vice")}
          onMouseLeave={handleCardLeave}
        >
          <div className="candidate-image-container">
            <img src="vicepresident.jpg" alt="Vice President" />
            <div className="candidate-role">Vice President</div>
          </div>
          <h2 className="candidate-name">Eaint Hay Thar Kyaw (Heater)</h2>
          <div className="candidate-details">
            <h3>Loren Ipsum</h3>
            <ul className={isVisible ? "visible" : ""}>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
            </ul>
            <div className={`achievements ${expandedCard === "vice" ? "expanded" : ""}`}>
              <h4>Loren Ipsum</h4>
              <ul>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Presidential Candidate */}
        <motion.div
          className="candidate-card featured"
          variants={cardVariants}
          onMouseEnter={() => handleCardHover("president")}
          onMouseLeave={handleCardLeave}
        >
          <div className="candidate-image-container">
            <img src="president.png" alt="President" />
            <div className="candidate-role">President</div>
          </div>
          <h2 className="candidate-name">Aye Su Yee Aung</h2>
          <div className="candidate-details">
            <h3>Loren Ipsum</h3>
            <ul className={isVisible ? "visible" : ""}>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
            </ul>
            <div className={`achievements ${expandedCard === "president" ? "expanded" : ""}`}>
              <h4>Loren Ipsum</h4>
              <ul>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Secretary Candidate */}
        <motion.div
          className="candidate-card"
          variants={cardVariants}
          onMouseEnter={() => handleCardHover("secretary")}
          onMouseLeave={handleCardLeave}
        >
          <div className="candidate-image-container">
            <img src="secretary.png" alt="Secretary" />
            <div className="candidate-role">Secretary</div>
          </div>
          <h2 className="candidate-name">Pyae Sone Nyunt</h2>
          <div className="candidate-details">
            <h3>Loren Ipsum</h3>
            <ul className={isVisible ? "visible" : ""}>
              <li>Loren Ipsum</li>
              <li>Loren Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <div className={`achievements ${expandedCard === "secretary" ? "expanded" : ""}`}>
              <h4>Loren Ipsum</h4>
              <ul>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="team-philosophy"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2>Our Team Philosophy</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
        </p>
      </motion.div>
    </div>
  );
}

export default Candidates;