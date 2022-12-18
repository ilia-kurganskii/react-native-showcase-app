const { DetoxCircusEnvironment } = require('detox/runners/jest');

export default class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config: any, context: any) {
    super(config, context);
  }
}
