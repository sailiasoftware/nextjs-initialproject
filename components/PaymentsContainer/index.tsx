"use client";

import React from "react";
import SinglePayment from "./SinglePayment";

interface Payment {
	totalAmount: number;
	sailiaFee: number;
	postCode: string;
}

interface PaymentsContainerProps {
	payments: Payment[];
}

const PaymentsContainer: React.FC<PaymentsContainerProps> = ({ payments }) => (
	<div className="flex flex-col w-full m-2">
		{payments.map((payment, idx) => (
			<SinglePayment
				key={idx}
				totalAmount={payment.totalAmount}
				sailiaFee={payment.sailiaFee}
				postCode={payment.postCode}
			/>
		))}
	</div>
);

export default PaymentsContainer;
