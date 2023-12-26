INSERT IGNORE INTO roles(name) VALUES('ROLE_USER');
INSERT IGNORE INTO roles(name) VALUES('ROLE_ADMIN');


INSERT INTO products (name, cook_time, price)
VALUES
    ('Burger King - Cheeseburger', 10, 7.99),
    ('McDonald''s - Big Mac', 8, 6.49),
    ('Pizza Hut - Pepperoni Pizza', 15, 12.99),
    ('KFC - Original Recipe Chicken', 20, 9.99),
    ('Subway - Italian BMT', 5, 8.49),
    ('Taco Bell - Crunchwrap Supreme', 12, 5.99),
    ('Domino''s - Margherita Pizza', 18, 10.99),
    ('Wendy''s - Baconator', 15, 8.99),
    ('Chick-fil-A - Spicy Chicken Sandwich', 10, 7.49),
    ('Papa John''s - BBQ Chicken Pizza', 22, 13.99),
    ('Starbucks - Bacon Gouda Sandwich', 8, 6.99),
    ('Chipotle - Chicken Burrito', 14, 9.79),
    ('In-N-Out - Double-Double', 12, 8.49),
    ('Panera Bread - Broccoli Cheddar Soup', 15, 4.99),
    ('Dunkin'' - Boston Kreme Donut', 5, 1.99),
    ('Five Guys - Cheeseburger', 10, 9.49),
    ('Popeyes - Spicy Chicken Tenders', 18, 10.99),
    ('Jimmy John''s - Turkey Tom', 6, 7.29),
    ('Cinnabon - Classic Cinnamon Roll', 12, 3.99),
    ('A&W - Root Beer Float', 5, 2.49),
    ('Domino''s - Chicken Alfredo Pasta', 18, 11.99),
    ('McDonald''s - Chicken McNuggets', 12, 4.99),
    ('Subway - Veggie Delight', 6, 6.99),
    ('Burger King - Whopper', 15, 8.79),
    ('Taco Bell - Nachos Supreme', 10, 4.49),
    ('Panera Bread - Caesar Salad', 8, 7.99),
    ('KFC - Crispy Chicken Sandwich', 12, 5.99),
    ('Starbucks - Pumpkin Spice Latte', 5, 4.49),
    ('Chipotle - Veggie Bowl', 10, 8.29),
    ('Wendy''s - Grilled Chicken Wrap', 8, 6.99),
    ('Papa John''s - Meat Lover''s Pizza', 20, 14.99),
    ('Dunkin'' - Glazed Donut', 4, 1.49),
    ('Five Guys - Bacon Cheeseburger', 12, 10.49),
    ('Chick-fil-A - Chicken Nuggets', 8, 5.49),
    ('A&W - Cheese Curds', 7, 3.99),
    ('Jimmy John''s - Vito', 6, 8.29),
    ('Popeyes - Cajun Fries', 5, 2.99),
    ('Cinnabon - Pecanbon', 15, 5.99),
    ('In-N-Out - Animal Style Fries', 10, 4.49),
    ('Pizza Hut - Breadsticks', 8, 3.99),
    ('Domino''s - Mediterranean Veggie Pizza', 18, 12.99),
    ('McDonald''s - Filet-O-Fish', 10, 5.49),
    ('Subway - Chicken Teriyaki Sandwich', 8, 7.79),
    ('Burger King - Chicken Fries', 14, 3.99),
    ('Taco Bell - Quesarito', 12, 6.99),
    ('Panera Bread - French Onion Soup', 15, 5.49),
    ('KFC - Famous Bowl', 10, 6.99),
    ('Starbucks - Caramel Macchiato', 5, 4.99),
    ('Chipotle - Barbacoa Burrito', 14, 9.99),
    ('Wendy''s - Apple Pecan Chicken Salad', 10, 8.49),
    ('Papa John''s - Garden Fresh Pizza', 20, 13.49),
    ('Dunkin'' - Munchkins', 3, 2.99),
    ('Five Guys - Little Bacon Cheeseburger', 10, 7.99),
    ('Chick-fil-A - Grilled Chicken Sandwich', 8, 6.49),
    ('A&W - Mozza Burger', 12, 5.99),
    ('Jimmy John''s - Beach Club', 6, 8.79),
    ('Popeyes - Red Beans and Rice', 15, 2.49),
    ('Cinnabon - Churro Swirl', 8, 3.49),
    ('In-N-Out - Neapolitan Shake', 5, 3.99),
    ('Pizza Hut - Stuffed Crust Pizza', 22, 14.99),
    ('Domino''s - Buffalo Chicken Pizza', 18, 11.49),
    ('McDonald''s - McFlurry', 6, 3.29),
    ('Subway - Roast Beef Sandwich', 8, 6.29),
    ('Burger King - Chicken Jr.', 10, 1.99),
    ('Taco Bell - Cheesy Gordita Crunch', 12, 4.79),
    ('Panera Bread - Greek Salad', 8, 8.99),
    ('KFC - Popcorn Chicken', 10, 3.99),
    ('Starbucks - Matcha Latte', 5, 4.79),
    ('Chipotle - Carnitas Bowl', 14, 9.79),
    ('Wendy''s - Jr. Bacon Cheeseburger', 7, 3.99),
    ('Papa John''s - Spicy Italian Pizza', 20, 12.99),  ('Dunkin'' - Sausage, Egg & Cheese Croissant', 8, 4.49),
    ('Five Guys - Veggie Sandwich', 10, 7.29),
    ('Chick-fil-A - Cobb Salad', 15, 8.99),
    ('A&W - Chili Cheese Fries', 12, 3.99),
    ('Jimmy John''s - Ultimate Porker', 6, 9.29),
    ('Popeyes - Blackened Chicken Tenders', 18, 11.99),
    ('Cinnabon - Center of the Roll', 10, 5.49),
    ('In-N-Out - Grilled Cheese', 8, 3.29),
    ('Pizza Hut - Chicken Alfredo Pasta', 15, 8.99),
    ('Domino''s - Chocolate Lava Crunch Cake', 5, 3.99),
    ('McDonald''s - Southwest Grilled Chicken Salad', 12, 7.79),
    ('Subway - Sweet Onion Chicken Teriyaki', 10, 6.99),
    ('Burger King - Bacon & Cheese Crispy Chicken Sandwich', 14, 4.99),
    ('Taco Bell - Cinnamon Twists', 8, 1.99),
    ('Panera Bread - Turkey Chili', 12, 5.99),
    ('KFC - Chicken Pot Pie', 20, 7.99),
    ('Starbucks - Java Chip Frappuccino', 5, 5.49),
    ('Chipotle - Sofritas Bowl', 14, 8.79),
    ('Wendy''s - Jr. Cheeseburger Deluxe', 10, 2.99),
    ('Papa John''s - Spinach Alfredo Pizza', 18, 10.49),
    ('Dunkin'' - Ham & Cheese Roll-ups', 6, 3.49),
    ('Five Guys - Hot Dog', 8, 4.29),
    ('Chick-fil-A - Grilled Chicken Cool Wrap', 12, 7.99),
    ('A&W - Corn Dog Nuggets', 8, 2.99),
    ('Jimmy John''s - Little Italy', 10, 7.79),
    ('Popeyes - Mashed Potatoes with Gravy', 15, 2.49),
    ('Cinnabon - Caramel Pecanbon', 8, 4.99),
    ('In-N-Out - Protein Style Burger', 5, 3.99),
    ('Pizza Hut - Meatball Marinara Pasta', 12, 6.99),
    ('Domino''s - Philly Cheese Steak Pizza', 18, 12.49);
;

UPDATE products
SET price = price * 300;
