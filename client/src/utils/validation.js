export const constraints = {
    email: {
        // If email is required
        presence: true,
        // and you want to check if this is an email
        email: true
    },
    password: {
        // Is password required?
        presence: true,
        // Is password at least 5 characters long
        length: {
            minimum: 5
        }
    },
    "confirm-email": {
        // Do ou need to confirm your password?
        presence: true,
        // It needs to be equal to the other password
        equality: {
            // Input we want it to be equal to
            attribute: "email",
            // Error message if passwords don't match
            message: "^The e-mail address does not match"
        }
    },
    username: {
        // You need to pick a username
        presence: true,
        // It must be between 3 and 20 characters long
        length: {
            minimum: 3,
            maximum: 20
        },
        format: {
            // We only a-z and 0-9
            pattern: "[a-z0-9]+",
            // We don't care if the username is uppercase or lowercase
            flags: "i",
            message: "can only contain a-z and 0-9"
        }
    }
}