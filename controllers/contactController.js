import {
  deleteContact,
  getContact,
  getContactById,
} from "../models/contactModel.js";

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

export const deleteContact_C = (req, res) => {
  const deletedContact = deleteContact(req.params.id);
  if (!deletedContact) {
    return res.status.json({
      message: "Contact tidak ditemukan",
    });
  }
  res.status(200).json({
    message: "Contact berhasil dihapus",
    data: deletedContact,
  });
};
