"use client";

import { useEffect, useState } from "react";
import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const [textColorClass, setTextColorClass] = useState<string>("text-black"); // Initial text color class

  useEffect(() => {
    const intervalId = setInterval(() => {
      const colors = [
        "text-red-500",
        "text-blue-500",
        "text-green-500",
        "text-yellow-500",
      ]; // Add more Tailwind CSS color classes as needed
      const randomColorClass =
        colors[Math.floor(Math.random() * colors.length)];
      setTextColorClass(randomColorClass);
    }, 500);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="pt-20 p-6 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square cp:aspect-[2.4/1] overflow-hidden bg-cover hidden cp:flex"
      />
      <div className="pt-10 h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div
          className={`font-bold text-6xl flex cp:text-xs cp:hidden ${textColorClass}`}
        >
          {data.label}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
