import DashboardMap from "@/components/DashboardMap";
import PaymentsContainer from "@/components/PaymentsContainer";
import Image from "next/image";

export default function Home() {

  const mockPayments = [
    { totalAmount: 150.0, sailiaFee: 5.0, postCode: "SW1A 1AA" },
          { totalAmount: 200.0, sailiaFee: 7.5, postCode: "EC1A 1BB" },
          { totalAmount: 75.5, sailiaFee: 3.0, postCode: "W1A 0AX" },
          { totalAmount: 300.0, sailiaFee: 10.0, postCode: "N1C 4AG" },
          { totalAmount: 50.0, sailiaFee: 2.5, postCode: "E1 6AN" },
          { totalAmount: 120.0, sailiaFee: 4.0, postCode: "SE1 7PB" },
          { totalAmount: 180.0, sailiaFee: 6.0, postCode: "NW1 5DB" },
          { totalAmount: 220.0, sailiaFee: 8.0, postCode: "SW19 3RQ" },
          { totalAmount: 90.0, sailiaFee: 3.5, postCode: "HA1 1AA" },
          { totalAmount: 160.0, sailiaFee: 5.5, postCode: "KT1 1AA" },
          { totalAmount: 130.0, sailiaFee: 4.5, postCode: "CR0 1AA" },
          { totalAmount: 110.0, sailiaFee: 4.0, postCode: "DA1 1AA" },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-2/3 flex items-center justify-center bg-gray-100">
        <DashboardMap />
      </div>
      <div className="w-1/3 overflow-y-auto flex justify-center bg-white">
        <PaymentsContainer payments={mockPayments} />
      </div>
    </div>
  );
}
