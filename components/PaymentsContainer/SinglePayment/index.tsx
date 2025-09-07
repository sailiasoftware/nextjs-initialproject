"use client";

import React from "react";

interface SinglePaymentProps {
    totalAmount: number;
    sailiaFee: number;
    postCode: string;
}

const SinglePayment: React.FC<SinglePaymentProps> = ({
    totalAmount,
    sailiaFee,
    postCode,
}) => (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-lg p-6 mb-4 w-full max-w-xl">
        <div>
            <div className="text-gray-500 text-sm">Total Amount</div>
            <div className="text-xl font-semibold text-gray-900">£{totalAmount.toFixed(2)}</div>
        </div>
        <div>
            <div className="text-gray-500 text-sm">Sailia Fee</div>
            <div className="text-lg font-medium text-gray-800">£{sailiaFee.toFixed(2)}</div>
        </div>
        <div>
            <div className="text-gray-500 text-sm">Post Code</div>
            <div className="text-lg font-medium text-gray-800">{postCode}</div>
        </div>
    </div>
);

export default SinglePayment;