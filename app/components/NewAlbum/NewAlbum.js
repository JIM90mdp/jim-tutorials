export default function NewAlbum({ customClasses }) {
	return (
		<div className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""}`}>
			<h4 className="text-white font-permanentMarker text-xl"> 1% each day to become the</h4>
			<h4 className="text-white font-rockSalt text-xl"> Musician you want to be  </h4>
			<p className="text-fluo-green text-base">Share your ideas, and let me help you</p>
		</div>
	);
}
