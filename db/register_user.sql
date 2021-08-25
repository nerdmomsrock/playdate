INSERT INTO users 
( email, hash, first_name, your_kids, their_kids, favorite_food, embarrassing_moment, gender, photo);
VALUES
(
${email},
${hash}
${first_name},
${your_kids},
${their_kids},
${favorite_food},
${embarrassing_moment},
${gender},
${photo});

returning  *


