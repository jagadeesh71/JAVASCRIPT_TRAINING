(function () {    
    var searchButton = document.getElementById('search-button')
        , inputValue = document.getElementById('input-value')
        , xhrRequest = new XMLHttpRequest()
        , requestUrl = 'list-template.html'
        , videoListObject = []
        , parser = new DOMParser();
    
    searchButton.addEventListener('click', function (Event) {
        getVideoList();
    });
    
    function getResponse() {
        var newPromise = new  Promise(function(resolve, reject){
            xhrRequest.open('GET',requestUrl);
            xhrRequest.send();
            xhrRequest.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(this.responseText);
                }
            };
        });
        return newPromise;
    }
    
    function getVideoList() {
        requestUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=' + inputValue.value;
        getResponse().then(function(responseData){
            createObject(JSON.parse(responseData));
        });
    }

    function createObject(searchItems) {
        var listOfVideoIds = [];
        searchItems.items.forEach(function(item) {
            listOfVideoIds.push(item.id.videoId);
        });
        
        listOfVideoIds = listOfVideoIds.join(',');
        requestUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=' + listOfVideoIds + '&key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y';
        getResponse().then(function (responseData) {
            var temperoryObject;
            responseData = JSON.parse(responseData);
            responseData.items.forEach(function (item) {
                temperoryObject = {
                    title: item.snippet.title
                    , description: item.snippet.description,
                    , channelTitle: item.snippet.channelTitle
                    , publishedAt: item.snippet.publishedAt.substr(0, 10)
                    , thumbnailUrl: item.snippet.thumbnails.medium.url
                    , thumbnailWidth: item.snippet.thumbnails.medium.width
                    , thumbnailHeight: item.snippet.thumbnails.medium.height
                    , videoId: item.id
                    , channelId: item.snippet.channelId
                    , viewCount: item.statistics.viewCount
                };
                videoListObject.push(temperoryObject);
            });
            createHtmlElements();
        });
    }
    
    function createHtmlElements() {
        var templateContent,
            imageElement,
            channelElement,
            dateElement,
            viewElement,
            description,
            searchList;
        requestUrl = 'list-template.html';
        getResponse().then(function (templateData) {
            videoListObject.forEach(function (list) {
                templateContent = parser.parseFromString(templateData, "text/xml");

                imageElement = templateContent.getElementById('image-tag');
                imageElement.setAttribute('src',list.thumbnailUrl);

                channelElement = templateContent.getElementById('channel');
                channelElement.innerHTML = list.channelTitle;

                dateElement = templateContent.getElementById('date');
                dateElement.innerHTML = list.publishedAt;

                viewElement = templateContent.getElementById('views');
                viewElement.innerHTML = list.viewCount;

                description = templateContent.getElementById('description');
                console.log(description);
                description.innerHTML = list.description;
                searchList = document.getElementById('search-list');
                searchList.appendChild(templateContent.getElementById('list-template'));
            });
        });
    }
})();