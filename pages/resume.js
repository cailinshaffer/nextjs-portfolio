import styles from '../styles/Resume.module.css'

export default function Resume() {
    return(
        <div className={styles.container}>
            <div>
              <a
                 href="/resume.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                >Download Resume</a>
            </div>
            <div className={styles.resume}>
            <img 
            src="/resume.png" 
            alt="resume"
             />
            </div>           
            
        </div>
    )
}