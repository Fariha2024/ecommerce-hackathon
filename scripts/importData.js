
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '4mcrbcd9', // Your project ID
  dataset: 'production', // Your dataset
  useCdn: true,
  apiVersion: '2025-01-18', // Make sure to use the correct API version
  token: 'skdANltIRjH50WOPhovfioEvL5vHFxWgOd8S0RHrUchmwY3T7qQ6PlaLaWZJktkwvIzkr2JZEVa367wy2NnX5V8Gl2BgArhJoKszLMoTgfsT0pizYESJtw0KIR8Da2X61XfN94uqccLryjnJUE2lOe43G14sqflWJByF8gcRgqIm55Ec8wvj', // Provide the appropriate token
});

// Function to upload product images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to upload product data to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Corrected field name
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Fetching product data from the external API and uploading to Sanity
async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();

























//scripts/importData.js
{/*import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '4mcrbcd9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-18',
  token: 'skdANltIRjH50WOPhovfioEvL5vHFxWgOd8S0RHrUchmwY3T7qQ6PlaLaWZJktkwvIzkr2JZEVa367wy2NnX5V8Gl2BgArhJoKszLMoTgfsT0pizYESJtw0KIR8Da2X61XfN94uqccLryjnJUE2lOe43G14sqflWJByF8gcRgqIm55Ec8wvj',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    //https://template6-six.vercel.app/api/products
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();*/}