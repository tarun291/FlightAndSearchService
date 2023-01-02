const ClientErrorsCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORISED: 401,
    NOT_FOUND: 404
});

const ServerErrorsCodes = Object.freeze({
    INTERNAL_SERVER: 500,
    NOT_IMPLEMENTED: 501
})

const SuccessCodes=Object.freeze({
    OK:2001,
    CREATED:201
})

module.exports={
    ClientErrorsCodes,
    ServerErrorsCodes,
    SuccessCodes
}