import styles from './selectorbuttons.module.css';

const ObjectionSelectors = ({scripts, activeObjectionType, handleObjectionCick, activeScriptType}) => {

    return(
        <div className={styles.objContainer}>
            {
            scripts.map((script) => {
                return script.type === activeScriptType ?
                script.objTypes.map((objType, index) => {
                    return(
                        <button 
                            key={index}
                            className={`${styles.objectionSelectButton} ${activeObjectionType === objType.name ? styles.objectionSelectButtonActive : ''}`} 
                            onClick={(e) => {handleObjectionCick(e)}}>{`${objType.name}`}
                        </button>
                    );
                }) :
                null
            })
            }
        </div>
    );
}

export default ObjectionSelectors;