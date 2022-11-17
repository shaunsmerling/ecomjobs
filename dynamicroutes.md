1. Write logic that will replace all of the spaces in the title with hypens
   DONE
2. After, append a random number at the end of the slug to make sure it is unique
   DONE
3. We have to switch frm using mongodb id to an id that we generate

4. Add a new attribute in the data e.g. job_id

5. job_id will contain the logic we currently curated

6. Every job will have an id, and a job_id

7. To support this you have to update prisma query logic

merging job title and company title, replacing all spaces with hypens, and then appending a random number on the end

.replace() for replacing space with hypens
Math.random for generating numbers (set min and
