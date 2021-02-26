import domBuilder from '../components/domBuilder';
import buildQuadrant from '../components/quadrantBuilder';
import domEvents from '../events/domEvents';
import getAverage from '../helpers/data/average';
import quadrantData from '../helpers/data/quadrantData';

const startApp = () => {
  domBuilder();
  domEvents();
  getAverage();
  quadrantData.forEach((quad) => {
    buildQuadrant(quad);
  });
};

export default startApp;
