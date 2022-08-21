import {Link} from 'react-router-dom';
// import React, { useState } from 'react';

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

export default NewContact;