# Airport Currency Exchange

![An image of the application Home page.](./screenshots/ACX-Home.png?raw=true "Home Page")

![An image of the application Currency Exchange Modal.](./screenshots/ACX-Exchange-Modal.png?raw=true "Currency Exchange Modal")

### About Airport Currency Exchange
About Airport Currency Exchange is an application for managing a currency exchange office. It provides an interface to buy/sell foreign currencies, and allows the administrator to configure the following settings:

- **Refresh Rate** - The rate (in seconds) at which the currency data should be updated.
- **Buy/Sell Rate Margin** - The margin applied to the listed buy/sell rates of the exchange.
- **Commission Percentage** - The commission percentage earned on each transaction.
- **Surcharge** - The additional surcharge on each transaction.
- **Minimum Commission** - The minimum commission that the agent earns on each transaction.

The **`Buy Rate`** listed on the Home page is the rate at which the exchange can buy a given currency from the client. The **`Sell Rate`** listed on the Home page is the rate at which clients can buy a given currency from the exchange office in exchange for local currency.

### Development

To bootstrap the application setup, I used [Create React App](https://github.com/facebook/create-react-app). State management was done using the React Hooks [useState()](https://reactjs.org/docs/hooks-state.html) API for local state changes and [Redux](https://github.com/reduxjs/redux) for global application state. The project took me approximately 20-25 hours to complete.

### Future Improvements

The following improvements are features and fixes that I would implement given more development time:

- **Validation** - The application has minimal validation, requiring only that numerical inputs are numerical. Inputs should be required to be non-negative, and should be validated through form submission.
- **Refactoring** - As I implemented the last remaining features, some components (such as `CurrencyTransactionModal`) became quite bloated. Given more time, these components could be refactored to follow SRP and be more composable.
- **Testing** - While working to complete the code challenge this week, writing consistent unit tests fell by the wayside. I normally write tests progressively as I work through problems, but felt my time was better spent implementing as many features as possible.
- **Redux-Saga** - Currently, the application uses the Hooks useEffect API to intermittently poll for currency data. Given that I was most unfamiliar with Redux-Saga, I didn't leverage it to manage asynchronous data fetching, though I'd like to do so in the future.

### Final Comments

Thank you for the opportunity to interview with SelfDecode! I've really enjoyed the application process, and look forward to hearing back from the team.
