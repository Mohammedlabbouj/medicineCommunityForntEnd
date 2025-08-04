import React from "react";
import type { CodeVerificationProps } from "../types/createAccountTypes";

export default function CodeVerification({
  handleVerification,
}: CodeVerificationProps) {
  const [code, setCode] = React.useState(Array(6).fill(""));
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...code];

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }
    setCode(newCode);
  };

  const handelSubmit = async () => {
    const verificationCode = code.join("");
    console.log("Verification Code:", verificationCode);
    if (verificationCode.length !== 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }
    const email = localStorage.getItem("email");

    const verification = await fetch(
      "http://localhost:3000/api/v1/auth/verify-otp",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, otp: verificationCode }),
      }
    );
    if (!verification.ok) {
      const errorData = await verification.json();
      console.error("Verification failed:", errorData);
      setError(errorData.error);
      setCode(Array(6).fill(""));
      return;
    }
    const response = await verification.json();
    console.log("Verification successful:", response);
    handleVerification();
    alert("Verification successful!...");
  };

  return (
    <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 tracking-tight font-sans">
        Email Verification
      </h1>
      <p className="text-gray-600 text-lg mb-12 font-medium">
        Please enter the 6-digit code sent to your email address.
      </p>
      <div className="flex justify-center space-x-4 mb-12">
        {Array(6)
          .fill(null)
          .map((_, idx) => (
            <input
              ref={(el) => (inputRefs.current[idx] = el)}
              key={idx}
              type="text"
              maxLength={1}
              value={code[idx]}
              onChange={(e) =>
                handleCodeChange(idx, e.target.value.replace(/\D/, ""))
              }
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              className="w-16 h-16 text-center text-3xl font-bold tracking-widest
              border border-gray-300 rounded-lg bg-gray-100
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300
              transition-all duration-150 shadow-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          ))}
      </div>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <button
        onClick={handelSubmit}
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl
            py-4 px-12 rounded-lg shadow-md transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
      >
        Verify Code
      </button>
    </div>
  );
}
