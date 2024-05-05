export default function NoteSkeleton() {

	const numberOfItems = 5; // Number of skeleton items to render

	return (
		<div
			className="note skeleton-container"
			role="progressbar"
			aria-busy="true"
		>
			<div className="note-header">
				<div
					className="note-title skeleton"
					style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }}
				/>
				<div
					className="skeleton skeleton--button"
					style={{ width: '8em', height: '2.5em' }}
				/>
			</div>
			<div className="note-preview">
				{
					[...Array(numberOfItems)].map((index) => (
						<div key={index} className="skeleton v-stack" style={{ height: '1.5em' }} />
					))
				}
			</div>
		</div>
	)
}
