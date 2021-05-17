import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/info.scss";

export const InfoPlanetas = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// useEffect(() => {
	// 	actions.getPersonaje(params.id);
	// }, []);
	useEffect(() => {
		actions.getPlaneta(params.id);
	}, []);

	return (
		<div className="container">
			<h1 className="font text-center mb-5">Description</h1>
			<div className="infocard">
				<h1 className="display-4  text-center fontbig">{store.info != null ? store.info.name : ""}</h1>
				<div className="row flex-row justify-content-around mt-4 fontsm mb-5 mt-3">
					<img src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/06/Topps-Living-Set-Star-Wars-Trading-Cards-1-Vader-front-500.jpg" />
					<div className="data">
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
