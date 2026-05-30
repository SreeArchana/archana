import Reveal from '../ui/Reveal.jsx';

export default function About() {
  return (
    <section className="section split-section" id="about">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2>A practical frontend journey shaped by real project work.</h2>
      </Reveal>
      <Reveal delay={0.1} className="prose-card">
        <p>My interest in web development started with curiosity about how websites work behind the scenes. After learning HTML, CSS, and JavaScript, I discovered React.js and became interested in building dynamic user interfaces.</p>
        <p>Over the last two years, I have worked on dashboards, portfolio websites, business applications, and interactive user interfaces. Through these projects, I learned the importance of clean architecture, reusable components, performance optimization, and collaboration.</p>
        <p>I enjoy solving frontend challenges and continuously improving my skills through personal projects and professional development.</p>
        <div className="timeline-mini">
          <span>2017-2021 · B.Sc.</span>
          <span>2022 · Internship</span>
          <span>2023-Present · Freelance React work</span>
        </div>
      </Reveal>
    </section>
  );
}
