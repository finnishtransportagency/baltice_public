"use client";

import Table from "../components/tables/table";
import { useShips, ShipRow } from "../services/ships";
import { formatLatitude, formatLongitude } from "../lib/util";

export default function ShipTable() {
    const { ships, isError, isLoading } = useShips();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {String(isError)}</div>;
    }

    const cols = [
        { 
            id: "name", 
            title: "Ship" ,
            resolver: (row: ShipRow) => {
                return (
                    `${row.name} (${row.callsign})`
                );
            }
        },
        { 
            id: "longitude", 
            title: "LON" ,
            resolver: (row: ShipRow) => {
                return (
                    formatLongitude(row.geoLocation.x)
                );
            }
        },
        { 
            id: "latitude",
            title: "LAT",
            resolver: (row: ShipRow) => {
                return (
                    formatLatitude(row.geoLocation.y)
                );
            }

        },
        { 
            id: "comment", 
            title: "Remarks",
        },
    ];

    if (!ships) {
        return <div>No ships found</div>;
    }

    return (
        <div className="m-auto grid gap-8 mt-10 mb-16">
            <Table columns={cols} rows={ships} headerText="Ships" />
        </div>
    );
}