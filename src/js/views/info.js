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
	// useEffect(() => {
	// 	actions.getPlaneta(params.id);
	// }, []);

	return (
		<div>
			<div className="text-effect">
				<h1 className="neon" data-text="Description">
					Characters
				</h1>
				<div className="gradient" />
				<div className="spotlight" />
			</div>
			<div className="jumbotron jumbotron-fluid background h-100 mt-5">
				<div className="container">
					<h1 className="display-4 text-dark text-center font-weight-bold">
						{store.info != null ? store.info.name : ""}
					</h1>
					<br /> <hr />
					<div className="row flex-row justify-content-around mt-4 fontsm">
						<p className="">
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
		</div>
	);
};
