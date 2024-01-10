import React from 'react';
import Image from "next/image";

import ship1 from "@/public/svg/ship1.svg";

export type Resolver<RowType extends Row> = (value: RowType) => string;

export type Column<RowType extends Row> = {
    title: string,
    id: string,
    resolver?: Resolver<RowType>,
};

export type Row = { [id: string]: (string | number | string[] | number[] | Row) };

type TableProps<RowType extends Row> = {
    columns: Column<RowType>[];
    rows: RowType[];
    borderColor: string;
}

export default function Table<RowType extends Row = Row>({ columns, rows, borderColor }: TableProps<RowType>) {
    const maxRows = 10;

    function getRowValues(row: RowType): string[] {
        return columns.map(({ id, resolver }) => {
            if (resolver) {
                return resolver(row);
            }
            return String(row[id]);
        });
    }

    return (
        <div>
            <div className={`border-2 border-${borderColor} rounded-md`}>
                <div className="bg-baltice-middle-blue pt-6 pb-1 font-bold text-sm">
                    <span className="bg-white p-2 ml-4">All</span>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-left text-gray-400">
                            {/* Render table headers */}
                            {columns.map(({ title, id }) => (
                                <th className="p-4 texxt-gray-500 font-medium" key={id}>{title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render table rows */}
                        {rows.toSpliced(maxRows).map((row, index) => (
                            <tr key={index} className="border-t border-b py-2">
                                {getRowValues(row).map((value, index) => (
                                    <td className={`py-6 pl-4 ${index === 0 ? 'text-baltice-blue' : ''}`}
                                        key={index}>
                                        {index === 0 ? <Image className="inline mr-2" src={ship1} alt="" /> : ''}
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
