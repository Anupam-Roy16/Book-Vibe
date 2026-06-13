// import React from 'react';
import { Link } from 'react-router'; // রিফ্রেশ ছাড়া হোমপেজে যাওয়ার জন্য লিংক ইম্পোর্ট করলাম

const Errorpage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                {/* বড় করে এরর কোড */}
                <h1 style={styles.errorCode}>404</h1>
                
                {/* সুন্দর একটি মেসেজ */}
                <h2 style={styles.title}>Oops! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</h2>
                <p style={styles.description}>
                    দুঃখিত, আপনি যে বইটি বা পৃষ্ঠাটি খুঁজছেন তা এই মুহূর্তে আমাদের লাইব্রেরিতে নেই অথবা লিংকটি ভুল ছিল।
                </p>
                {/* হোমপেজে ফিরে যাওয়ার বাটন */}
                <Link to="/" style={styles.button}>
                    হোমপেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

// সিম্পল এবং প্রফেশনাল ইনলাইন সিএসএস স্টাইলস
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        padding: '20px',
    },
    content: {
        maxWidth: '500px',
    },
    errorCode: {
        fontSize: '120px',
        margin: '0',
        fontWeight: '900',
        color: '#ff4d4d', // এরর লাল রঙ
        lineHeight: '1',
    },
    title: {
        fontSize: '28px',
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '30px',
        lineHeight: '1.6',
    },
    button: {
        display: 'inline-block',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#23c55e', // তোমার বুক-ভাইব থিমের সাথে মিল রেখে গ্রিন কালার
        textDecoration: 'none',
        borderRadius: '8px',
        transition: 'background-color 0.2s',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }
};

export default Errorpage;