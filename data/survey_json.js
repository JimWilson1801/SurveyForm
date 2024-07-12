export const json = {
  title: "Product Feedback Survey",
  showProgressBar: "top",
  pages: [{
    elements: [{
      type: "comment",
      name: "sendEmail",
      title: "Email của bạn"
    },{
      type: "comment",
      name: "question1",
      title: "Bạn đang làm gì ngành nghề gì"
    }, {
        type : "rating",
        name : "question2",
        title : "Đánh giá năng về sự yêu thích bạn với ngành?",
        autoGenerate : false,
        rateCount : 10,
        rateValues : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    }, {
      type: "comment",
      name: "question3",
      title: "Những thứ làm bạn thấy hứng thú"
    }]
  }]
};