import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bcc Student Searcher - dbsource</title>
            </Head>
            <div>
                <h1>Database Source</h1>
                <p>This is where we get all our information from</p>
                <p>!! QUICK NOTICE ALL THE INFORMATION WERE FROM PUBLICLY AVAILABLE SCHOOL SOURCE !!</p>
                <ul>
                    <h2>2021 Database</h2>
                    <ul>
                        <li>BCC Students images, level of education, studentID - https://sway.office.com/488QFDz6GlZDzEXF?ref=Link =&gt; https://drive.google.com/drive/folders/1SOtPwZbtFPJwZRsTsZGzIbfxIt_wo9Qy - Can be access through school website back in 2021</li>
                        <li>BCC Students names, studentID, level of education, room - http://www.bcc.ac.th/wpth/?p=1177 - Can be access through school website</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}