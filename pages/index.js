import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - Home Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.homeMain}>
        <nav className={styles.navbar}>
          <div className={styles.toggle}>
           
        <img className={styles.menu} src='/icons/menu-icon.png'></img>
        </div>
          <img className={styles.favicon} src='favicon.png'></img>
        </nav>
        <div className={styles.content}>
          <h1 className={styles.headerOne}>An investment in knowledge pays the best interest.</h1>
       <br></br>
       <hr className={styles.lineBreak}></hr>
       <br></br>
        <p className={styles.paragraph}>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field..</p>
       <div className={styles.buttonLayout}>
       <Link href="/about"><button className={styles.button} onClick>More About Us</button></Link>
       <Link href="/contact"><button  className={styles.button}onClick>Contact Us</button></Link>
       </div>
      
       </div>
       <div className={styles.downArrow}>
        <a><span><img className={styles.arrow} src="/icons/downwardArrow.png"></img></span></a>
        </div>
      

       
       
      </main>
    </>
    
  )
}

