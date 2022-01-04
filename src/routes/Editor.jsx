import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './editor.module.css';
import ScriptSelectors from '../components/ScriptSelectors';
import ObjectionSelectors from '../components/ObjectionSelectors';
import EditableConversation from '../components/EditableConversation';
import ScriptsLoading from '../components/ScriptsLoading';

const Editor = () => {

    const baseURL = 'https://61b8749564e4a10017d18faa.mockapi.io/scripts/';

    const [scripts, setScripts] = useState(null);
    const [activeScriptType, setActiveScriptType] = useState('');
    const [activeObjectionType, setActiveObjectionType] = useState('');
    const [objectionText, setObjectionText] = useState('');
    const [wordTrackText, setWordTrackText] = useState('');
    const [scriptID, setScriptID] = useState('');
    const [objID, setObjID] = useState('');
    const [wordID, setWordID] = useState('');

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

    function handleObjectionChange(e) {
        setObjectionText(e.target.value);
    }

    function handleWordTrackChange(e) {
        setWordTrackText(e.target.value);
    }

    useEffect(() => {
        getScripts();
    }, []);

    function handleSaveClick(e) {
        e.preventDefault();
        let tempScriptID = Number(e.target.parentElement.id);
        let tempObjID = Number(e.target.parentElement.children[0].id.split('_').slice(1));
        let tempWordID = Number(e.target.parentElement.children[1].id.split('_').slice(1));
        setScriptID(tempScriptID);
        setObjID(tempObjID);
        setWordID(tempWordID);
        let tempScripts = [...scripts];
        tempScripts[tempScriptID].objTypes[tempObjID].objection = objectionText;
        tempScripts[tempScriptID].objTypes[tempWordID].wordTrack = wordTrackText;
        console.log(tempScripts);
        setScripts(tempScripts);
        axios
            .put(`${baseURL}${tempScriptID}`, 
                scripts[tempScriptID]
            )
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
                        objectionText={objectionText} 
                        wordTrackText={wordTrackText} 
                        activeScriptType={activeScriptType} 
                        activeObjectionType={activeObjectionType} 
                        handleSaveClick={handleSaveClick} 
                        handleObjectionChange={(e) => {handleObjectionChange(e)}} 
                        handleWordTrackChange={(e) => {handleWordTrackChange(e)}} 
                    /> :
                    null
                    }
                </article>
            </main>
        </>
    );
}

export default Editor;