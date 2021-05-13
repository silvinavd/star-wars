import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-deck">
			<div className="card bg-dark text-light p-1 m-1">
				<img
					src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/05/hipertextual-star-wars-celebra-may-the-4th-be-with-you-con-extraordinario-video-que-rinde-homenaje-toda-saga-2020581511.jpg?fit=1920%2C1080&ssl=1"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text">
						<p> lorem15</p>
						Hair Color: none <br />
						Eye-Color: yellow
					</p>
					<div>
						<Link to={"/info/" + props.id}>
							<button type="button" className="btn btn-outline-secondary btn-sm  text-light">
								Learn more!
							</button>
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning btn-sm float-right"
							onClick={() => {
								actions.addFavorito(0, props.id);
							}}>
							<i className="fas fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
