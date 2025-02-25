import { useState } from "react"
import { useDispatch } from "react-redux"
import { addEntry, addExpenses } from "../actions"

const IncomeExpenseForm = () => {
    const dispatch = useDispatch()
    const [entryType, setEntryType] = useState("income")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState()

    const handleAddEntry = (e) => {
        e.preventDefault()
        if(entryType === "income"){
            dispatch(addEntry({
                description, 
                amount: parseInt(amount), 
                entryType
            }))
        }
        else{
            dispatch(addExpenses({
                description, 
                amount: parseInt(amount), 
                entryType
            }))
        }
        setDescription("")
        setAmount()
        setEntryType("")
    }

    return (
        <div>
            <h2>New Entry Page</h2>
            <form onSubmit={(e) => handleAddEntry(e)}>
                <label htmlFor='description'>Description: </label><br/>
                <input type='text' onChange={(e) => setDescription(e.target.value)}/><br/><br/>
                <label htmlFor='amount'>Amount: </label><br/>
                <input type='number' onChange={(e) => setAmount(e.target.value)}/><br/><br/>
                <label htmlFor='entryType'>Entry Type: </label><br/>
                <select 
                    value={entryType}
                    onChange={(e) => setEntryType(e.target.value)}>
                    <option value='Income'>Income</option>
                    <option value='Expense'>Expense</option>
                </select><br/><br/>
                <input type='submit' value='Add Entry'/>
            </form>
        </div>
    )
}

export default IncomeExpenseForm