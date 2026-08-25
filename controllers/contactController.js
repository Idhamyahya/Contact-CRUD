import { getContact, getContactById } from "../models/contactModel.js";

export const getAllContact_C = (req, res) => {
  const contact = getContact();
  res.json(contact);
  return contact;
};

export const getContactById_C = (req, res) => {
  const contact = getContactById(req.params.id);
  res.json(contact);
  return contact;
};
