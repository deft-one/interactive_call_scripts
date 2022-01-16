import styles from './selectorbuttons.module.css';

const ScriptSelectors = ({scripts, activeScriptType, handleScriptClick}) => {

    return(
        <div className={styles.scriptTypeSelectors}>
            {
            scripts.map((script, index) => {
                return( 
                    <button 
                        key={index} 
                        className={`${styles.scriptSelectButton} ${activeScriptType === script.type ? styles.scriptSelectButtonActive : ''}`} 
                        onClick={(e) => {handleScriptClick(e)}}>{script.type}
                    </button>
                );
            })
            }
        </div>
    );
}

export default ScriptSelectors;