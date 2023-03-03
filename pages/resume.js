import styles from '../styles/Resume.module.css'

export default function Resume() {
    return(
        <div className={styles.container}>
            <div className={styles.resume}>
            <img 
            src="/resume.png" 
            alt="resume"
             />
            </div>           
            
        </div>
    )
}