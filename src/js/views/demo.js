import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-danger text-center ml-2 mb-3">Characters</h1>
			<div className="row d-flex-row overflow-auto flex-nowrap ">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-sm-3 mb-3">
							<Cards name={item.name} id={item.uid} />
						</div>
					);
				})}
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
