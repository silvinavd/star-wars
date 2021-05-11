import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {Cards} from "../component/cards";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
            <div className="row">
            {store.personajes.map((item, index) => {
                return <Cards key={index}/>;
            })}

            </div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
