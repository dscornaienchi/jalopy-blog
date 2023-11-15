INSERT INTO cars (year, make, model)
VALUES  (1985, 'Nissan', '240SX'),
        (1985, 'Nissan', '300ZX'),
        (1985, 'Nissan', 'Truck'),
        (1985, 'Nissan', 'Maxima');

INSERT INTO users (username, password)
VALUES  ('team2', 'team2rules');

INSERT INTO reviews (title, body, car_id, user_id)
VALUES  ('Review1', 'this car sucks', 1, 1);

INSERT INTO reviews (title, body, car_id, user_id)
VALUES  ('Review1', '240SX', 1, 1);
