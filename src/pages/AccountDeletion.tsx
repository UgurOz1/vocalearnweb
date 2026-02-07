
import { motion } from 'framer-motion';

const AccountDeletion = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem', color: 'white' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: '900px', margin: '0 auto' }}
            >
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Account and Data Deletion</h1>
                <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Last Updated: {new Date().toLocaleDateString('en-US')}</p>

                <div style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            VocaLearn users can request the deletion of their account and associated data at any time.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>How to Request Account Deletion</h2>
                        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li>
                                Send an email to <a href="mailto:support@vocalearnapp.com" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600 }}>support@vocalearnapp.com</a>
                            </li>
                            <li>
                                Use the subject line: <strong style={{ color: '#a5b4fc' }}>"Account Deletion Request"</strong>
                            </li>
                            <li>
                                Include the email address used to register in the app
                            </li>
                        </ol>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>What Data Will Be Deleted</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>User account information (email, profile data)</li>
                            <li>Learning progress and preferences</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>What Data May Be Retained</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Anonymous usage data (if any) for legal or analytics purposes</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Retention Period</h2>
                        <p>
                            All personal data is permanently deleted within <strong style={{ color: '#a5b4fc' }}>30 days</strong> of the request.
                        </p>
                    </section>

                    <section style={{
                        marginTop: '3rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(99, 102, 241, 0.05))',
                        borderRadius: '12px',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>Need Help?</h3>
                        <p>
                            If you have any questions about the account deletion process, please contact us at: <br />
                            <a href="mailto:support@vocalearnapp.com" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>support@vocalearnapp.com</a>
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default AccountDeletion;
