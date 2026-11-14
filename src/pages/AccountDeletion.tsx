import LegalPage from '../components/LegalPage';

const AccountDeletion = () => (
    <LegalPage eyebrow="Legal" title="Account and Data Deletion" tocLabel="Contents" updated={<>Last Updated: {new Date().toLocaleDateString('en-US')}</>}>

                    <section>
                        <p>
                            VocaLearn users can request the deletion of their account and associated data at any time.
                        </p>
                    </section>

                    <section>
                        <h2>How to Request Account Deletion</h2>
                        <ol>
                            <li>
                                Send an email to <a href="mailto:uguro9319@gmail.com">uguro9319@gmail.com</a>
                            </li>
                            <li>
                                Use the subject line: <strong>"Account Deletion Request"</strong>
                            </li>
                            <li>
                                Include the email address used to register in the app
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2>What Data Will Be Deleted</h2>
                        <ul>
                            <li>User account information (email, profile data)</li>
                            <li>Learning progress and preferences</li>
                        </ul>
                    </section>

                    <section>
                        <h2>What Data May Be Retained</h2>
                        <ul>
                            <li>Anonymous usage data (if any) for legal or analytics purposes</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Retention Period</h2>
                        <p>
                            All personal data is permanently deleted within <strong>30 days</strong> of the request.
                        </p>
                    </section>

                    <section className="callout">
                        <h3>Need Help?</h3>
                        <p>
                            If you have any questions about the account deletion process, please contact us at: <br />
                            <a href="mailto:uguro9319@gmail.com">uguro9319@gmail.com</a>
                        </p>
                    </section>
    </LegalPage>
);

export default AccountDeletion;
