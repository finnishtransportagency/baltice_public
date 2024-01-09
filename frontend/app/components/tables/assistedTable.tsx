import React from 'react';
import Image from "next/image";
import Link from "next/link";

import ship2 from "@/public/svg/ship2.svg";


interface TableProps {
    data: unknown[];
    headerText: string;
}

const AssistedTable: React.FC<TableProps> = ({ data, headerText }) => {
    return (
        <>
        <div>
            <h1 className="p-4 text-baltice-blue font-medium text-3xl">{headerText}</h1>

            <div className="border-2 border-baltice-middle-blue rounded-md">
                <div className="bg-baltice-middle-blue pt-6 pb-1 font-bold text-sm">
                    <Link href="/"  className="bg-white p-2 ml-4">Current</Link>
                    <Link href="/" className="bg-white bg-opacity-50 p-2 ml-4">Planned</Link>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-left text-gray-400">
                            {/* Render table headers */}
                            {Object.keys(data[0]).map((key) => (
                                <th className="p-4 text-gray-500 font-medium" key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render table rows */}
                        {data.map((item, index) => (
                            <tr key={index} className="border-t border-b py-2">
                                {Object.values(item).map((value, index) => (
                                    <td className={`py-6 pl-4 ${index === 0 ? 'text-baltice-blue' : ''}`}
                                    key={index}>
                                        {index === 0 ? <Image className="inline mr-2" src={ship2} alt="" /> : ''}
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AssistedTable;
