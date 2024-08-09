"use client";
import { useRouter } from "next/navigation";

const CandidatePage = () => {
  const candidateId: number = 12341234;
  const router = useRouter();
  const candidates = [
    {
      candidate_id: 123,
      firstname: "John",
      lastname: "Doe",
      phoneno: "123-456-7890",
      yearlevel: "Sophomore",
      faculty: "Engineering",
      gender: "Male",
      role: "Student",
      verified: true,
      voted: false,
    },
    {
      candidate_id: 456,
      firstname: "Jane",
      lastname: "Smith",
      phoneno: "098-765-4321",
      yearlevel: "Senior",
      faculty: "Arts",
      gender: "Female",
      role: "Student",
      verified: true,
      voted: true,
    },
    // Add more voters as needed
  ];
  return (
    <div className="text-gray-800 py-16 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Voter List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr className="align-left text-left bg-blue-600 text-white">
                <th className="py-3 px-4">First Name</th>
                <th className="py-3 px-4">Last Name</th>
                <th className="py-3 px-4">Phone No</th>
                <th className="py-3 px-4">Faculty</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Position</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr
                  onClick={() =>
                    router.push(`/candidates/${candidate.candidate_id}`)
                  }
                  key={index}
                  className="border-t hover:bg-gray-100 transition-all ease-in-out duration-400 cursor-pointer"
                >
                  <td className="py-3 px-4">{candidate.firstname}</td>
                  <td className="py-3 px-4">{candidate.lastname}</td>
                  <td className="py-3 px-4">{candidate.phoneno}</td>
                  <td className="py-3 px-4">{candidate.faculty}</td>
                  <td className="py-3 px-4">{candidate.gender}</td>
                  <td className="py-3 px-4">{candidate.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
