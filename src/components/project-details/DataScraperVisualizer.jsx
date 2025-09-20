import React from 'react';

function DataScraperVisualizer() {
  return (
    <>
      <h3 className="text-xl text-cyan-400 font-semibold mb-3">Project Overview</h3>
      <p className="text-gray-300 text-sm mb-6">
        A project for scraping and visualizing real estate data.<br />
        Developed a Python script to extract and store property data from an online real estate website into a database.<br />
        Data visualization and analysis performed using Power BI.
      </p>
      <h3 className="text-xl text-purple-400 font-semibold mb-3">Key Features</h3>
      <ul className="text-gray-300 text-sm space-y-2">
        {[
          'Automated data extraction with Python',
          'Stores property data in MySQL database',
          'Data visualization and analysis with Power BI'
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

export default DataScraperVisualizer;