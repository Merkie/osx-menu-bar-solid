import { createSignal } from "solid-js";

import MenuBar from "./MenuBar";

export default function MenuBarProvide(props) {
	/* Menubar State */
	const [activeMenuItem, setActiveMenuItem] = createSignal("");
	const [activeSubMenuItem, setActiveSubMenuItem] = createSignal("");

	const menuItems = [
		{
			name: "",
			apple: true,
		},
		{
			name: "Live",
			bold: true,
			actionMenuData: [
				{
					text: "About Live",
					onClick: () => {
						alert("about live clicked!");
					},
				},
				{ text: "", separator: true },
				{
					text: "Preferences...",
					hotkey: ["command", ","],
				},
				{ text: "", separator: true },
				{ text: "Services..." },
				{ text: "", separator: true },
				{
					text: "Hide Live",
					hotkey: ["command", "H"],
				},
				{
					text: "Hide Others",
					hotkey: ["option", "command", "H"],
				},
				{ text: "Show All", disabled: true },
				{ text: "", separator: true },
				{ text: "Quit Live", hotkey: ["command", "Q"] },
			],
		},
		{
			name: "File",
			actionMenuData: [
				{
					text: "New Live Set",
					hotkey: ["command", "N"],
				},
				{
					text: "Open Live Set...",
					hotkey: ["command", "O"],
				},
				{
					text: "Open Recent Set",
					hotkey: ["chevron"],
					actionMenuData: [{ text: "Recent Set 1" }, { text: "Recent Set 2" }, { text: "Recent Set 3" }],
				},
				{
					text: "Close Window",
					disabled: true,
					hotkey: ["command", "W"],
				},
				{ text: "", separator: true },
				{ text: "Install Pack..." },
				{ text: "", separator: true },
				{ text: "Manage Files..." },
				{ text: "", separator: true },
				{
					text: "Save Live Set",
					hotkey: ["command", "S"],
				},
				{
					text: "Save Live Set As...",
					hotkey: ["shift", "command", "S"],
				},
				{ text: "Save a Copy" },
				{ text: "Collect All and Save" },
				{ text: "", separator: true },
				{
					text: "Export Audio/Video...",
					hotkey: ["shift", "command", "R"],
				},
				{
					text: "Export MIDI Clip...",
					disabled: true,
					hotkey: ["shift", "command", "E"],
				},
			],
		},
		{
			name: "Edit",
			actionMenuData: [
				{
					text: "Undo",
					disabled: true,
					hotkey: ["command", "Z"],
				},
				{
					text: "Redo",
					disabled: true,
					hotkey: ["shift", "command", "Z"],
				},
				{ text: "", separator: true },
				{
					text: "Cut",
					disabled: true,
					hotkey: ["command", "X"],
				},
				{
					text: "Cut Time",
					disabled: true,
					hotkey: ["shift", "command", "X"],
				},
				{ text: "", separator: true },
				{
					text: "Copy",
					disabled: true,
					hotkey: ["command", "C"],
				},
				{ text: "", separator: true },
				{
					text: "Paste",
					disabled: true,
					hotkey: ["command", "V"],
				},
				{
					text: "Paste Time",
					disabled: true,
					hotkey: ["shift", "command", "V"],
				},
				{ text: "", separator: true },
				{
					text: "Duplicate",
					disabled: true,
					hotkey: ["command", "D"],
				},
				{
					text: "Duplicate Time",
					disabled: true,
					hotkey: ["shift", "command", "D"],
				},
				{ text: "", separator: true },
				{
					text: "Delete",
					disabled: true,
					hotkey: ["backspace"],
				},
				{
					text: "Delete Time",
					disabled: true,
					hotkey: ["shift", "command", "backspace"],
				},
				{ text: "", separator: true },
				{
					text: "Rename",
					disabled: true,
					hotkey: ["command", "R"],
				},
				{ text: "Edit Info Text", disabled: true },
				{ text: "", separator: true },
				{
					text: "Remove Stop Button",
					hotkey: ["command", "E"],
				},
				{
					text: "Consolidate",
					disabled: true,
					hotkey: ["command", "J"],
				},
				{ text: "Freeze Track" },
				{ text: "Flatten", disabled: true },
				{ text: "", separator: true },
				{
					text: "Quantize",
					disabled: true,
					hotkey: ["command", "U"],
				},
				{
					text: "Quantize Settings",
					disabled: true,
					hotkey: ["shift", "command", "U"],
				},
				{ text: "Extract Groove(s)", disabled: true },
				{ text: "Deactivate/Activate Clips", disabled: true, hotkey: <p>O</p> },
				{
					text: "Record Quantization",
					hotkey: ["chevron"],
				},
				{ text: "", separator: true },
				{
					text: "Group",
					disabled: true,
					hotkey: ["command", "G"],
				},
				{
					text: "Ungroup",
					disabled: true,
					hotkey: ["shift", "command", "G"],
				},
				{ text: "", separator: true },
				{
					text: "Loop Selection",
					disabled: true,
					hotkey: ["command", "L"],
				},
				{
					text: "Select Loop",
					disabled: true,
					hotkey: ["shift", "command", "L"],
				},
				{ text: "Select All" },
				{ text: "", separator: true },
				{ text: "Simplify Envelope", disabled: true },
				{ text: "", separator: true },
				{ text: "Emoji & Symbols", disabled: true, hotkey: ["^", "command", "space"] },
			],
		},
		{
			name: "Create",
		},
		{
			name: "View",
		},
		{
			name: "Options",
		},
		{
			name: "Help",
		},
	];

	return (
		<MenuBar
			menuItems={menuItems}
			isMenuOpen={props.isMenuOpen}
			setIsMenuOpen={props.setIsMenuOpen}
			activeMenuItem={activeMenuItem()}
			setActiveMenuItem={setActiveMenuItem}
			activeSubMenuItem={activeSubMenuItem()}
			setActiveSubMenuItem={setActiveSubMenuItem}
		/>
	);
}
