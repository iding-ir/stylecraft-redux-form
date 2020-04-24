export default (meta) => {
  const { error, touched } = meta;

  if (error && touched) {
    return error;
  }
};
