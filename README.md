#  adapt-authoring-uiplugintemplate

_Please also see [adapt-authoring-templatemodule](https://github.com/adapt-security/adapt-authoring-templatemodule) for more general module-writing tips._

This is a template repository for extending the Adapt authoring tool UI.

## Usage
The AbstractModule child class defines plugin location, as required by the current UI module code (folder can be named as you wish, but `UIPluginModule` will need to be updated accordingly if different from `/plugins`).

All code to be included in the UI plugin will then be included in the build as expected.

### Lang strings
Lang strings must now be included in the root of your module folder, as with other Adapt authoring modules (as opposed to inside the front-end plugin folder as with legacy code). The strings will then be included in the app langage bundle. Please note that server must be restarted for changes to language strings to be propagated to the UI.
