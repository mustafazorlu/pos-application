import React from "react";

const StatisticCard = ({ title, amount, img }) => {
    return (
        <div className="card-item bg-gray-800 p-8 rounded-lg">
            <div className="flex gap-x-4">
                <div className="rounded-full bg-white h-16 w-16 p-2">
                    <img src={img} alt="" />
                </div>
                <div className="text-white">
                    <p className="mb-2 text-lg font-medium text-gray-300">
                        {title}
                    </p>
                    <span className="text-xl font-medium text-gray-200">
                        {amount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StatisticCard;
