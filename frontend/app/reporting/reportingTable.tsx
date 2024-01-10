import React from "react";

type TableColumn = {
  title: string;
  id: string;
};

type TableRow = {
  [key: string]: string;
};

type TableProps = {
  columns: TableColumn[];
  data: TableRow[];
  headerText: string;
  color: string;
};
export default function ReportingTable({
  columns,
  data,
  headerText,
  color,
}: TableProps) {
  return (
    <div>
      <h1 className="text-baltice-blue font-medium text-3xl">Reporting</h1>
      <p className="text-baltice-blue pt-4 font-bold">{headerText}</p>
      <div className="border-2">
        <table className="table-auto w-full">
          <thead>
            <tr className={`text-left bg-${color}-300`}>
              {columns.map((column) => (
                <th className="p-4" key={column.id}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${rowIndex === 0 ? "" : ""} border-t border-b py-2`}
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={`py-4 pl-2 ${
                      column.id === "title" ? "font-bold" : ""
                    }`}
                  >
                    {column.id !== "otherTitles" ? row[column.id] : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
