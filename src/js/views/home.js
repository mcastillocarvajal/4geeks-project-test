import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div id="bg">
			<div className="jumbotron" id="jumbotron">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
		</div>
	);
};
