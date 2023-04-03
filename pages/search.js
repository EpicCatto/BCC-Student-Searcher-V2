import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import style from '../styles/Search.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../configuration'

export default function Home() {
    const router = useRouter();

    let [studentData, setStudentData] = useState('');
    let [studentImage, setSearchImage] = useState('');
    let [searching, setSearching] = useState(false);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('You are not logged in');

                const res = await fetch(config.api_route + '/user/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token,
                    }),
                });

                const data = await res.json();

                if (data.error) {
                    localStorage.removeItem('username');
                    localStorage.removeItem('token');
                    toast.error(`Error: ${data.error}`, {
                        position: 'top-right',
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    });
                    setTimeout(() => router.push('/'), 1000);
                } else {
                    studentData = data.name;
                    studentImage = data.image;

                    toast.success(`Welcome back ${data.username}`, {
                        position: 'top-right',
                        autoClose: 10000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    });
                }
            } catch (err) {
                localStorage.removeItem('username');
                localStorage.removeItem('token');
                toast.error(`Error: ${err.message}`, {
                    position: 'top-right',
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                setTimeout(() => router.push('/'), 1000);
            }
        };

        verifyUser();

        toast.info(
            'By using this website you agree to our terms of service \n bss.phatlor.me/terms',
            {
                position: 'top-right',
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                onClick: () => {
                    router.push('/terms');
                },
            },
        );
    }, [router]);

    async function handleSearch() {
        const searchInput = document.getElementById("searchIn").value;
        const searchType = document.getElementById("searchType").value;
        
        console.log("Searching for \"" + searchInput + "\" by " + searchType);

        toast.promise(new Promise((resolve, reject) => {
        fetch(config.api_route + `/scan?stdid=${searchInput}&database=2021`, {
                method: 'GET',
        }).then(res =>
            res.json()
        ).then(data => {
            if (data.error) {
                reject(data.error);
                // toast.error(`Error: ${data.error}`, {
                //     position: 'top-right',
                //     autoClose: 10000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: 'colored',
                // });
                return;
            } else {
                resolve(data);
                setStudentData(data.name);
                setSearchImage(data.image);
                return;
            }
        });
        }), {
            pending: "Searching...",
            success: "Student found! reteiving data...",
            error: "Error while searching for student"
        }, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        }).catch(err => {
            toast.error(`Error: ${err}`, {
                position: 'top-right',
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            return;
        });
    }

    return (
        <>
            <Head>
                <title>Bcc Student Searcher</title>
            </Head>
            {/* <div className={style.container}> */}
                <div className="center">
                    <h1>BCC Student Searcher</h1>
                    <p>Search for BCC students by name or studentID</p>
                    <p onClick={() => router.push("/dbsource")}>Was woundering where we got all the information from? check this out! bss.phatlor.me/dbsource</p>

                    <input id='searchIn' type="text" placeholder="Search for a student" />
                    <select name="searchType" id="searchType">
                        <option value="name" disabled>Name</option>
                        <option value="studentID">Student ID</option>
                    </select>
                    <button onClick={handleSearch}>Search</button>
                    <br></br>
                    {/* result data */}
                    <h2>Result</h2>
                    <label>{studentData}</label>
                    <br></br>
                    {/* image is in base 64 */}
                    <img src={`data:image/png;base64,${studentImage}`} width = "111" height="139" />
                </div>
            {/* </div> */}
            <ToastContainer />
        </>
    );
}
