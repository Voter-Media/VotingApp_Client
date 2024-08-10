"use client";

import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("session_token");

      if (!token) {
        setLoading(false);
        return; // No token, user is not logged in
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/getUser`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (data.ok) {
          setUser(data.user);
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        setError(error || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [error]);

  const logout = () => {
    localStorage.removeItem("session_token");
    setUser(null);
  };

  return { user, loading, error, logout };
};

export default useAuth;
