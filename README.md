# Zora Interview App

I wanted to implement this task like it's part of real complex app, so I decided to use few libraries I would probably choose in project like that:
- React-Query for async state management and (pre)caching data
- FlashList for performance improvements and out of the box support for masonry layout
- expo-image for performance improvements and images disk-caching
- axios to quickly create wrapper over unsplash api

### Features to highlight
- image details are pre-cached when navigating from list, which allows to render data immediately on details page
- image in details page uses thumbnail size version as a placeholder, which gives pretty smooth experience when loading full size image

### Things to improve if I had more time
- Shared Element Transition on image when navigating from list to details
- Some placeholder grid UI for search loading state
- FlashList masonry layout optimisation so items are rendered in order reducing height differences at the list bottom
