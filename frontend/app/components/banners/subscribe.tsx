export default function Subscribe() {
	return (

			<div className="max-w-1440 m-auto grid grid-cols-2 gap-8 mb-8 pt-8">
				<div className="flex-col">
					<h1 className="font-medium mb-4 text-baltice-blue">Join to follow Ships and Ports </h1>
					<p>By subscribing you will gain custom access to Baltice.org, which allows you to follow ships
						and ports and get all the notifications of what you follow to your email.
						After subscription, your email is all what is needed to login to Baltice.org.</p>
				</div>
				<div className="">
					<h3 className="font-medium mb-4">Subscribe to get event notifications
						and to follow your ships and ports.</h3>
					<input type="text" className="mb-4 border border-gray-300
						px-4 py-2 rounded-md" placeholder="Email" />
					<button className="ml-10 bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
					<p className="text-sm"><b className="text-baltice-blue">
						Already subscribed?</b> Use the above subscribe method to login to Baltice.org. An email with a
						login link will be sent to you to regain access to view your subscribed information here.</p>
				</div>
			</div>

	);
}
