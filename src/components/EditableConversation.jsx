import styles from '../components/editableconversation.module.css';

const EditableConversation = ({scripts, objectionText, wordTrackText, activeScriptType, activeObjectionType, handleSaveClick, handleObjectionChange, handleWordTrackChange, scriptInputResize}) => {
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
                            type="text" 
                            className={styles.objection} 
                            value={objectionText} 
                            onChange={handleObjectionChange} 
                        ></textarea>
                        <textarea 
                            id={`wordType_${index}`} 
                            type="text" 
                            className={styles.wordTrack} 
                            value={wordTrackText} 
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

// index.objTypes.objection  index.objTypes.wordTrack

// NEED TO FIGURE OUT HOW TO POST THE DATA TO THE API IN THE CORRECT POSITION