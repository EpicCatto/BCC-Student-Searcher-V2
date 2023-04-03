import Head from 'next/head'
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react'
import style from '../styles/Tos.module.css'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    
    function dbs() {
        router.push("/dbsource")
    }

    return (
        <div>
            <Head>
                <title>Bcc Student Searcher - TOS</title>
            </Head>
            <div>
                <div className={style.centeredX}>
                    <h1>TOS</h1>
                </div>
                <div className={style.tos}>
                    <p>Welcome to our website. These Terms of Service govern your access to and use of our product, including any content, functionality, and services offered on or through our website. By accessing or using our product, you agree to be bound by these Terms of Service.</p>
                    <h3>Introduction</h3>
                    <p>The sole objective of this document is to provide the terms and conditions of the usage of our Product and its Associated Services (hereafter named as solely the Product), detail policies concerning the obtention and the regulation of access to the Product, and specify our privacy policy. This document was specifically written to create a fair balance of responsibility, freedom of use and peace of mind for both BCC-SS and the end user.</p>
                    <br></br>
                    <h3>1) DISCLAIMER OF LIABILITY</h3>
                    <p>Our product is provided on an &quot;as is&quot; and &quot;as available&quot; basis, and we do not make any representations or warranties of any kind, whether express or implied, regarding the reliability, accuracy, or completeness of the product. We do not accept any responsibility or liability for any damage or loss, whether direct, indirect, incidental, consequential, or otherwise, arising out of or in connection with the use of our product.</p>
                    <br></br>
                    <h3>2) COLLECTION OF PERSONAL INFORMATION</h3>
                    <p>When you use our product, we may collect certain personal information, including your IP address, search history, and other data that you voluntarily provide to us. We may use this information to improve our product and to better understand our users. By using our product, you consent to the collection, use, and disclosure of your personal information in accordance with our Privacy Policy.</p>
                    <br></br>
                    <h3>3) SOURCE OF DATABASE</h3>
                    <p>Our product is a student image searcher, and all information in the database came from an already existing public school database. We do not guarantee the accuracy or completeness of the information in our database, and we are not responsible for any errors, omissions, or inaccuracies in the information.</p>
                    <p onClick={dbs}>Read more at bss.phatlor.me/dbsource</p>
                    <br></br>
                    <h3>4) EDUCATION PURPOSES ONLY</h3>
                    <p>Our product is intended for educational purposes only. It is not intended to be used for any commercial, business, or other non-educational purpose. By using our product, you agree that you will only use it for educational purposes and that you will not use it for any other purpose.</p>
                    <br></br>
                    <h3>5) GOVERNING LAW AND JURISDICTION</h3>
                    <p>These Terms of Service and any disputes arising out of or related to these Terms of Service will be governed by and construed in accordance with the laws of the Thailand, without giving effect to any principles of conflicts of law. Any legal suit, action, or proceeding arising out of or related to these Terms of Service or our product will be instituted exclusively in the federal or state courts located in Thailand-Bangkok, and you waive any objection to the jurisdiction or venue of such courts.</p>
                    <br></br>
                    <h3>6) PRIVACY POLICY</h3>
                    <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our product.</p>
                    <h3>6.1) INFORMATION WE COLLECT</h3>
                    <p>When you use our product, we may collect the following personal information:</p>
                    <ul>
                        <li>Your username</li>
                        <li>Your IP address</li>
                        <li>Your last login GEO location</li>
                        <li>Whether you are using a VPN or not and block you from using our Service</li>
                        <li>Your first and last name</li>
                        <li>Your student ID</li>
                    </ul>
                    <p>We may also collect other information about your use of our product, such as your search queries and your interactions with our product.</p>
                    <h3>6.2) HOW WE USE YOUR INFORMATION</h3>
                    <p>We use your personal information for the following purposes:</p>
                    <ul>
                        <li>To provide and improve our product;</li>
                        <li>To authenticate your access to our product;</li>
                        <li>To track your usage of our product;</li>
                        <li>To personalize your experience with our product;</li>
                        <li>To communicate with you about our product;</li>
                        <li>To respond to your inquiries and requests;</li>
                        <li>To comply with legal obligations and to protect our rights.</li>
                    </ul>
                    <h3>6.3) HOW WE SHARE YOUR INFORMATION</h3>
                    <p>We may share your personal information with the following parties:</p>
                    <ul>
                        <li>Third-party service providers who help us provide our product;</li>
                        <li>Our affiliates, for the purposes described in this Privacy Policy;</li>
                        <li>Law enforcement and government agencies, if required by law or to protect our legal rights;</li>
                        <li>Other parties with your consent.</li>
                    </ul>
                    <p>We may also share your information in an aggregated or de-identified form that cannot be used to identify you.</p>

                    <h3>6.4) SECURITY OF YOUR INFORMATION</h3>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, we cannot guarantee the absolute security of your information.</p>

                    <h3>6.5) YOUR CHOICES AND RIGHTS</h3>
                    <p>You may have certain rights regarding your personal information under applicable law, including the right to access, correct, delete, or restrict the use of your personal information. If you would like to exercise any of these rights, please contact us using the information provided below.</p>

                    <h3>6.6) CHILDREN&apos;S PRIVACY</h3>
                    <p>Our product is not directed to children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If we learn that we have collected personal information from a child under the age of 13, we will take steps to delete the information as soon as possible.</p>

                    <h3>6.7) CHANGES TO THIS PRIVACY POLICY</h3>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated Privacy Policy on our website, and the new Privacy Policy will be effective immediately upon posting.</p>

                    <h3>6.8) CONTACT US</h3>
                    <p>If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us on discord EpicCatto#4321.</p>

                </div>
            </div>
        </div>
    )
}
