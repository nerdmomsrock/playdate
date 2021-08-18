INSERT INTO users (
    email,
    password
)
VALUES (
    ${email},
    ${hash}
)

return user_id, email;