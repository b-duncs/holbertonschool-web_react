//create a function named getFullYear that will return the current year
export const getFullYear = () => {
  return new Date().getFullYear()
}

//create a function named getFooterCopy
export const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

//create a function named getLatestNotification that returns the following string:
// <strong>Urgent requirement</strong> - complete by EOD
export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
