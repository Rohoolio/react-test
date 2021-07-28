import './App.css';
import { useRoutes, A } from 'hookrouter';
import routes from './router';
import { Navbar } from './components/navbar/index';

export default function App() {
  const routeResult = useRoutes(routes)

  return (
    <div className="App">
      <Navbar />
        <A href="/user">Users Page</A> <br />
        <A href="/about">About Page</A> <br />
        <A href="/contact">Contacts Page</A>
      {routeResult}
    </div>
  );
}
