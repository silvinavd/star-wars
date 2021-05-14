import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export const Navbar = props => {
	const {
		store,
		actions: { setFavoritos }
	} = useContext(Context);
	const [mouse, setMouse] = useState();

	/*const params = useParams();

	useEffect(() => {
		actions.loadSomeData();
	}, []);

    console.log("ACAAA", store.favoritos);*/

	//FILTER
	const eliminar = i => {
		let nuevaLista = store.favoritos.filter((elem, index) => {
			if (index != i) {
				return elem;
			}
		});
		setFavoritos(nuevaLista);
	};

	const mouseencima = i => {
		setMouse(i);
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-transparent p-0 fontsm-btn">
				<Link to="/" className="ml-4">
					<img
						style={{ width: "85px" }}
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
						className="ml-5"
					/>
				</Link>
				<Link to="/">
					<button className="btn btn-outline-dark text-light ml-5">Characters</button>
				</Link>
				<Link to={"/info/" + props.id}>
					<button className="btn btn-outline-dark text-light ml-3">Description</button>
				</Link>
				<div className="nav-item dropdown navbar-nav ml-auto">
					<button
						className="btn btn-outline-dark dropdown-toggle m-2 mr-4 text-light"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites ({store.favoritos.length})
					</button>

					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						{store.favoritos.map((item, index) => {
							return (
								<div
									key={index}
									className="dropdown-item"
									onClick={() => {
										eliminar(index);
									}}
									onMouseOver={() => {
										mouseencima(index);
									}}>
									<li className="list-group-item">
										{item}
										<i
											className={"fas fa-trash-alt float-right" + (mouse == index ? "" : " hide")}
										/>
									</li>
								</div>
							);
						})}
					</div>
				</div>
			</nav>
		</div>
	);
};
Navbar.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};
