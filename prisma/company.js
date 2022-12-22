import prisma from "./prisma";

// READ
export const getAllCompanies = () => {
  return prisma.company.findMany({});
};

export const getCompanyByUrl = (companyUrl) => {
  return prisma.company.findMany({ where: { companyUrl } });
};

// CREATE
export const createCompany = (data) => {
  return prisma.company.create({ data });
};

export const getCompanyById = (company_id) => {
  return prisma.company.findUnique({ where: { company_id } });
}

// UPDATE
export const updateCompany = (company_id, updateData) => {
  return prisma.company.update({
    where: { company_id },
    data: { ...updateData },
  });
};

// DELETE
export const deleteCompany = (id) => {
  return prisma.company.delete({ where: { id } });
};

 /// Create script for GenerateCompanyURL
 // Mimic API for JobURL
 // Make sure to not forget to generate companyURL when profile is made 