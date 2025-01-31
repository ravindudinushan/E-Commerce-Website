// CONTROLLER FUNCTION FOR ADDING PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, colors, popular } = req.body;
    // EXTRACTING IMAGES IF PROVIDED
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // UPLOADE IMAGES TO CLOUDINERY OR USE A DEFAULT IMAGE
    let imageUrl;
    if (images.length > 0) {
      imageUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary;
        })
      );
    }
  } catch (error) {
    
  }
};

// CONTROLLER FUNCTION FOR ADDING PRODUCT
const removeProduct = async (req, res) => {};

// CONTROLLER FUNCTION FOR ADDING PRODUCT
const listProduct = async (req, res) => {};

// CONTROLLER FUNCTION FOR ADDING PRODUCT
const singleProduct = async (req, res) => {};

export { addProduct, removeProduct, listProduct, singleProduct };
