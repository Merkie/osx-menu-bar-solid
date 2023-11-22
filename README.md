
# OSX Menu Bar Solid

The classic menu bar from OSX, now in SolidJS! This project serves as an implementation concept. This project is not a library and it is no longer maintained.

https://github.com/Merkie/osx-menu-bar-solid/assets/18383101/61e76ec0-e4fd-475f-b77d-18eaa5f27347

## Usage

Clone and install:
```bash
git clone https://github.com/Merkie/osx-menu-bar-solid && cd osx-menu-bar-solid && npm i
```

Build and serve:
```bash
npm run build && npm run serve
```

## Documentation

You can either use this project as a boilerplate to create an app or you can manually add the ActionMenu, MenuBar, and MenuBarProvider components to your own app. Look at App.jsx for reference on how to use the MenuBarProvider. Configurations are also avaliable in the MenuBar.module.css file. 

The menu bar is built from a JSON object found in MenuBarProvider.jsx. Categories like "File" and "Edit" are going to be created by passing an object into the menuItems list (this can also be a signal variable if you want it to be dynamic).

The properties a cateogory can have are name (string), apple (boolean, this makes the button the Apple logo), bold (boolean), and actionMenuData (list).

Passing objects into the actionMenuData property adds actions to the category. Each action item is an object, and the properties it can have are text (string), onClick (function), hotkey (list of strings), separator (boolean, makes the entry a saperator line), disabled (boolean), actionMenuData (list).

Much like the categories, action items can have sub-menus that are written much like action item objects, but they only have a text property.

### Code Example:


```Javascript

const menuItems = [
    {
        name: "File",
        actionMenuData: [
            {
                text: "Copy File",
                onClick: () => {
                    doSomething()
                },
                hotkey: ['command', 'C']
            },
            {
                text: "submenu",
                hotkey: ['chevron'] // This gives it the right arrow
                actionMenuData: [
                    {"text": "this is a submenu action"}
                ]
            }
        
        ]
    }
]

```

