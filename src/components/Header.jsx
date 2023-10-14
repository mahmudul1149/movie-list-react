import React from "react";

export default function Header() {
  return (
    <div className="bg-[#262626]">
      <header className="h-[60px] w-[800px] mx-auto flex justify-end">
        <div className="text-right">
          <div className="pt-3">
            <a
              href="/signin"
              className="bg-[#3e71e9] text-white py-1 px-6 rounded"
            >
              Signin
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
