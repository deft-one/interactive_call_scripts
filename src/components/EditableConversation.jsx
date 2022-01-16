import styles from '../components/editableconversation.module.css';

const EditableConversation = ({scripts, objectionText, wordTrackText, activeScriptType, activeObjectionType, handleSaveClick, handleObjectionChange, handleWordTrackChange}) => {
    return(
        <div className={styles.trackGroup}>
            {
            scripts.map((script) => {
                return script.type === activeScriptType ?
                script.objTypes.map((objType, index) => {
                    return objType.name === activeObjectionType ?
                    <form 
                        action="" 
                        method="" 
                        id={script.id} 
                        key={script.id} 
                        className={styles.trackGroup}>
                        <textarea 
                            id={`objType_${index}`} 
                            value={objectionText} 
                            className={styles.objection} 
                            onChange={handleObjectionChange} 
                        ></textarea>
                        <textarea 
                            id={`wordType_${index}`} 
                            value={wordTrackText} 
                            className={styles.wordTrack} 
                            onChange={handleWordTrackChange} 
                        ></textarea>
                        <button onClick={handleSaveClick} className={styles.saveButton}>Save</button>
                    </form> : null
                }) :
                null
            })
            }
        </div>
    );
}

export default EditableConversation;