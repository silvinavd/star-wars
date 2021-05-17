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
			"https://i.guim.co.uk/img/media/0a8b5ca4cd61e5a422106dd0340fd8e152b33f4d/116_317_1362_816/master/1362.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=efa5529e56622117292733ec3b2e0e42"
	};
	return (
		<div className="card-deck">
			<div className="card bg-dark text-light p-1 m-1">
				<img src={images[props.name]} style={{ width: 350, height: 186 }} />
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
							className="btn btn-outline-warning float-right p-2 btn-sm"
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
