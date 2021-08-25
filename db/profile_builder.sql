

INSERT INTO preferences 
(id, number_of_kids_preferred, gender_preferred)
VALUES
(${id},

${number_of_kids_preferred},
${gender_preferred})

returning id, number_of_kids_preferred, gender_preferred;