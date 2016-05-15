/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/catalog              ->  index
 * POST    /api/catalog              ->  create
 * PUT     /api/catalog/:id          ->  update
 * DELETE  /api/catalog/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Catalog from './catalog.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Catalogs
export function index(req, res) {
  return Catalog.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Catalog in the DB
export function create(req, res) {
  return Catalog.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Catalog in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Catalog.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Catalog from the DB
export function destroy(req, res) {
  return Catalog.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
