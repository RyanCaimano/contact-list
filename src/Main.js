import {Switch, Route} from 'react-router-dom';

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

export default Main;