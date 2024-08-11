"use client";

import { useState, useEffect } from "react";
import useAuth from "./useAuth";

const useVoter = () => {
  const [voter, setVoter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user }: { user: any } = useAuth();

  useEffect(() => {
    const getchVoter = async () => {
      const token = localStorage.getItem("session_token");

      if (!token) {
        setLoading(false);
        return; // No token, user is not logged in
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/voters/${user?.user_id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (data.ok) {
          setVoter(data.voter);
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        setError(error || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    getchVoter();
  }, [error, user?.user_id]);

  return { voter, loading, error };
};

export default useVoter;
