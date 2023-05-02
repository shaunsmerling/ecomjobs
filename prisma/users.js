import prisma from "./prisma";

// READ
export const getAllUsers = () => {
  return prisma.user.findMany({});
};

export const getUserByEmail= (email) => {
  return prisma.user.findMany({ where: { email } });
};

// CREATE
export const createUser= (data) => {
  return prisma.user.create({ data });
};

// export const getUserById = (id) => {
//   return prisma.user.findUnique({ where: { user } });
// }

// UPDATE
export const updateUser = (id, updateData) => {
  return prisma.user.update({
    where: { id },
    data: { ...updateData },
  });
};

// DELETE
export const deleteUser = (id) => {
  return prisma.user.delete({ where: { id } });
};
