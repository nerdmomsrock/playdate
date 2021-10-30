INSERT INTO users
( email, password, first_name, your_kids, their_kids, favorite_food, embarrassing_moment, gender, photo)
VALUES
(
${email},
${hash},
${first_name},
${your_kids},
${their_kids},
${favorite_food},
${embarrassing_moment},
${gender},
${photo})

returning  *;


-- missing ; on line 15

-- also missing a comma on line 6

-- There was an extra ; on line 2 and 13 that was throwing an error

-- Line 2 had hash instead of password.  I'm pretty sure it needs to be password since that is how it is labeled in your DB.  With it being `hash` it will look for a column in you DB named hash and won't know what to put there