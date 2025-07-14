export const success = (res, data, message = 'Success') => {
  res.status(200).json({ status: 'success', message, data });
};

export const error = (res, err, message = 'Something went wrong') => {
  console.error(err);
  res.status(500).json({ status: 'error', message });
};
