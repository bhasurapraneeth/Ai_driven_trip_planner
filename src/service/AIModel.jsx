import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
          role: "user",
          parts: [
              { text: "Generate Travel Plan for Location: Las Vegas for 3 Days for couple with a cheap budget, give me a hotel options list with hotel name, hotel address, price , image url, geo coordinates, rating, descriptions, and suggest itinerary with place name , place details, place image url, geo coordinates, ticket pricing, rating, time travel for each location for 3 days with each day plan with best time to visit in JSON Format" },
          ],
      },
      {
          role: "model",
          parts: [
              { text: "```json\n{\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"The D Las Vegas\",\n      \"hotel_address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"image_url\": \"https://www.thed.com/assets/images/homepage/hero-image.jpg\",\n      \"geo_coordinates\": \"36.1695, -115.1425\",\n      \"rating\": 4.0,\n      \"description\": \"A retro-themed hotel with a casino, live music, and a rooftop pool. It's located in the heart of Fremont Street Experience, within walking distance of many attractions.\"\n    },\n    {\n      \"hotel_name\": \"Golden Nugget Las Vegas\",\n      \"hotel_address\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"image_url\": \"https://www.goldennugget.com/las-vegas/media/images/hero-image.jpg\",\n      \"geo_coordinates\": \"36.1693, -115.1408\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a casino, a shark tank, and several dining options. It's also located on Fremont Street Experience, offering easy access to nightlife and entertainment.\"\n    },\n    {\n      \"hotel_name\": \"Circus Circus Hotel & Casino\",\n      \"hotel_address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"image_url\": \"https://www.circuscircus.com/media/images/circus-circus-las-vegas.jpg\",\n      \"geo_coordinates\": \"36.1165, -115.1721\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a circus theme, a carnival midway, and a large casino. It offers affordable rooms and is located near the Strip.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Exploring Fremont Street & Downtown\",\n      \"plan\": [\n        {\n          \"time\": \"10:00 AM\",\n          \"place\": \"Fremont Street Experience\",\n          \"details\": \"Start your day with a stroll down Fremont Street, known for its vibrant atmosphere and the iconic canopy of lights.\",\n          \"image_url\": \"https://www.visitlasvegas.com/media/1013/fremont-street-experience.jpg\",\n          \"geo_coordinates\": \"36.1695, -115.1425\",\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.5\n        },\n        {\n          \"time\": \"12:00 PM\",\n          \"place\": \"Heart Attack Grill\",\n          \"details\": \"Have a unique lunch experience at Heart Attack Grill, a restaurant known for its outrageous menu and hospital-themed decor.\",\n          \"image_url\": \"https://www.heartattackgrill.com/wp-content/uploads/2017/04/heart-attack-grill-las-vegas-hospital-menu-burgers.jpg\",\n          \"geo_coordinates\": \"36.1690, -115.1427\",\n          \"ticket_pricing\": \"Casual dining\",\n          \"rating\": 3.5\n        },\n        {\n          \"time\": \"2:00 PM\",\n          \"place\": \"Pinball Hall of Fame\",\n          \"details\": \"Enjoy a nostalgic afternoon at the Pinball Hall of Fame, featuring a vast collection of vintage pinball machines.\",\n          \"image_url\": \"https://www.pinballhalloffame.org/images/uploads/featured/large_feature_2.jpg\",\n          \"geo_coordinates\": \"36.1725, -115.1399\",\n          \"ticket_pricing\": \"$12 per person\",\n          \"rating\": 4.0\n        },\n        {\n          \"time\": \"5:00 PM\",\n          \"place\": \"Golden Nugget Casino\",\n          \"details\": \"Experience the vibrant atmosphere of a casino and try your luck at the Golden Nugget.\",\n          \"image_url\": \"https://www.goldennugget.com/las-vegas/media/images/casino/goldennugget-casino-floor.jpg\",\n          \"geo_coordinates\": \"36.1693, -115.1408\",\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.0\n        },\n        {\n          \"time\": \"8:00 PM\",\n          \"place\": \"Fremont Street Experience\",\n          \"details\": \"Enjoy the vibrant nightlife of Fremont Street, with live music, street performers, and an impressive light show.\",\n          \"image_url\": \"https://www.visitlasvegas.com/media/1013/fremont-street-experience.jpg\",\n          \"geo_coordinates\": \"36.1695, -115.1425\",\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.5\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Exploring the Strip & Iconic Attractions\",\n      \"plan\": [\n        {\n          \"time\": \"10:00 AM\",\n          \"place\": \"Bellagio Fountains\",\n          \"details\": \"Start your day with a mesmerizing water show at the Bellagio Fountains.\",\n          \"image_url\": \"https://www.bellagio.com/media/images/fountains-hero-image-desktop.jpg\",\n          \"geo_coordinates\": \"36.1117, -115.1738\",\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.5\n        },\n        {\n          \"time\": \"11:00 AM\",\n          \"place\": \"The Venetian & The Palazzo\",\n          \"details\": \"Explore the luxurious atmosphere of The Venetian and The Palazzo, featuring a replica of Venice and a vast shopping mall.\",\n          \"image_url\": \"https://www.venetian.com/media/images/hotel/the-venetian-hero-image-desktop.jpg\",\n          \"geo_coordinates\": \"36.1177, -115.1744\",\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.0\n        },\n        {\n          \"time\": \"1:00 PM\",\n          \"place\": \"Caesar's Palace\",\n          \"details\": \"Experience the grandeur of Caesar's Palace, with its Roman-themed architecture, casino, and shops.\",\n          \"image_url\": \"https://www.caesars.com/content/dam/caesars/las-vegas/home/hero-images/caesars-palace-las-vegas.jpg\",\n          \"geo_coordinates\": \"36.1183, -115.1735\",\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.0\n        },\n        {\n          \"time\": \"4:00 PM\",\n          \"place\": \"High Roller Observation Wheel\",\n          \"details\": \"Enjoy panoramic views of the Strip from the top of the High Roller Observation Wheel.\",\n          \"image_url\": \"https://www.caesars.com/content/dam/caesars/las-vegas/linq/high-roller/hero-images/linq-high-roller-las-vegas-hero-image.jpg\",\n          \"geo_coordinates\": \"36.1229, -115.1750\",\n          \"ticket_pricing\": \"$30 - $40 per person\",\n          \"rating\": 4.5\n        },\n        {\n          \"time\": \"6:00 PM\",\n          \"place\": \"The LINQ Promenade\",\n          \"details\": \"Take a walk along The LINQ Promenade, a lively outdoor mall with shops, restaurants, and entertainment.\",\n          \"image_url\": \"https://www.thelinq.com/media/images/the-linq-promenade-hero-image-desktop.jpg\",\n          \"geo_coordinates\": \"36.1229, -115.1750\",\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.0\n        },\n        {\n          \"time\": \"8:00 PM\",\n          \"place\": \"Dinner and a Show\",\n          \"details\": \"Enjoy a dinner and a show at a budget-friendly option on the Strip, such as the Rio's \"The Chippendales\" or the MGM Grand's \"Legends in Concert\".\",\n          \"image_url\": \"https://www.riolasvegas.com/media/images/hotel/rio-las-vegas-hero-image-desktop.jpg\",\n          \"geo_coordinates\": \"36.1117, -115.1738\",\n          \"ticket_pricing\": \"Varies\",\n          \"rating\": 4.0\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Exploring Nature & Outdoor Activities\",\n      \"plan\": [\n        {\n          \"time\": \"9:00 AM\",\n          \"place\": \"Red Rock Canyon National Conservation Area\",\n          \"details\": \"Escape the city and explore the scenic beauty of Red Rock Canyon, with its towering sandstone cliffs and hiking trails.\",\n          \"image_url\": \"https://www.nps.gov/redr/planyourvisit/images/red_rock_canyon-100.jpg\",\n          \"geo_coordinates\": \"36.1213, -115.2387\",\n          \"ticket_pricing\": \"$15 per vehicle\",\n          \"rating\": 4.5\n        },\n        {\n          \"time\": \"12:00 PM\",\n          \"place\": \"Lake Mead National Recreation Area\",\n          \"details\": \"Enjoy a picnic lunch or boat tour on Lake Mead, the largest reservoir in the United States.\",\n          \"image_url\": \"https://www.nps.gov/lame/learn/nature/images/Lake%20Mead%20Colorado%20River%20Sunrise%20-%20NPS%20Photo%20by%20R.%20Van%20Til%20-%20Public%20Domain.jpg\",\n          \"geo_coordinates\": \"36.1313, -114.8645\",\n          \"ticket_pricing\": \"Park entrance fee\",\n          \"rating\": 4.0\n        },\n        {\n          \"time\": \"3:00 PM\",\n          \"place\": \"Hoover Dam\",\n          \"details\": \"Witness the engineering marvel of Hoover Dam, a massive dam on the Colorado River.\",\n          \"image_url\": \"https://www.nps.gov/hove/learn/nature/images/hooverdam-10.jpg\",\n          \"geo_coordinates\": \"36.0303, -114.9666\",\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.5\n        },\n        {\n          \"time\": \"6:00 PM\",\n          \"place\": \"The Neon Museum\",\n          \"details\": \"End your trip with a visit to The Neon Museum, showcasing a collection of iconic Las Vegas neon signs.\",\n          \"image_url\": \"https://www.neonmuseum.org/wp-content/uploads/2014/01/Neon-Museum-Sign-in-Garden.jpg\",\n          \"geo_coordinates\": \"36.1722, -115.1533\",\n          \"ticket_pricing\": \"$20 per person\",\n          \"rating\": 4.5\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* **Hotel Prices:** The prices listed are approximate and can vary based on the time of year and availability.\n* **Ticket Prices:** Ticket prices for attractions are also approximate and can change.\n* **Times:** The suggested times are flexible and can be adjusted based on your preferences.\n* **Food:** This itinerary does not include specific restaurant recommendations, but you can find many affordable options in Las Vegas.\n* **Transportation:** You can get around Las Vegas by walking, taking the bus, or using ride-sharing services.\n* **Other Activities:** There are many other things to do in Las Vegas, such as visiting museums, attending concerts, or exploring the city's vibrant nightlife." },
          ],
      },
    ],
  });

