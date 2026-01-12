import React, { useState, useEffect } from 'react';
import { Github, Mail, Code2, Sparkles, Terminal, Zap } from 'lucide-react';

export default function PortfolioCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    'React', 'Node.js', 'Python', 'Telegram Bots',
    'Web Automation', 'Chrome Extensions', 'Security Tools',
    'Home Assistant', 'API Integration', 'UI/UX'
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      color: '#e0e6ed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(58, 134, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(58, 134, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.3s ease-out',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 20s infinite ease-in-out',
      }} />
      
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(58, 134, 255, 0.12) 0%, transparent 70%)',
        bottom: '15%',
        right: '15%',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        animation: 'float 25s infinite ease-in-out reverse',
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .skill-tag {
          animation: slideIn 0.6s ease-out backwards;
        }

        .skill-tag:nth-child(1) { animation-delay: 0.1s; }
        .skill-tag:nth-child(2) { animation-delay: 0.15s; }
        .skill-tag:nth-child(3) { animation-delay: 0.2s; }
        .skill-tag:nth-child(4) { animation-delay: 0.25s; }
        .skill-tag:nth-child(5) { animation-delay: 0.3s; }
        .skill-tag:nth-child(6) { animation-delay: 0.35s; }
        .skill-tag:nth-child(7) { animation-delay: 0.4s; }
        .skill-tag:nth-child(8) { animation-delay: 0.45s; }
        .skill-tag:nth-child(9) { animation-delay: 0.5s; }
        .skill-tag:nth-child(10) { animation-delay: 0.55s; }
      `}</style>

      {/* Main card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          background: 'rgba(15, 20, 35, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '60px',
          boxShadow: `
            0 0 0 1px rgba(58, 134, 255, 0.2),
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(58, 134, 255, ${isHovered ? '0.15' : '0.05'})
          `,
          border: '1px solid rgba(58, 134, 255, 0.2)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
          animation: 'slideIn 0.8s ease-out',
        }}
      >
        {/* Animated border gradient */}
        <div style={{
          position: 'absolute',
          inset: '-2px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.4), rgba(58, 134, 255, 0.4), transparent)',
          backgroundSize: '200% 100%',
          borderRadius: '24px',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s',
          animation: 'borderFlow 3s linear infinite',
          pointerEvents: 'none',
          zIndex: -1,
          filter: 'blur(4px)',
        }} />

        {/* Header section */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <Terminal
              size={48}
              style={{
                color: '#ffd700',
                animation: 'pulse 2s infinite',
              }}
            />
            <div>
              <h1 style={{
                fontSize: '48px',
                fontWeight: '800',
                margin: 0,
                background: 'linear-gradient(135deg, #ffd700 0%, #3a86ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                animation: glitchActive ? 'glitch 0.3s' : 'none',
              }}>
                FixerHack
              </h1>
              <p style={{
                fontSize: '20px',
                margin: '8px 0 0 0',
                color: '#8b9dc3',
                fontWeight: '500',
                letterSpacing: '0.05em',
              }}>
                <Code2 size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Freelance Developer & Tech Innovator
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <Sparkles size={20} style={{ color: '#ffd700' }} />
            <span style={{
              fontSize: '18px',
              color: '#b8c5db',
              lineHeight: '1.6',
            }}>
              Створюю телеграм-боти, веб-додатки та автоматизацію.
              Спеціалізуюся на безпеці, інтеграціях та нестандартних рішеннях.
            </span>
          </div>
        </div>

        {/* Skills section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#8b9dc3',
            marginBottom: '20px',
            fontWeight: '700',
          }}>
            <Zap size={16} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ffd700' }} />
            Tech Stack
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-tag"
                style={{
                  padding: '10px 20px',
                  background: 'rgba(58, 134, 255, 0.1)',
                  border: '1px solid rgba(58, 134, 255, 0.3)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#b8c5db',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(58, 134, 255, 0.2)';
                  e.target.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                  e.target.style.color = '#ffd700';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(58, 134, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(58, 134, 255, 0.3)';
                  e.target.style.color = '#b8c5db';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div>
          <h2 style={{
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#8b9dc3',
            marginBottom: '20px',
            fontWeight: '700',
          }}>
            Контакти
          </h2>
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <a
              href="https://github.com/fixerhack"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 24px',
                background: 'rgba(255, 215, 0, 0.1)',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '12px',
                color: '#ffd700',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="mailto:your.email@example.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 24px',
                background: 'rgba(58, 134, 255, 0.1)',
                border: '2px solid rgba(58, 134, 255, 0.3)',
                borderRadius: '12px',
                color: '#3a86ff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(58, 134, 255, 0.2)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(58, 134, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(58, 134, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>

        {/* Status indicator */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 18px',
          background: 'rgba(0, 255, 127, 0.1)',
          border: '1px solid rgba(0, 255, 127, 0.3)',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#00ff7f',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#00ff7f',
            animation: 'pulse 2s infinite',
          }} />
          Доступний для проектів
        </div>
      </div>
    </div>
  );
}
