# Google Reviews API Setup Guide

This guide will help you set up real Google Reviews integration for your travel website.

## Prerequisites

1. A Google Cloud Platform account
2. A Google Business listing for your travel company

## Step 1: Get Your Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click on it and press "Enable"

4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

## Step 2: Get Your Place ID

1. Go to [Google Maps](https://maps.google.com/)
2. Search for your business name
3. Click on your business listing
4. In the URL, you'll see something like: `place_id=ChIJN1t_tDeuEmsRUsoyG83frY4`
5. Copy the Place ID (the long string after `place_id=`)

## Step 3: Configure Environment Variables

1. Create a `.env` file in your project root
2. Add your API key:

```env
VITE_GOOGLE_PLACES_API_KEY=your_actual_api_key_here
```

3. Replace `your_actual_api_key_here` with your real Google Places API key

## Step 4: Update Place ID

In `src/pages/Index.tsx`, update the Place ID:

```tsx
<GoogleReviews placeId="YOUR_ACTUAL_PLACE_ID_HERE" />
```

## Step 5: Security (Important!)

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click on your API key
3. Under "Application restrictions", select "HTTP referrers (websites)"
4. Add your domain(s):
   - `http://localhost:5173/*` (for development)
   - `https://yourdomain.com/*` (for production)
5. Under "API restrictions", select "Restrict key"
6. Select "Places API" from the dropdown

## Features

✅ **Real Google Reviews**: Fetches actual reviews from your Google Business listing
✅ **Dynamic Rating**: Shows your real average rating and total review count
✅ **Profile Photos**: Displays reviewer profile photos when available
✅ **Fallback System**: Shows mock data if API fails
✅ **Loading States**: Shows loading spinner while fetching data
✅ **Error Handling**: Graceful error handling with user-friendly messages
✅ **Responsive Design**: Works on all screen sizes
✅ **SEO Friendly**: Real reviews improve SEO and trust

## API Response Format

The component expects Google Places API response with:
- `rating`: Average rating (1-5)
- `user_ratings_total`: Total number of reviews
- `reviews`: Array of review objects with:
  - `author_name`: Reviewer's name
  - `profile_photo_url`: Reviewer's profile photo
  - `rating`: Individual rating (1-5)
  - `text`: Review text
  - `relative_time_description`: Time ago (e.g., "2 days ago")

## Troubleshooting

1. **API Key Error**: Make sure your API key is correct and has Places API enabled
2. **CORS Error**: Ensure your domain is added to API key restrictions
3. **No Reviews**: Check if your Google Business listing has reviews
4. **Rate Limiting**: Google Places API has usage limits

## Cost

- Google Places API has a free tier with generous limits
- Check [Google Cloud Pricing](https://cloud.google.com/maps-platform/pricing) for details

## Support

If you need help:
1. Check Google Cloud Console for API usage and errors
2. Verify your Place ID is correct
3. Ensure your business has Google Reviews
4. Check browser console for error messages 