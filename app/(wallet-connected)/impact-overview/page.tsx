"use client";

import { useState } from "react";
import BarGauge from "@/components/ui/bar-gauge";
import ESG from "@/components/ui/esg";
import { Button } from "@/components/ui/button"; // Assuming there's a Button component

export default function ImpactOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 flex flex-col w-full gap-4">
      <h1 className="text-2xl font-bold mb-4">Impact Overview</h1>
      <div className="flex flex-row justify-evenly gap-4 w-full">
        <div>
          <ESG eScore={80} sScore={70} gScore={90} />
        </div>
        <div>
          <BarGauge value={35} />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleButtonClick}
          className="bg-white border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 font-bold py-12 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            Submit Your Compliance Report
          </span>
        </Button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Upload Compliance Report</h2>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-between">
              <Button
                onClick={handleCloseModal}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Close
              </Button>
              <Button
                onClick={handleCloseModal}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Submit for Verification
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
