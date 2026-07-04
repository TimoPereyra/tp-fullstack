export function success(data = {}, message = "OK") {
    return {
        success: true,
        message,
        data,
    };
}

export function error(message = "Something went wrong", status = 400) {
    return {
        success: false,
        status,
        message,
    };
}