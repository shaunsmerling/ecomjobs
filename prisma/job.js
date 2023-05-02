import prisma from "./prisma";

// READ
export const getAllJobs = () => {
  return prisma.job.findMany({});
};
export const getJobByJobUrl = (jobUrl) => {
  return prisma.job.findMany({ where: { jobUrl } });
};

export const getJobByJobID = (id) => {
  return prisma.job.findMany({ where: { id } });
};

export const getJobsByCompanyUrl = (companyUrl) => {
  return prisma.job.findMany({ where: { companyUrl }});
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
