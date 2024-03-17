import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { store } from './redux/store';import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { BrowserRouter, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';
import Belajar from './components/Belajar/Belajar';
import Menu from './components/Home/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ErrorBoundary fallback={<p>Hmmm ada yang salah kata Huddin</p>}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='app' Component={App}>
              <Route index Component={Menu}/>
              <Route path='belajar/*' Component={Belajar}/>
            </Route>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </ErrorBoundary>
  // </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
