import Link from 'next/Link';

export default function Navigation() {
	return (
		<>
			{/* figure a way to dynamically change the menu if its on the page */}
			<Link href="/">
				<a className="button is-primary is-large">Home</a>
			</Link>
			{/* <Link href="/exp">
                <a className="mini-card">Experience</a>
            </Link>
            <Link href="/projects">
                <a className="mini-card">Projects</a>
            </Link>
            <Link href="/contact">
                <a className="mini-card">Contact</a>
            </Link> */}
		</>
	);
}
