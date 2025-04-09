-- Insert mock users into the profiles table
INSERT INTO public.profiles (id, name, age, gender, interested_in, bio, photos, categories, status)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Sarah Chen', 28, 'female', '{"male"}', 'Yoga instructor and wellness enthusiast 🧘‍♀️ Living my best balanced life', '{"https://randomuser.me/api/portraits/women/1.jpg"}', '{"FITNESS", "HEALTH"}', 'mock'),
  ('3f333df6-90a4-4fda-8dd3-9485d27cee36', 'Mike Rodriguez', 32, 'male', '{"female"}', 'Foodie on a mission to try every restaurant in the city 🍜', '{"https://randomuser.me/api/portraits/men/2.jpg"}', '{"DINING", "ENTERTAINMENT"}', 'mock'),
  ('550e8400-e29b-41d4-a716-446655440000', 'Emma Thompson', 26, 'female', '{"male", "female"}', 'Digital nomad, currently working from coffee shops ☕', '{"https://randomuser.me/api/portraits/women/3.jpg"}', '{"TRAVEL", "DINING"}', 'mock'),
  ('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'James Wilson', 31, 'male', '{"female"}', 'Crossfit coach and nutrition nerd 💪', '{"https://randomuser.me/api/portraits/men/4.jpg"}', '{"FITNESS", "HEALTH"}', 'mock'),
  ('d9aed677-9584-4cf3-8229-b383a947d8bb', 'Sophia Patel', 29, 'female', '{"male"}', 'Fashion blogger with a shopping addiction 👗', '{"https://randomuser.me/api/portraits/women/5.jpg"}', '{"SHOPPING", "ENTERTAINMENT"}', 'mock'),
  ('64c1d159-bcbf-4f09-8c38-e555e927814c', 'David Kim', 34, 'male', '{"female"}', 'Homebody who loves cooking and Netflix 🏠', '{"https://randomuser.me/api/portraits/men/6.jpg"}', '{"ENTERTAINMENT", "DINING"}', 'mock'),
  ('8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 'Lisa Martinez', 27, 'female', '{"male"}', 'Adventure seeker and world traveler ✈️', '{"https://randomuser.me/api/portraits/women/7.jpg"}', '{"TRAVEL", "ENTERTAINMENT"}', 'mock'),
  ('2f8ac673-ad51-4653-a93c-a45b21d1a118', 'Alex Johnson', 30, 'male', '{"female"}', 'Wellness coach and meditation enthusiast 🧘‍♂️', '{"https://randomuser.me/api/portraits/men/8.jpg"}', '{"HEALTH", "FITNESS"}', 'mock'),
  ('7dc53df5-703e-49b3-8670-b1c468f47f1f', 'Rachel Green', 28, 'female', '{"male"}', 'Luxury lifestyle and spa addict 💆‍♀️', '{"https://randomuser.me/api/portraits/women/9.jpg"}', '{"SHOPPING", "HEALTH"}', 'mock'),
  ('0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 'Tom Singh', 33, 'male', '{"female"}', 'Restaurant owner and wine enthusiast 🍷', '{"https://randomuser.me/api/portraits/men/10.jpg"}', '{"DINING", "ENTERTAINMENT"}', 'mock');

-- Insert mock item for each user
INSERT INTO public.plaid_items ("item_id", "user_id", "access_token", "status", "last_sync", "sync_cursor", "error", "created_at", "updated_at")
VALUES
  ('item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 'access-token-1', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 'access-token-2', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-3', '550e8400-e29b-41d4-a716-446655440000', 'access-token-3', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'access-token-4', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 'access-token-5', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 'access-token-6', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 'access-token-7', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 'access-token-8', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 'access-token-9', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00'),
  ('item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 'access-token-10', 'active', '2025-04-06 19:02:08.777+00', null, null, '2025-04-06 19:02:08.014128+00', '2025-04-06 19:02:08.784565+00');

-- Insert mock transactions into the transactions table
-- Example for one user (repeat for other users as needed)
INSERT INTO public.transactions (id, item_id, user_id, amount, merchant_name, category, category_detailed, category_icon_url, category_confidence_level, transaction_date, created_at)
VALUES
 -- Transactions for user 1 (Sarah Chen)
  ('txn-1-1', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 15.75, 'Starbucks', 'DINING', 'DINING_COFFEE_SHOPS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-01', '2025-04-01 10:00:00'),
  ('txn-1-2', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 45.00, 'Whole Foods', 'GROCERIES', 'GROCERIES_GENERAL', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-02', '2025-04-02 12:00:00'),
  ('txn-1-3', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 120.00, 'Lululemon', 'SHOPPING', 'SHOPPING_CLOTHING', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-03', '2025-04-03 14:00:00'),
  ('txn-1-4', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 25.00, 'Uber', 'TRANSPORTATION', 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES', 'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png', 'high', '2025-04-04', '2025-04-04 16:00:00'),
  ('txn-1-5', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 60.00, 'Planet Fitness', 'FITNESS', 'FITNESS_GYM_MEMBERSHIPS', 'https://plaid-category-icons.plaid.com/PFC_FITNESS.png', 'high', '2025-04-05', '2025-04-05 18:00:00'),
  ('txn-1-6', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 30.00, 'Amazon', 'SHOPPING', 'SHOPPING_ONLINE', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-06', '2025-04-06 20:00:00'),
  ('txn-1-7', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 12.50, 'Chipotle', 'DINING', 'DINING_FAST_FOOD', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-07', '2025-04-07 10:00:00'),
  ('txn-1-8', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 80.00, 'Target', 'SHOPPING', 'SHOPPING_GENERAL', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-08', '2025-04-08 12:00:00'),
  ('txn-1-9', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 20.00, 'Spotify', 'ENTERTAINMENT', 'ENTERTAINMENT_STREAMING_SERVICES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'high', '2025-04-09', '2025-04-09 14:00:00'),
  ('txn-1-10', 'item-1', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 100.00, 'Apple Store', 'SHOPPING', 'SHOPPING_ELECTRONICS', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-10', '2025-04-10 16:00:00'),

  -- Repeat similar transactions for other users and items
  -- Example for user 2 (Mike Rodriguez)
  ('txn-2-1', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 25.00, 'McDonalds', 'DINING', 'DINING_FAST_FOOD', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-01', '2025-04-01 10:00:00'),
  ('txn-2-2', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 50.00, 'Best Buy', 'SHOPPING', 'SHOPPING_ELECTRONICS', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-02', '2025-04-02 12:00:00'),
  ('txn-2-3', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 10.00, 'Netflix', 'ENTERTAINMENT', 'ENTERTAINMENT_STREAMING_SERVICES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'high', '2025-04-03', '2025-04-03 14:00:00'),
  ('txn-2-4', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 85.50, 'Olive Garden', 'DINING', 'DINING_RESTAURANTS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-04', '2025-04-04 19:30:00'),
  ('txn-2-5', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 15.75, 'Starbucks', 'DINING', 'DINING_COFFEE_SHOPS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-05', '2025-04-05 09:15:00'),
  ('txn-2-6', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 120.00, 'Le Bernardin', 'DINING', 'DINING_FINE_DINING', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-06', '2025-04-06 20:45:00'),
  ('txn-2-7', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 35.00, 'Uber', 'TRANSPORTATION', 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES', 'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png', 'high', '2025-04-07', '2025-04-07 21:30:00'),
  ('txn-2-8', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 18.50, 'Chipotle', 'DINING', 'DINING_FAST_CASUAL', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-08', '2025-04-08 12:45:00'),
  ('txn-2-9', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 65.00, 'Cooking Class', 'ENTERTAINMENT', 'ENTERTAINMENT_RECREATION', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-09', '2025-04-09 18:00:00'),
  ('txn-2-10', 'item-2', '3f333df6-90a4-4fda-8dd3-9485d27cee36', 42.75, 'Whole Foods', 'GROCERIES', 'GROCERIES_SPECIALTY', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-10', '2025-04-10 17:20:00'),

  -- Transactions for user 3 (Emma Thompson) - Digital nomad
  ('txn-3-1', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 14.50, 'Blue Bottle Coffee', 'DINING', 'DINING_COFFEE_SHOPS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-01', '2025-04-01 09:30:00'),
  ('txn-3-2', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 320.00, 'Airbnb', 'TRAVEL', 'TRAVEL_LODGING', 'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png', 'high', '2025-04-02', '2025-04-02 14:00:00'),
  ('txn-3-3', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 35.00, 'WeWork', 'BUSINESS', 'BUSINESS_COWORKING', 'https://plaid-category-icons.plaid.com/PFC_BUSINESS.png', 'medium', '2025-04-03', '2025-04-03 10:15:00'),
  ('txn-3-4', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 22.50, 'Sweetgreen', 'DINING', 'DINING_HEALTHY', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-04', '2025-04-04 12:30:00'),
  ('txn-3-5', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 250.00, 'Southwest Airlines', 'TRAVEL', 'TRAVEL_AIRLINES', 'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png', 'high', '2025-04-05', '2025-04-05 16:45:00'),
  ('txn-3-6', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 18.75, 'Philz Coffee', 'DINING', 'DINING_COFFEE_SHOPS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-06', '2025-04-06 09:00:00'),
  ('txn-3-7', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 45.00, 'Uber', 'TRANSPORTATION', 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES', 'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png', 'high', '2025-04-07', '2025-04-07 19:20:00'),
  ('txn-3-8', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 12.99, 'Spotify Premium', 'ENTERTAINMENT', 'ENTERTAINMENT_STREAMING_SERVICES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'high', '2025-04-08', '2025-04-08 08:00:00'),
  ('txn-3-9', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 65.00, 'Local Food Tour', 'TRAVEL', 'TRAVEL_EXPERIENCES', 'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png', 'medium', '2025-04-09', '2025-04-09 14:30:00'),
  ('txn-3-10', 'item-3', '550e8400-e29b-41d4-a716-446655440000', 89.00, 'The Nomad Hotel Bar', 'DINING', 'DINING_BARS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-10', '2025-04-10 21:15:00'),

  -- Transactions for user 4 (James Wilson) - Crossfit coach
  ('txn-4-1', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 125.00, 'Rogue Fitness', 'FITNESS', 'FITNESS_EQUIPMENT', 'https://plaid-category-icons.plaid.com/PFC_FITNESS.png', 'high', '2025-04-01', '2025-04-01 11:00:00'),
  ('txn-4-2', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 75.00, 'CrossFit Monthly Fee', 'FITNESS', 'FITNESS_GYM_MEMBERSHIPS', 'https://plaid-category-icons.plaid.com/PFC_FITNESS.png', 'high', '2025-04-02', '2025-04-02 08:30:00'),
  ('txn-4-3', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 45.00, 'Whole Foods', 'GROCERIES', 'GROCERIES_ORGANIC', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-03', '2025-04-03 17:45:00'),
  ('txn-4-4', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 85.00, 'Supplements Store', 'HEALTH', 'HEALTH_SUPPLEMENTS', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-04', '2025-04-04 15:20:00'),
  ('txn-4-5', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 22.50, 'Chipotle', 'DINING', 'DINING_FAST_CASUAL', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-05', '2025-04-05 13:10:00'),
  ('txn-4-6', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 150.00, 'Nike', 'SHOPPING', 'SHOPPING_ATHLETIC_WEAR', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-06', '2025-04-06 14:30:00'),
  ('txn-4-7', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 20.00, 'Smoothie King', 'DINING', 'DINING_HEALTH_FOOD', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-07', '2025-04-07 10:00:00'),
  ('txn-4-8', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 55.00, 'Massage Therapy', 'HEALTH', 'HEALTH_WELLNESS', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-08', '2025-04-08 18:15:00'),
  ('txn-4-9', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 35.00, 'Mobility Workshop', 'FITNESS', 'FITNESS_CLASSES', 'https://plaid-category-icons.plaid.com/PFC_FITNESS.png', 'high', '2025-04-09', '2025-04-09 09:30:00'),
  ('txn-4-10', 'item-4', '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 18.00, 'Protein House', 'DINING', 'DINING_HEALTH_FOOD', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-10', '2025-04-10 12:45:00'),

  -- Transactions for user 5 (Sophia Patel) - Fashion blogger
  ('txn-5-1', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 175.00, 'Nordstrom', 'SHOPPING', 'SHOPPING_CLOTHING', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-01', '2025-04-01 14:30:00'),
  ('txn-5-2', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 95.00, 'Sephora', 'SHOPPING', 'SHOPPING_BEAUTY', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-02', '2025-04-02 12:15:00'),
  ('txn-5-3', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 45.00, 'Uber', 'TRANSPORTATION', 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES', 'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png', 'high', '2025-04-03', '2025-04-03 19:00:00'),
  ('txn-5-4', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 250.00, 'Gucci', 'SHOPPING', 'SHOPPING_LUXURY', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-04', '2025-04-04 16:45:00'),
  ('txn-5-5', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 22.00, 'Starbucks', 'DINING', 'DINING_COFFEE_SHOPS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-05', '2025-04-05 10:30:00'),
  ('txn-5-6', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 125.00, 'Fashion Week Ticket', 'ENTERTAINMENT', 'ENTERTAINMENT_EVENTS', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-06', '2025-04-06 09:15:00'),
  ('txn-5-7', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 85.00, 'Adobe Creative Cloud', 'BUSINESS', 'BUSINESS_SOFTWARE', 'https://plaid-category-icons.plaid.com/PFC_BUSINESS.png', 'high', '2025-04-07', '2025-04-07 08:00:00'),
  ('txn-5-8', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 195.00, 'Zara', 'SHOPPING', 'SHOPPING_CLOTHING', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-08', '2025-04-08 15:30:00'),
  ('txn-5-9', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 35.00, 'Sweetgreen', 'DINING', 'DINING_HEALTHY', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-09', '2025-04-09 13:10:00'),
  ('txn-5-10', 'item-5', 'd9aed677-9584-4cf3-8229-b383a947d8bb', 150.00, 'ASOS', 'SHOPPING', 'SHOPPING_ONLINE', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-10', '2025-04-10 20:45:00'),

  -- Transactions for user 6 (David Kim) - Homebody
  ('txn-6-1', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 15.99, 'Netflix', 'ENTERTAINMENT', 'ENTERTAINMENT_STREAMING_SERVICES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'high', '2025-04-01', '2025-04-01 21:00:00'),
  ('txn-6-2', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 85.00, 'Whole Foods Delivery', 'GROCERIES', 'GROCERIES_DELIVERY', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-02', '2025-04-02 16:30:00'),
  ('txn-6-3', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 75.00, 'Sur La Table', 'SHOPPING', 'SHOPPING_KITCHENWARE', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-03', '2025-04-03 14:15:00'),
  ('txn-6-4', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 14.99, 'Hulu', 'ENTERTAINMENT', 'ENTERTAINMENT_STREAMING_SERVICES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'high', '2025-04-04', '2025-04-04 20:00:00'),
  ('txn-6-5', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 55.00, 'Doordash', 'DINING', 'DINING_DELIVERY', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-05', '2025-04-05 18:30:00'),
  ('txn-6-6', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 27.50, 'Book Store', 'ENTERTAINMENT', 'ENTERTAINMENT_BOOKS', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-06', '2025-04-06 13:45:00'),
  ('txn-6-7', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 45.00, 'Amazon', 'SHOPPING', 'SHOPPING_ONLINE', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-07', '2025-04-07 15:20:00'),
  ('txn-6-8', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 12.99, 'Disney+', 'ENTERTAINMENT', 'ENTERTAINMENT_STREAMING_SERVICES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'high', '2025-04-08', '2025-04-08 22:00:00'),
  ('txn-6-9', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 65.00, 'Williams Sonoma', 'SHOPPING', 'SHOPPING_HOME', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-09', '2025-04-09 11:30:00'),
  ('txn-6-10', 'item-6', '64c1d159-bcbf-4f09-8c38-e555e927814c', 42.00, 'Instacart', 'GROCERIES', 'GROCERIES_DELIVERY', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-10', '2025-04-10 17:15:00'),

  -- Transactions for user 7 (Lisa Martinez) - Adventure seeker
  ('txn-7-1', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 250.00, 'REI', 'SHOPPING', 'SHOPPING_OUTDOOR', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-01', '2025-04-01 13:30:00'),
  ('txn-7-2', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 450.00, 'United Airlines', 'TRAVEL', 'TRAVEL_AIRLINES', 'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png', 'high', '2025-04-02', '2025-04-02 09:45:00'),
  ('txn-7-3', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 175.00, 'Airbnb', 'TRAVEL', 'TRAVEL_LODGING', 'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png', 'high', '2025-04-03', '2025-04-03 16:15:00'),
  ('txn-7-4', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 45.00, 'National Park Pass', 'ENTERTAINMENT', 'ENTERTAINMENT_RECREATION', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-04', '2025-04-04 11:00:00'),
  ('txn-7-5', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 65.00, 'Zip Line Tour', 'ENTERTAINMENT', 'ENTERTAINMENT_RECREATION', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-05', '2025-04-05 14:30:00'),
  ('txn-7-6', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 18.50, 'Local Restaurant', 'DINING', 'DINING_RESTAURANTS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-06', '2025-04-06 19:45:00'),
  ('txn-7-7', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 120.00, 'North Face', 'SHOPPING', 'SHOPPING_OUTDOOR', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-07', '2025-04-07 12:20:00'),
  ('txn-7-8', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 35.00, 'Museum Entry', 'ENTERTAINMENT', 'ENTERTAINMENT_MUSEUMS', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-08', '2025-04-08 10:45:00'),
  ('txn-7-9', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 25.00, 'Uber', 'TRANSPORTATION', 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES', 'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png', 'high', '2025-04-09', '2025-04-09 21:30:00'),
  ('txn-7-10', 'item-7', '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4', 85.00, 'Kayak Rental', 'ENTERTAINMENT', 'ENTERTAINMENT_RECREATION', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-10', '2025-04-10 15:15:00'),

  -- Transactions for user 8 (Alex Johnson) - Wellness coach
  ('txn-8-1', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 45.00, 'Whole Foods', 'GROCERIES', 'GROCERIES_ORGANIC', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-01', '2025-04-01 16:30:00'),
  ('txn-8-2', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 75.00, 'Yoga Studio', 'FITNESS', 'FITNESS_CLASSES', 'https://plaid-category-icons.plaid.com/PFC_FITNESS.png', 'high', '2025-04-02', '2025-04-02 18:15:00'),
  ('txn-8-3', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 25.00, 'Meditation App Subscription', 'HEALTH', 'HEALTH_WELLNESS', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-03', '2025-04-03 07:00:00'),
  ('txn-8-4', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 95.00, 'Massage Therapy', 'HEALTH', 'HEALTH_WELLNESS', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-04', '2025-04-04 15:45:00'),
  ('txn-8-5', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 18.50, 'Juice Bar', 'DINING', 'DINING_HEALTH_FOOD', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-05', '2025-04-05 11:30:00'),
  ('txn-8-6', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 125.00, 'Wellness Conference', 'HEALTH', 'HEALTH_EDUCATION', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-06', '2025-04-06 09:00:00'),
  ('txn-8-7', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 55.00, 'Farmers Market', 'GROCERIES', 'GROCERIES_ORGANIC', 'https://plaid-category-icons.plaid.com/PFC_GROCERIES.png', 'high', '2025-04-07', '2025-04-07 10:15:00'),
  ('txn-8-8', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 35.00, 'Essential Oils Shop', 'HEALTH', 'HEALTH_WELLNESS', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-08', '2025-04-08 14:30:00'),
  ('txn-8-9', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 65.00, 'Lululemon', 'SHOPPING', 'SHOPPING_ATHLETIC_WEAR', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-09', '2025-04-09 17:45:00'),
  ('txn-8-10', 'item-8', '2f8ac673-ad51-4653-a93c-a45b21d1a118', 22.00, 'Health Food Cafe', 'DINING', 'DINING_HEALTH_FOOD', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-10', '2025-04-10 13:10:00'),

  -- Transactions for user 9 (Rachel Green) - Luxury lifestyle
  ('txn-9-1', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 295.00, 'Nordstrom', 'SHOPPING', 'SHOPPING_LUXURY', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-01', '2025-04-01 15:00:00'),
  ('txn-9-2', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 185.00, 'Spa Resort', 'HEALTH', 'HEALTH_SPA', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'high', '2025-04-02', '2025-04-02 11:30:00'),
  ('txn-9-3', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 350.00, 'Louis Vuitton', 'SHOPPING', 'SHOPPING_LUXURY', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-03', '2025-04-03 14:45:00'),
  ('txn-9-4', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 125.00, 'Luxury Salon', 'HEALTH', 'HEALTH_BEAUTY', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-04', '2025-04-04 13:20:00'),
  ('txn-9-5', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 275.00, 'Fine Dining Restaurant', 'DINING', 'DINING_FINE_DINING', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-05', '2025-04-05 20:15:00'),
  ('txn-9-6', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 85.00, 'Luxury Car Service', 'TRANSPORTATION', 'TRANSPORTATION_LUXURY', 'https://plaid-category-icons.plaid.com/PFC_TRANSPORTATION.png', 'high', '2025-04-06', '2025-04-06 18:30:00'),
  ('txn-9-7', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 225.00, 'Sephora', 'SHOPPING', 'SHOPPING_BEAUTY', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-07', '2025-04-07 14:15:00'),
  ('txn-9-8', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 420.00, 'Ritz Carlton Spa', 'HEALTH', 'HEALTH_SPA', 'https://plaid-category-icons.plaid.com/PFC_HEALTH.png', 'medium', '2025-04-08', '2025-04-08 11:00:00'),
  ('txn-9-9', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 195.00, 'Champagne Bar', 'DINING', 'DINING_BARS', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-09', '2025-04-09 21:45:00'),
  ('txn-9-10', 'item-9', '7dc53df5-703e-49b3-8670-b1c468f47f1f', 375.00, 'Designer Boutique', 'SHOPPING', 'SHOPPING_LUXURY', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'high', '2025-04-10', '2025-04-10 16:30:00'),

  -- Transactions for user 10 (Tom Singh) - Restaurant owner and wine enthusiast
  ('txn-10-1', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 320.00, 'Restaurant Supply Store', 'BUSINESS', 'BUSINESS_SUPPLIES', 'https://plaid-category-icons.plaid.com/PFC_BUSINESS.png', 'high', '2025-04-01', '2025-04-01 09:15:00'),
  ('txn-10-2', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 175.00, 'Wine Merchant', 'DINING', 'DINING_WINE', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-02', '2025-04-02 15:30:00'),
  ('txn-10-3', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 450.00, 'Wine Tasting Tour', 'ENTERTAINMENT', 'ENTERTAINMENT_EXPERIENCES', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-03', '2025-04-03 12:45:00'),
  ('txn-10-4', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 85.00, 'Michelin Star Restaurant', 'DINING', 'DINING_FINE_DINING', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-04', '2025-04-04 20:30:00'),
  ('txn-10-5', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 250.00, 'Food Distributor', 'BUSINESS', 'BUSINESS_SUPPLIES', 'https://plaid-category-icons.plaid.com/PFC_BUSINESS.png', 'high', '2025-04-05', '2025-04-05 07:45:00'),
  ('txn-10-6', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 125.00, 'Wine Cellar Equipment', 'SHOPPING', 'SHOPPING_HOME', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-06', '2025-04-06 14:15:00'),
  ('txn-10-7', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 95.00, 'Culinary Book Store', 'ENTERTAINMENT', 'ENTERTAINMENT_BOOKS', 'https://plaid-category-icons.plaid.com/PFC_ENTERTAINMENT.png', 'medium', '2025-04-07', '2025-04-07 16:30:00'),
  ('txn-10-8', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 275.00, 'Restaurant Insurance', 'BUSINESS', 'BUSINESS_INSURANCE', 'https://plaid-category-icons.plaid.com/PFC_BUSINESS.png', 'high', '2025-04-08', '2025-04-08 10:45:00'),
  ('txn-10-9', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 145.00, 'Wine Club Membership', 'DINING', 'DINING_WINE', 'https://plaid-category-icons.plaid.com/PFC_DINING.png', 'high', '2025-04-09', '2025-04-09 18:00:00'),
  ('txn-10-10', 'item-10', '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8', 350.00, 'Chef Knife Set', 'SHOPPING', 'SHOPPING_KITCHENWARE', 'https://plaid-category-icons.plaid.com/PFC_SHOPPING.png', 'medium', '2025-04-10', '2025-04-10 13:15:00');