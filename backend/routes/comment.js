router.get('/', function (req, res) {


  const query = {
    text: `SELECT 
    users.id as user_id, 
    first_name, 
    last_name, 
    email, 
    comments.id as comment_id, 
    comment
    FROM users
    INNER JOIN posts
    ON users.id = comments.user_id`
  }

  return db.query(query)
    .then(result => result.rows)
    .catch(err => err);

});
