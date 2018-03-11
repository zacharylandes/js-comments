$(document).ready(function(){
  $("#new_comment_button").click(function() {
      $('#comment-box').css('display','block')
  })

  $('#submit').click(function(){
    var comment  = $('#comment-area').val();
    var author  = $('#author').val();
    var commentElement = document.createElement("li");
    var authorElement = document.createElement("span");
    authorElement.append(author);
    commentElement.append(comment);
    authorElement.className = 'author'
    commentElement.append(authorElement);

    $("#comment_list").append(commentElement);
  })
})
