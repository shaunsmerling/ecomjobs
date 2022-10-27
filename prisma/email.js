import prisma from "./prisma"

// READ
export const getAllEmails = () => {
    return prisma.email.findMany({});
  };
  export const getEmailById = (id) => {
    return prisma.email.findUnique({ where: { id } });
  };
  
  // CREATE
  export const createEmail = (data) => {
    return prisma.email.create({ data });
  };
  
  // UPDATE
  export const updateEmail = (id, updateData) => {
    return prisma.email.update({
      where: { id },
      data: { ...updateData },
    });
  };
  
  // DELETE
  export const deleteEmail = (id) => {
    return prisma.email.delete({ where: { id } });
  };
  