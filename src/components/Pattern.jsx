import React, { useEffect, useMemo, useState } from 'react'
import { useProblemContext } from '../context'
import ProblemBox from './ProblemBox';
import { useSearchParams } from 'react-router-dom';

function Pattern() {

    // const [categorySelected , setCategorySelected] = useState("");
    const [searchParams , setSearchParams] = useSearchParams();

    const categorySelected = searchParams.get("categories") || "";

    const {problems} = useProblemContext(); 

    const probCategories = useMemo(() => {
        return [...new Set(problems.map((Prob) => (Prob.category)))];
    },[problems]);

    console.log("probCategories" , probCategories);
    
    // const categories = problems.map((Prob) => (Prob.category))
    console.log("problems" , problems);

    useEffect(() => {
        if(categorySelected && !probCategories.includes(categorySelected)){
            searchParams.delete("categories");
            setSearchParams(searchParams);
        }
    },[probCategories , categorySelected , setSearchParams])

    return (
        <>
        <main className="w-full max-w-5xl mx-auto px-4 py-8 min-h-screen">
            {/* Header & Filter Section */}
            <header className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="max-w-md">
                    <label 
                        htmlFor="Categories" 
                        className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                        Filter by Pattern
                    </label>
                    <select 
                        name="Categories"
                        onChange={(e) => setSearchParams({ categories: e.target.value })}
                        value={categorySelected}
                        className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-3 outline-none transition-colors cursor-pointer bg-gray-50"
                    >
                        <option value="" disabled hidden>-- Select a Category --</option>
                        {
                            probCategories.map((category, index) => (
                                <option value={`${category}`} key={index}>
                                    {category}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </header>

            {/* Problem List Section */}
            <section>
                <div className="mb-6 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                        {categorySelected ? `Reviewing: ${categorySelected}` : "Select a pattern to start reviewing"}
                    </h2>
                    {categorySelected && (
                        <p className="text-gray-500 text-sm mt-1">
                            Showing all problems tagged under this pattern.
                        </p>
                    )}
                </div>

                {/* Grid Layout for Problem Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        problems
                        .filter((Prob) => (Prob.category === categorySelected))
                        .map((Prob) => (
                            <ProblemBox 
                                key={Prob.id}
                                Problem={Prob}
                            />
                        ))
                    }
                </div>
                
                {/* Empty State Fallback (If a category has no problems, though our logic prevents this normally) */}
                {categorySelected && problems.filter(p => p.category === categorySelected).length === 0 && (
                    <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        No problems found for this category.
                    </div>
                )}
            </section>
        </main>
        </>
    )
}

export default Pattern