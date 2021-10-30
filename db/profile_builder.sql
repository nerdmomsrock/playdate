

INSERT INTO preferences 
(user_id, number_of_kids_preferred, gender_preferred)
VALUES
(
${user_id},
${number_of_kids_preferred},
${gender_preferred})

returning user_id, number_of_kids_preferred, gender_preferred;