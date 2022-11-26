
export function generateCompanyUrl(company_name) {
  const random = Math.floor(Math.random() * 100000000);
  let newUrl = "";
  if(company_name) {
    newUrl += company_name.replace(/\s/g, "-").replace("&", "and").replace(",", "").replace(".", "").replace("/", "")
  }
  const companyUrl = newUrl.toLowerCase() + "-" + random;
  return companyUrl;
}
