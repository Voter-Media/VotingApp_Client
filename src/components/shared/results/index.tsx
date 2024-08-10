import React from 'react';

const ResultsPage= () => {
  const electedCandidates = [
    {
      name: 'Alice Johnson',
      position: 'President',
      faculty: 'BEL',
    },
    {
      name: 'Bob Smith',
      position: 'Vice President',
      faculty: 'BCE',
    },
    {
      name: 'Charlie Brown',
      position: 'Secretary',
      faculty: 'BME',
    },
    {
      name: 'Diana Prince',
      position: 'Treasurer',
      faculty: 'BCT',
    },
    {
      name:'Roshan Dahal',
      position:'Member',
      faculty:'BEI',
    }
    // Add more candidates as needed
  ];

  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Election Results</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr className='text-left bg-blue-600 text-white text-xs md:text-base '>
                <th className="py-3 px-2  border-r-2 border-gray-300 ">Name</th>
                <th className=" py-3 px-2  border-r-2 border-gray-300">Position</th>
                <th className="py-3 px-2  ">Faculty</th>
              </tr>
            </thead>
            <tbody>
              {electedCandidates.map((candidate, index) => (
                <tr key={index} className="border-t text-xs md:text-base">
                  <td className="py-3 px-2 md:px-4 border-r-2 border-gray-300 ">{candidate.name}</td>
                  <td className="py-3 px-2 md:px-4 border-r-2 border-gray-300">{candidate.position}</td>
                  <td className="py-3 px-2 md:px-4 ">{candidate.faculty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;