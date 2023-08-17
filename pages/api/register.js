import axios from "axios";

export default async function handler(req, res) {
  const { data } = req.body;

  let response;
  try {
    response = await axios.post("http://localhost:5000/api/auth/register", {
      ...data,
    });
  } catch (error) {
    console.log(error.response.status);
    res.status(error.response.status).json(error.response.data);
  }

  res.status(200).json(response?.data);
}
