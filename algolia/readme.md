# Algolia Project Search Integration Project

> To see a live demo of this integration, please go [here](https://yorkprado.com/photodump). 

Hello Algolia Team!

In order to complete the solutions engineering assignment, I decided to integrate Algolia search into my personal website. For the dataset, I decided that I wanted to use my own pictures that I've taken throughout the years and create a search index out of it. Instead of labeling these pictures myself, I decided to use Google Vision's API in order to label them using computer vision. I also extracted EXIF data from these pictures to get even more content like created date and geo location for future enhancements. I did some googling and found a good overview of the process [here](https://dev.to/martyndavies/building-an-image-search-with-algolia--googles-vision-api-37gm). My process was a bit different though, as I completely rewrote the script to use a series of async await functions and async generators. I also ended up using AWS S3's SDK as I hosted my pictures there publically. Learning all these new libraries and adhering the output to Algolia's data model was a bit tough, but after a day's effort, I managed to extract and create what I needed! Links and descriptions to the code are below for this step:

* [Google Vision Script](https://github.com/Yoprado/ToolSets/blob/master/GoogleVisionScript.js) - Node script to read from an S3 bucket hosting my photos, run them through Google Vision's API to label the photos, extract EXIF data, and output this data into a JSON format that can be imported into Algolia.

* [PhotoDump.json](https://github.com/Yoprado/ToolSets/blob/master/PhotoDump.json) - Final output of the Google Vision Script.

* [Minify Image Script](https://github.com/Yoprado/ToolSets/blob/master/imageminify.js) - Node script to reduce the size of the photos I put up on AWS S3. This is needed for my lazy image loading process that loads a smaller blurred image before it loads the higher resolution image on my site. 

After creating the JSON file to index, I used the Algolia Website to create an index, load the JSON payload, and configure search terms and custom ranking. I used Google Vision's labels as a searchable attribute and used date as a custom ranking to ensure that my most recent photos are higher on the list than my older photos. 

Next came another tricky part. In order to integrate with my website, I used Algolia's InstantSearch plugin for Vue. This was a bit difficult as it was my first time using it and the out of the box UI components did not mesh well with my site. I poured through the documentation and managed to find what I needed to customize search and results. I also integrated this vue plugin into Nuxt, so let me know if you need any help editing your docs to add steps for integration as it is a bit different than standard vue integration steps. For future enhancements, I plan to display the geo location of the results as well as use a timeline visualization to display the dates of my photo results. 

For feedback, I have two general thoughts on the platform itself. First, it seems like there is a no way to do custom ranking across a list of search attributes. Custom rankings only seem to work with first level attributes in the JSON payload. This generally works well, but in a use case like this where each search attribute has a confidence score, I was hoping to use that as a custom rank to ensure relevance with the result. For now, I had the search attributes of the list ordered to make sure higher confident labels take precedence. Secondly, I had trouble finding how to modify the X label in the search box. I could only find it in the search box api reference [here](https://www.algolia.com/doc/api-reference/widgets/search-box/js/), but had trouble translating that to what I needed to modify in the vue component. Overall, I think this was a great introduction into the Algolia Search product!

Finally, the answers to the customer questions are also located [here](https://github.com/Yoprado/YorkPrado.Com/tree/master/algoliacustomerquestions). 

Thank you,

York Prado