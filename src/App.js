import {Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Contacts from './Contacts';

const App = () => {
  const [contacts, setContacts] = useState([
      
    {
      id: 42226184,
      name: "Isaac Newton",
      image_url: "https://en.wikipedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg",
      email: "lincolnshire@example.com",
      phone_number: "15555555555"
    },

    {
      id: 96436090,
      name: "Euclid of Megara",
      image_url: "https://en.wikipedia.org/wiki/File:Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg",
      email: "elements@example.com",
      phone_number: "15555555555"
    },

    {
      id: 85907747,
      name: "Johannes Kepler",
      image_url: "https://en.wikipedia.org/wiki/File:JKepler.jpg",
      email: "celestial@example.com",
      phone_number: "15555555555"
        
    }
  ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact];
    });
  } 

return (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts" render={() => 
        <Contacts addContact={addContact} contacts={contacts} />
      } />
    </Switch>
  </div>
  ) 
}

export default App;