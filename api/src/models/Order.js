"use strict";

import { Model } from 'objection'

class Orders extends Model {
    static get tableName() {
        return "pedidos";
    }
}

export default Orders;