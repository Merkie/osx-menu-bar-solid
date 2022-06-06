import { createSignal } from "solid-js";

import MenuBarProvider from "./components/MenuBarProvider.jsx";

import styles from "./styles/App.module.css";

function App() {
	/* 
		This signal needs to be outside the MenuBarProvider
	 	component because it needs to be set to false when
	 	the body content is clicked.
	*/
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);

	function unfocusMenu() {
		setIsMenuOpen(false);
	}

	return (
		<>
			<MenuBarProvider isMenuOpen={isMenuOpen()} setIsMenuOpen={setIsMenuOpen} />

			{/* Body content - This can be replaced, make sure you keep the onClick */}
			<div onClick={unfocusMenu} class={styles.app}>
				<p class={styles.content}>Hey! I'm just some text :p</p>
			</div>
		</>
	);
}

export default App;
