import React from 'react';

function BankOnboardingDetails() {
  return (
    <>
      <h3 className="text-xl text-cyan-400 font-semibold mb-3">Project Overview</h3>
      <p className="text-gray-300 text-sm mb-6">
This mobile application streamlines the process of opening a bank account by fully digitizing the onboarding experience. Users can complete the process without visiting a branch.      </p>
      <h3 className="text-xl text-purple-400 font-semibold mb-3">Key Features</h3>
      <ul className="text-gray-300 text-sm space-y-2">
        {[
          'OCR for ID and document recognition',
          'Liveness detection using ML Kit',
          'Step-by-step onboarding with validation',
          'Secure Flutter-based mobile UI',
          'Data privacy compliant',
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

export default BankOnboardingDetails;
