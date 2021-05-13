# jetdevs

APi end point :

for article

GET /article/:article_id to get article
POST /article to create article
PUT /:article_id to update article
DELETE /:article_id to delete article


for comment

GET /comment/:article_id to get comments on article
POST /:article_id to create comment
POST /reply/:comment_id to add reply to a comment
GET /comment/:comment_id to get a comment
