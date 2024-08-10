import React from "react";
const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Project Description Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            We are the group of four passionate and driven students who have
            recently completed an exciting journey through the world of Database
            Management System(DBMS).We have created a fully functional Online
            Voting System (OVS) that is designed to be used in Free Student
            Union elections. Our system us secure n user-fridenly and efficient
            .We are proud of the work we've done and are excited to share it
            with our professor.
          </p>
        </div>

        {/* Students List Section */}
        <div className="bg-white p-8 shadow rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Team</h2>
          <ul className="space-y-4">
            <li>
              <div className="text-xl font-semibold">Roshan Dahal</div>
              <div className="text-gray-600">Frontend Developer</div>
            </li>
            <li>
              <div className="text-xl font-semibold">Pawan Awasthi</div>
              <div className="text-gray-600">
                Backend Developer+Project Manager
              </div>
            </li>
            <li>
              <div className="text-xl font-semibold">Kendra Pokhrel</div>
              <div className="text-gray-600">Database Administrator</div>
            </li>
            <li>
              <div className="text-xl font-semibold">Anish Neupane</div>
              <div className="text-gray-600">Databaser</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
