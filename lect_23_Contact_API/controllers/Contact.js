import { Contact } from "../Models/Contact.js";

// get All Contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();
  if (!userContact)
    return res.status(404).json({ message: "No Contact find", userContact });
  res.json({ message: "Contact Fetched ", userContact });
};

// get Specific Contact
export const getContactById = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.findById(id);
  if (!userContact)
    return res.status(404).json({ message: "No Contact find", userContact });
  res.json({ message: "Contact Fetched ", userContact });
};

// add New Contact
export const addContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (name == " " || email == " " || phone == " " || type == " ")
    return res.status(400).json({ message: "All feilds are required" });

  const saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user:req.user
  });

  res.json({ message: "Contact Saved Successfully! ", saveContact });
};

// update Contact
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );

  if (!updateContact)
    return res.status(404).json({ message: "No Contact find " });

  res.json({ message: "Contact Updated Successfully!", updateContact });
};

// delete Contact
export const deleteContact = async (req, res) => {
  const id = req.params.id;
  const deleteContact = await Contact.findByIdAndDelete(id);

  if (!deleteContact)
    return res.status(404).json({ message: "Contact not exist" });
  res.json({ message: "Contact delete Successfully!" });
};

// get Contact by userId
export const getContactByUserId = async (req,res) =>{
  const id = req.params.id;
  let contact = await Contact.find({user:id})

  if(!contact) return res.status(404).json({message:"Contact not find"})

    res.json({message:"User Specific contact",contact})
}

