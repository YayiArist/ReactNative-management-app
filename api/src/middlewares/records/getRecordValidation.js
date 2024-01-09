module.exports= (req, res, next) => {
    const { /* datos que se van a actualizar */ } = req.params;
   

    if (recordId) {
        req.recordData = {
            name,
            email,
            password,
            phone,
            gender,
            howDidYouHear,
            city,
            state,
          };

        return next();
    } else {
        throw new ClientError('Record Id required', 400);
    }
};