import React, { useEffect, useState } from 'react'
import '../css/Tests.css'
import { ComplexNavbar } from '../Navbar';

export default function Tests() {
    const [tests, setTests] = React.useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://ambitionstudies-server.vercel.app/tests', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setTests(data))
            .catch(error => console.error('Error:', error))
            .finally(() => setLoading(false));
    }, []);
    if (loading) {
        return <p>Loading...</p>
    }
    const sortedTests = tests?.sort((a, b) => {
        const classA = parseInt(a.class.match(/\d+/g), 10);
        const classB = parseInt(b.class.match(/\d+/g), 10);
        return classA - classB;
    });
    console.log(sortedTests, 'sortedTests');
    return (
        <div>
             <ComplexNavbar />
            <h1 className='text-center font-bold text-3xl mt-3'>Test Links</h1>
            <div className='class-test'>
                {
                    tests?.map((item) => {
                        const linksBySubject = item.links.reduce((acc, link) => {
                            const subject = link.sub;
                            if (!acc[subject]) {
                                acc[subject] = [];
                            }
                            acc[subject].push(link);
                            return acc;
                        }, {});

                        return (
                            <div key={item._id} className='test-class'>
                                <h2>{item.class}</h2>
                                {Object.keys(linksBySubject).map((subject, index) => (
                                    <div key={index}>
                                        <h3>{subject}</h3>
                                        <ul>
                                            {linksBySubject[subject].map((link, i) => (
                                                <li key={i}><a href={link.url}>{i + 1}. {link.subject}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}

