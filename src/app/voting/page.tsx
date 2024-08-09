import React from 'react';

export default function VotingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Vote for Your Candidate</h1>
      <form className="flex flex-col items-center space-y-4">
        <label className="text-lg">
          Select Candidate:
          <select className="ml-4 p-2 border rounded">
            <option value="candidate1">Candidate 1</option>
            <option value="candidate2">Candidate 2</option>
            <option value="candidate3">Candidate 3</option>
          </select>
        </label>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit Vote
        </button>
      </form>
    </main>
  );
}

