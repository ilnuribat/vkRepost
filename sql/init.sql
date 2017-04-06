DROP TABLE IF EXISTS wallposts;
CREATE TABLE wallposts (
    id SERIAL PRIMARY KEY,
    wallId INT NOT NULL,
    postId INT NOT NULL,
    status TEXT,
    repostsCount INT NOT NULL,
    UNIQUE (wallId, postId)
);
