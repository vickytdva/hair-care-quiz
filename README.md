# Hair Care Quiz 🧴💇‍♀️

This is a **React single-page app (SPA)** that helps users find hair care products based on their hair type, hair concerns, and preferences. It’s a fun and interactive quiz with product recommendations!

## Features ✨

- **Quiz Questions**: Each question is a separate page with progress tracking and a back button.
- **Results Page**: Shows product recommendations based on your answers.
- **Product Slider**: Scrollable slider showing 2 products at a time.
- **Wishlist**: Click the heart icon to save favorite products — they appear first on your next visit.
- **Restart Quiz**: Start over anytime from the Results page.
- **Responsive Design**: Works well on desktop and mobile.
- **Cute Pastel Style**: Rounded cards, soft shadows, and playful colors.  

## How It Works 🛠️

1. User starts the quiz from the Home page.
2. Answers are saved in **localStorage**.
3. Results page fetches products from the API:  
   `https://jeval.com.au/collections/hair-care/products.json?page=1`
4. Products are filtered by the user’s answers (title, description, tags).
5. Wishlist is saved in localStorage so favorites persist.

## Installation 🖥️

1. Clone the repo:

```bash
git clone https://github.com/vickytdva/hair-care-quiz.git

2.Install dependencies:
cd hair-care-quiz
npm install

3.Start the development server:
npm start
The app will run at http://localhost:3000
