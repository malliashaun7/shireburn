export const Validation = {
    date: function(dateString) {
        try {
            var date = new Date(dateString);

            if(!date ||!date.getTime()) {
                return  {
                    status: 'error',
                    message: 'Not a valid date',
                }
            }

            return  {
                status: 'success',
            }
        }
        catch(error) {
            return  {
                status: 'error',
                message: 'Could not convert to date',
            }
        }
    }
};