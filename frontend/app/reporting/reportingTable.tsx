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
      <p className="text-xl pt-4 font-normal">{headerText}</p>
      <div className="border-2">
        <table className="table-auto w-full">
          <thead>
            <tr className={`text-left text-sm bg-${color}-300 bg-baltice-gray`}>
              {columns.map((column) => (
                <th className="p-3" key={column.id}>
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
                    className={`py-3 pl-2 text-sm w-1/3 ${
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
