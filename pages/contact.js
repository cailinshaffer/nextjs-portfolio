import styles from '../styles/Contact.module.css'
import Link from 'next/link'


export default function Contact() {

    return(
        <div className={styles.container}>
            <h1>Contact Me </h1>
            <h4>Email: cailinshaffer@gmail.com</h4> 
            <h4>LinkedIn: </h4> <a href="https://www.linkedin.com/in/cailin-shaffer">Cailin Shaffer</a>

        </div>
        
    )
}