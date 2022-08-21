import {Link} from 'react-router-dom';
import Home from './Home';
import AllContacts from './AllContacts';
import NewContact from './NewContact';




const App = () => (
  <div>
    <h1>Contact List</h1>
    
    <Link to="/contacts/new">Add Contact</Link> 
    <Link to="/contacts">View All Contacts</Link>
  </div>
);

export default App;