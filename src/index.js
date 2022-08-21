import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const Main = () => (  
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contacts" component={AllContacts} />
      <Route path="/contacts/:id" component={Contacts} />
      <Route path="/contacts/new" component={NewContact} />
    </Switch>
  </main>
);


const App = () => (
  <div>
    <h1>Contact List</h1>
    <Link to="/contacts/new">Add Contact</Link> 
    <Link to="/contacts">View All Contacts</Link>
  </div>
);


const NewContact = () => (
  <div>
    <h1>New Contact</h1>
    <form>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email address" />
      <input type="text" placeholder="Phone Number" />
      <input type="url" placeholder="Image URL" />
      <button>
        <Link to="/contacts">Add Contact</Link>
      </button>
    </form>
  </div>
);

const AllContacts = () => (
  <div>
    <h1>All Contacts</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Profile Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        </tr>
      </tbody>
    </table>

      
    <ul>
      {data.contacts.map(contact => (
        <li key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>
            {contact.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Contacts = ({ match }) => {
  const id = match.params.id;
  const contact = contacts.find(contact => contact.id === id);
  return (
    <div>
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
      <h2>{contact.phone}</h2>
      <img src={contact.image} alt="this is what your contact looks like"/>
      <Link to="/contacts">Back</Link>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
