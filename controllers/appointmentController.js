import appointmentModel from "../models/appointmentModel";

export default {
  list: async (req, res) => {
    const list = await appointmentModel.find();
    return res.json(list);
  },

  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await appointmentModel.find({ _id: id });
    return res.json(foundItem);
  },
};
