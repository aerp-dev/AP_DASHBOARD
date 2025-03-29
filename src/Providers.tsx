import 'react-phone-number-input/style.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Redux store
import reduxStore from 'store'
import { Provider as ReduxProvider } from 'react-redux'

// Router
// import Router from 'router/Router'

export default function Providers(): React.JSX.Element {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        {/* <Router /> */}

        <Toaster />
      </BrowserRouter>
    </ReduxProvider>
  )
}