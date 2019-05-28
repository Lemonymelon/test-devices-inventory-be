exports.checkArgumentDataType = (argument, dataType) => {
  if (typeof argument !== dataType)
    throw new Error(
      `argument "${argument}" is incorrect data type; it must be a ${dataType}`
    );
};

// add check that field is correct
