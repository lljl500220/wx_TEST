Page({
  data: {
    site: "消息",
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    massages: [
      {
      who: "崩坏三",
      content: "跪求次次出货",
        time: "20200130"
      }, {
        who: "崩坏三",
        content: "跪求次次出货",
        time: "20200130"
      }, {
        who: "崩坏三",
        content: "跪求次次出货",
        time: "20200130"
      }, {
        who: "崩坏三",
        content: "跪求次次出货",
        time: "20200130"
      }, {
        who: "崩坏三",
        content: "跪求次次出货",
        time: "20200130"
      },
      ]
  },

    
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.setNavigationBarTitle({
      title: this.data.site,
    })
  },

  //  tab切换逻辑
  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
})