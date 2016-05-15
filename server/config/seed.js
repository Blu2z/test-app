/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Catalog from '../api/catalog/catalog.model';

Catalog.find({}).remove()
  .then(() => {
    Catalog.create({
      name: 'Porsche',
      text: 'Немецкая автомобильная компания, которая традиционно славится выпуском спортивных моделей.'
    }, {
      name: 'Mercedes',
      text: 'немецкая компания, специализирующаяся на выпуске легковых автомобилей и двигателей, основанная в 1926году'
    }, {
      name: 'Bmw',
      text: 'Базирующийся в Мюнхене германский производитель легковых авто и мотоциклов.'
    }, {
      name: 'Volkswagen',
      text: 'Немецкая автомобильная марка, одна из многих, принадлежащих концерну Volkswagen AG'
    }, {
      name: 'Renault',
      text: 'Французская автомобилестроительная корпорация'
    }, {
      name: 'Lexus',
      text: 'Марка автомобилей класса «премиум», производимых японской корпорацией Toyota Motor.'
    });
  });

