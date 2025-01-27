import './App.css';
import './Currency';
import './Date';
import LandingPage from './LandingPage';
import FilmDetails from './FilmDetails';
import PickSeats from './PickSeats';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Login from './Authentication/Login';
import Logout from './Authentication/Logout';
import Account from './Authentication/Account';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';

console.log(1234.567.toCurrency());

function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a href="/account" className="mdl-layout__tab">My account</a>
            <a href="/logout" className="mdl-layout__tab">logout</a>
            <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
            <a href="/login" className="mdl-layout__tab">Login</a>
            <a href="/register" className="mdl-layout__tab">Register</a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
        <nav className="mdl-navigation">
          <a href="/account" className="mdl-layout__link">My account</a>
          <a href="/logout" className="mdl-layout__link">logout</a>
          <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
          <a href="/login" className="mdl-layout__link">Login</a>
          <a href="/register" className="mdl-layout__link">Register</a>
        </nav>
      </div>
      <main className="mdl-layout__content">
        <LandingPage />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
