import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - About Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.aboutMain}>
        <nav className={styles.navbar}>
          <img className={styles.favicon} src='favicon.png'></img>
          <img className={styles.menu} src='/icons/menu-icon.png'></img>
        </nav>
        <header>
        <div className={styles.aboutHeader}>
          <h1 className={styles.headerOne}>About Us</h1> 
       
       
        </div>
        
        </header>
        <div className={styles.aboutContent}>
        <p className={styles.paragraph}>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
        <p className={styles.paragraph}>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
        <p className={styles.paragraph}>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>

        <h2 className={styles.headerTwo}>Informational Sessions</h2>

        <p className={styles.paragraph}>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>

        <h3 className={styles.headerThree}>Big Info </h3> 

        <p className={styles.paragraph}>Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all of our programs - from business, computing, and health to engineering, trades, and applied sciences.</p>
        <p className={styles.paragraph}>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
        
        <h2 className={styles.headerTwo}>Campus Tours</h2>

        <p className={styles.paragraph}>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>

        <div className={styles.Carousel}>
          <img src="/icons/leftArrow.png"></img>
          <img src="/icons/rightArrow.png"></img>
    <div id={styles.carouselImage}>
     
<div id={styles.testOnImageHere}>
        </div>
        </div>
       </div>
       <div className={styles.aboutHeaderTwo}>
        <h1 className={styles.headerOne}>DEPARTMENTS</h1> 
        </div>
          </div>
          <div className={styles.aboutArrow}>
        <a><span><img className={styles.aboutDownArrow} src="/icons/downwardArrow.png"></img></span></a>
        <a><span><img className={styles.aboutUpArrow} src="/icons/upwardArrow.png"></img></span></a>
        </div>
        <div>
    <ul className={styles.listStyle}>
      <li>Applied & Natural Sciences</li>
     <li>Business & Media</li>
      <li>Computing & IT</li>
    <li>Engineerin</li>
      <li>Health Sciences</li>
      <li>Trades & Apprenticeships</li>
    </ul>
    </div>
    
   

     
    
      
      

       
       
      </main>
    </>
  )
}