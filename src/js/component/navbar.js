import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<div className="container-fluid">
			<nav className="navbar border-bottom border-3">
				<Link className="navbar-brand ml-4" id="logo" to="/">
					YoNado
				</Link>
				<div className="d-flex justify-content-end">
					<button type="button" className="btn btn-primary mr-2">
						Iniciar sesión
					</button>
					<button type="button" className="btn btn-primary">
						Registrarse
					</button>
				</div>
			</nav>
		</div>
	);
};
