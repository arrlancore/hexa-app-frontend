export const getErrorMessage = error => {
  console.log('error', error);
  let errorMessage = error.message;
  const { response } = error;
  if (response?.data) {
    const dataArray = Object.values(response.data);
    errorMessage = [dataArray];
  }

  return errorMessage;
};
