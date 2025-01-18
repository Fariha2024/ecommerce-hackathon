export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().max(100), // Ensure title is required and has a max length
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'url',
        validation: Rule => Rule.required(), // Ensure the image URL is required
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.min(0).precision(2), // Ensure price is non-negative and has up to 2 decimals
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
        validation: Rule => Rule.min(0).max(100), // Ensure the discount is between 0 and 100
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.max(2000), // Optional, limits the length of the description
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
  };
  