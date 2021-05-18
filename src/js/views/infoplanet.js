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
		Tatooine: "https://www.wallpapertip.com/wmimgs/41-415587_tatooine-wallpaper-4k.jpg",
		Alderaan:
			"https://www.chicagotribune.com/resizer/O5NI3Oj7X8-GDODlQEo_myJwIJ8=/1200x0/top/www.trbimg.com/img-563558af/turbine/ct-star-wars-destruction-of-alderaan-justified-20151031",
		"Yavin IV":
			"https://static.wikia.nocookie.net/esstarwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170924222729",
		Hoth:
			"https://blog.es.playstation.com/tachyon/sites/14/2015/11/unnamed-file-54.jpg?resize=1088,600&crop_strategy=smart",
		Dagobah:
			"https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/large/public/wp/2016/04/dagobah-002.jpg",
		Bespin: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
		Endor:
			"https://static.wikia.nocookie.net/esstarwars/images/9/9f/Endor_new.png/revision/latest?cb=20191222050241",
		Naboo:
			"https://static.wikia.nocookie.net/esstarwars/images/c/c0/Naboo_system.jpg/revision/latest?cb=20121125215519",
		Coruscant:
			"https://p4.wallpaperbetter.com/wallpaper/982/673/193/coruscant-science-fiction-star-wars-wallpaper-preview.jpg",
		Kamino: "https://starwarsblog.starwars.com/wp-content/uploads/2015/09/Image-00-Header-1536x864-688067241292.jpg"
	};

	return (
		<div className="container">
			<h1 className="font text-center mb-5">Description</h1>
			<div className="infocard">
				<h1 className="display-4  text-center fontbig">{store.info != null ? store.info.name : ""}</h1>
				<div className="row flex-row justify-content-around mt-4 fontsm mb-5 mt-3">
					<img src={store.info != null ? imgs[store.info.name] : ""} style={{ width: 500, height: 500 }} />
					<div className="data">
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
