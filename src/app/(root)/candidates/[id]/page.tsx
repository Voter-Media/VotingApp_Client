"use client";

import Container from "@/components/Container";
import { candidateType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const CandidateDetailsPage = ({ params }: { params: { id: string } }) => {
  const [candidate, setCandidate] = useState<candidateType>({
    candidate_id: 0,
    user_id: "",
    firstName: "",
    lastName: "",
    year_level: "",
    faculty: "",
    gender: "",
    position: "",
    description: "",
    party: "",
    vote_count: 0,
    isWinner: false,
  });

  useEffect(() => {
    async function fetchCandidateDetails() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/candidates`
        );
        if (response.ok) {
          const data = await response.json();
          const filteredData = data.data.filter(
            (candidate: candidateType) => params.id === candidate.user_id
          );
          setCandidate(filteredData[0]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchCandidateDetails();
  }, [params.id]);

  return (
    <Container className="max-w-[580px] my-8 gap-4">
      <h2 className="text-3xl font-semibold">
        {candidate.firstName} {candidate.lastName}
      </h2>
      <Image
        src={"/landing.jpeg"}
        quality={100}
        width={500}
        height={500}
        alt="Candidate Image"
        className="w-full rounded-xl"
      />
      <p>{candidate.description}</p>
      <p>Faculty: {candidate.faculty}</p>
      <p>Year: {candidate.year_level}</p>
      <p>Party: {candidate.party}</p>
    </Container>
  );
};

export default CandidateDetailsPage;
