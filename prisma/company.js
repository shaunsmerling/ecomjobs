import prisma from "./prisma";

// READ
export const getAllJobs = (company_id) => {
  return prisma.job.findMany({ where: { id: company_id } });
};
