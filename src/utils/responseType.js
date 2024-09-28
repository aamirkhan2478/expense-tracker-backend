const responseType = (
    title,
    type,
    message,
    data,
    status,
  ) => {
    return {
      title,
      status,
      type,
      message,
      data,
    };
  };
  
  module.exports = responseType;