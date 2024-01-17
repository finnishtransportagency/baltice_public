import TopSection from "../components/topSection/topSection";
import ReportingTable from "./reportingTable";
import Container from "../components/container/container";

export default function Reporting() {
  const columns = [
    { title: "Title", id: "title" },
    { title: "Finland", id: "finland" },
    { title: "Sweden", id: "sweden" },
  ];

  const data = [
    {
      title: "Reporting line",
      finland: "When passing latitude 60° 00’N*",
      sweden: "When passing latitude 60° 00’N*",
    },
    {
      title: "Call signal",
      finland: "ICE INFO",
      sweden: "ICE INFO",
    },
    {
      title: "Channel",
      finland: "VHF channel 82 (or phone +4610 492 76 00)",
      sweden: "VHF channel 82 (or phone +4610 492 76 00)",
    },
    {
      title: "Contents of report",
      finland: "Ship's name, Nationality, Destination and ETA, Speed",
      sweden: "Ship's name, Nationality, Destination and ETA, Speed",
    },
    {
      title: "Email",
      finland: "ice.info@sjofartsverket.se",
      sweden: "ice.info@sjofartsverket.se",
    },
    {
      title: "Special remark",
      finland:
        "Vessels in the Gulf of Finland of 300 GT or more are required to report to the GOFREP Traffic Centre." +
        "A vessel stuck in ice must notify the icebreaker of its position without delay.",
      sweden: "-",
    },
  ];

  const columns2 = [
    { title: "Title", id: "title" },
    { title: "Sweden", id: "sweden" },
  ];

  const data2 = [
    {
      title: "Arrival Report",
      sweden: "When Ships is moored",
    },
    {
      title: "Call signal",
      sweden: "ICE INFO",
    },
    {
      title: "Channel",
      sweden: "VHF channel 16 (or phone +4610 492 76 00)",
    },
    {
      title: "Contents of report",
      sweden: "Ship's name, Call sign, Destination and ETD",
    },
    {
      title: "Email",
      sweden: "ice.info@sjofartsverket.se",
    },
  ];

  const data3 = [
    {
      title: "Departure report",
      sweden:
        "Shall be reported at least 6h before departure If anything which affects estimated time of departure occurs, shall new estimated time of departure be reported as son as possible. Report shall also be made at departure.",
    },
    {
      title: "Call signal",
      sweden: "ICE INFO",
    },
    {
      title: "Channel",
      sweden: "VHF channel 16 (or phone +4610 492 76 00)",
    },
    {
      title: "Contents of report",
      sweden: "Ship's name, Call sign, Destination and ETD",
    },
    {
      title: "Email",
      sweden: "ice.info@sjofartsverket.se",
    },
  ];
  return (
    <div className="bg-baltice-light-blue-background">
      <TopSection
        header="Reporting & Instructions"
        description="Following information is updated every day during the winter navigation season, 
        unless otherwise mentioned. This information is covering the Baltic Sea area. 
        When icebreaking activity and traffic restrictions are off, updated information is not available."
      />
      <Container>
        <div className="max-w-1440 mx-auto mt-10 mb-16">
          <h1 className="font-medium text-2xl">Reporting</h1>
          <ReportingTable
            columns={columns}
            data={data}
            headerText="Passage reporting for ships destinated to Finnish and Swedish ports"
            color="#0000"
          />
          <ReportingTable
            columns={columns2}
            data={data2}
            headerText="Arrival report for ships in Swedish Ports"
            color="#00000"
          />
          <ReportingTable
            columns={columns2}
            data={data3}
            headerText="Departure report for ships in Swedish ports"
            color="#FEFEFE"
          />
        </div>
      </Container>
    </div>
  );
}
