import React from 'react';

function EmployeesManagementDetails() {
  return (
    <>
      <h3 className="text-xl text-cyan-400 font-semibold mb-3">Project Overview</h3>
      <p className="text-gray-300 text-sm mb-6">
    This employee management system streamlines HR processes by allowing administrators to efficiently add, update, and organize employee records. Built with Angular and Spring Boot, it ensures secure data handling, real-time updates, and an intuitive user experience for managing teams of any size.
      </p>
      <h3 className="text-xl text-purple-400 font-semibold mb-3">Key Features</h3>
      <ul className="text-gray-300 text-sm space-y-2">
        {[
          'Add, edit, and delete employee records in real time',
          'Angular frontend for responsive and interactive UI',
          'Spring Boot backend with RESTful API',
          'Secure data storage and validation',
          'Search, filter, and sort employees',
          'Real-time updates and notifications'
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

export default EmployeesManagementDetails;