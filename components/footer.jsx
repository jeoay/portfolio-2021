import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<>
				<footer className="footer">
					Send me a{' '}
					<img src="/images/coffee.png" alt="Coffee Cup" className="logo" />
				</footer>

				<style jsx>
					{`
						footer {
							width: 100%;
							height: 100px;
							border-top: 1px solid #eaeaea;
							display: flex;
							justify-content: center;
							align-items: center;
						}

						footer img {
							margin-left: 0.5rem;
						}

						footer a {
							display: flex;
							justify-content: center;
							align-items: center;
						}

						.logo {
							height: 2em;
							display: inline;
						}
					`}
				</style>
			</>
		);
	}
}

export default Footer;
