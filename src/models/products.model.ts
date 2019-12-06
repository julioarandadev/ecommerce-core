import { url } from "inspector";
import { Timestamp } from "bson";

import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
    prod_type: {type: String, required: true},
    name: {type: String, required: true },
    brand: {type: String,required: true},
    model: {type: String, required: true},
    price: {type: Number, required: false},
    size: {type: Number, required: true},
    color: {type: String, requiered: true},
    tags: {type: [], requiered: true},
    description: { type: String, required: true },
    quantity: {type: Number, requiered: true},
    image: {type:String, requiered: false},
    date: {type: Date, default: Date.now()},
    enabled: {type: Boolean, requiered: true}
});

module.exports = mongoose.model('products', productsSchema);
/*
prod_type: zapatilla,
name: red wings,
brand: topper,
model: winter 1985,
price: 3890,
size: 41,
color: red,
tags: [running, fashion, teenager, velcro, unisex],
description: 'Topper sneakers Runner NL Red Wings red color - Zapatillas de deporte Red Wings para niños color rojo',
quantity: 100,
image: 'https://images-na.ssl-images-amazon.com/images/I/81fseVs1loL._AC_UX695_.jpg',
date: Date.now(),
enabled: true
*/