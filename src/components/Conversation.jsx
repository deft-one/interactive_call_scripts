import styles from './conversation.module.css';

const Conversation = ({scripts, activeScriptType, activeObjectionType}) => {

    return(
        <div className={styles.trackGroup}>
            {
            scripts.map((script) => {
                return script.type === activeScriptType ?
                script.objTypes.map((objType, index) => {
                    return objType.name === activeObjectionType ?
                    <div key={index} className={styles.trackGroup}>
                        <p className={styles.objection} dangerouslySetInnerHTML={{__html: objType.objection}} />
                        <p className={styles.wordTrack} dangerouslySetInnerHTML={{__html: objType.wordTrack}} />
                    </div> : null
                }) :
                null
            })
            }
        </div>
    );
}

export default Conversation;

// NEED TO RENDER IT BASED ON ACTIVE OBJECTION AND ONLY FOR THAT OBJECTION
// NOT WORKING YET