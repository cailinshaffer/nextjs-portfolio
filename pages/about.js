// this is going to be /about
// import css module
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1>About</h1>
            {/* more than one style can use string interpolation */}
            <p className={styles.coolColor}>This is the about page</p>

            <p>{`dont use apostrophes unless the are in backticks`} </p>

            {/* style jsx is great for conditional rendering */}
            <h2>I am a different color</h2>
            <style jsx>{`
                h2 {
                    color: purple;
                }
            `}</style>

            {/* 2 ways of rendering images: stored locally and a url */}
            <img 
            src="/next.svg" 
            alt="nextjs logo"
             />

        </div>
    )
}