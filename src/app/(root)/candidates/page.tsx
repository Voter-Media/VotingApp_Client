"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import useVoter from "@/hooks/useVoter";
import { Loader, Loader2, LoaderPinwheel } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CandidatePage = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<
    Record<string, string>
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [cands, setCands] = useState<any[]>([]);
  const { user }: { user: any } = useAuth();
  const { voter }: { voter: any } = useVoter();
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:5000/api/candidates", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCands(data.data);
        console.log("Candidate Data", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCheckboxChange = (position: string, candidateId: string) => {
    setSelectedCandidates((prev) => ({
      ...prev,
      [position]: candidateId.toString(), // Convert candidateId to string before assigning it
    }));
  };

  const handleSubmit = async () => {
    const voteData = Object.entries(selectedCandidates).map(
      ([role, candidateId]) => ({
        candidateId,
        // voterId: user?.user_id as string, // Include voterId in each vote entry
      })
    );

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/vote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ voteData, voter_id: user?.user_id }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit votes");
      }

      router.push("/results");
    } catch (error) {
      console.error("Error submitting votes:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="animate-spin w-20 h-20" />
      </div>
    );
  }

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
                <th className="py-3 px-4">Faculty</th>
                <th className="py-3 px-4">Gender</th>
                <th className="py-3 px-4">Position</th>
                {user?.role === "voter" && !voter?.voted ? (
                  <th className="py-3 px-4">Vote</th>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {cands.map((candidate, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-100 transition-all ease-in-out duration-400"
                >
                  <td
                    className="py-3 px-4 cursor-pointer"
                    onClick={() =>
                      router.push(`/candidates/${candidate.user_id}`)
                    }
                  >
                    {candidate.firstName}
                  </td>
                  <td className="py-3 px-4">{candidate.lastName}</td>
                  <td className="py-3 px-4">{candidate.faculty}</td>
                  <td className="py-3 px-4">{candidate.gender}</td>
                  <td className="py-3 px-4">{candidate.position}</td>
                  {user?.role === "voter" && !voter?.voted ? (
                    <td className="py-3 px-4">
                      <Input
                        type="checkbox"
                        onChange={() =>
                          handleCheckboxChange(
                            candidate.position,
                            candidate.candidate_id.toString()
                          )
                        }
                        checked={
                          selectedCandidates[candidate.position] ===
                          candidate.candidate_id.toString()
                        }
                        className="w-5 h-5 rounded-xl"
                      />
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
          {user?.role === "voter" && !voter?.voted ? (
            <div className="flex items-center justify-center mt-10">
              <Button onClick={handleSubmit}>Submit Votes</Button>
            </div>
          ) : null}
          {user?.role === "candidate" ? (
            <div className="flex items-center justify-center mt-10">
              <Link
                href="/signin?type=register"
                className={buttonVariants({ variant: "link" })}
              >
                To Vote Register as a Voter &rarr;
              </Link>
            </div>
          ) : null}
          {voter?.voted ? (
            <div className="flex flex-col items-center justify-center mt-10 gap-8">
              <p>
                You have already voted. You can&apos;t vote twice ! Thank you
              </p>
              <Link
                href="/results"
                className={buttonVariants({ variant: "link" })}
              >
                View Results
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
