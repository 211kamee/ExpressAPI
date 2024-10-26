import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.tsx";
import App from "./App.tsx";
import Login from "./components/auth/Login.tsx";
import Register from "./components/auth/Register.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Header}>
					<Route path="" Component={App}></Route>
					<Route path="auth/">
						<Route path="login/" element={<Login />}></Route>
						<Route path="register/" element={<Register />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
