import { candidateType } from "@/types";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const ResultsPage = () => {
  const [candidates, setCandidates] = useState<candidateType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchVoteCount() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/vote-count`
        );
        if (response.ok) {
          const data = await response.json();
          setCandidates(data.data);
          console.log(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchVoteCount();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="animate-spin w-20 h-20" />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-800 py-16 min-h-[70vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Election Results
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr className="text-left bg-blue-600 text-white text-xs md:text-base ">
                <th className="py-3 px-2  border-r-2 border-gray-300 ">
                  First Name
                </th>
                <th className=" py-3 px-2  border-r-2 border-gray-300">
                  Last Name
                </th>
                <th className="py-3 px-2 border-r-2 border-gray-300">
                  Position
                </th>
                <th className="py-3 px-2">Total Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index} className="border-t text-xs md:text-base">
                  <td className="py-3 px-2 md:px-4 border-r-2 border-gray-300">
                    {candidate.firstName}
                  </td>
                  <td className="py-3 px-2 md:px-4 border-r-2 border-gray-300">
                    {candidate.lastName}
                  </td>
                  <td className="py-3 px-2 md:px-4 border-r-2 border-gray-300">
                    {candidate.position}
                  </td>
                  <td className="py-3 px-2 md:px-4 ">{candidate.vote_count}</td>
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
