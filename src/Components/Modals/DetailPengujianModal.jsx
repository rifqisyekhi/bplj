import React from "react";

export default function DetailPengujianModal({ action, content, title }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={action} // Handle clicks on the overlay
    >
      <div
        className="bg-white rounded-lg p-4 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Modal Body */}
        <div className="text-sm text-justify bg-blue-950 p-2 mt-4">
          <p className="text-white">{content}</p>
        </div>
      </div>
    </div>
  );
}
