import styles from './homePage.module.css';

const HomePage = () => {
    return(
        <main>
            <article className={styles.homeContainer}>
                <h1 className={styles.h1}>Interactive Call Scripts</h1>
                <p className={styles.p}><em>The first version, built with PHP and MySQL, can be found <a href="https://www.deftoriginals.com/interactive-call-scripts/">here</a>. It is fully functional with user login, password reset and a script editor that's more advanced. This version was built to gain practice using React, React Router, CSS Modules, Axios and a JSON API.</em></p>
                <h2 className={styles.h2}>Scripts</h2>
                <p className={styles.p}>This page uses Axios to make an API call to fetch the call scripts and display the data as conversation bubbles.</p>
                <p className={styles.p}>
                    <ul>
                        <li className={styles.list}><b>Process</b>
                            <ol>
                                <li className={styles.subList}>Axios fetches the data from the API.</li>
                                <li className={styles.subList}>The returned data is mapped over and buttons rendered for each script "type".</li>
                                <li className={styles.subList}>When a script "type" button is clicked, the <code className={styles.code}>activeScriptType</code> state is updated in the <code className={styles.code}>&lt;Scripts /&gt;</code> component, and the API data is mapped over again and the corresponding "objection" buttons are rendered.</li>
                                <li className={styles.subList}>When an objection "type" button is clicked, the <code className={styles.code}>activeObjectionType</code> state is updated in the <code className={styles.code}>&lt;Scripts /&gt;</code> component, and the API data is mapped over again and the corresponding objections and word tracks are rendered within the <code className={styles.code}>&lt;Conversation /&gt;</code> component.</li>
                            </ol>
                        </li>
                    </ul>
                </p>
                <h2 className={styles.h2}>Editor</h2>
                <p className={styles.p}>This page uses Axios to make an API call to fetch the call scripts and display the data as editable textareas, capable of displaying HTML for enhanced user experience.</p>
                <p className={styles.p}>
                    <ul>
                        <li className={styles.list}><b>Process</b>
                            <ol>
                                <li className={styles.subList}>The process is largely the same as the Scripts page, with a few differences.</li>
                                <li className={styles.subList}>The <code className={styles.code}>&lt;Conversation /&gt;</code> component is replaced with the <code className={styles.code}>&lt;EditableConversation /&gt;</code> component.</li>
                                <li className={styles.subList}>Each conversation is rendered as a <code className={styles.code}>&lt;form&gt;</code> element with a <code className={styles.code}>&lt;textarea&gt;</code> for each objection and word track.</li>
                                <li className={styles.subList}>These are rendered blank, as I was having issues with the state being updated and the <code className={styles.code}>&lt;EditableConversation /&gt;</code> being re-rendered everytime the onChange even fired.</li>
                                <li className={styles.subList}>The onChange event updates the state with each keystroke, and a temporary data object is updated to be used to overwrite the entire API upon clicking the "save" button.  This is not the ideal solution, and it's likely a result of the structure of my API not being organized for efficient updating.  It was easier to overwrite the entire API than to come up with a convoluted workaround to access and update the specific objects.</li>
                            </ol>
                        </li>
                    </ul>
                </p>
            </article>
        </main>
    );
}

export default HomePage;