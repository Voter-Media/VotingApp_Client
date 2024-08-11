"use client";

import ResultsPage from "@/components/shared/results";
import { useEffect } from "react";
const Results = () => {
  useEffect(() => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/votes`).then(
        (response) => {}
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <ResultsPage />;
};
export default Results;
