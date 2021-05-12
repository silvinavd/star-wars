import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/info.scss";

export const Info = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPersonaje(params.id);
	}, []);

	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{store.info != null ? store.info.name : ""}</h1>

				<div className="row flex-row text-danger justify-content-around">
					<p>
						Name <br />
						{store.info != null ? store.info.name : ""}
					</p>
					<p>
						Birth Year <br />
						{store.info != null ? store.info.birth_year : ""}
					</p>
					<p>
						Gender <br />
						{store.info != null ? store.info.gender : ""}
					</p>
					<p>
						Height <br />
						{store.info != null ? store.info.height : ""}
					</p>
					<p>
						Skin Color <br />
						{store.info != null ? store.info.skin_color : ""}
					</p>
					<p>
						Eye Color <br />
						{store.info != null ? store.info.eye_color : ""}
					</p>
				</div>
			</div>
		</div>
	);
};
