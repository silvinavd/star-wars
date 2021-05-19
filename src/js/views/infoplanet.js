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

	const imgs = {
		Tatooine:
			"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
		Alderaan:
			"https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830",
		"Yavin IV":
			"https://static.wikia.nocookie.net/esstarwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170924222729",
		Hoth:
			"https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20170802030704",
		Dagobah:
			"https://static.wikia.nocookie.net/esstarwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20061117132132",
		Bespin:
			"https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537",
		Endor:
			"https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170629163352",
		Naboo:
			"https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307",
		Coruscant:
			"https://static.wikia.nocookie.net/esstarwars/images/9/92/Coruscant_SWCT.png/revision/latest?cb=20200927225715",
		Kamino:
			"https://static.wikia.nocookie.net/esstarwars/images/5/52/Kamino-DB.png/revision/latest?cb=20160913200828"
	};

	return (
		<div className="container">
			<h1 className="font text-center mb-3">Description</h1>
			<div className="infocard">
				<h1 className="display-4  text-center fontbig">{store.info != null ? store.info.name : ""}</h1>
				<div className="row flex-row justify-content-around mt-4 fontsm mb-3 mt-2">
					<img src={store.info != null ? imgs[store.info.name] : ""} style={{ width: 600 }} />
					<div className="data mt-4 mr-3">
						<p className="">
							Name <br />
							{store.info != null ? store.info.name : ""}
						</p>
						<p>
							Climate <br />
							{store.info != null ? store.info.climate : ""}
						</p>
						<p>
							Diameter <br />
							{store.info != null ? store.info.diameter : ""}
						</p>
						<p>
							Orbital Period <br />
							{store.info != null ? store.info.orbital_period : ""}
						</p>
						<p>
							Rotation Period <br />
							{store.info != null ? store.info.rotation_period : ""}
						</p>
						<p>
							Gravity <br />
							{store.info != null ? store.info.gravity : ""}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
