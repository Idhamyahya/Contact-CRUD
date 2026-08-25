import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const _fileName = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);

const filePath = path.join(_dirName, "../data/contact.json");

// ambil data
const getData = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// ambil semua data
export const getContact = () => {
  const contact = getData();
  return contact;
};

// ambil data by id
export const getContactById = (id) => {
  const contacts = getData();
  const contact = contacts.find((contact) => contact.id === Number(id));
  return contact;
};

// hapus contact
export const deleteContact = (id) => {
  const contacts = getData();
  const index = contacts.findIndex((contact) => contact.id === Number(id));
  if (index === -1) {
    return null;
  }
  const deletedContact = contacts[index];
  contacts.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};
