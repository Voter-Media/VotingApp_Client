"use client";

import { voterType } from "@/types";
import { useEffect, useState } from "react";

const VoterListPage = () => {
  const [voters, setVoters] = useState<voterType[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/voters", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setVoters(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 py-16 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Voter List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr className="aligh-left">
                <th className=" text-left  py-3 px-4 bg-blue-600 text-white align-left">
                  First Name
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Last Name
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Phone No
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Year Level
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Faculty
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Gender
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Role
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Verified
                </th>
                <th className="text-left py-3 px-4 bg-blue-600 text-white">
                  Voted
                </th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">{voter.firstName}</td>
                  <td className="py-3 px-4">{voter.lastName}</td>
                  <td className="py-3 px-4">{voter.phone}</td>
                  <td className="py-3 px-4">{voter.year_level}</td>
                  <td className="py-3 px-4">{voter.faculty}</td>
                  <td className="py-3 px-4">{voter.gender}</td>
                  <td className="py-3 px-4">{voter.role}</td>
                  <td className="py-3 px-4">{voter.verified ? "Yes" : "No"}</td>
                  <td className="py-3 px-4">{voter.voted ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VoterListPage;
