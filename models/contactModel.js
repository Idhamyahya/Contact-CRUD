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
