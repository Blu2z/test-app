'use strict';

import mongoose from 'mongoose';

var CatalogSchema = new mongoose.Schema({
  name: String,
  text: String,
  active: Boolean
});

export default mongoose.model('Catalog', CatalogSchema);
