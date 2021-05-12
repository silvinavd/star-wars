import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/index.scss";

export const Navbar = props => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-transparent p-0">
				<Link to="/" className="ml-5">
					<img
						style={{ width: "80px" }}
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
						className="ml-5"
					/>
				</Link>
				<Link to="/">
					<button className="btn btn-outline-dark text-light ml-5">Characters</button>
				</Link>
				<Link to={"/info/" + props.id}>
					<button className="btn btn-outline-dark text-light ml-5">Description</button>
				</Link>
				<div className="nav-item dropdown navbar-nav ml-auto">
					<button
						className="btn btn-outline-dark dropdown-toggle m-2 mr-4 text-light"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};
Navbar.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
