// this is going to be /about
// import css module
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <div className={styles.aboutMe}>
                <h1>About Me:</h1>
                <p>I am a full-stack developer with a desire to learn and creating innovative and effective solutions that deliver exceptional user experiences. I am pursuing a career in software engineering because I believe that technology has the power to transform businesses and improve people’s lives.  With that being said I am passionate about being apart of that change. With the use of vanilla Java Script, React, Node.js, and Next.js as well as implementing those skills I plan to advance in every way possible. My exceptional problem solving skills, along with my fast learning capabilities makes me flexible to any environment. My previous experience in the General Assembly SEI Immersive course has built myself into someone who can work efficiently and effectively, with a team or individually.Having the devotion and adaptability to learning new things including C++, Unity, and Python to overcome any obstacles, guarantees my ability to succeed. Overall, my qualities and experience make me a great software engineer because I am committed to delivering exceptional results while maintaining a strong focus on collaboration and user-friendly design.  </p>
            </div>

            {/* 2 ways of rendering images: stored locally and a url */}
            <div className={styles.propic}>
            <img 
            src="/propic.jpeg" 
            alt="profile pic"
             />
            </div>

        </div>
    )
}


            //              {/* more than one style can use string interpolation */}
            // <p className={styles.coolColor}>This is the about page</p>

            // <p>{`dont use apostrophes unless the are in backticks`} </p>

            // {/* style jsx is great for conditional rendering */}
            // <h2>I am a different color</h2>
            // <style jsx>{`
            //     h2 {
            //         color: purple;
            //     }
            // `}</style>