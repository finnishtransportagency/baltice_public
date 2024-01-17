"use client";

import proj4 from "proj4"; 

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
        },
        { 
            id: "longitude", 
            title: "LON" ,
            resolver: (row: ShipRow) => {
                return (
                    formatLatitude(proj4("EPSG:3857", "EPSG:4326", [row.x, row.y])[0])
                );
            }
        },
        { 
            id: "latitude",
            title: "LAT",
            resolver: (row: ShipRow) => {
                return (
                    formatLongitude(proj4("EPSG:3857", "EPSG:4326", [row.x, row.y])[1])
                );
            }
        },
    ];

    if (!ships) {
        return <div>No ships found</div>;
    }

    return (
        <div className="max-w-1440 m-auto grid gap-8 mt-10 mb-16">
            <h1 className="p-4 text-baltice-blue font-medium text-3xl">Ships</h1>
            <Table borderColor="baltice-middle-blue" columns={cols} rows={ships} />
        </div>
    );
}