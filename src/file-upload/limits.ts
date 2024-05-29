const UPLOAD_LIMIT = 50;

const Limits = () => {
  const oneMegaByte = 1048576;

  return oneMegaByte * UPLOAD_LIMIT;
};

export default Limits;
