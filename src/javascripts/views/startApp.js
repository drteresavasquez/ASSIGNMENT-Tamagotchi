import domBuilder from '../components/domBuilder';
import modal from '../components/modal';
import { addPet } from '../components/pet';
import buildQuadrant from '../components/quadrantBuilder';
import getAverage from '../helpers/data/average';
import quadrantData from '../helpers/data/quadrantData';

const startApp = () => {
  domBuilder();
  getAverage();
  modal();
  addPet();
  quadrantData.forEach((quad) => {
    buildQuadrant(quad);
  });
};

export default startApp;
