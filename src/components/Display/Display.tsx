import styles from  './Display.module.css'

interface DisplayProps {
    completeOperation: string | null
    currentValue: string | null
  }

const Display: React.FC<DisplayProps> = ({ completeOperation, currentValue }) => {
    
    return (
        <>
            <div className={styles.complete_operation}>{completeOperation}</div>
            <div className={styles.display}>{currentValue}</div>
        </>
    )
    }

export default Display 