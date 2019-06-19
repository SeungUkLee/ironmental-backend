import mongoose from 'mongoose'
import { HTTP_404_MSG, HTTP_500_MSG } from 'messages/httpErrorMsg'

const {
    DocumentNotFoundError,
    CastError
} = mongoose.Error

export default (err, req, res, next) => {
    switch (true) {
        case err instanceof DocumentNotFoundError:
            res.status(404).send(HTTP_404_MSG)
            break
        case err instanceof CastError:
            res.status(404).send(HTTP_404_MSG)
            break
        default:
            res.status(500).send(HTTP_500_MSG)
            break
    }
}