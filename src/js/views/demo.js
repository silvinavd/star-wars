import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-center ml-2 mb-3 font">Characters</h1>
			<div className="row d-flex-row overflow-auto flex-nowrap fontsm">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-sm-3 mb-3">
							<Cards name={item.name} id={item.uid} />
						</div>
					);
				})}
			</div>
			<br />
			<div>
				<h1 className="text-center ml-2 mb-3 font">Planets</h1>
				<div className="row d-flex-row overflow-auto flex-nowrap fontsm">
					{store.planetas.map((item, index) => {
						return (
							<div key={index} className="col-sm-3 mb-3">
								<Cards name={item.name} id={item.uid} />
							</div>
						);
					})}
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-light">Back home</button>
			</Link>
		</div>
	);
};
