import domBuilder from '../components/domBuilder';
import buildQuadrant from '../components/quadrantBuilder';
import domEvents from '../events/domEvents';
import quadrantData from '../helpers/data/quadrantData';

const startApp = () => {
  domBuilder();
  domEvents();
  quadrantData.forEach((item) => {
    buildQuadrant(item);
  });
};

export default startApp;
