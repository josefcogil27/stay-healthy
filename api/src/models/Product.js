"use strict";

import { Model } from 'objection'

class Products extends Model {
    static get tableName() {
        return "productos";
    }
}

export default Products;