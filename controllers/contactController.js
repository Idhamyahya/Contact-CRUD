import {
  deleteContact,
  getContact,
  getContactById,
  updateContact,
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

export const updateContact_C = (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  const updatedContact = updateContact(id, newData);

  if (!updatedContact) {
    return res.status(404).json({
      message: "Kontak tidak ditemukan",
    });
  }

  res.status(200).json({
    message: "Kontak berhasil di update",
    data: updatedContact,
  });
};
