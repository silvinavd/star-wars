import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

export const Footer = () => (
	<footer className="footer navbar-fixed-bottom text-center">
		<p>
			Made with <i className="fa fa-heart text-danger m-auto" /> by{" "}
			<a href="http://www.4geeksacademy.com"> 4Geeks Academy</a>
		</p>
	</footer>
);
