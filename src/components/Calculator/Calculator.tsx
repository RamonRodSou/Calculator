import React, { useState } from 'react'
import styles from './Calculator.module.css'
import ButtonsOperator from '../ButtonsOperator/ButtonsOperator'
import Display from '../Display/Display'


const Calculator = () => {

  const [completeOperation, setCompleteOperation] = useState<string | null>('0');
  const [currentValue, setCurrentValue] = useState<string | null>('0');
  const [pendingOperation, setPendingOperation] = useState<string | null>(null)
  const [pendingValue, setPendingValue] = useState<string | null>(null)


  return (
    <div className={styles.calculator}>
     <Display completeOperation={completeOperation} currentValue={currentValue} />
      <ButtonsOperator

        setCompleteOperation={setCompleteOperation}
        completeOperation={completeOperation}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}      
        setPendingOperation={setPendingOperation}
        pendingOperation={pendingOperation}
        setPendingValue={setPendingValue}
        pendingValue={pendingValue}
      />
    </div>
  )
}

export default Calculator