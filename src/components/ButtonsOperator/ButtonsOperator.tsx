import styles from './ButtonsOperator.module.css'
import { ICalculator } from '../../interfaces/OperationCalculator'

interface ButtonsOperatorProps {
  setCompleteOperation: React.Dispatch<React.SetStateAction<string | null>>
  completeOperation: string | null;
  setCurrentValue: React.Dispatch<React.SetStateAction<string | null>>
  currentValue: string | null ;
  setPendingOperation: React.Dispatch<React.SetStateAction<string | null>>
  pendingOperation: string | null;
  setPendingValue: React.Dispatch<React.SetStateAction<string | null>>
  pendingValue: string | null;
}

const logic: ICalculator = {

  keypadNuumbers:['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  operations: ['+', '-', '/', '*'],
}

const keypadNuumbers = logic.keypadNuumbers 
const operations = logic.operations 

const ButtonsOperator: React.FC<ButtonsOperatorProps> = ({

  setCompleteOperation,
  completeOperation,
  setCurrentValue,
  currentValue,
  setPendingOperation,
  pendingOperation,
  setPendingValue,
  pendingValue,
}) => {

  function noNumberZero(prevValue: string, value: string): string {
    if (prevValue === '0') {
      return value
    } else {
      return prevValue + value
    }
  }
  
  function handleClick(value: string) {
    setCurrentValue((prevValue: string | null) => {
      return noNumberZero(prevValue || '', value)
    });
  
    setCompleteOperation((prevOperation) => {
      return noNumberZero(prevOperation || '', value)
    });
  }
  
  function handleClean ():void {

    setCurrentValue('0')
    setPendingOperation(null)
    setPendingValue(null)
    setCompleteOperation('0')
  }

  function handleOperation(operation: string) {

    setCompleteOperation(currentValue + ' ' + operation + ' ')
    setPendingOperation(operation)
    setPendingValue(currentValue)
    setCurrentValue('0')
  }

  function handleCalculate () {

    if (!pendingOperation || !pendingValue || currentValue === null) return

    const numberOne = parseFloat(pendingValue)
    const numberTwo = parseFloat(currentValue)

    let result

    switch (pendingOperation) {
      case '+':
        result = numberOne + numberTwo
        break;
      case '-':
        result = numberOne - numberTwo
        break;
      case '*':
        result = numberOne * numberTwo
        break;
      case '/':
        result = numberOne / numberTwo
        break;
      default:
        break;
    }

    setCompleteOperation(pendingValue + ' ' + pendingOperation + ' ' + currentValue + ' = ' + result)
    setCurrentValue(String(result))
    setPendingValue(null)
    setPendingOperation(null)
  }

  return (
    <div className={styles.buttons}>
        <button className={styles.button} onClick={()=> {handleClean()}}> AC </button>
        {keypadNuumbers.map((number) => (
        <button key={number} onClick={() => handleClick(number)}>{number}</button>
        ))}
        {operations.map((operation) => (
        <button key={operation} onClick={() => handleOperation(operation)} >{operation}</button>
        ))}
        <button className={styles.button} onClick={() => {handleCalculate()}}>=</button>
  </div>
  )
}

export default ButtonsOperator