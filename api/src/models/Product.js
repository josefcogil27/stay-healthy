"use strict";

import { Model } from 'objection'

class Productos extends Model {
    static get tableName() {
        return "productos";
    }
}

export default Productos;