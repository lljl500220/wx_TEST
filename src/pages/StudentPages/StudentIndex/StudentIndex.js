// src/pages/StudentPages/StudentIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false, 
    site:"首页",
    companies:[
      {
        company: "米哈游",
        position: "美工",
        salary: "20-21",
        imageUrl:"../../../image/approve.png",
        companyMsg:"崩坏三崩坏三崩",
        
      }, {
        company: "腾讯",
        position: "策划",
        salary: "20-21",
        imageUrl: "../../../image/approve.png",
        companyMsg: "王者荣耀王者荣耀",

      }, {
        company: "网易",
        position: "氪佬",
        salary: "20-21",
        imageUrl: "../../../image/approve.png",
        companyMsg: "痒痒鼠痒痒鼠痒痒鼠",

      },{
        company: "腾讯",
        position: "美工",
        salary: "20-21",
        imageUrl: "../../../image/approve.png",
        companyMsg: "王者荣耀王者荣耀王者",

      }, {
        company: "腾讯",
        position: "美工",
        salary: "20-21",
        imageUrl: "../../../image/approve.png",
        companyMsg: "王者荣耀王者荣耀王者",

      }, {
        company: "腾讯",
        position: "美工",
        salary: "20-21",
        imageUrl: "../../../image/approve.png",
        companyMsg: "王者荣耀王者荣耀王者荣",

      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.site,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },

  oneClick: function(){
    wx.navigateTo({
      url: '../../TwoStage/Approve/approve',
    })
  },
  twoClick: function () {
    wx.navigateTo({
      url: '../../TwoStage/Sign/sign',
    })
  }, 
  threeClick: function () {
    wx.navigateTo({
      url: '../../TwoStage/Report/report',
    })
  }
})