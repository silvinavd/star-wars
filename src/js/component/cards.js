import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Cards = props => {
	return (
		<div>
			<div className="card">
				<img src="http://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text">
						<br />
						Hair Color: none <br />
						Eye-Color: yellow
					</p>
					<div>
						<Link to={"/info/" + props.id}>
							<button type="button" className="btn btn-outline-primary btn-lg">
								Learn more!
							</button>
						</Link>
					</div>
					<button type="button" className="btn btn-outline-warning btn-lg float-right">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
