import styles from "../styles/MenuBar.module.css";

export default function ActionMenu(props) {

	// Function that closes the menu focus
	function closeMenuFocus() {
		// Tiny delay
		setTimeout(() => {  props.setIsMenuOpen(false); }, 100);
	}

	return (
		<div class={styles.actionMenu}>
			{/* For every submenu item in actionMenuData */}
			<For each={props.actionMenuData}>
				{(item, i) => (
					<>
						<Switch>
							{/* Seperator */}
							<Match when={item.separator}>
								<div class={styles.separator}></div>
							</Match>
							{/* List Item */}
							<Match when={item.text != ""}>
								<div onClick={closeMenuFocus}>
									<p
										onMouseMove={() => props.setActiveSubMenuItem(item.text)}
										onClick={item.onClick}
										class={`${item.disabled ? styles.disabled : styles.activeActionMenuItem} ${
											styles.actionMenuItem
										}`}
									>
										{item.text}{" "}
										<Show when={item.actionMenuData && props.activeSubMenuItem == item.text}>
											<div
												style={{ left: "105%", top: "-5px" }}
												class={`${styles.actionMenu} ${styles.subActionMenu}`}
												onClick={closeMenuFocus}
											>
												<For each={item.actionMenuData}>
													{(subItem, i) => (
														<p
															onClick={subItem.onClick}
															style={{ "padding-left": "10px", padding: "2px" }}
															class={`${styles.activeActionMenuItem} ${styles.actionMenuItem}`}
														>
															Action 1
														</p>
													)}
												</For>
											</div>
										</Show>
										<span class={styles.hotKey}>
											<For each={item.hotkey}>
												{(key, i) => (
													<Switch fallback={<span>{key}</span>}>
														<Match when={key == "command"}>
															<i class="bi-command"></i>
														</Match>
														<Match when={key == "shift"}>
															<i class="bi-shift"></i>
														</Match>
														<Match when={key == "alt"}>
															<i class="bi-alt"></i>
														</Match>
														<Match when={key == "option"}>
															<i class="bi-option"></i>
														</Match>
														<Match when={key == "chevron"}>
															<i class="bi-chevron-right"></i>
														</Match>
														<Match when={key == "backspace"}>
															<i class="bi-backspace"></i>
														</Match>
													</Switch>
												)}
											</For>
										</span>
									</p>
								</div>
							</Match>
						</Switch>
					</>
				)}
			</For>
		</div>
	);
}
