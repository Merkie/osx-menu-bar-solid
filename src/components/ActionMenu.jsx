import { Show } from "solid-js";

import styles from "../styles/ActionMenu.module.css";

export default function ActionMenu(props) {

	return (
		<div class={styles.actionMenu}>
			<For each={props.actionMenuData}>
				{(item, i) => (
					<>
						<Show when={item.text == ""}>
							<div class={styles.separator}></div>
						</Show>
						<Show when={item.text != ""}>
							<div>
								<p onMouseMove={() => props.setActiveSubMenuItem(item.text)} onClick={item.onClick} class={`${item.disabled ? styles.disabled : styles.activeActionMenuItem} ${styles.actionMenuItem}`}>
									{item.text}{" "}

                                    <Show when={item.actionMenuData && props.activeSubMenuItem == item.text}>
                                        <div style={{"left":"105%", "top":"-5px"}} class={styles.actionMenu}>
                                            <For each={item.actionMenuData}>
                                                {(subItem, i) => (
                                                    <p onClick={subItem.onClick} style={{"padding-left": "10px", "padding": "2px"}}class={`${styles.activeActionMenuItem} ${styles.actionMenuItem}`}>
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
						</Show>
					</>
				)}
			</For>
		</div>
	);
}
