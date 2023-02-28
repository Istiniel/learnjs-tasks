const { Clock } = require('./Улучшенные часы.js');

class ExtendedClock extends Clock {
  constructor(template, precision) {
    super(template);
    this.precision = precision;
  }

  start() {
    super.render();
    setInterval(() => {
      super.render();
    }, this.precision);
  }
}

let clock = new ExtendedClock({ template: 'h:m:s' }, 3000);
clock.start();
