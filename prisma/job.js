import prisma from "./prisma";

// READ
export const getAllJobs = () => {
  return prisma.job.findMany({});
};
export const getJobById = (id) => {
  return prisma.job.findUnique({ where: { id } });
};

export const getJobsByCompanyId = (company_id) => {
  return prisma.job.findMany({ where: { company_id }});
}

// CREATE
export const createJob = (data) => {
  return prisma.job.create({ data });
};

// UPDATE
export const updateJob = (id, updateData) => {
  return prisma.job.update({
    where: { id },
    data: { ...updateData },
  });
};

// DELETE
export const deleteJob = (id) => {
  return prisma.job.delete({ where: { id } });
};
