import IceWeatherDownload from "./components/weather/iceWeatherPdfDownload";
import Subscribe from "./components/banners/subscribe"; // Import the Table component
import AssistanceTable from "./components/tables/assistanceTable";
import AssistedTable from "@/app/components/tables/assistedTable";

export default function Home() {
    const jsonArray = [
        { Port: "Plats 1", Current: "value2", Next: "value3" },
        { Port: "Plats 2 med långt namn", element2: "value5", element3: "value6" },
        { element1: "Plats 3", element2: "value8", element3: "value9" },
        { element1: "Plats 4", element2: "value8", element3: "value9" },
    ];
    const assistedShipsArray = [
        { Ship: "Scan Fjord (8PWR)", Lat: "N53°33'", Lon: "E14°36'" },
        { Ship: "HELME (5BBU6)", Lat: "N57°20'", Lon: "E7°31'" },
        { Ship: "WISDOM'S DAUGHTER (TRAX5) ", Lat: "N57°5'", Lon: "E12°9'" },
        { Ship: "Plats 4", Lat: "N57°5'", Lon: "E12°9'" },
    ];

    return (
        <>
            <div className="max-w-1440 m-auto grid grid-cols-2 gap-8 mt-10 mb-16">
                <AssistanceTable data={jsonArray} headerText="Assistance Restrictions"/>
                <IceWeatherDownload/>
            </div>
            <div className="w-full p-10" style={{
                background: 'linear-gradient(360deg, #D6EEFF 0%,' +
                    ' #EEF9FF 29.22%),linear-gradient(0deg, #009BE1, #009BE1)'
            }}>
                <Subscribe/>
            </div>
            <div className="max-w-1440 m-auto grid grid-cols-2 gap-8 mt-10 mb-16">
                <AssistedTable data={assistedShipsArray} headerText="Assisted Ships"/>
            </div>
        </>
    );
}
