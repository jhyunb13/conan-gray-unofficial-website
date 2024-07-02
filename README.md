# Conan Gray Unofficial Website

## Project Description

Recreation of Conan Gray’s website to enhance its usability. Show Conan Gray’s discography, including music videos and tour dates. Also imitate his merch shop with add-to-cart functionality  
&nbsp;

## Built With

![Static Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/YouTube%20Data%20API-FF0000?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/Cheerio-E88C1F?style=for-the-badge) ![Static Badge](https://img.shields.io/badge/localStorage-AECBFA?style=for-the-badge)  
&nbsp;

## Features

| Feature                                | Description                                                                                                                                                                                                                                                                              |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPA with React Router                  | - Built multiple pages with React Router to organize lots of data<br> - Navigate between pages to find desired information as needed                                                                                                                                                     |
| Scape Data                             | - Scrape latest tour dates, and merchandise list data using Cheerio from Conan Gray’s official website to reduce data collection time<br> - Display tour date in a list on the tour page<br> - Display merchandise items with pagination on the store page                               |
| Fetch Video Data                       | - Fetch music video data using YouTube Data API<br> - Display videos with a player                                                                                                                                                                                                       |
| Search Function on the Tour Page       | - Input city name to find an event in the city of interest<br> - Display search results under the input field                                                                                                                                                                            |
| Add-to-Cart Function on the Store Page | - Select item with size and quantity<br> - Click add-to-cart button to store each item data in the browser using localStorage API<br> - Read the data from localStorage and display it on the shopping cart page<br> - Remove and update quantity of each item in the shopping cart page |
| Filter Function on the Store Page      | - Filter items by product category and stock status for a better user experience<br> - Quickly find items with the applied filters                                                                                                                                                       |
| Store State for Each Item in URL       | - Place state in the URL using params in React Router<br> - Read data from the URL and display relevant item information on the product detail page                                                                                                                                      |

&nbsp;

## Problem Solving Process

#### Adding Search Functionality to Improve UX

- Problem Identification : Poor UX due to requiring users to scroll through a long list to find event information for their cities of interest on the tour-date list page
- Solution: Added search functionality and a results display interface
- Outcome : Improved UX by allowing users to quickly access information about events in specific cities of interest  
  &nbsp;

## Improvement Ideas

- Build a payment page
- Optimiza performance
