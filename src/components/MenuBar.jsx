import { createSignal } from "solid-js";

import styles from "../styles/MenuBar.module.css";

import ActionMenu from "./ActionMenu.jsx";

export default function MenuBar(props) {
	return (
		<div onClick={() => props.setIsMenuOpen(true)} class={styles.menuBar}>
			<div class={styles.appItems}>
				<For each={props.menuItems}>
					{(item, i) => (
						<div>
							<button
								onMouseMove={() => props.setActiveMenuItem(item.name)}
								class={`${styles.menuItemButton} ${props.isMenuOpen ? styles.menuActive : ""}`}
							>
								<Show when={item.apple}>
									<p
										style={{ "padding-left": "20px", "padding-right": "20px" }}
										class={styles.menuItem}
									>
										<i class={`bi-apple ${styles.appleIcon}`}></i>
									</p>
								</Show>
								<Show when={!item.apple}>
									<p class={`${styles.menuItem} ${item.bold ? styles.bold : ""}`}>{item.name}</p>
								</Show>
							</button>
							<Show when={props.activeMenuItem === item.name && props.isMenuOpen}>
								<ActionMenu
									actionMenuData={item.actionMenuData}
									activeSubMenuItem={props.activeSubMenuItem}
									setActiveSubMenuItem={props.setActiveSubMenuItem}
								/>
							</Show>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
