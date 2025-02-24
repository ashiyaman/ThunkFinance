# ThunkFinance

 ThunkFinance is a powerful finance tracker app built with React, Redux, and Redux Thunk. It helps users manage their expenses, track income, and gain insights into their financial health.

## Features

- ✅ **Expense & Income Tracking** – Log transactions effortlessly.
- ✅ **Redux Thunk for Async State Management** – Efficient API handling.

## Tech Stack

- **Frontend**: React, Redux, Redux Thunk,
- **State Management**: Redux Thunk
- **Backend**: Node.js, Express, MongoDB 

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repo
git clone https://github.com/yourusername/thunkfinance.git
cd thunkfinance

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm start
```

## API Configuration

If you're using a backend, configure the API endpoint in `.env`:

```ini
REACT_APP_API_URL=http://localhost:5000
```

## Redux Thunk Usage Example

ThunkFinance uses Redux Thunk for handling async operations like fetching transactions. Example action:

```javascript
export const fetchTransactions = () => async (dispatch) => {
  dispatch({ type: 'TRANSACTIONS_LOADING' });
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions`);
    const data = await response.json();
    dispatch({ type: 'TRANSACTIONS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'TRANSACTIONS_ERROR', payload: error.message });
  }
};
```

## Contributing

1. Fork the project 🍴
2. Create your feature branch (`git checkout -b feature-new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-new-feature`)
5. Open a Pull Request 🚀

💰 **Start tracking your finances today with ThunkFinance!**


