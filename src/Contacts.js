import {Link} from 'react-router-dom';
import data from './data';

const Contacts = ({ match }) => {
  const id = match.params.id;
  const contact = data.contacts.find(contact => contact.id === id);
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

export default Contacts;