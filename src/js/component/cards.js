import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = props => {
	const {
		store,
		actions: { setFavoritos }
	} = useContext(Context);

	function addFavorito() {
		const addNameFavoritos = props.name;
		console.log(props.name);
		setFavoritos(store.favoritos.concat(addNameFavoritos));
	}

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
			"https://i.guim.co.uk/img/media/0a8b5ca4cd61e5a422106dd0340fd8e152b33f4d/116_317_1362_816/master/1362.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=efa5529e56622117292733ec3b2e0e42",
		Tatooine: "https://www.wallpapertip.com/wmimgs/41-415587_tatooine-wallpaper-4k.jpg",
		Alderaan:
			"https://www.chicagotribune.com/resizer/O5NI3Oj7X8-GDODlQEo_myJwIJ8=/1200x0/top/www.trbimg.com/img-563558af/turbine/ct-star-wars-destruction-of-alderaan-justified-20151031",
		"Yavin IV": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Star_Wars_in_Guatemala.jpg",
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
		<div className="card-deck">
			<div className="card bg-dark text-light p-1 m-1">
				<img src={images[props.name]} style={{ width: 268, height: 170 }} className="img-fluid" />
				<div className="card-body p-1 mt-1">
					<h4 className="card-title">{props.name}</h4>
					<div>
						<Link to={props.tipo == "personaje" ? "/info/" + props.id : "/infoplanetas/" + props.id}>
							<button type="button" className="btn btn-outline-secondary btn-sm  text-light">
								Learn more!
							</button>
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning float-right p-2 btn-sm mt-1"
							onClick={() => {
								addFavorito();
							}}>
							<i className="fas fa-heart ml-1" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	tipo: PropTypes.string
};

//http://www.redcarpetnewstv.com/wp-content/uploads/2012/11/Star-Wars-Luke-Skywalker-Episode-VII.jpg
//https://www.alfabetajuega.com/multimedia/imagenes/201703/183307.alfabetajuega-c3po.jpg
//https://cadenaser00.epimg.net/ser/imagenes/2017/06/29/gente/1498741307_615132_1498741387_noticia_normal.jpg
//https://www.milenio.com/uploads/media/2015/12/15/darth-vader.jpeg
//http://estaticos.elmundo.es/assets/multimedia/imagenes/2016/12/28/14828962341529.jpg
//https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/86258_big.jpg
//https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg
//https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235
//https://i.redd.it/3mwpb5tydhv41.jpg
//https://i.guim.co.uk/img/media/0a8b5ca4cd61e5a422106dd0340fd8e152b33f4d/116_317_1362_816/master/1362.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=efa5529e56622117292733ec3b2e0e42
