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
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - Contact Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.contactMain}>
        <nav className={styles.navbar}>
          <img className={styles.favicon} src='favicon.png'></img>
          <img className={styles.menu} src='/icons/menu-icon.png'></img>
        </nav>
        <header>
        <div className={styles.aboutHeader}> <h1 className={styles.headerLine}>Contact Us</h1> </div>
        </header>
        <div >
        <p>Want to discuss? Lets chat!</p>
        </div>
        <div>
         
    <form className={styles.conForm}>
        <fieldset className={styles.conField}>
            <table>
                <thead>
                  <tr>
                    <td><h4>First Name:</h4><input className={styles.input} type="firstname" placeholder="First Name Here"/></td>
  <td><h4>Last Name:</h4><input className={styles.input} type="Lastname" placeholder="Last Name Here" />
  </td></tr>
                  <tr></tr>
                </thead>
                <thead>
                <td><h4>Email:</h4><input className={styles.input}  type="email" placeholder="Email here" />
  </td>
                </thead>
            </table>
        </fieldset>
    </form>
        </div>
       
       <div className={styles.upArrow}>
        <a><span><img className={styles.arrow} src="/icons/upwardArrow.png"></img></span></a>
        </div>

       
       
      </main>
    </>
  )
}