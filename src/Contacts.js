import data from './data';
import {Link} from 'react-router-dom';

const Contacts = () => {
  data.contacts.map(contact => (
    <li key={contact.id}>
      <Link to={`/contacts/:${contact.id}`}>
        {contact.name}
      </Link>
    </li>
  ));
}

export default Contacts;
          

