"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CandidatePage = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<
    Record<string, string>
  >({});
  const { user }: { user: any } = useAuth();
  console.log("User from backend: ", user);
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
    {
      candidate_id: 678,
      firstname: "Jon",
      lastname: "Snow",
      phoneno: "098-765-4321",
      yearlevel: "Senior",
      faculty: "Arts",
      gender: "Male",
      role: "President",
      verified: true,
      voted: true,
    },
    {
      candidate_id: 690178,
      firstname: "Pawan",
      lastname: "Awasthi",
      phoneno: "098-765-4321",
      yearlevel: "Senior",
      faculty: "Arts",
      gender: "Male",
      role: "President",
      verified: true,
      voted: true,
    },
    {
      candidate_id: 67778,
      firstname: "Roshan",
      lastname: "Dahal",
      phoneno: "098-765-4321",
      yearlevel: "Senior",
      faculty: "Arts",
      gender: "Male",
      role: "Tresurer",
      verified: true,
      voted: true,
    },
    // Add more voters as needed
  ];

  const handleCheckboxChange = (position: string, candidateId: number) => {
    setSelectedCandidates((prev) => ({
      ...prev,
      [position]: candidateId.toString(), // Convert candidateId to string before assigning it
    }));
  };

  const handleSubmit = async () => {
    const voteData = Object.entries(selectedCandidates).map(
      ([role, candidateId]) => ({
        candidateId,
        voterId: user?.user_id, // Include voterId in each vote entry
      })
    );

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votes: voteData }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit votes");
      }

      const result = await response.json();
      console.log("Vote submission successful:", result);
    } catch (error) {
      console.error("Error submitting votes:", error);
    }
  };

  return (
    <div className="text-gray-800 py-16 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Candidate List</h1>
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
                <th className="py-3 px-4">Vote</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-100 transition-all ease-in-out duration-400 cursor-pointer"
                >
                  <td
                    className="py-3 px-4"
                    onClick={() =>
                      router.push(`/candidates/${candidate.candidate_id}`)
                    }
                  >
                    {candidate.firstname}
                  </td>
                  <td className="py-3 px-4">{candidate.lastname}</td>
                  <td className="py-3 px-4">{candidate.phoneno}</td>
                  <td className="py-3 px-4">{candidate.faculty}</td>
                  <td className="py-3 px-4">{candidate.gender}</td>
                  <td className="py-3 px-4">{candidate.role}</td>
                  <td className="py-3 px-4">
                    <Input
                      type="checkbox"
                      onChange={() =>
                        handleCheckboxChange(
                          candidate.role,
                          candidate.candidate_id
                        )
                      }
                      checked={
                        selectedCandidates[candidate.role] ===
                        candidate.candidate_id.toString()
                      }
                      className="w-5 h-5 rounded-xl"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center mt-10">
            <Button onClick={handleSubmit}>Submit Votes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
