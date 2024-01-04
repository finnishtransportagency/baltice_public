import Image from 'next/image';
import Link from 'next/link'

import rightArrow from "@/public/svg/rightArrow.svg";

export default function IceWeatherDownload() {
	return (
		<div>
			<h1 className="p-4 text-baltice-blue font-medium text-3xl">Ice & weather</h1>
			<div className="flex flex-col p-6 bg-baltice-light-blue border-2 border-baltice-blue-300 rounded-md">
				<span className="mb-6 text-baltice-blue font-light text-xl">Download Ice Charts</span>
				<Link href="/" className="rounded-full border border-baltice-blue
                         bg-white text-baltice-blue p-2 w-full flex flex-row justify-between">
					<div className="flex flex-col p-2 ml-6">
						<span className="text-baltice-blue">Baltic sea, FMI + SMHI</span>
						<span className="text-gray-500 font-light text-sm">2023-12-05, 1409 kB, PDF</span>
					</div>
					<Image className="mr-6" src={rightArrow} alt="" />
				</Link>
				<div className="mt-4 mb-4 flex flex-row justify-between w-full space-x-4">
					<Link href="/" className="rounded-full border border-baltice-blue
                             bg-baltice-light-blue text-baltice-blue p-2 w-1/3 flex">
						<Image className="" src={rightArrow} alt="" />
						<div className="flex flex-col ml-2 leading-4">
							<span className="text-baltice-blue">Bay of Bothnia</span>
							<span className="text-gray-500 font-light text-sm">2023-12-05, 1409 kB, PDF</span>
						</div>
					</Link>
					<Link href="/" className="rounded-full border border-baltice-blue
                             bg-baltice-light-blue text-baltice-blue p-2 w-1/3 flex flex-row">
						<Image className="" src={rightArrow} alt="" />
						<div className="flex flex-col ml-2 leading-4">
							<span className="text-baltice-blue">Sea of Bothnia</span>
							<span className="text-gray-500 font-light text-sm">2023-12-05, 1409 kB, PDF</span>
						</div>
					</Link>
					<Link href="/" className="rounded-full border border-baltice-blue
                            bg-baltice-light-blue text-baltice-blue p-2 w-1/3 flex flex-row">
						<Image className="" src={rightArrow} alt="" />
						<div className="flex flex-col ml-2 leading-4">
							<span className="text-baltice-blue">Gulf of Finland</span>
							<span className="text-gray-500 font-light text-sm">2023-12-05, 1409 kB, PDF</span>
						</div>
					</Link>
				</div>
				<div className="flex justify-between space-x-4">
					<p className="w-2/3">
						<b className="text-baltice-blue">For more information </b>
						about regional Ice Reports and ice maps, click the link on
						the right. The weather data is updated on a daily basis.
					</p>
					<Link href="/" className="rounded-full border border-baltice-blue h-fit p-4
                                bg-white text-baltice-blue px-6 py-4 w-1/3 flex flex-row justify-between">
						<span className="font-normal text-lg">Read more</span>
						<Image className="" src={rightArrow} alt="" />
					</Link>
				</div>

			</div>
		</div>
	);
}
