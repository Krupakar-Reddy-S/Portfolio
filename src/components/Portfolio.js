import '../css/Portfolio.css';

function Portfolio() {
    return (
        <div id='portfolio'>
            <h2>What I Do</h2>
            <div className='portfolio-cards'>
                <div className='portfolio-card'>
                    <i class='zmdi zmdi-code font-blue profile-icon'></i>
                    <h3>Developer</h3>
                    <p>
                    I am a data engineer with 3+ years of experience working on Azure cloud. I have a strong background in ETL processes and have successfully completed multiple projects involving data ingestion, transformation, and loading. I am highly proficient in Python and have a strong understanding of SQL and data management principles. I am able to work effectively in both individual and team environments and am committed to delivering high-quality results.
                    </p>
                </div>
                <div className='portfolio-card'>
                    <i class='zmdi zmdi-format-color-text font-green profile-icon'></i>
                    <h3>Otaku</h3>
                    <p>
                    I am an Otaku, which is a term used to describe someone who is deeply passionate about anime and manga. As an Otaku, I have a deep appreciation for the art, storytelling, and cultural significance of these mediums. I enjoy immersing myself in the rich and diverse world of anime and manga, and I am always eager to learn more about new series and creators. My love for Otaku culture goes beyond just consuming media, as I also enjoy participating in fan communities and events, and sharing my enthusiasm with others. Being an Otaku is a big part of my identity, and I am proud to be a part of this vibrant and creative community.
                    </p>
                </div>
                <div className='portfolio-card'>
                    <i class='zmdi zmdi-book font-yellow profile-icon'></i>
                    <h3>Learner</h3>
                    <p>
                    I am constantly learning and growing in my field. I am passionate about creating innovative solutions and using technology to solve real-world problems. I have a strong foundation in programming languages such as Java and Python, and am always eager to expand my skillset and take on new challenges. Whether I am working on a solo project or collaborating with a team, I thrive in a fast-paced and dynamic environment. I am excited to continue my career as a developer and make a positive impact in the tech industry.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;