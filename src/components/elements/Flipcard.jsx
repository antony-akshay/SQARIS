import React from 'react';
import frontImage from '../../assets/image/team/image.png'; // Use your actual image path
import { FaBirthdayCake, FaHome, FaCalendarAlt } from 'react-icons/fa';

const FlipCard = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="group [perspective:1000px]">
                <div className="relative w-[300px] h-[440px] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT */}
                    <div className="absolute inset-0 bg-black rounded-2xl overflow-hidden [backface-visibility:hidden]">
                        <div className="h-[85%] relative">
                            <img
                                src={frontImage}
                                alt="Gokul Gopalan"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
                        </div>
                        <div className="h-[15%] flex items-center justify-center">
                            <h2 className="text-green-400 text-xl font-semibold font-[Poppins]">Gokul Gopalan</h2>
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 rounded-2xl bg-[#121212] text-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <h2 className="text-green-400 text-xl font-bold text-center mb-6">CEO Founder</h2>

                        {/* Date of Birth */}
                        <div className="mb-4">
                            <p className="text-sm mb-1 ml-2">Date of birth</p>
                            <div className="flex justify-between items-center px-4 py-2 bg-[#1c1c1c] rounded-xl border border-gray-700">
                                <span>15 March 2003</span>
                                <FaBirthdayCake className="text-green-400" />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <p className="text-sm mb-1 ml-2">Address</p>
                            <div className="flex justify-between items-center px-4 py-2 bg-[#1c1c1c] rounded-xl border border-gray-700">
                                <span>Kalpetta, Wayanad,<br />Kerala – 673121</span>
                                <FaHome className="text-green-400" />
                            </div>
                        </div>

                        {/* Joining Date */}
                        <div>
                            <p className="text-sm mb-1 ml-2">Joining date</p>
                            <div className="flex justify-between items-center px-4 py-2 bg-[#1c1c1c] rounded-xl border border-gray-700">
                                <span>10 June 2025</span>
                                <FaCalendarAlt className="text-green-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
