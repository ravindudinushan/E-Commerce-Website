// CONTROLLER FUNCTION FROM USER LOGIN
const loginUser = async (req, res) => {
    res.json({message: "this is login controller function for login api"})
};

// CONTROLLER FUNCTION FROM USER REGISTER
const registerUser = async (req, res) => {};

// CONTROLLER FUNCTION FROM ADMIN LOGIN
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
