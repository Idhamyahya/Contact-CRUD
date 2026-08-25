import { getContact } from "../models/contactModel.js";

export const getAllContact_C = (req, res) => {
  const contact = getContact();
  res.json(contact);
  return contact;
};
