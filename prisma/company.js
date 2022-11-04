import prisma from "./prisma";

// READ
export const getAllCompanies = () => {
  return prisma.getCompanyById.findMany({});
};

export const getCompanyById = (company_id) => {
  return prisma.company.findUnique({ where: { company_id } });
}
