import Image from "next/image";

import Container from "../components/container/container";
import openInNew from "../../public/svg/openInNew.svg";
import urhoShip from "../../public/svg/urhoShip.svg";

type IceNavigationData = {
  header: string;
  img: string;
  date: string;
};

const iceNavigationData: IceNavigationData[] = [
  {
    header: "Finland's Winter Navigation 2023 - 2024",
    img: urhoShip,
    date: "2023-12-05, 1409 kB, PDF",
  },
  {
    header: "Swedish Maritime Administration 2023 - 2024",
    img: urhoShip,
    date: "2023-12-05, 1409 kB, PDF",
  },
  {
    header: "Master's checklist 2023-2024",
    img: urhoShip,
    date: "2023-12-05, 1409 kB, PDF",
  },
];
export default function IceNavigation() {
  return (
    <div>
      <div className="pt-12 text-center">
        <h2 className="font-semibold text-2xl pb-4">
          Ice navigation instructions
        </h2>
        <p>
          From the following links you can download the latest winter navigation
          instructions.
        </p>
      </div>
      <IceNavigationList />
    </div>
  );
}

export function IceNavigationList() {
  return (
    <a href="#">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-1440 mx-auto">
        {iceNavigationData.map((data, index) => (
          <Container
            key={index}
            className="border border-transparent hover:border-baltice-blue mr-4 rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <h3 className="text-baltice-blue text-sm font-bold">
                  {data.header}
                </h3>
                <Image src={openInNew} alt="" />
              </div>
              <Image
                src={data?.img}
                alt={""}
                className="object-cover w-full rounded"
                style={{ height: "160px" }}
              />
              <div className="text-black text-sm font-normal">{data.date}</div>
            </div>
          </Container>
        ))}
      </div>
    </a>
  );
}
