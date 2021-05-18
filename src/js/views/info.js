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

	const images = {
		"C-3PO": "https://www.alfabetajuega.com/multimedia/imagenes/201703/183307.alfabetajuega-c3po.jpg",
		"Luke Skywalker":
			"http://www.redcarpetnewstv.com/wp-content/uploads/2012/11/Star-Wars-Luke-Skywalker-Episode-VII.jpg",
		"R2-D2":
			"https://cadenaser00.epimg.net/ser/imagenes/2017/06/29/gente/1498741307_615132_1498741387_noticia_normal.jpg",
		"Darth Vader": "https://www.milenio.com/uploads/media/2015/12/15/darth-vader.jpeg",
		"Leia Organa": "http://estaticos.elmundo.es/assets/multimedia/imagenes/2016/12/28/14828962341529.jpg",
		"Owen Lars": "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/86258_big.jpg",
		"Beru Whitesun lars": "https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg",
		"R5-D4":
			"https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235",
		"Biggs Darklighter": "https://i.redd.it/3mwpb5tydhv41.jpg",
		"Obi-Wan Kenobi":
			"https://i.guim.co.uk/img/media/0a8b5ca4cd61e5a422106dd0340fd8e152b33f4d/116_317_1362_816/master/1362.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=efa5529e56622117292733ec3b2e0e42"
	};
	return (
		<div className="container">
			<h1 className="font text-center mb-5">Description</h1>
			<div className="infocard">
				<h1 className="display-4  text-center fontbig">{store.info != null ? store.info.name : ""}</h1>
				<div className="row flex-row justify-content-around mt-4 fontsm mb-5 mt-3">
					<img src={store.info != null ? images[store.info.name] : ""} style={{ width: 700, height: 500 }} />

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
