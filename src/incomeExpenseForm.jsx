const IncomeExpenseForm = () => {
    return (
        <div>
            <h2>New Entry Page</h2>
            <form>
                <label for='description'>Description: </label><br/>
                <input type='text' /><br/><br/>
                <label for='amount'>Amount: </label><br/>
                <input type='number' /><br/><br/>
                <label for='entryType'>Entry Type: </label><br/>
                <select>
                    <option value='Income'>Income</option>
                    <option value='Expense'>Expense</option>
                </select><br/><br/>
                <input type='submit' value='Add Entry'/>
            </form>
        </div>
    )
}

export default IncomeExpenseForm