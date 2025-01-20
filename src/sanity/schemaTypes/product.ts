
{/*
import { defineType } from 'sanity'
export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'url',
       
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
       
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags', // Display tags in an easy-to-use tag input
        },
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
       
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        
      },
      {
        name: 'isNew',
        title: 'Is New',
        type: 'boolean',
        description: 'Indicate whether this is a new product',
      },
      {
        name: '_id',
        title: 'Product ID',
        type: 'string',
        hidden: true, // Hide _id field from the CMS interface since it's auto-generated
      },
    ],
});
  */}

  //src/sanity/schemaTypees/products.ts

import { defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'isNew',
      title: 'Is New',
      type: 'boolean',
    },
  ],
});
