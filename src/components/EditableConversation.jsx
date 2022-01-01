import styles from '../components/editableconversation.module.css';

const EditableConversation = ({scripts, activeScriptType, activeObjectionType, handleSaveClick}) => {
    return(
        <div className={styles.trackGroup}>
            {
            scripts.map((script) => {
                return script.type === activeScriptType ?
                script.objTypes.map((objType, index) => {
                    return objType.name === activeObjectionType ?
                    <div key={index} className={styles.trackGroup}>
                        <p className={styles.objection} >{objType.objection}</p>
                        <p className={styles.wordTrack} >{objType.wordTrack}</p>
                        <button onClick={handleSaveClick} className={styles.saveButton}>Save</button>
                    </div> : null
                }) :
                null
            })
            }
        </div>
    );
}

export default EditableConversation;

// NEED TO FIGURE OUT HOW TO POST THE DATA TO THE API IN THE CORRECT POSITION