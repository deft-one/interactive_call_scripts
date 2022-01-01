import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './editor.module.css';
import ScriptSelectors from '../components/ScriptSelectors';
import ObjectionSelectors from '../components/ObjectionSelectors';
import EditableConversation from '../components/EditableConversation';
import ScriptsLoading from '../components/ScriptsLoading';

const Editor = () => {

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

    function getScripts() {
        axios
            .get(baseURL)
            .then((response) => {
                setScripts(response.data);
        });
    }

    useEffect(() => {
        getScripts();
    }, []);

    function handleSaveClick() {
        axios
            .put('https://61b8749564e4a10017d18faa.mockapi.io/scripts/001', {
                type: 'Internet99'
            })
            .then(getScripts)
            .catch(err => console.log(err));
    }

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
                        <EditableConversation 
                        scripts={scripts} 
                        activeScriptType={activeScriptType} 
                        activeObjectionType={activeObjectionType} 
                        handleSaveClick={handleSaveClick} 
                    /> :
                    null
                    }
                </article>
            </main>
        </>
    );
}

export default Editor;