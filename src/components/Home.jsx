import React , {useState} from 'react'
import { useProblemContext } from '../context'

function Home() {

    /*Problem Object Structure:
    [
        {
            id : crypto.randomUUID(),
            title : "Two Sum",
            platform : "Leetcode",
            category : "Array",
            // subCategory : ["Array" , "HashTable" , "Iteration"],
            time : "00:00:00",
            difficulty : "Easy",
            lessons : "Learned Using HashMap",
            completed : false,
        }
    ]    
    */
    
    const {addProblem} = useProblemContext();
    // const [problemTitle , setProblemTitle] = useState("");
    // const [platform , setPlatform] = useState("");
    // const [category , setCategory] = useState("");
    // const [time , setTime] = useState("");
    // const [difficulty , setDifficulty] = useState("");
    // const [learning , setLearning] = useState("");

    const [formData , setFromData] = useState({
        title : "" , 
        platform : "" ,
        category : "" , 
        time : "" ,
        difficulty : "" ,
        lessons : ""
    })

    const handleCheck = (e) => {
        e.preventDefault();
        setFromData({...formData , [e.target.name] : e.target.value})
    }


    const add = (e) => {
        e.preventDefault();
        if(!formData['title'] || !formData["platform"] || !formData['category'] || !formData['time'] || !formData['difficulty'] || !formData['lessons']){
            alert("Please fill out all fields before adding a problem.");
            return;
        }
        
        addProblem({...formData , id : crypto.randomUUID() , completed : false});

        setFromData({
            title : "" , 
            platform : "" ,
            category : "" , 
            time : "" ,
            difficulty : "" ,
            lessons : ""
        });

    };

    return (
        <>
            <main className="w-full max-w-3xl mx-auto px-4 py-12 min-h-[calc(100vh-160px)] flex flex-col justify-center">
            
            {/* Header Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight mb-3">
                    Log a New Problem
                </h1>
                <p className="text-gray-400 text-lg">
                    Solve. Debug. <span className="text-green-500 font-semibold">Learn.</span>
                </p>
            </div>

            {/* Form Card */}
            <form 
                onSubmit={add} 
                className="bg-[#1e1e1e] p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col gap-5"
            >
                {/* Title - Full Width */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Problem Title</label>
                    <input 
                        type="text" 
                        placeholder="e.g., Koko Eating Bananas"
                        name="title"
                        value={formData.title}
                        onChange={handleCheck}
                        className="w-full bg-[#2a2a2a] border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent block p-3 outline-none transition-all placeholder-gray-600"
                    />
                </div>

                {/* Row 1: Platform & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Platform</label>
                        <input 
                            type="text" 
                            placeholder="e.g., LeetCode, Codeforces"
                            name="platform"
                            value={formData.platform}
                            onChange={handleCheck}
                            className="w-full bg-[#2a2a2a] border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent block p-3 outline-none transition-all placeholder-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Category (Pattern)</label>
                        <input 
                            type="text" 
                            placeholder="e.g., Binary Search"
                            name="category"
                            value={formData.category}
                            onChange={handleCheck}
                            className="w-full bg-[#2a2a2a] border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent block p-3 outline-none transition-all placeholder-gray-600"
                        />
                    </div>
                </div>

                {/* Row 2: Difficulty & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Difficulty</label>
                        <input 
                            type="text" 
                            placeholder="e.g., Medium"
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleCheck}
                            className="w-full bg-[#2a2a2a] border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent block p-3 outline-none transition-all placeholder-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Time Taken</label>
                        <input 
                            type="text" 
                            placeholder="e.g., 45 mins"
                            name="time"
                            value={formData.time}
                            onChange={handleCheck}
                            className="w-full bg-[#2a2a2a] border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent block p-3 outline-none transition-all placeholder-gray-600"
                        />
                    </div>
                </div>

                {/* Lessons / Notes - Full Width Textarea */}
                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Lessons / Debugging Notes</label>
                    <textarea 
                        placeholder="What tripped you up? How did you optimize the time complexity?"
                        name="lessons"
                        value={formData.lessons}
                        onChange={handleCheck}
                        rows="4"
                        className="w-full bg-[#2a2a2a] border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent block p-3 outline-none transition-all placeholder-gray-600 resize-y"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-green-600/30 transition-all duration-200 active:scale-[0.98]"
                >
                    Add Problem to Tracker
                </button>
            </form>
        </main>
        </>
    )
}

export default Home