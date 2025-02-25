import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExpenses } from "../actions"

const Expense = () => {
    const dispatch = useDispatch()
    const expenses = useSelector(state => state.expenses)

    const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0)

    useEffect(() => {
        dispatch(fetchExpenses)
    }, [])

    return (
        <div>
            <h1>Expenses</h1>
            <ul>
                {expenses.map((expense, index) => 
                    <li key={index}> {expense.description}: {expense.amount}</li>
                )}
            </ul>
            <h2>Expenses Total: $ {totalExpenses}</h2>
        </div>
    )
}

export default Expense