import React from "react";
import { useState } from "react";
import type { RoleProps } from "../types/createAccountTypes";
export default function Role({ onContinue }: RoleProps) {
  const [role, setRole] = useState<"doctor" | "patient" | "">("");
  const [specialization, setSpecialization] = useState("");
  const [jobDate, setJobDate] = useState("");
  return (
    <div className="relative flex flex-col items-center w-full max-w-lg">
      <div className="flex space-x-8 mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="patient"
            checked={role === "patient"}
            onChange={() => setRole("patient")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-lg font-semibold text-gray-700">Patient</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="doctor"
            checked={role === "doctor"}
            onChange={() => setRole("doctor")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="text-lg font-semibold text-gray-700">Doctor</span>
        </label>
      </div>
      {/* White box */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full text-center min-h-[220px] flex flex-col items-center">
        {role === "" && (
          <p className="text-gray-600 text-lg font-medium">
            Please select if you are a doctor or a patient.
          </p>
        )}
        {role === "patient" && (
          <>
            <p className="text-gray-700 text-lg font-semibold mb-8">
              There is no more information that you can provide, thank you.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
              onClick={onContinue}
            >
              Continue to the main page
            </button>
          </>
        )}
        {role === "doctor" && (
          <>
            <div className="flex flex-col md:flex-row md:space-x-6 w-full justify-center mb-8">
              <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/2">
                <label className="text-left text-gray-700 font-medium mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="e.g. Cardiologist"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-left text-gray-700 font-medium mb-2">
                  Date of Job
                </label>
                <input
                  type="date"
                  value={jobDate}
                  onChange={(e) => setJobDate(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
              onClick={onContinue}
              disabled={!specialization || !jobDate}
            >
              Continue to the main page
            </button>
          </>
        )}
      </div>
    </div>
  );
}
