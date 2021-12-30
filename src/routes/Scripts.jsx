import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './editor.module.css';
import ScriptSelectors from '../components/ScriptSelectors';
import ObjectionSelectors from '../components/ObjectionSelectors';
import Conversation from '../components/Conversation';
import ScriptsLoading from '..//components/ScriptsLoading';

const Scripts = () => {

    const baseURL = 'https://61b8749564e4a10017d18faa.mockapi.io/scripts';

    const [scripts, setScripts] = useState(null);
    const [activeScriptType, setActiveScriptType] = useState('');
    const [activeObjectionType, setActiveObjectionType] = useState('');

    function handleScriptClick(e) {
        setActiveScriptType(e.target.innerText);
    }

    function handleObjectionCick(e) {
        setActiveObjectionType(e.target.innerText);
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setScripts(response.data);
        });
    }, []);

    if (!scripts) {
        return <ScriptsLoading />
    }

    return(
        <>
            <main className={styles.main}>
                <ScriptSelectors 
                    handleScriptClick={handleScriptClick} 
                    activeScriptType={activeScriptType} 
                    setActiveScriptType={(e) => { setActiveScriptType(e) }} 
                    scripts={scripts} 
                />
                <article className={styles.article}>
                    {
                        activeScriptType !== '' ? 
                        <ObjectionSelectors 
                        handleObjectionCick={(e) => {handleObjectionCick(e)}} 
                        setActiveObjectionType = {(e) => { setActiveObjectionType(e) }} 
                        activeScriptType={activeScriptType} 
                        activeObjectionType={activeObjectionType} 
                        scripts={scripts} 
                    /> :
                    null
                    }
                    {
                        activeObjectionType !== '' ? 
                        <Conversation 
                        scripts={scripts} 
                        activeScriptType={activeScriptType} 
                        activeObjectionType={activeObjectionType} 
                    /> :
                    null
                    }
                </article>
            </main>
        </>
    );
}

export default Scripts;