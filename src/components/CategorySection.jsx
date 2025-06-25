import { blogsData } from "@/data/blogsData";
import { categoriesData } from "@/data/catgoriesData";
import { CiSearch } from "react-icons/ci";
const CategorySection = () => {

    const categories = [
        { name: "Health & Wellness", count: 8 },
        { name: "Preventive Care", count: 11 },
        { name: "Nutrition & Lifestyle", count: 18 },
        { name: "Senior & Geriatric Care", count: 11 },
        { name: "Medical Education & Tips", count: 7 },
        { name: "Surgery & Recovery", count: 7 },
    ];

    return (
        <div className="bg-[#f7f7f7] p-4 rounded-md space-y-6 w-full max-w-sm">
            {/* Search Bar */}
            <div className="bg-[#F2F2F2] p-4 rounded-md">
                <div className="relative bg-white rounded-full">
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none"
                    />
                    <button className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-blue-600 p-1.5 rounded-full">
                        <CiSearch className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Category List */}
            <div className="bg-[#F2F2F2] rounded-md p-4">
                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                <hr className="mb-2" />
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="p-2 flex justify-between text-sm text-gray-800 hover:underline cursor-pointer hover:bg-[#0e6efd] hover:text-white rounded-md"
                        >
                            <span>{category.name}</span>

                        </li>
                    ))}
                </ul>
            </div>

            <div className='space-y-6 bg-[#F2F2F2] p-4 rounded-md'>
                {
                    categoriesData.map((category, idx) => (
                        <div key={idx} className=' space-y-3'>
                            <div>
                                <img src={category.image} className='w-full' alt="" />
                            </div>
                            <div className=' space-y-3'>
                                <div className='flex gap-6'>
                                    
                                    <p className='text-gray-500'>{category.date}</p>
                                    <p className='text-gray-500'>{category.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategorySection;
