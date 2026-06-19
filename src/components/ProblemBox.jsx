import React from "react";
import { useProblemContext } from "../context";

function ProblemBox({ Problem }) {
  const { deleteProblem, markComplete } = useProblemContext();
  return (
    <div
      className={`relative flex flex-col p-5 rounded-xl border transition-all duration-200 ${
        Problem.completed
          ? "bg-[#1a1a1a] border-gray-800 opacity-60" // Dimmed out when completed
          : "bg-[#2a2a2a] border-gray-700 hover:border-gray-500 shadow-lg" // Pops out when active
      }`}
    >
      {/* Top Row: Checkbox, Title, and Delete Button */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 accent-green-600 cursor-pointer shrink-0"
            checked={Problem.completed}
            onChange={() => markComplete(Problem.id)}
          />
          <h3
            className={`text-lg font-semibold tracking-wide ${
              Problem.completed ? "line-through text-gray-500" : "text-gray-100"
            }`}
          >
            {Problem.title}
          </h3>
        </div>

        {/* Replaced the emoji with a sleek SVG Trash Icon */}
        <button
          className="text-gray-500 hover:text-red-500 hover:bg-red-500/10 p-1.5 rounded-md transition-colors shrink-0"
          onClick={() => deleteProblem(Problem.id)}
          title="Delete Problem"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>

      {/* Middle Row: Metadata Badges (Platform, Difficulty, Time) */}
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
        <span className="px-2.5 py-1 rounded-md bg-blue-900/30 text-blue-400 border border-blue-800/50">
          {Problem.platform}
        </span>
        <span className="px-2.5 py-1 rounded-md bg-orange-900/30 text-orange-400 border border-orange-800/50">
          {Problem.difficulty}
        </span>
        <span className="px-2.5 py-1 rounded-md bg-[#1e1e1e] text-gray-400 border border-gray-700">
          ⏱ {Problem.time}
        </span>
      </div>

      {/* Bottom Row: Lessons/Notes Section */}
      {Problem.lessons && (
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <p className="text-sm text-gray-400 line-clamp-3">
            <span className="font-semibold text-gray-300">Notes: </span> 
            {Problem.lessons}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProblemBox;
