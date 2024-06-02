import '../css/About.css';

function About() {
  return (
    <div id='about'>
        <div className='about-card'>
          <img src='https://avatars.githubusercontent.com/u/137398727?v=4' alt='profile'/>
          <div className='about-card-content'>
            <h>S. Krupakar Reddy</h>
            <h2 className='text-description'>Developer • Adventurer • Learner</h2>
            <button className='button-download'>DOWNLOAD RESUME</button>
            <button className='button-contact' onClick={() => window.location.href = '#contact'}>CONTACT</button>
            <p>👨👨‍🎓 Experience Level: 2 years in Computer Science</p>
            <p>💻 I'm Currently studying at Scaler School of Technology 🚀</p>
            <p>🧩 Interested In: Technology, Science and Life!</p>
            <p>💡 Equipments: Python, Java, JS, SQL, Linux</p>
            <p>⚡ Fun Fact: Linux >>> Windows </p>
            <p>📚 Learninng: DSA and Development</p>
            <p>💡 Exploring AI developments</p>
          </div>
        </div>
      </div>
  );
}

export default About;