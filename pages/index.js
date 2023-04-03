import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Turnstile } from '@marsidev/react-turnstile'
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/Home.module.css';
import config from '../../configuration'


export default function Home() {
  const router = useRouter();

  const ref = useRef(null);

  let [verifying, setVerifying] = useState(false);
  let [cftunnel, setCftunnel] = useState('');


  async function handleStartButton() {
    if (verifying) {
      return;
    }
    setVerifying(true);
    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const res = await fetch(config.api_route);
          if (res.status !== 200) {
            reject();
            setVerifying(false);
            throw new Error('Error connecting to api service!');
          }
          ref.current?.reset();
          // wait for the captcha to be solved
          const token = await new Promise((resolve, reject) => {
            const maxWaitTime = 5000;
            const intervalTime = 100; // Time to wait between checking if cftunnel has a value
            let waitTime = 0;
            const intervalId = setInterval(() => {
              if (cftunnel !== '') {
                clearInterval(intervalId);
                resolve(cftunnel);
              } else if (waitTime >= maxWaitTime) {
                clearInterval(intervalId);
                reject(new Error('Timeout waiting for captcha to be solved'));
              } else {
                waitTime += intervalTime;
              }
            }, intervalTime);
          });
          // generate a new user and return the username and token if not already exist in the localstorage
          const username = localStorage.getItem('username');
          const storedToken = localStorage.getItem('token');
          if (username === null || storedToken === null) {
            console.log(username, storedToken, token);
            const response = await fetch(config.api_route+'/user/create?cftunnel=' + token);
            console.log(response);
            if (response.status !== 200) {
              reject();
              setVerifying(false);
              throw new Error('Error creating new user!');
            }
            const data = await response.json();
            localStorage.setItem('username', data.username);
            localStorage.setItem('token', data.token);
          }
  
          setTimeout(() => {
            router.push('/search');
          }, 3000);
  
          resolve();
  
        } catch (error) {
          toast.error('Error: ' + error.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          reject();
          setVerifying(false);
        }
      }),
      {
        pending: 'Checking api service...',
        success: 'Api service is available redirecting to search page!',
        error: 'Error connecting to api service!',
      },
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      },
    );
  }
  
  function handleFAQButton() {
    router.push('/terms');
  }

  function handleRemoveButton() {
    toast.error('This website is still in development please try again later', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  return (
    <>
      <Head>
        <title>Bcc Student Searcher</title>
      </Head>
      <div className="marquee center">
        <h2>BCC Student Searcher</h2>
        <center>
          <label>Forget your friends? No worries we got you!</label>
        </center>
        <center><Turnstile ref={ref} siteKey={config.cf_siteKey} onSuccess={(token) => (setCftunnel(token))} options={{ size: (verifying ? "normal" : "invisible") }} /></center>
        <div className={styles.btnContainer}>
          <button className={styles.button} onClick={handleStartButton} disabled={verifying}>
            {verifying ? 'Verifying...' : 'Start Searching'}
          </button>
          <button className={styles.button} onClick={handleFAQButton}>
            FAQ
          </button>
          <button className={styles.buttonred} onClick={handleRemoveButton}>
            Data removal request
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
