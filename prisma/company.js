import prisma from "./prisma";

// READ
export const getAllCompanies = () => {
  return prisma.company.findMany({});
};

export const getCompanyByUrl = (companyUrl) => {
  return prisma.company.findMany({ where: { companyUrl } });
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
 /// Create script for GenerateCompanyURL
 // Mimic API for JobURL
 // Make sure to not forget to generate companyURL when profile is made 