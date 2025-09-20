import React from 'react';

function ContactManagerDetails() {
  return (
    <>
        <h3 className="text-xl text-cyan-400 font-semibold mb-3">Project Overview</h3>
  <p className="text-gray-300 text-sm mb-6">
    A mobile app built with Java to manage personal or business contacts. It supports real-time CRUD operations using Firebase and integrates geolocation to map each contact’s address.
  </p>
  <h3 className="text-xl text-purple-400 font-semibold mb-3">Key Features</h3>
  <ul className="text-gray-300 text-sm space-y-2">
    {[
      'Add, edit, and delete contacts in real time',
      'Firebase integration for secure data storage and sync',
      'Geolocation support to map contact addresses',
      'User-friendly mobile interface',
      'Search and filter contacts easily'
    ].map((item, i) => (
      <li key={i} className="flex items-center">
        <span className="text-cyan-400 mr-2">▶</span>
        {item}
      </li>
    ))}
  </ul>
</>
  );
}

export default ContactManagerDetails;
