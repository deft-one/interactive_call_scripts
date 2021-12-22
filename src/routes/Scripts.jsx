import useFetch from 'react-fetch-hook';
import styles from './scripts.module.css';
import { useState } from 'react';

const Scripts = () => {

    const { isLoading, error, data } = useFetch("https://61b8749564e4a10017d18faa.mockapi.io/scripts");

    const [ scriptType, setScriptType ] = useState('');
    const [ objectionType, setObjectionType ] = useState('');
    const [ activeScriptButton, setActiveScriptButton ] = useState('');
    const [ activeObjectionButton, setActiveObjectionButton ] = useState('');

    function handleScriptTypeClick(e) {
        setScriptType(e.target.innerText);
        setActiveScriptButton(e.target.innerText);
        setObjectionType(data[0].objTypes[0].name);
        setActiveObjectionButton(data[0].objTypes[0].name);
    }

    function handleObjectionTypeClick(e) {
        setObjectionType(e.target.innerText);
        setActiveObjectionButton(e.target.innerText);
    }

    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return(
        <>
            <div className={styles.scriptTypeSelector}>
                {
                    data.map((item, index) => {
                        return <button 
                                    key={index} 
                                    className={`${styles.scriptSelectButton} ${activeScriptButton === item.type ? styles.scriptSelectButtonActive : ''}`} 
                                    onClick={(e) => {handleScriptTypeClick(e)}}>{item.type}
                                </button>
                    })
                }
            </div>
            <main>
                <h2>{scriptType} Call Scripts</h2>
                {
                    data.map((item, index) => {
                        return (
                            item.type === scriptType ? 
                            <article key={index} className={styles.article}>
                                <div className={styles.objContainer}>
                                    {
                                        item.objTypes.map((objection, index) => {
                                            return item.type === scriptType ?
                                            <button 
                                                key={index}
                                                className={`${styles.objectionSelectButton} ${activeObjectionButton === objection.name ? styles.objectionSelectButtonActive : ''}`} 
                                                onClick={(e) => {handleObjectionTypeClick(e)}}>{`${objection.name}`}
                                            </button> : null
                                        })
                                    }
                                </div>
                                {
                                    item.objTypes.map((type, index) => {
                                        return(
                                            item.type === scriptType && objectionType === type.name ?
                                            <div key={index} className={styles.trackGroup}>
                                                <p className={styles.objection}>{ type.objection }</p>
                                                <p className={styles.wordTrack}>{ type.wordTrack }</p>
                                            </div> : null
                                        );
                                    })
                                }
                            </article> : null
                        );
                    })
                }
            </main>
        </>
    );
}

export default Scripts;