const { AbstractModule } = require('adapt-authoring-core');

class UIPluginModule extends AbstractModule {
  /** @override */
  async init() {
    const ui = await this.app.waitForModule('ui');
    ui.addUiPlugin(`${this.rootDir}/plugins`);
  }
}

module.exports = UIPluginModule;