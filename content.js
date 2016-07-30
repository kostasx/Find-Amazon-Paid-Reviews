var stringToMatch = [
  "in exchange",
  "honest review",
  "received this item"
];

function highlight(text,inputText){

    var innerHTML = inputText.innerHTML
    var index = innerHTML.indexOf(text);
    if ( index >= 0 ){ 

        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML 
    }

}

var init = function(){

  var topReviewBoxes = document.querySelectorAll('.view-point-review.critical-review, .view-point-review.positive-review');

  Array.prototype.slice.call(topReviewBoxes).map(function(topReviewBox){

    var topReviewBoxContent = topReviewBox.querySelector('.a-row.a-spacing-top-mini .a-size-base').textContent;
    var sentence = "";
    var isPaid = stringToMatch.some(function(str){

      if ( topReviewBoxContent.indexOf(str) > -1 ) sentence = str;
      return topReviewBoxContent.indexOf(str) > -1; 

    });

    if (isPaid){
      topReviewBox.classList.add('paid-review');
      highlight(sentence,topReviewBox);
    }

  });


  var reviewTextBoxes = document.querySelectorAll('.a-section.review');

  Array.prototype.slice.call(reviewTextBoxes).map(function(reviewTextBox){

    var reviewTextBoxContent = reviewTextBox.querySelector('.review-text').textContent;
    var sentence = "";
    var isPaid = stringToMatch.some(function(str){

      if ( reviewTextBoxContent.indexOf(str) > -1 ) sentence = str;
      return reviewTextBoxContent.indexOf(str) > -1; 

    });

    if (isPaid){
      reviewTextBox.classList.add('paid-review');
      highlight(sentence,reviewTextBox);
    }

  });


}

init();